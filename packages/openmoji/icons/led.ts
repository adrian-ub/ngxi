import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLedIcon],svg[openmoji-led-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="M31.388 26.718s9.237-1.82 8.422-9.197c-1.354-12.26-1.468-10.423-1.468-10.423l-5.529 1.01S36 21.702 31.388 26.718"></svg:path><svg:path fill="#92d3f5" d="M34.542 7.036c-8.147 0-14.75 7.496-14.75 16.743v16.388h29.5"></svg:path><svg:path fill="#d0cfce" d="M26.833 44.5h4v22.095h-4zm14.5 0h4v16.479h-4z"></svg:path><svg:path fill="#61b2e4" d="M34.542 7.563s15.323.549 15.904 13.875c.967 22.145.067 18.919.067 18.919l-9.326-.19s1.438-25.042-6.645-32.604"></svg:path><svg:path fill="#61b2e4" d="M43.333 40.792h11.833v3.083H43.333z"></svg:path><svg:path fill="#92d3f5" d="M16.335 40.792h26.998v3.083H16.335z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M34.542 7.036c-8.147 0-14.75 7.496-14.75 16.743v16.388h29.5M26.833 44.5h4v22.095h-4zm14.5 0h4v16.479h-4zM35.25 7.036c8.146 0 14.75 7.496 14.75 16.743v7.388M16 44.5h40v-4.333H16z"></svg:path>`,
})
export class OpenmojiLedIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
