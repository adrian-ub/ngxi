import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandCucumberIcon],svg[tabler-brand-cucumber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 10.99c-.01 5.52-4.48 10-10 10.01v-2.26l-.01-.01c-4.28-1.11-6.86-5.47-5.76-9.75a8 8 0 0 1 9.74-5.76C17.5 4.13 20 7.35 20 11zM10.5 8L10 7m3.5 7l.5 1m-5-2.5L8 13m3 1l-.5 1M13 8l.5-1m2.5 5.5l-1-.5m-6-2l-1-.5"></svg:path>`,
})
export class TablerBrandCucumberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
