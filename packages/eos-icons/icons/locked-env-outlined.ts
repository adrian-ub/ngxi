import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsLockedEnvOutlinedIcon],svg[eos-icons-locked-env-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.829 14.59v.752H6.524v.877H8V17H5.55v-4H8v.781H6.524v.809z"></svg:path><svg:path fill="currentColor" d="M17 8h-1V6A5 5 0 0 0 6 6v2H5a2.006 2.006 0 0 0-2 2v10a2.006 2.006 0 0 0 2 2h12a2.006 2.006 0 0 0 2-2V10a2.006 2.006 0 0 0-2-2M7.9 6a3.1 3.1 0 1 1 6.2 0v2H7.9ZM17 20H5V10h12Z"></svg:path><svg:path fill="currentColor" d="M12.168 17h-.974l-1.63-2.467V17H8.59v-4h.974l1.63 2.479V13h.974zm2.933 0h-1.202L12.5 13h1l1 3l1-3h1z"></svg:path>`,
})
export class EosIconsLockedEnvOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
