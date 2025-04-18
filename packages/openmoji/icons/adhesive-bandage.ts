import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiAdhesiveBandageIcon],svg[openmoji-adhesive-bandage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e67a94" d="m21.504 37.56l15.557-15.556L50.496 35.44L34.939 50.996z"></svg:path><svg:path fill="#ffa7c0" d="m13.928 45.137l7.677-7.677L35.04 50.895l-7.677 7.677z"></svg:path><svg:rect width="19" height="19" x="12.105" y="41.395" fill="#ffa7c0" rx="8.821" ry="8.821" transform="rotate(-45 21.605 50.895)"></svg:rect><svg:path fill="#ffa7c0" d="m58.072 27.863l-7.677 7.677L36.96 22.105l7.677-7.677z"></svg:path><svg:rect width="19" height="19" x="40.895" y="12.605" fill="#ffa7c0" rx="9.5" ry="9.5" transform="rotate(135 50.395 22.105)"></svg:rect><svg:circle cx="19.974" cy="44.465" r=".679" fill="#e67a94"></svg:circle><svg:circle cx="22.661" cy="47.152" r=".679" fill="#e67a94"></svg:circle><svg:circle cx="25.348" cy="49.839" r=".679" fill="#e67a94"></svg:circle><svg:circle cx="28.035" cy="52.526" r=".679" fill="#e67a94"></svg:circle><svg:circle cx="17.095" cy="47.344" r=".679" fill="#e67a94"></svg:circle><svg:circle cx="19.782" cy="50.031" r=".679" fill="#e67a94"></svg:circle><svg:circle cx="22.469" cy="52.718" r=".679" fill="#e67a94"></svg:circle><svg:circle cx="25.156" cy="55.405" r=".679" fill="#e67a94"></svg:circle><svg:circle cx="46.844" cy="17.595" r=".679" fill="#e67a94"></svg:circle><svg:circle cx="49.531" cy="20.282" r=".679" fill="#e67a94"></svg:circle><svg:circle cx="52.218" cy="22.969" r=".679" fill="#e67a94"></svg:circle><svg:circle cx="54.905" cy="25.656" r=".679" fill="#e67a94"></svg:circle><svg:circle cx="43.965" cy="20.474" r=".679" fill="#e67a94"></svg:circle><svg:circle cx="46.652" cy="23.161" r=".679" fill="#e67a94"></svg:circle><svg:circle cx="49.339" cy="25.848" r=".679" fill="#e67a94"></svg:circle><svg:circle cx="52.026" cy="28.535" r=".679" fill="#e67a94"></svg:circle><svg:path stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M43.677 15.388L14.888 44.177"></svg:path><svg:path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M21.605 37.46L35.04 50.895m22.072-22.072a9.5 9.5 0 0 0-13.435-13.435M28.323 57.612a9.5 9.5 0 0 1-13.435-13.435M36.96 22.105L50.395 35.54M28.323 57.612l28.789-28.789"></svg:path><svg:circle cx="19.974" cy="44.465" r=".679"></svg:circle><svg:circle cx="22.661" cy="47.152" r=".679"></svg:circle><svg:circle cx="25.348" cy="49.839" r=".679"></svg:circle><svg:circle cx="28.035" cy="52.526" r=".679"></svg:circle><svg:circle cx="17.095" cy="47.344" r=".679"></svg:circle><svg:circle cx="19.782" cy="50.031" r=".679"></svg:circle><svg:circle cx="22.469" cy="52.718" r=".679"></svg:circle><svg:circle cx="25.156" cy="55.405" r=".679"></svg:circle><svg:circle cx="46.844" cy="17.595" r=".679"></svg:circle><svg:circle cx="49.531" cy="20.282" r=".679"></svg:circle><svg:circle cx="52.218" cy="22.969" r=".679"></svg:circle><svg:circle cx="54.905" cy="25.656" r=".679"></svg:circle><svg:circle cx="43.965" cy="20.474" r=".679"></svg:circle><svg:circle cx="46.652" cy="23.161" r=".679"></svg:circle><svg:circle cx="49.339" cy="25.848" r=".679"></svg:circle><svg:circle cx="52.026" cy="28.535" r=".679"></svg:circle>`,
})
export class OpenmojiAdhesiveBandageIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
