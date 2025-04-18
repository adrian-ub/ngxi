import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonPenLightIcon],svg[iconamoon-pen-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M3 3v-.75a.75.75 0 0 0-.75.75zm15.293 11.293l-.683-.31a.75.75 0 0 0 .153.84zM21 17l.53.53a.75.75 0 0 0 0-1.06zm-4 4l-.53.53a.75.75 0 0 0 1.06 0zm-2.707-2.707l.53-.53a.75.75 0 0 0-.84-.153zM11 2.25H3v1.5h8zM19.75 11A8.75 8.75 0 0 0 11 2.25v1.5A7.25 7.25 0 0 1 18.25 11zm-.774 3.602c.498-1.1.774-2.32.774-3.602h-1.5a7.2 7.2 0 0 1-.64 2.984zm-1.213.221l2.707 2.707l1.06-1.06l-2.707-2.707zm2.707 1.647l-4 4l1.06 1.06l4-4zm-2.94 4l-2.707-2.707l-1.06 1.06l2.707 2.707zM11 19.75a8.7 8.7 0 0 0 3.602-.774l-.618-1.366a7.2 7.2 0 0 1-2.984.64zM2.25 11A8.75 8.75 0 0 0 11 19.75v-1.5A7.25 7.25 0 0 1 3.75 11zm0-8v8h1.5V3z"></svg:path><svg:circle cx="11" cy="11" r="1" stroke="currentColor" stroke-width="1.5" transform="rotate(-180 11 11)"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 3l7 7"></svg:path></svg:g>`,
})
export class IconamoonPenLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
