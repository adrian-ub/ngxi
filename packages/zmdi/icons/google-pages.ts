import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiGooglePagesIcon],svg[zmdi-google-pages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 43q0-18 12.5-30.5T43 0h128v107L85 85l22 86H0zm107 170l-22 86l86-22v107H43q-18 0-30.5-12.5T0 341V213zm192 86l-22-86h107v128q0 18-12.5 30.5T341 384H213V277zM341 0q18 0 30.5 12.5T384 43v128H277l22-86l-86 22V0z"></svg:path>`,
})
export class ZmdiGooglePagesIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
