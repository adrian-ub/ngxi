import type { Icon } from './icon'

import { computed, Directive, inject, input } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Directive({
  standalone: true,
  selector: 'svg[ngxi]',
  host: {
    'role': 'img',
    '[attr.width]': 'resolvedWidth()',
    '[attr.height]': 'resolvedHeight()',
    '[attr.viewBox]': 'resolvedViewBox()',
    '[innerHTML]': 'resolvedBody()',
  },
})
export class Ngxi {
  private readonly sanitizer = inject(DomSanitizer)

  readonly icon = input<Icon | null>(null)
  readonly width = input<number | undefined>()
  readonly height = input<number | undefined>()
  readonly viewBox = input<string | undefined>()

  protected readonly resolvedWidth = computed(() => this.width() ?? this.icon()?.width)
  protected readonly resolvedHeight = computed(() => this.height() ?? this.icon()?.height)
  protected readonly resolvedViewBox = computed(() => this.viewBox() ?? this.icon()?.viewBox)
  protected readonly resolvedBody = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.icon()?.body ?? ''))
}
