import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMymindIcon],svg[hugeicons-mymind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.496 10.106c1.54 5.422-.567 10.665-4.707 11.711s-8.744-2.501-10.285-7.923c-1.54-5.422.567-10.665 4.707-11.711s8.744 2.501 10.285 7.923"></svg:path><svg:path d="M13.319 15.943L11.5 7l4.65 7.774c.266.444.398.665.334.879s-.298.329-.766.559l-.91.447c-.56.276-.841.414-1.073.302s-.293-.414-.416-1.018"></svg:path><svg:circle cx="8.5" cy="11" r="1"></svg:circle></svg:g>`,
})
export class HugeiconsMymindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
