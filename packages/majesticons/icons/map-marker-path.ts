import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMapMarkerPathIcon],svg[majesticons-map-marker-path-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 0v1m0 7v-1"></svg:path><svg:path fill="currentColor" d="M7 19a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 19a2 2 0 1 0-4 0a2 2 0 0 0 4 0m0 0h1m9-2a2 2 0 1 1-2 2m2-2a2 2 0 0 0-2 2m2-2v-1m-2 3h-1"></svg:path><svg:circle cx="5" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="19" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="m17 13l-.647.763l-.001-.002l-.004-.002l-.01-.01l-.039-.033l-.137-.121a21 21 0 0 1-1.923-1.967c-.525-.617-1.072-1.343-1.491-2.109C12.335 8.766 12 7.892 12 7c0-1.547.538-2.825 1.49-3.711C14.431 2.413 15.69 2 17 2s2.569.413 3.51 1.289C21.462 4.175 22 5.453 22 7c0 .892-.335 1.766-.748 2.52c-.42.765-.965 1.491-1.49 2.108a21 21 0 0 1-2.061 2.088l-.038.033l-.011.01l-.004.002v.001h-.001zm0 0l.646.763a1 1 0 0 1-1.292 0zm0-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsMapMarkerPathIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
