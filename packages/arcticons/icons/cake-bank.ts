import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCakeBankIcon],svg[arcticons-cake-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.017 20.063v7.856m5.63 0l-3.563-3.928l3.563-3.901m-3.563 3.901h-2.067m-11.594 2.912a3.46 3.46 0 0 1-2.453 1.016h0a3.47 3.47 0 0 1-3.47-3.47v-.916a3.47 3.47 0 0 1 3.47-3.47h0c.958 0 1.825.389 2.453 1.017m19.84 2.911h3.414m1.823 3.928h-5.237v-7.856H39.5m-22.908 7.85l3.405-7.832l3.404 7.856"></svg:path>`,
})
export class ArcticonsCakeBankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
