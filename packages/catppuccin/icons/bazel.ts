import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinBazelIcon],svg[catppuccin-bazel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" d="M8 15.5L15.5 8V4L12 .5l-4 4l-4-4L.5 4v4zM.5 4L8 11.5L15.5 4M8 15.5v-4m3.5.5V8L8 4.5L4.5 8v4"></svg:path>`,
})
export class CatppuccinBazelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
