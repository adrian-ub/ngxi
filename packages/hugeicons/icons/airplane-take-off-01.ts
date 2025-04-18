import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAirplaneTakeOff01Icon],svg[hugeicons-airplane-take-off-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 20h16M3.825 12.166c-.275-.2-.525-.45-.825-1.325c-.081-.217-.389-1.305-.65-2.3c-.22-.84-.417-1.605-.325-1.8c.075-.2.175-.35.5-.55c.2-.123 1.225-.375 1.425-.425s.475-.075.7 0c.425.075 1.3 1.35 1.525 1.5c.1.1.425.391.8.425c.275.025.55-.05.85-.175c.275-.114 5.7-2.75 6.2-2.975c4.075-1.7 7.035 1.095 7.485 1.695c.465.58.565.755.44 1.255c-.162.525-.6.625-.85.7s-3.7 1-5.05 1.375c-.295.096-.439.289-.475.325c-.175.25-.97 1.95-1.195 2.325c-.155.4-.58.9-1.13 1.1c-.575.2-1.575.425-1.8.5s-.75.225-.925.175c-.225-.05-.44-.275-.34-.625s.29-1.325.315-1.475s.275-.775 0-.8c-.05-.075-.575.15-1.35.325c-.576.162-1.179.323-1.6.425c-1.625.475-2.505.6-2.7.6c-.375 0-.65-.05-1.025-.275" color="currentColor"></svg:path>`,
})
export class HugeiconsAirplaneTakeOff01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
