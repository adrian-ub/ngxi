import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForFaroeIslandsIcon],svg[emojione-flag-for-faroe-islands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#428bc1"><svg:path d="M61.7 28q-.15-1.5-.6-3H2.8l-.6 3zM2.3 36q.15 1.5.6 3h58.3l.6-3z"></svg:path><svg:path d="M20 4.5c-1 .4-2 1-3 1.5v52q1.5.9 3 1.5zm8-2.2v59.5l3 .3V2q-1.5 0-3 .3"></svg:path></svg:g><svg:g fill="#ed4c5c"><svg:path d="M2 32c0 1.4.1 2.7.3 4h59.5c.2-1.3.3-2.6.3-4s-.1-2.7-.3-4H2.3c-.2 1.3-.3 2.6-.3 4"></svg:path><svg:path d="M20 59.5c2.5 1.1 5.2 1.9 8 2.2V2.3c-2.8.4-5.5 1.1-8 2.2z"></svg:path></svg:g><svg:path fill="#f9f9f9" d="M17 25V6C10 10.1 4.8 16.9 2.8 25zm0 14v19C10 53.9 4.8 47.1 2.8 39zM32 2h-1v23h30.2C58 11.8 46.2 2 32 2m-1 37v23h1c14.2 0 26-9.8 29.2-23z"></svg:path>`,
})
export class EmojioneFlagForFaroeIslandsIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
