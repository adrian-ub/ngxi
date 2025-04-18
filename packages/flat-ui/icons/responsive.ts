import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiResponsiveIcon],svg[flat-ui-responsive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#35495E" d="M74 15H6a6 6 0 0 0-6 6v73a6 6 0 0 0 6 6h68a6 6 0 0 0 6-6V21a6 6 0 0 0-6-6"></svg:path><svg:rect width="32" height="76" x="49" y="15" fill-rule="evenodd" clip-rule="evenodd" opacity=".2" rx="5"></svg:rect><svg:path fill="#fff" d="M76 93a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V32h72z"></svg:path><svg:circle cx="9" cy="24" r="3" fill="#D15527" fill-rule="evenodd" clip-rule="evenodd"></svg:circle><svg:circle cx="17" cy="24" r="3" fill="#F19B2D" fill-rule="evenodd" clip-rule="evenodd"></svg:circle><svg:circle cx="25" cy="24" r="3" fill="#53BB72" fill-rule="evenodd" clip-rule="evenodd"></svg:circle><svg:path fill="#14A085" fill-rule="evenodd" d="M8 36h64v56H8z" clip-rule="evenodd"></svg:path><svg:path fill="#26B99A" fill-rule="evenodd" d="M34 36h38v56H34z" clip-rule="evenodd"></svg:path><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#35495E" d="M94 0H58a6 6 0 0 0-6 6v76.001a6 6 0 0 0 6 5.998h36a6 6 0 0 0 6-5.998V6a6 6 0 0 0-6-6m2 74H56V14h40z"></svg:path><svg:path fill="#fff" d="M56 14h40v60H56z"></svg:path><svg:path fill="#14A085" d="M59 17h34v54H59z"></svg:path><svg:path fill="#26B99A" d="M59 44h34v27H59z"></svg:path><svg:path fill="#2C3D4F" d="M69.5 6h12a1.5 1.5 0 0 1 0 3h-12a1.5 1.5 0 1 1 0-3M76 78.001a2.999 2.999 0 1 1 0 5.998a3 3 0 1 1 0-5.998"></svg:path></svg:g>`,
})
export class FlatUiResponsiveIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
