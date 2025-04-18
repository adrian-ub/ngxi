import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCatchUp16RegularIcon],svg[fluent-catch-up-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.837 6.323a.5.5 0 0 0-.915-.048L5.224 7.67a1.5 1.5 0 0 1-1.342.829H2.866a1 1 0 1 1 0-1h1.016a.5.5 0 0 0 .447-.277l.698-1.396c.586-1.171 2.286-1.082 2.746.144l1.39 3.706a.5.5 0 0 0 .915.048l.698-1.396a1.5 1.5 0 0 1 1.342-.83h1.016a1 1 0 1 1 0 1h-1.016a.5.5 0 0 0-.447.277l-.698 1.396c-.586 1.172-2.286 1.082-2.746-.144z"></svg:path>`,
})
export class FluentCatchUp16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
