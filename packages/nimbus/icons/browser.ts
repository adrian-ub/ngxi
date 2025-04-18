import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusBrowserIcon],svg[nimbus-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="3.72" cy="4.02" fill="currentColor" rx=".67" ry=".62"></svg:ellipse><svg:path fill="currentColor" d="M6.29 4.65A.65.65 0 0 0 7 4a.67.67 0 0 0-1.38 0a.65.65 0 0 0 .67.65"></svg:path><svg:ellipse cx="8.87" cy="4.02" fill="currentColor" rx=".67" ry=".63"></svg:ellipse><svg:path fill="currentColor" d="M14.25 1.5H1.75A1.25 1.25 0 0 0 .5 2.75v10.5a1.25 1.25 0 0 0 1.25 1.25h12.5a1.25 1.25 0 0 0 1.25-1.25V2.75a1.25 1.25 0 0 0-1.25-1.25M1.75 2.75h12.5v2.5H1.75zm0 10.5V6.5h12.5v6.75z"></svg:path>`,
})
export class NimbusBrowserIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
