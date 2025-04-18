import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataPie24RegularIcon],svg[fluent-data-pie-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.728 2.216a.75.75 0 0 1 .544-.212a9 9 0 0 1 8.724 8.724a.75.75 0 0 1-.75.772H13.25a.75.75 0 0 1-.75-.75V2.754a.75.75 0 0 1 .228-.538M14 3.566V10h6.434A7.504 7.504 0 0 0 14 3.566m-3 1.199a.75.75 0 0 0-.817-.747a9 9 0 1 0 9.779 9.801a.75.75 0 0 0-.747-.819H13.25A2.25 2.25 0 0 1 11 10.75zM3.5 12.98a7.5 7.5 0 0 1 6-7.35v5.119a3.75 3.75 0 0 0 3.75 3.75h5.096A7.5 7.5 0 0 1 3.5 12.981"></svg:path>`,
})
export class FluentDataPie24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
