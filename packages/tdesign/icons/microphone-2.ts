import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMicrophone2Icon],svg[tdesign-microphone-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3a5 5 0 1 0 0 10a5 5 0 0 0 0-10M9.009 7.641a7 7 0 1 1 7.35 7.35l-9.224 7.282a1 1 0 0 1-.115.087a2 2 0 0 1-.295.167a2.3 2.3 0 0 1-1.001.207c-.851-.01-1.836-.433-2.93-1.527s-1.52-2.079-1.528-2.93a2.3 2.3 0 0 1 .207-1.002a2 2 0 0 1 .254-.41zm.4 2.722l-6.122 7.754a.4.4 0 0 0-.021.139c.001.16.077.674.94 1.537c.865.863 1.38.94 1.54.941a.4.4 0 0 0 .137-.02l7.754-6.123a7.02 7.02 0 0 1-4.228-4.228M10.414 15L8 17.414L6.586 16L9 13.586z"></svg:path>`,
})
export class TdesignMicrophone2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
