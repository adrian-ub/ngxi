import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerDesk03Icon],svg[hugeicons-computer-desk-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12H2m17.765 0l.61-1.674c.46-1.263.69-1.894.609-2.457a2.15 2.15 0 0 0-.488-1.091c-.355-.415-.951-.602-2.143-.976m0 0c0 .321 0 .482-.038.623c-.055.208-.168.39-.323.524c-.106.091-.242.15-.513.27l-.252.11c-.525.23-.787.346-.982.23a.5.5 0 0 1-.074-.055C16 7.349 16 7.038 16 6.417v-1.23c0-.62 0-.93.17-1.086a.5.5 0 0 1 .075-.055c.195-.117.457-.001.982.23l.252.11c.271.119.407.178.513.27c.155.133.268.316.323.523c.038.142.038.303.038.623M20 17h-4c-1.886 0-2.828 0-3.414-.586S12 14.886 12 13v-1m-8 0v10m16-10v10M3 6V5c0-1.414 0-2.121.44-2.56C3.878 2 4.585 2 6 2h4c1.414 0 2.121 0 2.56.44C13 2.878 13 3.585 13 5v1c0 1.414 0 2.121-.44 2.56C12.122 9 11.415 9 10 9H6c-1.414 0-2.121 0-2.56-.44C3 8.122 3 7.415 3 6m6.5 3l.5 3M6.5 9L6 12" color="currentColor"></svg:path>`,
})
export class HugeiconsComputerDesk03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
