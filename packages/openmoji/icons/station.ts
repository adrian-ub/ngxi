import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiStationIcon],svg[openmoji-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m17.003 20.119l-.167 31.268l36.618.334l.321-32.929z"></svg:path><svg:path fill="#d0cfce" d="M53.775 42.583V18.792h7.006v23.791M34.438 62.519H3.781v-11.59h31.032"></svg:path><svg:path fill="#3f3f3f" d="M35.078 22.5h-18a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1"></svg:path><svg:path fill="#9b9b9a" d="M31.745 25.5H20.41a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h11.334a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"></svg:path><svg:path fill="#d0cfce" d="M3.781 9.167H68.25v9.625H3.781zm11.032 42.744h-4.032V18.792h4.806v33.119zm40.468-13.142s-13.687-1-23.75 5.625s-16.25 11.625-16.25 11.625s-1.767 1.782-1.875 3.875c-.156 3.031 6.875 3.937 6.875 3.937L35.7 64.92q.519.036 1.039.036h32.48s-.188-26.187 0-26.187z"></svg:path><svg:path fill="#3f3f3f" d="m30.406 50.144l3.032 3.031h32.718v-6.969a1 1 0 0 0-1-1h-17s-8.562-.25-18.125 4.125"></svg:path><svg:path fill="none" stroke="#ea5a47" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.781 59.519s12.375-2.125 47.375-1"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M54.875 34.917V18.792h4.806v16.125"></svg:path><svg:circle cx="57.934" cy="66.021" r="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.438 61.536H3.781v-9.625h11.032M35.078 22.5h-18a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M31.745 25.5H20.41a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h11.334a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M3.781 9.167H68.25v9.625H3.781z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.077" d="M14.813 51.911h-4.032V18.792h4.806v33.119z"></svg:path><svg:circle cx="44.872" cy="66.021" r="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.094 68.019H68m-12.719-29.25s-13.687-1-23.75 5.625s-16.25 11.625-16.25 11.625s-1.767 1.782-1.875 3.875c-.156 3.031 6.875 3.937 6.875 3.937L35.7 64.92q.519.036 1.039.036h32.48s-.188-26.187 0-26.187z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m30.406 50.144l3.032 3.031h31.718"></svg:path>`,
})
export class OpenmojiStationIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
