import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsSignsPost2Icon],svg[lineicons-signs-post-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.152 3.346a.75.75 0 1 0-1.5 0v6h-5.09a1.75 1.75 0 0 0-1.162.442l-1.688 1.5a1.75 1.75 0 0 0 0 2.616l1.688 1.5c.32.284.734.442 1.163.442h5.09v6a.75.75 0 0 0 1.5 0v-11h5.091a1.75 1.75 0 0 0 1.163-.442l1.687-1.5a1.75 1.75 0 0 0 0-2.616l-1.687-1.5a1.75 1.75 0 0 0-1.163-.442h-5.092zm-1.5 7.5v3.5h-5.09a.25.25 0 0 1-.166-.063l-1.687-1.5a.25.25 0 0 1 0-.374l1.687-1.5a.25.25 0 0 1 .166-.063zm1.501-5h5.091a.25.25 0 0 1 .166.063l1.688 1.5a.25.25 0 0 1 0 .374l-1.688 1.5a.25.25 0 0 1-.166.063h-5.09z"></svg:path>`,
})
export class LineiconsSignsPost2Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
