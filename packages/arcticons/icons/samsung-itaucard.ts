import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSamsungItaucardIcon],svg[arcticons-samsung-itaucard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="34.12" height="24.085" x="6.94" y="11.958" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.018" ry="5.018" transform="rotate(-45 24 24)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.938 18.403c-.136.722-.64 1.219-1.385 1.318m2.602-.905c-.264 1.109-.92 1.917-2.17 2.27m3.465-1.713c-.57 1.703-1.629 2.593-2.974 3.004m4.309-2.581c-.84 2.432-2.28 3.443-3.963 3.885"></svg:path>`,
})
export class ArcticonsSamsungItaucardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
