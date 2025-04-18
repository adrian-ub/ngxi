import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsNpmOldIcon],svg[file-icons-npm-old-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M261 269h-27v-58h27zm59.5 29H379v-87h28.5v87l29 1v-88H467v87h29V182H320.5zm-146 29H234v-28.5h57v-58l1-58.5H174.5zm-146-28.5h60V211h28v87h30V182h-118zM524 327H263.5v30.5h-117v-30H0V153h524z"></svg:path>`,
})
export class FileIconsNpmOldIcon {
  readonly viewBox = input("0 0 524 512")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
