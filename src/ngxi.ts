import type { Icon } from './icon'

import { isPlatformServer } from '@angular/common'
import { computed, Directive, effect, ElementRef, inject, input, PLATFORM_ID, Renderer2 } from '@angular/core'

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
  private readonly platform = inject(PLATFORM_ID)
  private readonly el = inject(ElementRef<SVGElement>)
  private readonly renderer = inject(Renderer2)

  readonly icon = input<Icon | null>(null)
  readonly width = input<number | undefined>()
  readonly height = input<number | undefined>()
  readonly viewBox = input<string | undefined>()

  protected readonly resolvedWidth = computed(() => this.width() ?? this.icon()?.width)
  protected readonly resolvedHeight = computed(() => this.height() ?? this.icon()?.height)
  protected readonly resolvedViewBox = computed(() => this.viewBox() ?? this.icon()?.viewBox)
  protected readonly setBody = effect(() => {
    const icon = this.icon()

    if (!icon) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', '')
      return
    }

    if (isPlatformServer(this.platform)) {
      this.el.nativeElement.innerHTML = icon.body
      this.el.nativeElement.setAttribute('data-ngxi-ssr', '')
      return
    }

    if (this.el.nativeElement.hasAttribute('data-ngxi-ssr')) {
      this.el.nativeElement.removeAttribute('data-ngxi-ssr')

      if (this.el.nativeElement.innerHTML === icon.body) {
        return
      }
    }

    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', icon.body)
  })
}
