import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biFilePptFillIcon],svg[bi-file-ppt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.188 8.5H7V5h1.188a1.75 1.75 0 1 1 0 3.5"></svg:path><svg:path d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m3 4a1 1 0 0 0-1 1v6.5a.5.5 0 0 0 1 0v-2h1.188a2.75 2.75 0 0 0 0-5.5z"></svg:path></svg:g>`,
})
export class BiFilePptFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
