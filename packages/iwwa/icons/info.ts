import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaInfoIcon],svg[iwwa-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.108 15.754a1.11 1.11 0 0 0 1.107-1.107v-1.111c0-.606-.497-1.107-1.107-1.107s-1.109.502-1.109 1.107v1.111c0 .609.499 1.107 1.109 1.107m-2.215 4.431h1.106v6.278c0 .609.499 1.107 1.109 1.107s1.107-.498 1.107-1.107v-7.386a1.11 1.11 0 0 0-1.107-1.107h-2.215c-.61 0-1.109.498-1.109 1.107s.499 1.108 1.109 1.108m0 0"></svg:path><svg:path fill="currentColor" d="M33.847 34.847H6.153a1 1 0 0 1-1-1V6.153a1 1 0 0 1 1-1h27.693a1 1 0 0 1 1 1v27.693a1 1 0 0 1-.999 1.001m-26.694-2h25.693V7.153H7.153z"></svg:path>`,
})
export class IwwaInfoIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
