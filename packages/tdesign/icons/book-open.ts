import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBookOpenIcon],svg[tdesign-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h8a4 4 0 0 1 3 1.354A4 4 0 0 1 15 2h8v19h-1c-2.944 0-5.14.245-6.586.486c-.723.12-1.26.24-1.609.328a11 11 0 0 0-.472.13l-.017.005h-.002l-.152.051h-2.324l-.152-.05l-.001-.001h-.001l-.017-.006l-.088-.026a11 11 0 0 0-.384-.103a21 21 0 0 0-1.61-.328C7.14 21.246 4.946 21 2 21H1zm2 2v15.01c2.563.047 4.535.274 5.914.504c.777.13 1.366.26 1.766.36q.188.047.32.084V6a2 2 0 0 0-2-2zm10 2v13.958q.132-.037.32-.084c.4-.1.989-.23 1.766-.36c1.379-.23 3.35-.457 5.914-.505V4h-6a2 2 0 0 0-2 2m2 2h4v2h-4zm0 3h4v2h-4z"></svg:path>`,
})
export class TdesignBookOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
