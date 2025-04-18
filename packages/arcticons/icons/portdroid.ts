import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPortdroidIcon],svg[arcticons-portdroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M19.205 45.035C-2.857 34.876 2.955 12.425 4.461 7.71a2 2 0 0 1 1.174-1.244c4.991-1.997 11.302-3.682 13.829-3.682c2.047 0 10.003 1.689 14.999 3.688a1.98 1.98 0 0 1 1.16 1.242c1.508 4.721 7.312 27.165-14.745 37.321a2.02 2.02 0 0 1-1.673 0Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M23.11 18.494h6.145"></svg:path><svg:circle cx="31.432" cy="18.494" r="1.766" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M22.605 26.737h5.182"></svg:path><svg:circle cx="29.98" cy="26.737" r="1.766" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M21.975 22.756h19.541"></svg:path><svg:circle cx="43.591" cy="22.756" r="1.766" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="m21.633 22.911l1.028 6.56a.66.66 0 0 1-.651.761h-4.006a.66.66 0 0 1-.651-.762l1.041-6.595a.69.69 0 0 0-.272-.639a3.072 3.072 0 1 1 3.794.028a.69.69 0 0 0-.283.647Z"></svg:path>`,
})
export class ArcticonsPortdroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
