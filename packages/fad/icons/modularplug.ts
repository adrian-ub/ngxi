import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadModularplugIcon],svg[fad-modularplug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M128 226c-54.124 0-98-43.876-98-98s43.876-98 98-98s98 43.876 98 98s-43.876 98-98 98m-1-8c49.706 0 90-40.294 90-90s-40.294-90-90-90s-90 40.294-90 90s40.294 90 90 90"></svg:path><svg:path d="M128 197c-38.108 0-69-30.668-69-68.5S89.892 60 128 60s69 30.668 69 68.5s-30.892 68.5-69 68.5m0-6.29c34.22 0 61.96-27.54 61.96-61.511s-27.74-61.51-61.96-61.51s-61.96 27.539-61.96 61.51s27.74 61.51 61.96 61.51z"></svg:path><svg:path d="M128 170c-23.196 0-42-18.804-42-42s18.804-42 42-42s42 18.804 42 42s-18.804 42-42 42"></svg:path></svg:g>`,
})
export class FadModularplugIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
