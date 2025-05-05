import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSealFilledIcon],svg[tdesign-seal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".9" d="M2 20.5h20v2H2zM7 7a5 5 0 0 1 10 0c0 1.57-.725 3.297-1.847 4.488q-.245.26-.407.553c-.263.486.202.959.754.959H20a2 2 0 0 1 2 2v4.5H2V15a2 2 0 0 1 2-2h4.5c.552 0 1.017-.473.754-.959a2.7 2.7 0 0 0-.407-.553C7.725 10.298 7 8.57 7 7"></svg:path>`,
})
export class TdesignSealFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
