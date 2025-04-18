import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAutocorrect20RegularIcon],svg[fluent-autocorrect-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.144 5.484a1 1 0 0 1 1.712 0l2.127 3.517H12.5l-.067.004a3.75 3.75 0 1 0 2.366.996H17.5a.5.5 0 0 0 0-1h-3.348l-2.44-4.034c-.779-1.287-2.645-1.287-3.423 0L2.072 15.242a.5.5 0 0 0 .856.518zm3.106 4.517a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 0 1 0-5.5"></svg:path>`,
})
export class FluentAutocorrect20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
