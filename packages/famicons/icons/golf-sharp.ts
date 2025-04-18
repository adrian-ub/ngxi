import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsGolfSharpIcon],svg[famicons-golf-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 16v304.47q8-.47 16-.47t16 .47V202.3L448 112Z"></svg:path><svg:path fill="currentColor" d="M462.91 457.5c-8.54-42.85-35-78.74-76.62-103.8c-32.43-19.55-72.53-31.3-114.29-33.7v95.79h-32V320c-41.79 2.4-81.89 14.15-114.32 33.7c-41.59 25.06-68.08 60.95-76.62 103.8c-2 9.81-.68 38.5-.68 38.5h415.21s1.28-28.69-.68-38.5"></svg:path>`,
})
export class FamiconsGolfSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
