import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidCovid19Virus1Icon],svg[covid-covid19-virus-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25a8.25 8.25 0 1 0 0-16.5a8.25 8.25 0 0 0 0 16.5M13.75.75h-3.5m1.75 0v3m-6.718-.942L4.045 4.045L2.808 5.282m1.237-1.237l2.121 2.121M.75 10.25v3.5m0-1.75h3m-.942 6.718l1.237 1.237l1.237 1.237m-1.237-1.237l2.121-2.121m4.084 5.416h3.5m-1.75 0v-3m6.718.942l1.237-1.237l1.237-1.237m-1.237 1.237l-2.121-2.121m5.416-4.084v-3.5m0 1.75h-3m.942-6.718l-1.237-1.237l-1.237-1.237m1.237 1.237l-2.121 2.121"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9.5 11.25a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5"></svg:path><svg:path d="M12.75 17a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m4-3.625a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></svg:path></svg:g>`,
})
export class CovidCovid19Virus1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
