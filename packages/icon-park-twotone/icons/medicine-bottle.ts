import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMedicineBottleIcon],svg[icon-park-twotone-medicine-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMedicineBottle0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" stroke-linejoin="round" d="M34 10H14a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2Z"></svg:path><svg:path stroke-linecap="round" d="M12 18h24"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 15v6m24-6v6"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="M32 4H16v6h16z"></svg:path><svg:path stroke-linecap="round" d="M20 31h8m-4-4v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMedicineBottle0)"></svg:path>`,
})
export class IconParkTwotoneMedicineBottleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
