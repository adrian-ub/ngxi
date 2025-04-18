import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPickerColorColorsDesignDropperEyeEyedropEyedropperPaintingPickerIcon],svg[streamline-interface-edit-picker-color-colors-design-dropper-eye-eyedrop-eyedropper-painting-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.46 1.54a3.52 3.52 0 0 0-5 0L2.87 6.13a3 3 0 0 0-.53 3.53L.79 11.21a1 1 0 0 0 0 1.41l.59.59a1 1 0 0 0 1.41 0l1.55-1.55a3 3 0 0 0 3.53-.53l4.59-4.59a3.52 3.52 0 0 0 0-5ZM4.5 1.5l8 8"></svg:path>`,
})
export class StreamlineInterfaceEditPickerColorColorsDesignDropperEyeEyedropEyedropperPaintingPickerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
