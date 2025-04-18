import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPlusgamesIcon],svg[whh-plusgames-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1006.54 241l-135 135q25 67 25 136t-25 136l134 134q18 18 18 44.5t-18 44.5l-134 134q-18 18-44.5 18t-44.5-18l-134-134q-67 25-136 25t-136-25l-135 135q-18 18-44 18t-45-18l-134-134q-18-19-18-45t18-44l135-135q-25-67-25-136t26-136l-135-135q-19-18-19-44.5t19-44.5l133-134q18-18 44.5-18t44.5 18l135 136q67-26 136-26t136 25l135-135q18-18 44-18t45 18l134 134q18 19 18 45t-18 44m-493.5 79q-79.5 0-136 56.5T320.54 512t56.5 135.5t136 56.5t135.5-56.5t56-135.5t-56-135.5t-135.5-56.5"></svg:path>`,
})
export class WhhPlusgamesIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
