import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBattlelandsIcon],svg[arcticons-battlelands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.172 20.952l20.717-4.362l1.513 7.185l-20.718 4.362z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.503 19.507l8.323-1.752l.674 3.2l-8.323 1.753zm-.614-2.917l-.589-2.798l-2.303 3.407M18.66 33.64l-2.697.568l-1.278-6.07l4.025-.848z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.993 30.31l3.271-1.398l3.432-.723l-1.524-7.237l-6.846 1.442zM4.5 22.778l1.826-.384l1.666 7.916l-1.826.384zm8.082-4.623l2.013-.424l.59 2.798l-2.014.423z"></svg:path>`,
})
export class ArcticonsBattlelandsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
