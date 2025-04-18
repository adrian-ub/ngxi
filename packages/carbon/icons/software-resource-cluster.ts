import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSoftwareResourceClusterIcon],svg[carbon-software-resource-cluster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 21c-.5 0-1-.2-1.4-.6l-3-3c-.4-.4-.6-.9-.6-1.4s.2-1 .6-1.4l3-3c.4-.4.9-.6 1.4-.6s1 .2 1.4.6l3 3c.4.4.6.9.6 1.4s-.2 1-.6 1.4l-3 3c-.4.4-.9.6-1.4.6m0-8l-3 3l3 3l3-3zm-8 0c-.5 0-1-.2-1.4-.6l-3-3C11.2 9 11 8.5 11 8s.2-1 .6-1.4l3-3c.4-.4.9-.6 1.4-.6s1 .2 1.4.6l3 3c.4.4.6.9.6 1.4s-.2 1-.6 1.4l-3 3c-.4.4-.9.6-1.4.6m0-8l-3 3l3 3l3-3zm0 24c-.5 0-1-.2-1.4-.6l-3-3c-.4-.4-.6-.9-.6-1.4s.2-1 .6-1.4l3-3c.4-.4.9-.6 1.4-.6s1 .2 1.4.6l3 3c.4.4.6.9.6 1.4s-.2 1-.6 1.4l-3 3c-.4.4-.9.6-1.4.6m0-8l-3 3l3 3l3-3zm-8 0c-.5 0-1-.2-1.4-.6l-3-3C3.2 17 3 16.5 3 16s.2-1 .6-1.4l3-3c.4-.4.9-.6 1.4-.6s1 .2 1.4.6l3 3c.4.4.6.9.6 1.4s-.2 1-.6 1.4l-3 3c-.4.4-.9.6-1.4.6m0-8l-3 3l3 3l3-3z"></svg:path>`,
})
export class CarbonSoftwareResourceClusterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
