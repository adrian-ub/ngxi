import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMedal07Icon],svg[hugeicons-medal-07-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 16a6 6 0 1 1 12 0a6 6 0 0 1-12 0"></svg:path><svg:path d="M9.5 16a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M12 2v8m4.667 2l.936-.803c.687-.589 1.031-.883 1.214-1.281S19 9.066 19 8.16V6c0-1.886 0-2.828-.586-3.414S16.886 2 15 2H9c-1.886 0-2.828 0-3.414.586S5 4.114 5 6v2.16c0 .905 0 1.358.183 1.756s.527.692 1.214 1.281l.936.803"></svg:path></svg:g>`,
})
export class HugeiconsMedal07Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
