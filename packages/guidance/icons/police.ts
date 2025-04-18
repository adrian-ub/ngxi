import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidancePoliceIcon],svg[guidance-police-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M11.75 23.5C4 19 2.5 16 2.5 5.5c3.15 0 6.356-1.238 8.276-3.357c.422-.465.687-1.044.874-1.643h.7c.187.599.452 1.178.874 1.643C15.144 4.262 18.35 5.5 21.5 5.5c0 10.5-1.5 13.5-9.25 18z"></svg:path><svg:path d="M11.898 7.5h.204l.15.542a4 4 0 0 0 3.856 2.935h.392v.166l-.365.252a4 4 0 0 0-1.55 4.473l.196.632h-.21a4.066 4.066 0 0 0-5.142 0h-.21l.195-.632a4 4 0 0 0-1.55-4.473l-.364-.252v-.166h.392a4 4 0 0 0 3.856-2.935z"></svg:path></svg:g>`,
})
export class GuidancePoliceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
