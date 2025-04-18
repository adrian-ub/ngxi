import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUmbrellaBeachIcon],svg[mdi-umbrella-beach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.13 14.56l1.43-1.43L21 19.57L19.57 21zm4.29-5.73l2.86-2.86C16.33 2 9.93 2 6 5.95c3.91-1.3 8.29-.25 11.42 2.88M5.95 6C2 9.93 2 16.33 5.97 20.28l2.86-2.86C5.7 14.29 4.65 9.91 5.95 6m.02-.04l-.01.01C5.58 9 7.13 12.85 10.26 16L16 10.26c-3.14-3.13-7-4.68-10.03-4.3"></svg:path>`,
})
export class MdiUmbrellaBeachIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
