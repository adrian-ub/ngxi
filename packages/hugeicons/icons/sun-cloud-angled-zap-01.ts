import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSunCloudAngledZap01Icon],svg[hugeicons-sun-cloud-angled-zap-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 4.655A3.84 3.84 0 0 0 5.844 3A3.85 3.85 0 0 0 2 6.857C2 8.154 2.638 9.3 3.616 10"></svg:path><svg:path d="M7 18.5c-2.761 0-5-2.164-5-4.833c0-2.513 1.984-4.578 4.52-4.812M17.5 18.5c2.485 0 4.5-1.948 4.5-4.35S19.985 9.8 17.5 9.8h-.022m0 0q.021-.24.022-.483C17.5 6.38 15.038 4 12 4C9.123 4 6.762 6.135 6.52 8.855m10.958.945a5.2 5.2 0 0 1-1.235 2.9M6.52 8.855q.237-.021.48-.022c1.126 0 2.165.36 3 .967m2.578 4.2l-1.774 2.684c-.237.36-.356.539-.282.677c.073.139.287.139.716.139h1.524c.429 0 .643 0 .716.139c.074.138-.045.318-.282.677L11.422 21"></svg:path></svg:g>`,
})
export class HugeiconsSunCloudAngledZap01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
