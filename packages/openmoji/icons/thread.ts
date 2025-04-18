import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiThreadIcon],svg[openmoji-thread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="m49.224 17.187l4.667-4.827H17.207l4.668 4.827m27.349 37.339l4.667 4.827H17.207l4.668-4.827"></svg:path><svg:path fill="#ea5a47" d="M22.034 17.187h27.365v37.52H22.034z"></svg:path><svg:path fill="#d22f27" d="M42.926 17.187H49.4v37.52h-6.474z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="2" d="m49.224 17.187l4.667-4.827H17.207l4.668 4.827"></svg:path><svg:path stroke-width="2.158" d="M21.875 17.187h27.349m-27.022 37.52h27.03"></svg:path><svg:path stroke-width="2" d="m49.224 54.707l4.667 4.827H17.207l4.668-4.827m.159-37.52h27.031m-27.053 5.36h27.075m-27.098 5.36H49.11m-27.144 5.36h27.167m-27.19 5.36h27.213m-27.236 5.36h27.259m-27.282 5.36h27.304m-27.326 5.36h27.349M22.202 43.983h27.03a9.53 9.53 0 0 1 5.646 2.592c3.237 3.236 5.935 5.934 11.33 5.394"></svg:path></svg:g>`,
})
export class OpenmojiThreadIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
