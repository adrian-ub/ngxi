import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPortHdmi20RegularIcon],svg[fluent-port-hdmi-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.854 7.44A1.5 1.5 0 0 1 5.914 7h8.172a1.5 1.5 0 0 1 1.06.44l2.415 2.414a1.5 1.5 0 0 1 .439 1.06v.586a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 11.5v-.586c0-.398.158-.78.44-1.06zm1.06.56a.5.5 0 0 0-.353.146l-2.415 2.415a.5.5 0 0 0-.146.353v.586a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-.586a.5.5 0 0 0-.146-.353l-2.415-2.415A.5.5 0 0 0 14.086 8zM6 10a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 6 10"></svg:path>`,
})
export class FluentPortHdmi20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
