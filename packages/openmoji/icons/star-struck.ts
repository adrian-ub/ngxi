import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiStarStruckIcon],svg[openmoji-star-struck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="24" fill="#FCEA2B"></svg:circle><svg:path fill="#F1B31C" d="m25.042 21.237l7.987-1.201l-3.905 7.07l3.609 7.224l-7.929-1.529l-5.755 5.665l-.997-8.014l-7.166-3.723l7.314-3.424l1.326-7.966zm21.84 0l-7.986-1.201l3.905 7.07l-3.61 7.224l7.93-1.529l5.755 5.665l.996-8.014l7.167-3.723l-7.314-3.424l-1.326-7.966z"></svg:path><svg:path fill="#EA5A47" d="M49.737 46.356c-1.79 4.27-6.35 7.23-13.7 7.23c-7.41 0-12.03-3.03-13.8-7.36c2.03.46 14.98 3.17 27.5.13"></svg:path><svg:path fill="#FFF" d="M50.607 41.866c0 1.6-.29 3.11-.87 4.49c-12.52 3.04-25.47.33-27.5-.13c-.55-1.35-.83-2.82-.83-4.36h.11s14.81 3.59 28.89.07z"></svg:path><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path stroke-linecap="round" d="M50.607 41.866c0 1.6-.29 3.11-.87 4.49c-12.52 3.04-25.47.33-27.5-.13c-.55-1.35-.83-2.82-.83-4.36h.11s14.81 3.59 28.89.07z"></svg:path><svg:path d="M49.737 46.356c-1.79 4.27-6.35 7.23-13.7 7.23c-7.41 0-12.03-3.03-13.8-7.36c2.03.46 14.98 3.17 27.5.13zm.49-.12l-.49.12m-27.5-.13c-.19-.05-.28-.07-.28-.07"></svg:path><svg:path stroke-linecap="round" d="M46.554 15.56A22.9 22.9 0 0 0 36 13a22.9 22.9 0 0 0-11.076 2.837M13.195 32.995A23 23 0 0 0 13 36c0 12.702 10.297 23 23 23s23-10.298 23-23q-.001-1.512-.19-2.973"></svg:path><svg:path stroke-linecap="round" d="m25.118 21.237l7.986-1.201l-3.905 7.07l3.61 7.224l-7.93-1.529l-5.755 5.665l-.996-8.014l-7.167-3.723l7.314-3.424l1.326-7.966zm21.764 0l-7.986-1.201l3.905 7.07l-3.61 7.224l7.93-1.529l5.755 5.665l.996-8.014l7.167-3.723l-7.314-3.424l-1.326-7.966z"></svg:path></svg:g>`,
})
export class OpenmojiStarStruckIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
