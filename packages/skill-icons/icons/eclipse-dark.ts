import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsEclipseDarkIcon],svg[skill-icons-eclipse-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path fill="#2C2255" d="M83.044 153.434H52.377c4.06 13.929 11.596 26.414 22.627 37.445c17.586 17.59 38.733 26.37 63.461 26.37c4.944 0 9.733-.368 14.385-1.069c18.627-2.812 34.934-11.233 48.907-25.301c11.102-11.027 18.69-23.516 22.782-37.445zm-16.91-41.652h-16.02a94 94 0 0 0-1.167 10.799h179.042a93 93 0 0 0-1.174-10.799M48.947 132.609c.181 3.686.579 7.28 1.167 10.798h176.705c.59-3.518.993-7.112 1.176-10.798m-3.453-30.856c-4.088-13.968-11.678-26.51-22.786-37.62c-13.936-13.934-30.197-22.296-48.763-25.11a97 97 0 0 0-14.528-1.086c-24.729 0-45.877 8.735-63.461 26.197c-11.035 11.11-18.574 23.652-22.632 37.619"></svg:path><svg:path fill="#F7941E" d="M43.623 127.597c0-47.297 35.522-86.595 81.732-93.507c-1.146-.042-2.298-.09-3.456-.09C70.042 34 28 75.907 28 127.597c0 51.693 42.04 93.596 93.899 93.596c1.162 0 2.314-.043 3.464-.087c-46.218-6.912-81.74-46.21-81.74-93.509"></svg:path><svg:path fill="url(#skillIconsEclipseDark0)" d="M199.398 122.579a61 61 0 0 0-1.854-10.798H79.394a61 61 0 0 0-1.855 10.798z"></svg:path><svg:path fill="url(#skillIconsEclipseDark1)" d="M199.398 132.609H77.54c.3 3.701.921 7.309 1.854 10.798h118.152a61 61 0 0 0 1.852-10.798"></svg:path><svg:path fill="url(#skillIconsEclipseDark2)" d="M138.469 188.748c24.537 0 45.687-14.457 55.427-35.314H83.043c9.74 20.857 30.89 35.314 55.426 35.314"></svg:path><svg:path fill="#fff" d="M68.509 132.608h159.359c.084-1.595.132-3.201.132-4.82c0-1.749-.064-3.482-.163-5.211H48.947a91 91 0 0 0-.163 5.211c0 1.619.047 3.225.132 4.82zm14.176-30.855H52.37c-.996 3.265-1.64 6.615-2.256 10.031h176.135a89 89 0 0 0-2.41-10.031m-9.106 41.652H50.112c.6 3.412 1.284 6.76 2.264 10.029h172.049a89 89 0 0 0 2.37-10.029z"></svg:path><svg:defs><svg:lineargradient id="skillIconsEclipseDark0" x1="138.467" x2="138.467" y1="229.42" y2="94.558" gradientUnits="userSpaceOnUse"><svg:stop offset=".303" stop-color="#473788"></svg:stop><svg:stop offset=".872" stop-color="#2C2255"></svg:stop></svg:lineargradient><svg:lineargradient id="skillIconsEclipseDark1" x1="138.468" x2="138.468" y1="229.422" y2="94.56" gradientUnits="userSpaceOnUse"><svg:stop offset=".303" stop-color="#473788"></svg:stop><svg:stop offset=".872" stop-color="#2C2255"></svg:stop></svg:lineargradient><svg:lineargradient id="skillIconsEclipseDark2" x1="138.469" x2="138.469" y1="229.417" y2="94.564" gradientUnits="userSpaceOnUse"><svg:stop offset=".303" stop-color="#473788"></svg:stop><svg:stop offset=".863" stop-color="#2C2255"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class SkillIconsEclipseDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
