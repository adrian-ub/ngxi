import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUserMultipleCircleIcon],svg[streamline-user-multiple-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.438 8a1.61 1.61 0 1 1 0-3.22a1.61 1.61 0 0 1 0 3.22m-2.339 2.485a3.22 3.22 0 0 1 4.494-.18M5.229 7.483a1.995 1.995 0 1 1 0-3.99a1.995 1.995 0 0 1 0 3.99"></svg:path><svg:path d="M8.967 13.181c-.1-1.192-.397-1.975-.56-2.251a3.95 3.95 0 0 0-1.414-1.414A3.8 3.8 0 0 0 5.09 9a3.8 3.8 0 0 0-1.903.516c-.463.27-.867.634-1.188 1.07l-.203.305"></svg:path><svg:path d="M7 13.5a6.5 6.5 0 1 1 0-13a6.5 6.5 0 0 1 0 13"></svg:path></svg:g>`,
})
export class StreamlineUserMultipleCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
