import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBiwoIcon],svg[arcticons-biwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.062 12.976v-1.75a5.645 5.645 0 0 0-5.642-5.642H11.142A5.645 5.645 0 0 0 5.5 11.226V26.47a5.646 5.646 0 0 0 5.642 5.642H26.42a5.645 5.645 0 0 0 5.642-5.642v-7.743"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.939 35.023v1.75a5.645 5.645 0 0 0 5.642 5.643h15.277a5.646 5.646 0 0 0 5.642-5.642V21.53a5.645 5.645 0 0 0-5.642-5.642H21.58a5.644 5.644 0 0 0-5.642 5.642v7.742"></svg:path>`,
})
export class ArcticonsBiwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
