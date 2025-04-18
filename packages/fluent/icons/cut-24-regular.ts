import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCut24RegularIcon],svg[fluent-cut-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.14 9.342L7.37 2.329a.75.75 0 1 0-1.24.844l5.13 7.545l-2.395 3.743a4 4 0 1 0 1.178.943l2.135-3.337l2.065 3.036a4 4 0 1 0 1.261-.813l-2.447-3.597l.002-.002zM4.5 18a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m10 0a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m-.562-8.684l3.943-6.162a.75.75 0 1 0-1.263-.808L13.02 7.968z"></svg:path>`,
})
export class FluentCut24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
