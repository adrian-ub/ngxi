import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilUmbrellaSolidIcon],svg[basil-umbrella-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 1.5a.75.75 0 0 0-1.5 0v1.03a9.5 9.5 0 0 0-8.749 9.319a.67.67 0 0 0 .558.668a54.4 54.4 0 0 0 8.191.735V19a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 0-1.5 0v.5a2.25 2.25 0 0 0 4.5 0v-5.748a54.4 54.4 0 0 0 8.192-.735a.67.67 0 0 0 .557-.668c-.077-4.926-3.902-8.941-8.749-9.32z"></svg:path>`,
})
export class BasilUmbrellaSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
