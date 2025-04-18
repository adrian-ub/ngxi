import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoCreativeCommonsAttributionIcon],svg[entypo-creative-commons-attribution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.583 7.623a.62.62 0 0 0-.62-.62H8.037a.62.62 0 0 0-.62.62v3.927h1.095v4.65h2.976v-4.65h1.095z"></svg:path><svg:circle cx="10" cy="5.143" r="1.343" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M9.988.4q-3.99 0-6.753 2.784Q.4 6.064.4 10t2.835 6.768Q6.071 19.6 9.988 19.6q3.965 0 6.872-2.856Q19.6 14.032 19.6 10c0-4.032-.93-4.96-2.788-6.816Q14.026.4 9.988.4m.024 1.728q3.268 0 5.55 2.304Q17.871 6.712 17.87 10q0 3.312-2.258 5.496q-2.38 2.352-5.6 2.352t-5.55-2.328Q2.13 13.192 2.13 10t2.355-5.568q2.259-2.304 5.527-2.304" clip-rule="evenodd"></svg:path>`,
})
export class EntypoCreativeCommonsAttributionIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
