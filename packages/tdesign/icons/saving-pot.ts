import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSavingPotIcon],svg[tdesign-saving-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.198 22.5h5.604l.445-2h2.506l.445 2h5.604l.632-2.843c3.65-3.061 4.69-8.39 2.226-12.658q-.34-.585-.74-1.108Q22 5.455 22 5a5 5 0 0 0-9.007-2.99c-1.344.084-2.7.402-4.005.954l-.92.39l.778 1.841l.921-.39a10.4 10.4 0 0 1 2.31-.678Q12 4.553 12 5a5 5 0 0 0 8.959 3.054a8 8 0 0 1-2.04 10.256l-.283.221l-.438 1.97h-2.396l-.444-2H9.642l-.444 2H6.802l-.669-3.01l-.501-.192c-1.064-.408-2.563-1.27-3.632-2.23V10.5h1.066l2.047-3.41l-.668-1.671c.806.104 1.735.501 2.601 1.454l.673.74l1.48-1.346l-.673-.74c-1.893-2.082-4.17-2.37-5.752-2.001l-1.135.264l1.248 3.12l-.953 1.59H0v7.416l.295.293c1.15 1.144 2.795 2.16 4.115 2.747zm.302-11h2.004V9.494H5.5zM17 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class TdesignSavingPotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
