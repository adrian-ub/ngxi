import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidQuarantinePlaceSelfLockdown1Icon],svg[covid-quarantine-place-self-lockdown-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 11.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m1.5 12l.75-4.5h1.5V16.5a3.75 3.75 0 0 0-7.5 0v2.25h1.5l.75 4.5z"></svg:path><svg:path d="M22.272 23.25a.98.98 0 0 0 .978-.978V9.75a1.2 1.2 0 0 0-.377-.8L12 .75L1.127 8.949c-.224.208-.36.495-.377.8v12.523a.98.98 0 0 0 .978.978z"></svg:path></svg:g>`,
})
export class CovidQuarantinePlaceSelfLockdown1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
