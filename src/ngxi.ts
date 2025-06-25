import type { Icon } from './icon'

import { computed, Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core'

@Directive({
  standalone: true,
  selector: 'svg[ngxi]',
  host: {
    'role': 'img',
    '[attr.width]': 'resolvedWidth()',
    '[attr.height]': 'resolvedHeight()',
    '[attr.viewBox]': 'resolvedViewBox()',
  },
})
export class Ngxi {
  private el = inject(ElementRef<SVGElement>)
  private renderer = inject(Renderer2)

  readonly icon = input<Icon | null>(null)
  readonly width = input<number | undefined>()
  readonly height = input<number | undefined>()
  readonly viewBox = input<string | undefined>()

  protected readonly resolvedWidth = computed(() => this.width() ?? this.icon()?.width)
  protected readonly resolvedHeight = computed(() => this.height() ?? this.icon()?.height)
  protected readonly resolvedViewBox = computed(() => this.viewBox() ?? this.icon()?.viewBox)
  protected readonly setBody = effect(() => {
    const icon = this.icon()
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', icon?.body ?? '')
  })
}
