import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEyeOpticSolidIcon],svg[streamline-eye-optic-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.353 1.268a.75.75 0 0 1 .938.495l.407 1.318A7 7 0 0 1 7 2.963c.46 0 .895.042 1.302.118l.407-1.318a.75.75 0 0 1 1.434.443l-.406 1.312c.78.336 1.426.79 1.946 1.26l.985-.985a.75.75 0 0 1 1.061 1.06l-1.032 1.033c.147.195.272.378.375.54c.124.197.218.366.283.494a3 3 0 0 1 .112.247a1 1 0 0 1 .036.123a.77.77 0 0 1-.036.428q-.016.043-.032.078a3 3 0 0 1-.08.169a6 6 0 0 1-.283.493a8 8 0 0 1-1.137 1.41C10.9 10.89 9.279 11.922 7 11.922S3.1 10.891 2.066 9.87A8 8 0 0 1 .929 8.458a6 6 0 0 1-.284-.493a3 3 0 0 1-.112-.247a1 1 0 0 1-.035-.124a.76.76 0 0 1 .035-.428a3 3 0 0 1 .112-.247a7 7 0 0 1 .659-1.032L.27 4.853a.75.75 0 0 1 1.06-1.061l.986.985a7.1 7.1 0 0 1 1.946-1.26l-.406-1.312a.75.75 0 0 1 .495-.938Zm2.174 8.238a2.117 2.117 0 1 0 .945-4.128a2.117 2.117 0 0 0-.945 4.128" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineEyeOpticSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
