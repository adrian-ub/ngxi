import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataFunnel24RegularIcon],svg[fluent-data-funnel-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.002 4.752a2.75 2.75 0 0 1-2.752 2.752H4.752a2.752 2.752 0 1 1 0-5.504H19.25a2.75 2.75 0 0 1 2.752 2.752m-2 7a2.75 2.75 0 0 1-2.752 2.752H6.752a2.752 2.752 0 1 1 0-5.504H17.25a2.75 2.75 0 0 1 2.752 2.752m-3 7a2.75 2.75 0 0 1-2.752 2.752H9.752a2.752 2.752 0 1 1 0-5.504h4.498a2.75 2.75 0 0 1 2.752 2.752m3.5-14c0-.692-.56-1.252-1.252-1.252H4.752a1.252 1.252 0 1 0 0 2.504H19.25c.692 0 1.252-.56 1.252-1.252m-2 7c0-.692-.56-1.252-1.252-1.252H6.752a1.252 1.252 0 0 0 0 2.504H17.25c.692 0 1.252-.56 1.252-1.252m-3 7c0-.691-.56-1.252-1.252-1.252H9.752a1.252 1.252 0 0 0 0 2.504h4.498c.691 0 1.252-.56 1.252-1.252"></svg:path>`,
})
export class FluentDataFunnel24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
