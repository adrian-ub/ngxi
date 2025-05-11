import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChartPolarFillIcon],svg[ph-chart-polar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 199.54v27.74a4 4 0 0 1-4.46 4a104.22 104.22 0 0 1-90.8-90.8a4 4 0 0 1 4-4.46h27.72A72.11 72.11 0 0 0 120 199.54M183.42 136H136v47.42A56.11 56.11 0 0 0 183.42 136M136 72.58V120h47.42A56.11 56.11 0 0 0 136 72.58M227.28 136h-27.74A72.11 72.11 0 0 1 136 199.54v27.74a4 4 0 0 0 4.46 4a104.22 104.22 0 0 0 90.8-90.8a4 4 0 0 0-3.98-4.48m-27.74-16h27.74a4 4 0 0 0 4-4.46a104.22 104.22 0 0 0-90.8-90.8a4 4 0 0 0-4.46 4v27.72A72.11 72.11 0 0 1 199.54 120m-84-95.26a104.22 104.22 0 0 0-90.8 90.8a4 4 0 0 0 4 4.46h27.72A72.11 72.11 0 0 1 120 56.46V28.72a4 4 0 0 0-4.46-3.98M72.58 120H120V72.58A56.11 56.11 0 0 0 72.58 120M120 183.42V136H72.58A56.11 56.11 0 0 0 120 183.42"></svg:path>`,
})
export class PhChartPolarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPolarLightIcon],svg[ph-chart-polar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m89.8 96h-28.1A62.07 62.07 0 0 0 134 66.3V38.2a90.15 90.15 0 0 1 83.8 83.8m-95.8 0H78.37A50.09 50.09 0 0 1 122 78.37Zm0 12v43.63A50.09 50.09 0 0 1 78.37 134Zm12 0h43.63A50.09 50.09 0 0 1 134 177.63Zm0-12V78.37A50.09 50.09 0 0 1 177.63 122Zm-12-83.8v28.1A62.07 62.07 0 0 0 66.3 122H38.2A90.15 90.15 0 0 1 122 38.2M38.2 134h28.1a62.07 62.07 0 0 0 55.7 55.7v28.1A90.15 90.15 0 0 1 38.2 134m95.8 83.8v-28.1a62.07 62.07 0 0 0 55.7-55.7h28.1a90.15 90.15 0 0 1-83.8 83.8"></svg:path>`,
})
export class PhChartPolarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPolarThinIcon],svg[ph-chart-polar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m91.91 96h-32.06A60.07 60.07 0 0 0 132 68.15V36.09A92.13 92.13 0 0 1 219.91 124M124 124H76.17A52.05 52.05 0 0 1 124 76.17Zm0 8v47.83A52.05 52.05 0 0 1 76.17 132Zm8 0h47.83A52.05 52.05 0 0 1 132 179.83Zm0-8V76.17A52.05 52.05 0 0 1 179.83 124Zm-8-87.91v32.06A60.07 60.07 0 0 0 68.15 124H36.09A92.13 92.13 0 0 1 124 36.09M36.09 132h32.06A60.07 60.07 0 0 0 124 187.85v32.06A92.13 92.13 0 0 1 36.09 132M132 219.91v-32.06A60.07 60.07 0 0 0 187.85 132h32.06A92.13 92.13 0 0 1 132 219.91"></svg:path>`,
})
export class PhChartPolarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartScatterIcon],svg[ph-chart-scatter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v152h184a8 8 0 0 1 8 8m-100-48a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-24-56a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-32 72a12 12 0 1 0-12-12a12 12 0 0 0 12 12m96-48a12 12 0 1 0-12-12a12 12 0 0 0 12 12m24-40a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-20 76a12 12 0 1 0 12-12a12 12 0 0 0-12 12"></svg:path>`,
})
export class PhChartScatterIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartScatterBoldIcon],svg[ph-chart-scatter-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v148h180a12 12 0 0 1 12 12m-120-60a16 16 0 1 0 16-16a16 16 0 0 0-16 16m-8-40a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-32 72a16 16 0 1 0-16-16a16 16 0 0 0 16 16m96-48a16 16 0 1 0-16-16a16 16 0 0 0 16 16m24-40a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-24 72a16 16 0 1 0 16-16a16 16 0 0 0-16 16"></svg:path>`,
})
export class PhChartScatterBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartScatterDuotoneIcon],svg[ph-chart-scatter-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v144H32V48h176a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v152h184a8 8 0 0 1 8 8m-100-48a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-24-56a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-32 72a12 12 0 1 0-12-12a12 12 0 0 0 12 12m96-48a12 12 0 1 0-12-12a12 12 0 0 0 12 12m24-40a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-20 76a12 12 0 1 0 12-12a12 12 0 0 0-12 12"></svg:path></svg:g>`,
})
export class PhChartScatterDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartScatterFillIcon],svg[ph-chart-scatter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-28 32a12 12 0 1 1-12 12a12 12 0 0 1 12-12m0 56a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-40-16a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-24-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-24 56a12 12 0 1 1-12 12a12 12 0 0 1 12-12m100 64H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v104h136a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhChartScatterFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartScatterLightIcon],svg[ph-chart-scatter-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 208a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v154h186a6 6 0 0 1 6 6m-98-50a10 10 0 1 0-10-10a10 10 0 0 0 10 10m-24-56a10 10 0 1 0-10-10a10 10 0 0 0 10 10m-32 72a10 10 0 1 0-10-10a10 10 0 0 0 10 10m96-48a10 10 0 1 0-10-10a10 10 0 0 0 10 10m24-40a10 10 0 1 0-10-10a10 10 0 0 0 10 10m-8 68a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhChartScatterLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartScatterThinIcon],svg[ph-chart-scatter-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 208a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v156h188a4 4 0 0 1 4 4m-96-52a8 8 0 1 0-8-8a8 8 0 0 0 8 8m-24-56a8 8 0 1 0-8-8a8 8 0 0 0 8 8m-32 72a8 8 0 1 0-8-8a8 8 0 0 0 8 8m96-48a8 8 0 1 0-8-8a8 8 0 0 0 8 8m24-40a8 8 0 1 0-8-8a8 8 0 0 0 8 8m-8 88a8 8 0 1 0-8-8a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhChartScatterThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatIcon],svg[ph-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.9 15.9 0 0 0 10.25-3.78l.09-.07L83 208h133a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H80a8 8 0 0 0-5.23 1.95L40 224V64h176Z"></svg:path>`,
})
export class PhChatIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatBoldIcon],svg[ph-chat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a20 20 0 0 0-20 20v160a19.82 19.82 0 0 0 11.56 18.1a20.1 20.1 0 0 0 8.49 1.9a19.9 19.9 0 0 0 12.82-4.72l.12-.11L84.47 212H216a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H80a11.93 11.93 0 0 0-7.84 2.92L44 215.23V68h168Z"></svg:path>`,
})
export class PhChatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredIcon],svg[ph-chat-centered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.43l13.68 23.94a16 16 0 0 0 27.78 0L155.57 200H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 144h-65.07a8 8 0 0 0-7 4l-16 28l-16-28a8 8 0 0 0-7-4H40V56h176Z"></svg:path>`,
})
export class PhChatCenteredIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredBoldIcon],svg[ph-chat-centered-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h58.11l12.52 21.92a20 20 0 0 0 34.74 0L157.89 204H216a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 144h-61.07a12 12 0 0 0-10.42 6.05L128 207.94l-12.51-21.89a12 12 0 0 0-10.42-6.05H44V60h168Z"></svg:path>`,
})
export class PhChatCenteredBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredDotsIcon],svg[ph-chat-centered-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 120a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-32 12a12 12 0 1 0-12-12a12 12 0 0 0 12 12m88 0a12 12 0 1 0-12-12a12 12 0 0 0 12 12m60-76v128a16 16 0 0 1-16 16h-60.43l-13.68 23.94a16 16 0 0 1-27.78 0L100.43 200H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 0H40v128h65.07a8 8 0 0 1 7 4l16 28l16-28a8 8 0 0 1 7-4H216Z"></svg:path>`,
})
export class PhChatCenteredDotsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredDotsBoldIcon],svg[ph-chat-centered-dots-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 120a16 16 0 1 1 16 16a16 16 0 0 1-16-16m64 16a16 16 0 1 0-16-16a16 16 0 0 0 16 16m84-80v128a20 20 0 0 1-20 20h-58.11l-12.52 21.92a20 20 0 0 1-34.74 0L98.11 204H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20m-24 4H44v120h61.07a12 12 0 0 1 10.42 6.05L128 207.94l12.51-21.89a12 12 0 0 1 10.42-6.05H212Z"></svg:path>`,
})
export class PhChatCenteredDotsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredDotsDuotoneIcon],svg[ph-chat-centered-dots-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v128a8 8 0 0 1-8 8h-65.07l-16 28a8 8 0 0 1-13.9 0l-16-28H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M116 120a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-32 12a12 12 0 1 0-12-12a12 12 0 0 0 12 12m88 0a12 12 0 1 0-12-12a12 12 0 0 0 12 12m60-76v128a16 16 0 0 1-16 16h-60.43l-13.68 23.94a16 16 0 0 1-27.78 0L100.43 200H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 0H40v128h65.07a8 8 0 0 1 7 4l16 28l16-28a8 8 0 0 1 7-4H216Z"></svg:path></svg:g>`,
})
export class PhChatCenteredDotsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredDotsFillIcon],svg[ph-chat-centered-dots-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.43l13.68 23.94a16 16 0 0 0 27.78 0L155.57 200H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M84 132a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhChatCenteredDotsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredDotsLightIcon],svg[ph-chat-centered-dots-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 120a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-54-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m88 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m58-54v128a14 14 0 0 1-14 14h-61.59l-14.25 25a14 14 0 0 1-24.32 0l-14.25-25H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v128a2 2 0 0 0 2 2h65.07a6 6 0 0 1 5.21 3l16 28a2 2 0 0 0 3.48 0l16-28a6 6 0 0 1 5.21-3H216a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhChatCenteredDotsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredDotsThinIcon],svg[ph-chat-centered-dots-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 120a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-52-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m88 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m56-56v128a12 12 0 0 1-12 12h-62.75l-14.83 26a12 12 0 0 1-20.84 0l-14.83-26H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4h65.07a4 4 0 0 1 3.47 2l16 28a4 4 0 0 0 6.94 0l16-28a4 4 0 0 1 3.47-2H216a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhChatCenteredDotsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredDuotoneIcon],svg[ph-chat-centered-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v128a8 8 0 0 1-8 8h-65.07l-16 28a8 8 0 0 1-13.9 0l-16-28H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.43l13.68 23.94a16 16 0 0 0 27.78 0L155.57 200H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 144h-65.07a8 8 0 0 0-7 4l-16 28l-16-28a8 8 0 0 0-7-4H40V56h176Z"></svg:path></svg:g>`,
})
export class PhChatCenteredDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredFillIcon],svg[ph-chat-centered-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56v128a16 16 0 0 1-16 16h-60.43l-13.68 23.94a16 16 0 0 1-27.78 0L100.43 200H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhChatCenteredFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredLightIcon],svg[ph-chat-centered-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h61.59l14.25 25a14 14 0 0 0 24.32 0l14.25-25H216a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2h-65.07a6 6 0 0 0-5.21 3l-16 28a2 2 0 0 1-3.48 0l-16-28a6 6 0 0 0-5.21-3H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhChatCenteredLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredSlashIcon],svg[ph-chat-centered-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62A8 8 0 0 0 40 40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.43l13.68 23.94a16 16 0 0 0 27.78 0L155.57 200h27.07l19.44 21.38a8 8 0 1 0 11.84-10.76Zm97 149.38a8 8 0 0 0-7 4l-16 28l-16-28a8 8 0 0 0-7-4H40V56h11.73L168.1 184ZM232 56v130a8 8 0 0 1-16 0V56H98.52a8 8 0 1 1 0-16H216a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhChatCenteredSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredSlashBoldIcon],svg[ph-chat-centered-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93a12 12 0 0 0-20.29 4.38A20 20 0 0 0 20 56v128a20 20 0 0 0 20 20h58.11l12.52 21.92a20 20 0 0 0 34.73 0L157.89 204h23l18.25 20.07a12 12 0 0 0 17.76-16.14ZM150.93 180a12 12 0 0 0-10.42 6.05L128 207.94l-12.51-21.89a12 12 0 0 0-10.42-6.05H44V60h6l109.1 120ZM236 56v118.14a12 12 0 0 1-24 0V60H109.33a12 12 0 1 1 0-24H216a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhChatCenteredSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredSlashDuotoneIcon],svg[ph-chat-centered-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v128a8 8 0 0 1-8 8h-65.07l-16 28a8 8 0 0 1-13.9 0l-16-28H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M53.92 34.62A8 8 0 0 0 40 40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.43l13.68 23.94a16 16 0 0 0 27.78 0L155.57 200h27.07l19.44 21.38a8 8 0 1 0 11.84-10.76Zm97 149.38a8 8 0 0 0-7 4l-16 28l-16-28a8 8 0 0 0-7-4H40V56h11.73L168.1 184ZM232 56v130a8 8 0 0 1-16 0V56H98.52a8 8 0 1 1 0-16H216a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhChatCenteredSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredSlashFillIcon],svg[ph-chat-centered-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56v128a15.93 15.93 0 0 1-4.82 11.42a4 4 0 0 1-5.68-.25L86.52 46.69a4 4 0 0 1 3-6.69H216a16 16 0 0 1 16 16M53.92 34.62A8 8 0 0 0 40 40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.43l13.68 23.94a16 16 0 0 0 27.78 0L155.57 200h27.07l19.44 21.38a8 8 0 1 0 11.84-10.76Z"></svg:path>`,
})
export class PhChatCenteredSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredSlashLightIcon],svg[ph-chat-centered-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-10.1 6H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h61.59l14.25 25a14 14 0 0 0 24.32 0l14.25-25h29.12l20 22a6 6 0 0 0 8.88-8.08Zm98.49 150a6 6 0 0 0-5.21 3l-16 28a2 2 0 0 1-3.48 0l-16-28a6 6 0 0 0-5.21-3H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h12.62l120 132ZM230 56v130a6 6 0 0 1-12 0V56a2 2 0 0 0-2-2H98.52a6 6 0 1 1 0-12H216a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhChatCenteredSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredSlashThinIcon],svg[ph-chat-centered-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38L46.23 44H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h62.75l14.83 26a12 12 0 0 0 20.84 0l14.83-26h31.16L205 218.69a4 4 0 1 0 5.92-5.38ZM150.93 188a4 4 0 0 0-3.47 2l-16 28a4 4 0 0 1-6.94 0l-16-28a4 4 0 0 0-3.47-2H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h13.5l123.64 136ZM228 56v130a4 4 0 0 1-8 0V56a4 4 0 0 0-4-4H98.52a4 4 0 1 1 0-8H216a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhChatCenteredSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredTextIcon],svg[ph-chat-centered-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 104a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m8 40h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m136-88v128a16 16 0 0 1-16 16h-60.43l-13.68 23.94a16 16 0 0 1-27.78 0L100.43 200H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 0H40v128h65.07a8 8 0 0 1 7 4l16 28l16-28a8 8 0 0 1 7-4H216Z"></svg:path>`,
})
export class PhChatCenteredTextIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredTextBoldIcon],svg[ph-chat-centered-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 100a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m12 52h64a12 12 0 0 0 0-24H96a12 12 0 0 0 0 24m140-96v128a20 20 0 0 1-20 20h-58.11l-12.52 21.92a20 20 0 0 1-34.74 0L98.11 204H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20m-24 4H44v120h61.07a12 12 0 0 1 10.42 6.05L128 207.94l12.51-21.89a12 12 0 0 1 10.42-6.05H212Z"></svg:path>`,
})
export class PhChatCenteredTextBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredTextDuotoneIcon],svg[ph-chat-centered-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v128a8 8 0 0 1-8 8h-65.07l-16 28a8 8 0 0 1-13.9 0l-16-28H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M88 104a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m8 40h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m136-88v128a16 16 0 0 1-16 16h-60.43l-13.68 23.94a16 16 0 0 1-27.78 0L100.43 200H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 0H40v128h65.07a8 8 0 0 1 7 4l16 28l16-28a8 8 0 0 1 7-4H216Z"></svg:path></svg:g>`,
})
export class PhChatCenteredTextDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredTextFillIcon],svg[ph-chat-centered-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.43l13.68 23.94a16 16 0 0 0 27.78 0L155.57 200H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-56 104H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhChatCenteredTextFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredTextLightIcon],svg[ph-chat-centered-text-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 104a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m70-74v128a14 14 0 0 1-14 14h-61.59l-14.25 25a14 14 0 0 1-24.32 0l-14.25-25H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v128a2 2 0 0 0 2 2h65.07a6 6 0 0 1 5.21 3l16 28a2 2 0 0 0 3.48 0l16-28a6 6 0 0 1 5.21-3H216a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhChatCenteredTextLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredTextThinIcon],svg[ph-chat-centered-text-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 104a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m68-76v128a12 12 0 0 1-12 12h-62.75l-14.83 26a12 12 0 0 1-20.84 0l-14.83-26H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4h65.07a4 4 0 0 1 3.47 2l16 28a4 4 0 0 0 6.94 0l16-28a4 4 0 0 1 3.47-2H216a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhChatCenteredTextThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredThinIcon],svg[ph-chat-centered-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h62.75l14.83 26a12 12 0 0 0 20.84 0l14.83-26H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4h-65.07a4 4 0 0 0-3.47 2l-16 28a4 4 0 0 1-6.94 0l-16-28a4 4 0 0 0-3.47-2H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhChatCenteredThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleIcon],svg[ph-chat-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216"></svg:path>`,
})
export class PhChatCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleBoldIcon],svg[ph-chat-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 0 0-96.15 157.23L21 209.66A20 20 0 0 0 46.34 235l32.43-10.81A108 108 0 1 0 128 20m0 192a84 84 0 0 1-42.06-11.27a12 12 0 0 0-6-1.62a12.1 12.1 0 0 0-3.8.62l-29.79 9.93l9.93-29.79a12 12 0 0 0-1-9.81A84 84 0 1 1 128 212"></svg:path>`,
})
export class PhChatCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleDotsIcon],svg[ph-chat-circle-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-56-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m88 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m60 12a104 104 0 0 1-152.88 91.82l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104 104 0 1 1 232 128m-16 0a88 88 0 1 0-164.19 44.06a8 8 0 0 1 .66 6.54L40 216l37.4-12.47a7.9 7.9 0 0 1 2.53-.42a8 8 0 0 1 4 1.08A88 88 0 0 0 216 128"></svg:path>`,
})
export class PhChatCircleDotsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleDotsBoldIcon],svg[ph-chat-circle-dots-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m32-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m84 16a108 108 0 0 1-157.23 96.15L46.34 235A20 20 0 0 1 21 209.66l10.81-32.43A108 108 0 1 1 236 128m-24 0a84 84 0 1 0-156.73 42.06a12 12 0 0 1 1 9.81l-9.93 29.79l29.79-9.93a12.1 12.1 0 0 1 3.8-.62a12 12 0 0 1 6 1.62A84 84 0 0 0 212 128"></svg:path>`,
})
export class PhChatCircleDotsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleDotsDuotoneIcon],svg[ph-chat-circle-dots-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-4-1.08a7.9 7.9 0 0 0-2.53.42L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216m12-88a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhChatCircleDotsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleDotsFillIcon],svg[ph-chat-circle-dots-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24M84 140a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhChatCircleDotsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleDotsLightIcon],svg[ph-chat-circle-dots-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 128a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-54-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m88 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m58 10a102 102 0 0 1-150.69 89.65l-34.87 11.62a14 14 0 0 1-17.71-17.71l11.62-34.87A102 102 0 1 1 230 128m-12 0a90 90 0 1 0-167.92 45.06a6 6 0 0 1 .5 4.91l-12.46 37.38a2 2 0 0 0 2.53 2.53L78 205.42a6.2 6.2 0 0 1 1.9-.31a6.1 6.1 0 0 1 3 .81A90 90 0 0 0 218 128"></svg:path>`,
})
export class PhChatCircleDotsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleDotsThinIcon],svg[ph-chat-circle-dots-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 128a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-52-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m88 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m56 8a100 100 0 0 1-148.5 87.47l-35.69 11.9a12 12 0 0 1-15.18-15.18l11.9-35.69A100 100 0 1 1 228 128m-8 0a92 92 0 1 0-171.65 46.07a4 4 0 0 1 .33 3.27l-12.46 37.38a4 4 0 0 0 5.06 5.06l37.38-12.46a4 4 0 0 1 1.27-.21a4.05 4.05 0 0 1 2 .54A92 92 0 0 0 220 128"></svg:path>`,
})
export class PhChatCircleDotsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleDuotoneIcon],svg[ph-chat-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216"></svg:path></svg:g>`,
})
export class PhChatCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleFillIcon],svg[ph-chat-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128a104 104 0 0 1-152.88 91.82l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104 104 0 1 1 232 128"></svg:path>`,
})
export class PhChatCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleLightIcon],svg[ph-chat-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 0 0-89.65 150.69l-11.62 34.87a14 14 0 0 0 17.71 17.71l34.87-11.62A102 102 0 1 0 128 26m0 192a90 90 0 0 1-45.06-12.08a6.1 6.1 0 0 0-3-.81a6.2 6.2 0 0 0-1.9.31l-37.39 12.46a2 2 0 0 1-2.53-2.53L50.58 178a6 6 0 0 0-.5-4.91A90 90 0 1 1 128 218"></svg:path>`,
})
export class PhChatCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleSlashIcon],svg[ph-chat-circle-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76l10.25 11.28a104.06 104.06 0 0 0-16.15 120.22l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35a104 104 0 0 0 112.7-9.73l10.26 11.29a8 8 0 1 0 11.84-10.76ZM128 216a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.66L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 0 1 63.14 68.54L181 198.23A87.77 87.77 0 0 1 128 216m104-88a104.15 104.15 0 0 1-12.38 49.25a8 8 0 0 1-14.09-7.58A88 88 0 0 0 93.88 46.86a8 8 0 0 1-6.21-14.75A104.06 104.06 0 0 1 232 128"></svg:path>`,
})
export class PhChatCircleSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleSlashBoldIcon],svg[ph-chat-circle-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93a12 12 0 1 0-17.76 16.14l7.81 8.59a108 108 0 0 0-15.08 120.57L21 209.66A20 20 0 0 0 46.34 235l32.43-10.81a108.08 108.08 0 0 0 112.55-8.66l7.8 8.58a12 12 0 0 0 17.76-16.14ZM128 212a83.9 83.9 0 0 1-42-11.27a12 12 0 0 0-9.82-1l-29.79 9.93l9.93-29.79a12 12 0 0 0-1-9.82a84 84 0 0 1 7.94-95.49l111.84 123A83.83 83.83 0 0 1 128 212m108-84a107.2 107.2 0 0 1-8.65 42.4a12 12 0 0 1-22.07-9.4A84.07 84.07 0 0 0 102.51 48a12 12 0 0 1-7.27-22.87A108.08 108.08 0 0 1 236 128"></svg:path>`,
})
export class PhChatCircleSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleSlashDuotoneIcon],svg[ph-chat-circle-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l10.25 11.28a104.06 104.06 0 0 0-16.15 120.22l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35a104 104 0 0 0 112.7-9.73l10.26 11.29a8 8 0 1 0 11.84-10.76ZM128 216a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.66L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 0 1 63.14 68.54L181 198.23A87.77 87.77 0 0 1 128 216m104-88a104.15 104.15 0 0 1-12.38 49.25a8 8 0 0 1-14.09-7.58A88 88 0 0 0 93.88 46.86a8 8 0 0 1-6.21-14.75A104.06 104.06 0 0 1 232 128"></svg:path></svg:g>`,
})
export class PhChatCircleSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleSlashFillIcon],svg[ph-chat-circle-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-10.26-11.29a104 104 0 0 1-112.7 9.73l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104.06 104.06 0 0 1 52.33 56.66L42.08 45.38a8 8 0 1 1 11.84-10.76ZM128 24a103.4 103.4 0 0 0-40.33 8.11a8 8 0 0 0-2.81 12.75l121.8 134a8 8 0 0 0 13-1.59A104 104 0 0 0 128 24"></svg:path>`,
})
export class PhChatCircleSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleSlashLightIcon],svg[ph-chat-circle-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l11.51 12.7a102 102 0 0 0-16.72 120l-11.62 34.86a14 14 0 0 0 17.71 17.71l34.87-11.62A102 102 0 0 0 192 207.37L203.56 220a6 6 0 0 0 8.88-8.08ZM128 218a90 90 0 0 1-45.06-12.08a6 6 0 0 0-4.91-.5l-37.38 12.46a2 2 0 0 1-2.53-2.53L50.58 178a6 6 0 0 0-.5-4.91A90 90 0 0 1 63.16 65.6L184 198.47A89.74 89.74 0 0 1 128 218m102-90a102.25 102.25 0 0 1-12.14 48.31a6 6 0 0 1-5.29 3.15a6 6 0 0 1-5.28-8.84A90.05 90.05 0 0 0 93.1 45a6 6 0 0 1-4.65-11A102.06 102.06 0 0 1 230 128"></svg:path>`,
})
export class PhChatCircleSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleSlashThinIcon],svg[ph-chat-circle-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38l12.83 14.07a100 100 0 0 0-17.3 119.74l-11.9 35.69a12 12 0 0 0 15.18 15.18l35.69-11.9a100 100 0 0 0 112.75-10.85L205 218.69a4 4 0 1 0 5.92-5.38ZM128 220a92 92 0 0 1-46.07-12.35a4 4 0 0 0-3.27-.33l-37.38 12.46a4 4 0 0 1-5.06-5.06l12.46-37.38a4 4 0 0 0-.33-3.27A92 92 0 0 1 63.22 62.69l123.64 136A91.75 91.75 0 0 1 128 220m100-92a100.3 100.3 0 0 1-11.9 47.36a4 4 0 0 1-3.53 2.1a3.9 3.9 0 0 1-1.89-.48a4 4 0 0 1-1.63-5.42A92 92 0 0 0 92.33 43.17a4 4 0 0 1-3.11-7.37A100.05 100.05 0 0 1 228 128"></svg:path>`,
})
export class PhChatCircleSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleTextIcon],svg[ph-chat-circle-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 112a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8 24H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m72-8a104 104 0 0 1-152.88 91.82l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104 104 0 1 1 232 128m-16 0a88 88 0 1 0-164.19 44.06a8 8 0 0 1 .66 6.54L40 216l37.4-12.47a7.9 7.9 0 0 1 2.53-.42a8 8 0 0 1 4 1.08A88 88 0 0 0 216 128"></svg:path>`,
})
export class PhChatCircleTextIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleTextBoldIcon],svg[ph-chat-circle-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 108a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m-12 28H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m76-8a108 108 0 0 1-157.23 96.15L46.34 235A20 20 0 0 1 21 209.66l10.81-32.43A108 108 0 1 1 236 128m-24 0a84 84 0 1 0-156.73 42.06a12 12 0 0 1 1 9.81l-9.93 29.79l29.79-9.93a12.1 12.1 0 0 1 3.8-.62a12 12 0 0 1 6 1.62A84 84 0 0 0 212 128"></svg:path>`,
})
export class PhChatCircleTextBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleTextDuotoneIcon],svg[ph-chat-circle-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-4-1.08a7.9 7.9 0 0 0-2.53.42L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216m40-104a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhChatCircleTextDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleTextFillIcon],svg[ph-chat-circle-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m32 128H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhChatCircleTextFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleTextLightIcon],svg[ph-chat-circle-text-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 112a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m70-10a102 102 0 0 1-150.69 89.65l-34.87 11.62a14 14 0 0 1-17.71-17.71l11.62-34.87A102 102 0 1 1 230 128m-12 0a90 90 0 1 0-167.92 45.06a6 6 0 0 1 .5 4.91l-12.46 37.38a2 2 0 0 0 2.53 2.53L78 205.42a6.2 6.2 0 0 1 1.9-.31a6.1 6.1 0 0 1 3 .81A90 90 0 0 0 218 128"></svg:path>`,
})
export class PhChatCircleTextLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleTextThinIcon],svg[ph-chat-circle-text-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 112a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m68-12a100 100 0 0 1-148.5 87.47l-35.69 11.9a12 12 0 0 1-15.18-15.18l11.9-35.69A100 100 0 1 1 228 128m-8 0a92 92 0 1 0-171.65 46.07a4 4 0 0 1 .33 3.27l-12.46 37.38a4 4 0 0 0 5.06 5.06l37.38-12.46a4 4 0 0 1 1.27-.21a4.05 4.05 0 0 1 2 .54A92 92 0 0 0 220 128"></svg:path>`,
})
export class PhChatCircleTextThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatCircleThinIcon],svg[ph-chat-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 0 0-87.47 148.5l-11.9 35.69a12 12 0 0 0 15.18 15.18l35.69-11.9A100 100 0 1 0 128 28m0 192a92 92 0 0 1-46.07-12.35a4.05 4.05 0 0 0-2-.54a4 4 0 0 0-1.27.21l-37.38 12.46a4 4 0 0 1-5.06-5.06l12.46-37.38a4 4 0 0 0-.33-3.27A92 92 0 1 1 128 220"></svg:path>`,
})
export class PhChatCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatDotsIcon],svg[ph-chat-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 128a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-32 12a12 12 0 1 0-12-12a12 12 0 0 0 12 12m88 0a12 12 0 1 0-12-12a12 12 0 0 0 12 12m60-76v128a16 16 0 0 1-16 16H83l-32.6 28.16l-.09.07A15.9 15.9 0 0 1 40 240a16.1 16.1 0 0 1-6.8-1.52A15.85 15.85 0 0 1 24 224V64a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 0H40v160l34.77-30a8 8 0 0 1 5.23-2h136Z"></svg:path>`,
})
export class PhChatDotsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatDotsBoldIcon],svg[ph-chat-dots-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 128a16 16 0 1 1 16 16a16 16 0 0 1-16-16m64 16a16 16 0 1 0-16-16a16 16 0 0 0 16 16m84-80v128a20 20 0 0 1-20 20H84.47L53 239.17l-.12.11A19.9 19.9 0 0 1 40.05 244a20.1 20.1 0 0 1-8.49-1.9A19.82 19.82 0 0 1 20 224V64a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20m-24 4H44v147.23l28.16-24.32A11.93 11.93 0 0 1 80 188h132Z"></svg:path>`,
})
export class PhChatDotsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatDotsDuotoneIcon],svg[ph-chat-dots-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v128a8 8 0 0 1-8 8H80l-34.85 30.11A8 8 0 0 1 32 224V64a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M116 128a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-32 12a12 12 0 1 0-12-12a12 12 0 0 0 12 12m88 0a12 12 0 1 0-12-12a12 12 0 0 0 12 12m60-76v128a16 16 0 0 1-16 16H83l-32.6 28.16l-.09.07A15.9 15.9 0 0 1 40 240a16.1 16.1 0 0 1-6.8-1.52A15.85 15.85 0 0 1 24 224V64a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 0H40v160l34.77-30a8 8 0 0 1 5.23-2h136Z"></svg:path></svg:g>`,
})
export class PhChatDotsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatDotsFillIcon],svg[ph-chat-dots-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.9 15.9 0 0 0 10.25-3.78l.09-.07L83 208h133a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M84 140a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhChatDotsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatDotsLightIcon],svg[ph-chat-dots-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 128a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-54-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m88 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m58-54v128a14 14 0 0 1-14 14H82.23l-33.16 28.64l-.06.05A13.87 13.87 0 0 1 40 238a14.1 14.1 0 0 1-5.95-1.33A13.88 13.88 0 0 1 26 224V64a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v160a2 2 0 0 0 3.26 1.55l34.82-30.08A6 6 0 0 1 80 194h136a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhChatDotsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatDotsThinIcon],svg[ph-chat-dots-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 128a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-52-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m88 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m56-56v128a12 12 0 0 1-12 12H81.49l-33.73 29.13A11.9 11.9 0 0 1 40 236a12.2 12.2 0 0 1-5.1-1.14A11.89 11.89 0 0 1 28 224V64a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v160a4 4 0 0 0 6.56 3.08L77.38 197a4 4 0 0 1 2.62-1h136a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhChatDotsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatDuotoneIcon],svg[ph-chat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v128a8 8 0 0 1-8 8H80l-34.85 30.11A8 8 0 0 1 32 224V64a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.9 15.9 0 0 0 10.25-3.78l.09-.07L83 208h133a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H80a8 8 0 0 0-5.23 1.95L40 224V64h176Z"></svg:path></svg:g>`,
})
export class PhChatDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatFillIcon],svg[ph-chat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 64v128a16 16 0 0 1-16 16H83l-32.6 28.16l-.09.07A15.9 15.9 0 0 1 40 240a16.05 16.05 0 0 1-6.79-1.52A15.84 15.84 0 0 1 24 224V64a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhChatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatLightIcon],svg[ph-chat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 50H40a14 14 0 0 0-14 14v160a13.88 13.88 0 0 0 8.09 12.69A14.1 14.1 0 0 0 40 238a13.87 13.87 0 0 0 9-3.31l.06-.05L82.23 206H216a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2H80a6 6 0 0 0-3.92 1.46l-34.82 30.07A2 2 0 0 1 38 224V64a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhChatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatSlashIcon],svg[ph-chat-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76L44.46 48H40a16 16 0 0 0-16 16v160a15.85 15.85 0 0 0 9.24 14.5A16.1 16.1 0 0 0 40 240a15.94 15.94 0 0 0 10.26-3.78l.08-.07L83 208h106.92l12.16 13.38a8 8 0 1 0 11.84-10.76ZM80 192a8 8 0 0 0-5.23 1.95L40 224V64h19l116.37 128ZM232 64v122a8 8 0 0 1-16 0V64H105.79a8 8 0 0 1 0-16H216a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhChatSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatSlashBoldIcon],svg[ph-chat-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93A12 12 0 0 0 36.8 44.28A20 20 0 0 0 20 64v160a19.82 19.82 0 0 0 11.56 18.1a20.1 20.1 0 0 0 8.49 1.9a19.9 19.9 0 0 0 12.82-4.72l.12-.11L84.47 212h103.68l11 12.07a12 12 0 0 0 17.76-16.15ZM80 188a11.93 11.93 0 0 0-7.84 2.92L44 215.23V68h13.24l109.09 120ZM236 64v110.12a12 12 0 0 1-24 0V68h-95.4a12 12 0 0 1 0-24H216a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhChatSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatSlashDuotoneIcon],svg[ph-chat-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v128a8 8 0 0 1-8 8H80l-34.85 30.11A8 8 0 0 1 32 224V64a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76L44.46 48H40a16 16 0 0 0-16 16v160a15.85 15.85 0 0 0 9.24 14.5A16.1 16.1 0 0 0 40 240a15.94 15.94 0 0 0 10.26-3.78l.08-.07L83 208h106.92l12.16 13.38a8 8 0 1 0 11.84-10.76ZM80 192a8 8 0 0 0-5.23 1.95L40 224V64h19l116.37 128ZM232 64v122a8 8 0 0 1-16 0V64H105.79a8 8 0 0 1 0-16H216a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhChatSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatSlashFillIcon],svg[ph-chat-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.92 210.61a8 8 0 1 1-11.84 10.76L189.92 208H83l-32.6 28.16l-.08.07A15.94 15.94 0 0 1 40 240a16.1 16.1 0 0 1-6.8-1.52A15.85 15.85 0 0 1 24 224V64a16 16 0 0 1 16-16h4.46l-2.38-2.62a8 8 0 1 1 11.84-10.76ZM216 48H96.75a4 4 0 0 0-3 6.69L225 199.06a4 4 0 0 0 7-2.69V64a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhChatSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatSlashLightIcon],svg[ph-chat-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8L49 50h-9a14 14 0 0 0-14 14v160a13.86 13.86 0 0 0 8.09 12.69a13.89 13.89 0 0 0 15-2L82.23 206H190.8l12.76 14a6 6 0 1 0 8.88-8.07ZM80 194a6 6 0 0 0-3.92 1.46l-34.79 30A2 2 0 0 1 38 224V64a2 2 0 0 1 2-2h19.89l120 132ZM230 64v122a6 6 0 0 1-12 0V64a2 2 0 0 0-2-2H105.79a6 6 0 0 1 0-12H216a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhChatSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatSlashThinIcon],svg[ph-chat-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38L53.5 52H40a12 12 0 0 0-12 12v160a11.89 11.89 0 0 0 6.93 10.88A12.1 12.1 0 0 0 40 236a12 12 0 0 0 7.74-2.87L81.49 204h110.19L205 218.69a4 4 0 0 0 3 1.31a4 4 0 0 0 3-6.69ZM80 196a4 4 0 0 0-2.61 1l-34.82 30a4 4 0 0 1-6.57-3V64a4 4 0 0 1 4-4h20.78l123.63 136ZM228 64v122a4 4 0 0 1-8 0V64a4 4 0 0 0-4-4H105.79a4 4 0 0 1 0-8H216a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhChatSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropIcon],svg[ph-chat-teardrop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200m0 184H48v-84a84 84 0 1 1 84 84"></svg:path>`,
})
export class PhChatTeardropIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropBoldIcon],svg[ph-chat-teardrop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 20A104.11 104.11 0 0 0 28 124v84a20 20 0 0 0 20 20h84a104 104 0 0 0 0-208m0 184H52v-80a80 80 0 1 1 80 80"></svg:path>`,
})
export class PhChatTeardropBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropDotsIcon],svg[ph-chat-teardrop-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200m0 184H48v-84a84 84 0 1 1 84 84m12-80a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhChatTeardropDotsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropDotsBoldIcon],svg[ph-chat-teardrop-dots-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 20A104.11 104.11 0 0 0 28 124v84a20 20 0 0 0 20 20h84a104 104 0 0 0 0-208m0 184H52v-80a80 80 0 1 1 80 80m-8-76a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhChatTeardropDotsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropDotsDuotoneIcon],svg[ph-chat-teardrop-dots-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 124a92 92 0 0 1-92 92H48a8 8 0 0 1-8-8v-84a92 92 0 0 1 92-92a92 92 0 0 1 92 92" opacity=".2"></svg:path><svg:path d="M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200m0 184H48v-84a84 84 0 1 1 84 84m12-80a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhChatTeardropDotsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropDotsFillIcon],svg[ph-chat-teardrop-dots-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200M88 140a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhChatTeardropDotsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropDotsLightIcon],svg[ph-chat-teardrop-dots-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142 128a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-54-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m88 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m54 6a98.11 98.11 0 0 1-98 98H48a14 14 0 0 1-14-14v-84a98 98 0 0 1 196 0m-12 0a86 86 0 0 0-172 0v84a2 2 0 0 0 2 2h84a86.1 86.1 0 0 0 86-86"></svg:path>`,
})
export class PhChatTeardropDotsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropDotsThinIcon],svg[ph-chat-teardrop-dots-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 128a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-52-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m88 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m52 4a96.11 96.11 0 0 1-96 96H48a12 12 0 0 1-12-12v-84a96 96 0 0 1 192 0m-8 0a88 88 0 0 0-176 0v84a4 4 0 0 0 4 4h84a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhChatTeardropDotsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropDuotoneIcon],svg[ph-chat-teardrop-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 124a92 92 0 0 1-92 92H48a8 8 0 0 1-8-8v-84a92 92 0 0 1 92-92a92 92 0 0 1 92 92" opacity=".2"></svg:path><svg:path d="M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200m0 184H48v-84a84 84 0 1 1 84 84"></svg:path></svg:g>`,
})
export class PhChatTeardropDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropFillIcon],svg[ph-chat-teardrop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 124a100.11 100.11 0 0 1-100 100H48a16 16 0 0 1-16-16v-84a100 100 0 0 1 200 0"></svg:path>`,
})
export class PhChatTeardropFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropLightIcon],svg[ph-chat-teardrop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 26a98.11 98.11 0 0 0-98 98v84a14 14 0 0 0 14 14h84a98 98 0 0 0 0-196m0 184H48a2 2 0 0 1-2-2v-84a86 86 0 1 1 86 86"></svg:path>`,
})
export class PhChatTeardropLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropSlashIcon],svg[ph-chat-teardrop-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76l13.18 14.5A99.4 99.4 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100.33 100.33 0 0 0 56.53-17.53l13.55 14.91a8 8 0 1 0 11.84-10.76ZM132 208H48v-84a83.46 83.46 0 0 1 18.15-52.15l111.51 122.66A83 83 0 0 1 132 208m100-84a99.87 99.87 0 0 1-14.35 51.65a8 8 0 0 1-13.7-8.28A84 84 0 0 0 95.66 48.25a8 8 0 0 1-6.94-14.42A100 100 0 0 1 232 124"></svg:path>`,
})
export class PhChatTeardropSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropSlashBoldIcon],svg[ph-chat-teardrop-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93a12 12 0 1 0-17.76 16.14L50 60a103.37 103.37 0 0 0-22 64v84a20 20 0 0 0 20 20h84a104.3 104.3 0 0 0 55.87-16.31l11.25 12.38a12 12 0 0 0 17.76-16.14ZM132 204H52v-80a79.5 79.5 0 0 1 14.46-45.86l105 115.49A79.1 79.1 0 0 1 132 204m104-80a102.9 102.9 0 0 1-10.36 45.29A12 12 0 0 1 204 158.83a79.25 79.25 0 0 0 8-34.83a80.07 80.07 0 0 0-107.84-75a12 12 0 0 1-8.35-22.5A104.07 104.07 0 0 1 236 124"></svg:path>`,
})
export class PhChatTeardropSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropSlashDuotoneIcon],svg[ph-chat-teardrop-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 124a92 92 0 0 1-92 92H48a8 8 0 0 1-8-8v-84a92 92 0 0 1 92-92a92 92 0 0 1 92 92" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l13.18 14.5A99.4 99.4 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100.33 100.33 0 0 0 56.53-17.53l13.55 14.91a8 8 0 1 0 11.84-10.76ZM132 208H48v-84a83.46 83.46 0 0 1 18.15-52.15l111.51 122.66A83 83 0 0 1 132 208m100-84a99.87 99.87 0 0 1-14.35 51.65a8 8 0 0 1-13.7-8.28A84 84 0 0 0 95.66 48.25a8 8 0 0 1-6.94-14.42A100 100 0 0 1 232 124"></svg:path></svg:g>`,
})
export class PhChatTeardropSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropSlashFillIcon],svg[ph-chat-teardrop-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-13.57-14.92A99.4 99.4 0 0 1 132 224H48a16 16 0 0 1-16-16v-84a99.54 99.54 0 0 1 23.29-64.08L42.08 45.38a8 8 0 0 1 .72-11.46a8.22 8.22 0 0 1 11.34.95Zm-5.57-29.91a4 4 0 0 0 6.24-.4A100 100 0 0 0 83.78 36.42a4 4 0 0 0-1 6.18Z"></svg:path>`,
})
export class PhChatTeardropSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropSlashLightIcon],svg[ph-chat-teardrop-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l14.37 15.8A97.42 97.42 0 0 0 34 124v84a14 14 0 0 0 14 14h84a98.24 98.24 0 0 0 56.82-18.18L203.56 220a6 6 0 0 0 8.88-8.08ZM132 210H48a2 2 0 0 1-2-2v-84a85.46 85.46 0 0 1 20.08-55.2L180.7 194.88A84.9 84.9 0 0 1 132 210m98-86a97.86 97.86 0 0 1-14.06 50.61a6 6 0 0 1-5.15 2.9a6 6 0 0 1-5.12-9.1a86 86 0 0 0-110.88-122a6 6 0 1 1-5.2-10.81A97.1 97.1 0 0 1 132 26a98.11 98.11 0 0 1 98 98"></svg:path>`,
})
export class PhChatTeardropSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropSlashThinIcon],svg[ph-chat-teardrop-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38l15.62 17.14A95.4 95.4 0 0 0 36 124v84a12 12 0 0 0 12 12h84a96.34 96.34 0 0 0 57.11-18.83L205 218.69a4 4 0 1 0 5.92-5.38ZM132 212H48a4 4 0 0 1-4-4v-84a87.5 87.5 0 0 1 22-58.23l117.7 129.44A86.92 86.92 0 0 1 132 212m96-88a95.8 95.8 0 0 1-13.78 49.58a4 4 0 1 1-6.84-4.14A88 88 0 0 0 93.92 44.64a4 4 0 1 1-3.46-7.21A95 95 0 0 1 132 28a96.11 96.11 0 0 1 96 96"></svg:path>`,
})
export class PhChatTeardropSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropTextIcon],svg[ph-chat-teardrop-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 112a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h68a8 8 0 0 1 8 8m-8 24H96a8 8 0 0 0 0 16h68a8 8 0 0 0 0-16m68-12a100.11 100.11 0 0 1-100 100H48a16 16 0 0 1-16-16v-84a100 100 0 0 1 200 0m-16 0a84 84 0 0 0-168 0v84h84a84.09 84.09 0 0 0 84-84"></svg:path>`,
})
export class PhChatTeardropTextIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropTextBoldIcon],svg[ph-chat-teardrop-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 108a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h68a12 12 0 0 1 12 12m-12 28H96a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m72-12a104.11 104.11 0 0 1-104 104H48a20 20 0 0 1-20-20v-84a104 104 0 0 1 208 0m-24 0a80 80 0 0 0-160 0v80h80a80.09 80.09 0 0 0 80-80"></svg:path>`,
})
export class PhChatTeardropTextBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropTextDuotoneIcon],svg[ph-chat-teardrop-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 124a92 92 0 0 1-92 92H48a8 8 0 0 1-8-8v-84a92 92 0 0 1 92-92a92 92 0 0 1 92 92" opacity=".2"></svg:path><svg:path d="M172 112a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h68a8 8 0 0 1 8 8m-8 24H96a8 8 0 0 0 0 16h68a8 8 0 0 0 0-16m68-12a100.11 100.11 0 0 1-100 100H48a16 16 0 0 1-16-16v-84a100 100 0 0 1 200 0m-16 0a84 84 0 0 0-168 0v84h84a84.09 84.09 0 0 0 84-84"></svg:path></svg:g>`,
})
export class PhChatTeardropTextDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropTextFillIcon],svg[ph-chat-teardrop-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200m32 128H96a8 8 0 0 1 0-16h68a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h68a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhChatTeardropTextFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropTextLightIcon],svg[ph-chat-teardrop-text-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170 112a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h68a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h68a6 6 0 0 0 0-12m66-14a98.11 98.11 0 0 1-98 98H48a14 14 0 0 1-14-14v-84a98 98 0 0 1 196 0m-12 0a86 86 0 0 0-172 0v84a2 2 0 0 0 2 2h84a86.1 86.1 0 0 0 86-86"></svg:path>`,
})
export class PhChatTeardropTextLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropTextThinIcon],svg[ph-chat-teardrop-text-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 112a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h68a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h68a4 4 0 0 0 0-8m64-16a96.11 96.11 0 0 1-96 96H48a12 12 0 0 1-12-12v-84a96 96 0 0 1 192 0m-8 0a88 88 0 0 0-176 0v84a4 4 0 0 0 4 4h84a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhChatTeardropTextThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropThinIcon],svg[ph-chat-teardrop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 28a96.11 96.11 0 0 0-96 96v84a12 12 0 0 0 12 12h84a96 96 0 0 0 0-192m0 184H48a4 4 0 0 1-4-4v-84a88 88 0 1 1 88 88"></svg:path>`,
})
export class PhChatTeardropThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTextIcon],svg[ph-chat-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48H40a16 16 0 0 0-16 16v160a15.85 15.85 0 0 0 9.24 14.5A16.1 16.1 0 0 0 40 240a15.9 15.9 0 0 0 10.25-3.78l.09-.07L83 208h133a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H80a8 8 0 0 0-5.23 1.95L40 224V64h176ZM88 112a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m0 32a8 8 0 0 1 8-8h64a8 8 0 1 1 0 16H96a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhChatTextIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTextBoldIcon],svg[ph-chat-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a20 20 0 0 0-20 20v160a19.82 19.82 0 0 0 11.56 18.1a20.1 20.1 0 0 0 8.49 1.9a19.9 19.9 0 0 0 12.82-4.72l.12-.11L84.47 212H216a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H80a11.93 11.93 0 0 0-7.84 2.92L44 215.23V68h168ZM84 108a12 12 0 0 1 12-12h64a12 12 0 1 1 0 24H96a12 12 0 0 1-12-12m0 40a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhChatTextBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTextDuotoneIcon],svg[ph-chat-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v128a8 8 0 0 1-8 8H80l-34.85 30.11A8 8 0 0 1 32 224V64a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 48H40a16 16 0 0 0-16 16v160a15.85 15.85 0 0 0 9.24 14.5A16.1 16.1 0 0 0 40 240a15.9 15.9 0 0 0 10.25-3.78l.09-.07L83 208h133a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H80a8 8 0 0 0-5.23 1.95L40 224V64h176ZM88 112a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m0 32a8 8 0 0 1 8-8h64a8 8 0 1 1 0 16H96a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhChatTextDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTextFillIcon],svg[ph-chat-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.9 15.9 0 0 0 10.25-3.78l.09-.07L83 208h133a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-56 104H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhChatTextFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTextLightIcon],svg[ph-chat-text-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 50H40a14 14 0 0 0-14 14v160a13.88 13.88 0 0 0 8.09 12.69A14.1 14.1 0 0 0 40 238a13.87 13.87 0 0 0 9-3.31l.06-.05L82.23 206H216a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2H80a6 6 0 0 0-3.92 1.46l-34.82 30.07A2 2 0 0 1 38 224V64a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm-52-80a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhChatTextLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatTextThinIcon],svg[ph-chat-text-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 52H40a12 12 0 0 0-12 12v160a11.89 11.89 0 0 0 6.93 10.88A12.2 12.2 0 0 0 40 236a11.9 11.9 0 0 0 7.69-2.83L81.49 204H216a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H80a4 4 0 0 0-2.62 1l-34.82 30.06A4 4 0 0 1 36 224V64a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-56-80a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhChatTextThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatThinIcon],svg[ph-chat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 52H40a12 12 0 0 0-12 12v160a11.89 11.89 0 0 0 6.93 10.88A12.2 12.2 0 0 0 40 236a11.9 11.9 0 0 0 7.69-2.83L81.49 204H216a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H80a4 4 0 0 0-2.62 1l-34.82 30.06A4 4 0 0 1 36 224V64a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhChatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsIcon],svg[ph-chats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 80h-32V48a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v128a8 8 0 0 0 13 6.22L72 154v30a16 16 0 0 0 16 16h93.59L219 230.22a8 8 0 0 0 5 1.78a8 8 0 0 0 8-8V96a16 16 0 0 0-16-16M66.55 137.78L40 159.25V48h128v88H71.58a8 8 0 0 0-5.03 1.78M216 207.25l-26.55-21.47a8 8 0 0 0-5-1.78H88v-32h80a16 16 0 0 0 16-16V96h32Z"></svg:path>`,
})
export class PhChatsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsBoldIcon],svg[ph-chats-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-28V48a20 20 0 0 0-20-20H40a20 20 0 0 0-20 20v128a12 12 0 0 0 19.54 9.33l28.46-23V184a20 20 0 0 0 20 20h92.17l36.29 29.33A12 12 0 0 0 236 224V96a20 20 0 0 0-20-20M44 150.87V52h120v80H71.58a12 12 0 0 0-7.58 2.67Zm168 48l-20-16.2a12 12 0 0 0-7.54-2.67H92v-24h76a20 20 0 0 0 20-20v-36h24Z"></svg:path>`,
})
export class PhChatsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsCircleIcon],svg[ph-chats-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.07 186.76a80 80 0 0 0-62.5-114.17a80 80 0 1 0-145.64 66.17l-7.27 24.71a16 16 0 0 0 19.87 19.87l24.71-7.27a80.4 80.4 0 0 0 25.18 7.35a80 80 0 0 0 108.34 40.65l24.71 7.27a16 16 0 0 0 19.87-19.86ZM62 159.5a8.3 8.3 0 0 0-2.26.32L32 168l8.17-27.76a8 8 0 0 0-.63-6A64 64 0 1 1 65.8 160.5a8 8 0 0 0-3.8-1m153.79 28.73L224 216l-27.76-8.17a8 8 0 0 0-6 .63a64.05 64.05 0 0 1-85.87-24.88a79.93 79.93 0 0 0 70.33-93.87a64 64 0 0 1 41.75 92.48a8 8 0 0 0-.63 6.04Z"></svg:path>`,
})
export class PhChatsCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsCircleBoldIcon],svg[ph-chats-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.34 187.09A84 84 0 0 0 172.29 68.9a84 84 0 0 0-152.63 70.19l-6.84 23.26a20 20 0 0 0 24.83 24.83l23.26-6.84a84 84 0 0 0 22.76 6.74a84.06 84.06 0 0 0 111.42 41.26l23.26 6.84a20 20 0 0 0 24.83-24.83ZM62 155.5a11.9 11.9 0 0 0-3.39.49l-20.72 6.09L44 141.35a12 12 0 0 0-.93-9a60 60 0 1 1 24.63 24.57a12 12 0 0 0-5.7-1.42m150.89 24.8a12 12 0 0 0-.93 9l6.09 20.73l-20.69-6.03a12 12 0 0 0-9.06.93a60 60 0 0 1-77.3-18.3a83.93 83.93 0 0 0 68.55-91.37a60 60 0 0 1 33.38 85Z"></svg:path>`,
})
export class PhChatsCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsCircleDuotoneIcon],svg[ph-chats-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M231.66 213.73a8 8 0 0 1-9.93 9.93L194 215.5a72.05 72.05 0 0 1-101.94-39.61c1.31.07 2.62.11 3.94.11a72 72 0 0 0 67.93-95.88A72 72 0 0 1 223.5 186Z" opacity=".2"></svg:path><svg:path d="M232.07 186.76a80 80 0 0 0-62.5-114.17a80 80 0 1 0-145.64 66.17l-7.27 24.71a16 16 0 0 0 19.87 19.87l24.71-7.27a80.4 80.4 0 0 0 25.18 7.35a80 80 0 0 0 108.34 40.65l24.71 7.27a16 16 0 0 0 19.87-19.86ZM62 159.5a8.3 8.3 0 0 0-2.26.32L32 168l8.17-27.76a8 8 0 0 0-.63-6A64 64 0 1 1 65.8 160.5a8 8 0 0 0-3.8-1m153.79 28.73L224 216l-27.76-8.17a8 8 0 0 0-6 .63a64.05 64.05 0 0 1-85.87-24.88a79.93 79.93 0 0 0 70.33-93.87a64 64 0 0 1 41.75 92.48a8 8 0 0 0-.63 6.04Z"></svg:path></svg:g>`,
})
export class PhChatsCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsCircleFillIcon],svg[ph-chats-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.07 186.76a80 80 0 0 0-62.5-114.17a80 80 0 1 0-145.64 66.17l-7.27 24.71a16 16 0 0 0 19.87 19.87l24.71-7.27a80.4 80.4 0 0 0 25.18 7.35a80 80 0 0 0 108.34 40.65l24.71 7.27a16 16 0 0 0 19.87-19.86Zm-16.25 1.47L224 216l-27.76-8.17a8 8 0 0 0-6 .63a64.05 64.05 0 0 1-85.87-24.88a79.93 79.93 0 0 0 70.33-93.87a64 64 0 0 1 41.75 92.48a8 8 0 0 0-.63 6.04"></svg:path>`,
})
export class PhChatsCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsCircleLightIcon],svg[ph-chats-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.93 186.58a78 78 0 0 0-61.77-112.16a78 78 0 1 0-142.09 64.16L18.58 164A14 14 0 0 0 36 181.42l25.46-7.49a78 78 0 0 0 26.39 7.63a78 78 0 0 0 106.77 40.37l25.38 7.49A14 14 0 0 0 237.42 212ZM62 161.5a6 6 0 0 0-1.69.24l-27.77 8.17a2 2 0 0 1-2.48-2.48l8.17-27.77a6.05 6.05 0 0 0-.47-4.53a66 66 0 1 1 27.08 27.08a6 6 0 0 0-2.84-.71m155.71 26.16l8.17 27.77a2 2 0 0 1-2.48 2.48l-27.77-8.17a6.06 6.06 0 0 0-4.53.47a66 66 0 0 1-90-28.4a77.92 77.92 0 0 0 71-94.68a66 66 0 0 1 46.07 96a6.05 6.05 0 0 0-.43 4.53Z"></svg:path>`,
})
export class PhChatsCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsCircleThinIcon],svg[ph-chats-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.79 186.39a76 76 0 0 0-61-110.07a76 76 0 1 0-138.58 62.07L20.5 164.6a12 12 0 0 0 14.9 14.9l26.21-7.71a75.9 75.9 0 0 0 27.6 7.9a76 76 0 0 0 105.18 40.1l26.21 7.71a12 12 0 0 0 14.9-14.9ZM60.9 163.66l-27.76 8.17a4 4 0 0 1-5-5l8.17-27.76a4.07 4.07 0 0 0-.31-3A68 68 0 1 1 63.92 164a4.06 4.06 0 0 0-3.02-.34m165.92 55.16a4 4 0 0 1-4 1l-27.76-8.17a4.07 4.07 0 0 0-3 .31A68 68 0 0 1 98 180a76 76 0 0 0 71.5-95.28a68 68 0 0 1 50.5 99.36a4.07 4.07 0 0 0-.31 3l8.17 27.76a4 4 0 0 1-1.04 3.98"></svg:path>`,
})
export class PhChatsCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsDuotoneIcon],svg[ph-chats-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 96v128l-39.58-32H88a8 8 0 0 1-8-8v-40h88a8 8 0 0 0 8-8V88h40a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 80h-32V48a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v128a8 8 0 0 0 13 6.22L72 154v30a16 16 0 0 0 16 16h93.59L219 230.22a8 8 0 0 0 5 1.78a8 8 0 0 0 8-8V96a16 16 0 0 0-16-16M66.55 137.78L40 159.25V48h128v88H71.58a8 8 0 0 0-5.03 1.78M216 207.25l-26.55-21.47a8 8 0 0 0-5-1.78H88v-32h80a16 16 0 0 0 16-16V96h32Z"></svg:path></svg:g>`,
})
export class PhChatsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsFillIcon],svg[ph-chats-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 96a16 16 0 0 0-16-16h-32V48a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v128a8 8 0 0 0 13 6.22L72 154v30a16 16 0 0 0 16 16h93.59L219 230.22a8 8 0 0 0 5 1.78a8 8 0 0 0 8-8Zm-42.55 89.78a8 8 0 0 0-5-1.78H88v-32h80a16 16 0 0 0 16-16V96h32v111.25Z"></svg:path>`,
})
export class PhChatsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsLightIcon],svg[ph-chats-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 82h-34V48a14 14 0 0 0-14-14H40a14 14 0 0 0-14 14v128a6 6 0 0 0 3.42 5.41A5.86 5.86 0 0 0 32 182a6 6 0 0 0 3.77-1.33L73.71 150H74v34a14 14 0 0 0 14 14h94.29l37.94 30.67A6 6 0 0 0 224 230a5.86 5.86 0 0 0 2.58-.59A6 6 0 0 0 230 224V96a14 14 0 0 0-14-14M71.58 138a6 6 0 0 0-3.77 1.33L38 163.43V48a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v88a2 2 0 0 1-2 2ZM218 211.43l-29.81-24.1a6 6 0 0 0-3.77-1.33H88a2 2 0 0 1-2-2v-34h82a14 14 0 0 0 14-14V94h34a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhChatsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsTeardropIcon],svg[ph-chats-teardrop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M169.57 72.59A80 80 0 0 0 16 104v64a16 16 0 0 0 16 16h54.67A80.15 80.15 0 0 0 160 232h64a16 16 0 0 0 16-16v-64a80 80 0 0 0-70.43-79.41M32 104a64 64 0 1 1 64 64H32Zm192 112h-64a64.14 64.14 0 0 1-55.68-32.43a79.93 79.93 0 0 0 70.38-93.86A64 64 0 0 1 224 152Z"></svg:path>`,
})
export class PhChatsTeardropIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsTeardropBoldIcon],svg[ph-chats-teardrop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.29 68.9A84 84 0 0 0 12 104v64a20 20 0 0 0 20 20h52.1a84.18 84.18 0 0 0 75.9 48h64a20 20 0 0 0 20-20v-64a84 84 0 0 0-71.71-83.1M36 104a60 60 0 1 1 60 60H36Zm184 108h-60a60.14 60.14 0 0 1-49-25.37a83.93 83.93 0 0 0 68.55-91.37A60 60 0 0 1 220 152Z"></svg:path>`,
})
export class PhChatsTeardropBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsTeardropDuotoneIcon],svg[ph-chats-teardrop-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 152v64a8 8 0 0 1-8 8h-64a72 72 0 0 1-67.9-48H96a72 72 0 0 0 72-72a71.8 71.8 0 0 0-4.07-23.88A72 72 0 0 1 232 152" opacity=".2"></svg:path><svg:path d="M169.57 72.59A80 80 0 0 0 16 104v64a16 16 0 0 0 16 16h54.67A80.15 80.15 0 0 0 160 232h64a16 16 0 0 0 16-16v-64a80 80 0 0 0-70.43-79.41M32 104a64 64 0 1 1 64 64H32Zm192 112h-64a64.14 64.14 0 0 1-55.68-32.43a79.93 79.93 0 0 0 70.38-93.86A64 64 0 0 1 224 152Z"></svg:path></svg:g>`,
})
export class PhChatsTeardropDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsTeardropFillIcon],svg[ph-chats-teardrop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M169.57 72.59A80 80 0 0 0 16 104v64a16 16 0 0 0 16 16h54.67A80.15 80.15 0 0 0 160 232h64a16 16 0 0 0 16-16v-64a80 80 0 0 0-70.43-79.41M224 216h-64a64.14 64.14 0 0 1-55.68-32.43a79.93 79.93 0 0 0 70.38-93.86A64 64 0 0 1 224 152Z"></svg:path>`,
})
export class PhChatsTeardropFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsTeardropLightIcon],svg[ph-chats-teardrop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168.16 74.42A78 78 0 0 0 18 104v64a14 14 0 0 0 14 14h56a78.15 78.15 0 0 0 72 48h64a14 14 0 0 0 14-14v-64a78 78 0 0 0-69.84-77.58M30 168v-64a66 66 0 1 1 66 66H32a2 2 0 0 1-2-2m196 48a2 2 0 0 1-2 2h-64a66.13 66.13 0 0 1-58.89-36.19a77.92 77.92 0 0 0 71-94.68A66 66 0 0 1 226 152Z"></svg:path>`,
})
export class PhChatsTeardropLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsTeardropThinIcon],svg[ph-chats-teardrop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166.76 76.32A76 76 0 0 0 20 104v64a12 12 0 0 0 12 12h57.33A76.13 76.13 0 0 0 160 228h64a12 12 0 0 0 12-12v-64a76 76 0 0 0-69.24-75.68M28 168v-64a68 68 0 1 1 68 68H32a4 4 0 0 1-4-4m200 48a4 4 0 0 1-4 4h-64a68.16 68.16 0 0 1-62-40a76 76 0 0 0 71.5-95.33A68 68 0 0 1 228 152Z"></svg:path>`,
})
export class PhChatsTeardropThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChatsThinIcon],svg[ph-chats-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 84h-36V48a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v128a4 4 0 0 0 4 4a4 4 0 0 0 2.51-.89L73 148h3v36a12 12 0 0 0 12 12h95l38.49 31.11a4 4 0 0 0 2.51.89a4 4 0 0 0 4-4V96a12 12 0 0 0-12-12M71.58 140a4 4 0 0 0-2.51.89L36 167.62V48a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v88a4 4 0 0 1-4 4ZM220 215.62l-33.07-26.73a4 4 0 0 0-2.51-.89H88a4 4 0 0 1-4-4v-36h84a12 12 0 0 0 12-12V92h36a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhChatsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckIcon],svg[ph-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 77.66l-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69L218.34 66.34a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCheckIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckBoldIcon],svg[ph-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 80.49l-128 128a12 12 0 0 1-17 0l-56-56a12 12 0 1 1 17-17L96 183L215.51 63.51a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhCheckBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckCircleIcon],svg[ph-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhCheckCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckCircleBoldIcon],svg[ph-check-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176.49 95.51a12 12 0 0 1 0 17l-56 56a12 12 0 0 1-17 0l-24-24a12 12 0 1 1 17-17L112 143l47.51-47.52a12 12 0 0 1 16.98.03M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84"></svg:path>`,
})
export class PhCheckCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckCircleDuotoneIcon],svg[ph-check-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path></svg:g>`,
})
export class PhCheckCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckCircleFillIcon],svg[ph-check-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m45.66 85.66l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCheckCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckCircleLightIcon],svg[ph-check-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.24 99.76a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L112 151.51l51.76-51.75a6 6 0 0 1 8.48 0M230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90"></svg:path>`,
})
export class PhCheckCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckCircleThinIcon],svg[ph-check-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.83 101.17a4 4 0 0 1 0 5.66l-56 56a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L112 154.34l53.17-53.17a4 4 0 0 1 5.66 0M228 128A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92"></svg:path>`,
})
export class PhCheckCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckDuotoneIcon],svg[ph-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m205.66 85.66l-96 96a8 8 0 0 1-11.32 0l-40-40a8 8 0 0 1 11.32-11.32L104 164.69l90.34-90.35a8 8 0 0 1 11.32 11.32"></svg:path></svg:g>`,
})
export class PhCheckDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckFatIcon],svg[ph-check-fat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z"></svg:path>`,
})
export class PhCheckFatIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckFatBoldIcon],svg[ph-check-fat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.15 65.46l-.07-.08l-23.93-23.53a20 20 0 0 0-28.23-.05l-90 88.83l-33.86-32.85a20 20 0 0 0-28.21.08l-24 24a20 20 0 0 0 0 28.26l71.62 72a20 20 0 0 0 28.29 0L246.15 93.74a20 20 0 0 0 0-28.28M103.61 202.33L37.64 136L56 117.61L95.65 156a12 12 0 0 0 16.78-.08L208 61.61l18.32 18Z"></svg:path>`,
})
export class PhCheckFatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckFatDuotoneIcon],svg[ph-check-fat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32" opacity=".2"></svg:path><svg:path d="m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z"></svg:path></svg:g>`,
})
export class PhCheckFatDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckFatFillIcon],svg[ph-check-fat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.31 90.91l-128.4 128.4a16 16 0 0 1-22.62 0l-71.62-72a16 16 0 0 1 0-22.61l20-20a16 16 0 0 1 22.58 0L104 144.22l96.76-95.57a16 16 0 0 1 22.59 0l19.95 19.54a16 16 0 0 1 .01 22.72"></svg:path>`,
})
export class PhCheckFatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckFatLightIcon],svg[ph-check-fat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m241.87 69.66l-24-23.56a14 14 0 0 0-19.77 0L104 139l-38.1-36.9a14 14 0 0 0-19.8 0l-24 24a14 14 0 0 0 0 19.79l71.62 72a14 14 0 0 0 19.8 0L241.91 89.5a14 14 0 0 0-.04-19.84M233.42 81L105 209.41a2 2 0 0 1-2.81 0l-71.62-72a2 2 0 0 1 0-2.82l24-24A2 2 0 0 1 56 110a2.12 2.12 0 0 1 1.5.64l42.35 41.08a6 6 0 0 0 8.39 0l98.37-97.11a2 2 0 0 1 2.87 0l24 23.56a2 2 0 0 1-.06 2.83"></svg:path>`,
})
export class PhCheckFatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckFatThinIcon],svg[ph-check-fat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.47 71.09l-24-23.58a12 12 0 0 0-17 0L104 141.83l-39.5-38.32a12 12 0 0 0-17 0l-24 24a12 12 0 0 0 0 17l71.61 72a12 12 0 0 0 17 0L240.49 88.08a12 12 0 0 0-.02-16.99m-5.63 11.34l-128.41 128.4a4 4 0 0 1-5.65 0l-71.61-72a4 4 0 0 1 0-5.66l24-24A3.94 3.94 0 0 1 56 108a4.1 4.1 0 0 1 2.89 1.21l42.35 41.08a4 4 0 0 0 5.59 0l98.37-97.1a4 4 0 0 1 5.68 0l24 23.58a4 4 0 0 1-.04 5.66"></svg:path>`,
})
export class PhCheckFatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckFillIcon],svg[ph-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-10.34 45.66l-96 96a8 8 0 0 1-11.32 0l-40-40a8 8 0 0 1 11.32-11.32L104 164.69l90.34-90.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCheckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckLightIcon],svg[ph-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 76.24l-128 128a6 6 0 0 1-8.48 0l-56-56a6 6 0 0 1 8.48-8.48L96 191.51L219.76 67.76a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhCheckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareIcon],svg[ph-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 160V48H48v160z"></svg:path>`,
})
export class PhCheckSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareBoldIcon],svg[ph-check-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M79.51 144.49a12 12 0 1 1 17-17L112 143l47.51-47.52a12 12 0 0 1 17 17l-56 56a12 12 0 0 1-17 0ZM228 48v160a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20m-24 4H52v152h152Z"></svg:path>`,
})
export class PhCheckSquareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareDuotoneIcon],svg[ph-check-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 160V48H48v160z"></svg:path></svg:g>`,
})
export class PhCheckSquareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareFillIcon],svg[ph-check-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-34.34 77.66l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCheckSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareLightIcon],svg[ph-check-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.24 99.76a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L112 151.51l51.76-51.75a6 6 0 0 1 8.48 0M222 48v160a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2h160a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhCheckSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareOffsetIcon],svg[ph-check-square-offset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48v160a16 16 0 0 1-16 16h-72a8 8 0 0 1 0-16h72V48H48v96a8 8 0 0 1-16 0V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-98.34 106.34a8 8 0 0 0-11.32 0L64 204.69l-18.34-18.35a8 8 0 0 0-11.32 11.32l24 24a8 8 0 0 0 11.32 0l56-56a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhCheckSquareOffsetIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareOffsetBoldIcon],svg[ph-check-square-offset-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 48v160a20 20 0 0 1-20 20h-68a12 12 0 0 1 0-24h64V52H52v88a12 12 0 0 1-24 0V48a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20m-99.51 103.51a12 12 0 0 0-17 0L64 199l-15.51-15.49a12 12 0 1 0-17 17l24 24a12 12 0 0 0 17 0l56-56a12 12 0 0 0 0-17"></svg:path>`,
})
export class PhCheckSquareOffsetBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareOffsetDuotoneIcon],svg[ph-check-square-offset-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H64l-24-24V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M224 48v160a16 16 0 0 1-16 16h-72a8 8 0 0 1 0-16h72V48H48v96a8 8 0 0 1-16 0V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-98.34 106.34a8 8 0 0 0-11.32 0L64 204.69l-18.34-18.35a8 8 0 0 0-11.32 11.32l24 24a8 8 0 0 0 11.32 0l56-56a8 8 0 0 0 0-11.32"></svg:path></svg:g>`,
})
export class PhCheckSquareOffsetDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareOffsetFillIcon],svg[ph-check-square-offset-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 200a8 8 0 0 1-5.66-2.34l-16-16a8 8 0 0 1 11.32-11.32L80 180.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-40 40A8 8 0 0 1 80 200m120-8a8 8 0 0 1-8 8h-56a8 8 0 0 1 0-16h48V72H72v64a8 8 0 0 1-16 0V64a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhCheckSquareOffsetFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareOffsetLightIcon],svg[ph-check-square-offset-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 48v160a14 14 0 0 1-14 14h-72a6 6 0 0 1 0-12h72a2 2 0 0 0 2-2V48a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v96a6 6 0 0 1-12 0V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14M115.76 155.76L64 207.51l-19.76-19.75a6 6 0 0 0-8.48 8.48l24 24a6 6 0 0 0 8.48 0l56-56a6 6 0 0 0-8.48-8.48"></svg:path>`,
})
export class PhCheckSquareOffsetLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareOffsetThinIcon],svg[ph-check-square-offset-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 48v160a12 12 0 0 1-12 12h-72a4 4 0 0 1 0-8h72a4 4 0 0 0 4-4V48a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v96a4 4 0 0 1-8 0V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12M117.17 157.17L64 210.34l-21.17-21.17a4 4 0 0 0-5.66 5.66l24 24a4 4 0 0 0 5.66 0l56-56a4 4 0 0 0-5.66-5.66"></svg:path>`,
})
export class PhCheckSquareOffsetThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareThinIcon],svg[ph-check-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.83 101.17a4 4 0 0 1 0 5.66l-56 56a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L112 154.34l53.17-53.17a4 4 0 0 1 5.66 0M220 48v160a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhCheckSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckThinIcon],svg[ph-check-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 74.83l-128 128a4 4 0 0 1-5.66 0l-56-56a4 4 0 0 1 5.66-5.66L96 194.34L221.17 69.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhCheckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckerboardIcon],svg[ph-checkerboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-12.69 88L136 60.69V48h12.69L208 107.32V120ZM136 83.31L172.69 120H136Zm72 1.38L171.31 48H208ZM120 48v72H48V48Zm-12.69 160L48 148.69V136h12.69L120 195.31V208ZM120 172.69L83.31 136H120Zm-72-1.38L84.69 208H48ZM208 208h-72v-72h72z"></svg:path>`,
})
export class PhCheckerboardIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckerboardBoldIcon],svg[ph-checkerboard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 48a20 20 0 0 0-20-20H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20Zm-35 68l-53-53V52h11l53 53v11Zm-53-19l19 19h-19Zm64-26l-19-19h19Zm-88-19v64H52V52Zm-11 152l-53-53v-11h11l53 53v11Zm11-45l-19-19h19Zm-64 26l19 19H52Zm88 19v-64h64v64Z"></svg:path>`,
})
export class PhCheckerboardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckerboardDuotoneIcon],svg[ph-checkerboard-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M40 128h88v88H48a8 8 0 0 1-8-8Zm168-88h-80v88h88V48a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 88h-72V48h72Zm-88-72v72H48V48Zm-72 88h72v72H48Zm160 72h-72v-72h72z"></svg:path></svg:g>`,
})
export class PhCheckerboardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckerboardFillIcon],svg[ph-checkerboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-80v-80H48V48h80v80h80z"></svg:path>`,
})
export class PhCheckerboardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckerboardLightIcon],svg[ph-checkerboard-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m-13.52 88L134 61.52V46h15.52L210 106.48V122ZM134 78.48L177.52 122H134ZM210 48v41.52L166.48 46H208a2 2 0 0 1 2 2M48 46h74v76H46V48a2 2 0 0 1 2-2m58.48 164L46 149.52V134h15.52L122 194.48V210ZM122 177.52L78.48 134H122ZM46 208v-41.52L89.52 210H48a2 2 0 0 1-2-2m162 2h-74v-76h76v74a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhCheckerboardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheckerboardThinIcon],svg[ph-checkerboard-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m-14.34 88L132 62.34V44h18.34L212 105.66V124ZM132 73.66L182.34 124H132ZM212 48v46.34L161.66 44H208a4 4 0 0 1 4 4M48 44h76v80H44V48a4 4 0 0 1 4-4m57.66 168L44 150.34V132h18.34L124 193.66V212ZM124 182.34L73.66 132H124ZM44 208v-46.34L94.34 212H48a4 4 0 0 1-4-4m164 4h-76v-80h80v76a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhCheckerboardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChecksIcon],svg[ph-checks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m149.61 85.71l-89.6 88a8 8 0 0 1-11.22 0L10.39 136a8 8 0 1 1 11.22-11.41l32.79 32.2l84-82.5a8 8 0 1 1 11.22 11.42Zm96.1-11.32a8 8 0 0 0-11.32-.1l-84 82.5l-18.83-18.5a8 8 0 0 0-11.21 11.42l24.43 24a8 8 0 0 0 11.22 0l89.6-88a8 8 0 0 0 .11-11.32"></svg:path>`,
})
export class PhChecksIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChecksBoldIcon],svg[ph-checks-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m152.41 88.56l-89.6 88a12 12 0 0 1-16.82 0l-38.4-37.71a12 12 0 0 1 16.82-17.13l30 29.46l81.19-79.74a12 12 0 0 1 16.82 17.12Zm96.15-17a12 12 0 0 0-17-.15l-81.16 79.77l-7.88-7.74a12 12 0 0 0-16.82 17.12l16.29 16a12 12 0 0 0 16.82 0l89.6-88a12 12 0 0 0 .15-16.97Z"></svg:path>`,
})
export class PhChecksBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChecksDuotoneIcon],svg[ph-checks-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 64v128a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m149.61 85.71l-89.6 88a8 8 0 0 1-11.22 0L10.39 136a8 8 0 1 1 11.22-11.41l32.79 32.2l84-82.5a8 8 0 1 1 11.22 11.42Zm96.1-11.32a8 8 0 0 0-11.32-.1l-84 82.5l-18.83-18.5a8 8 0 0 0-11.21 11.42l24.43 24a8 8 0 0 0 11.22 0l89.6-88a8 8 0 0 0 .11-11.32"></svg:path></svg:g>`,
})
export class PhChecksDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChecksFillIcon],svg[ph-checks-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M72 168a8 8 0 0 1-5.66-2.34l-24-24a8 8 0 0 1 11.32-11.32L72 148.69l58.34-58.35a8 8 0 0 1 11.32 11.32l-64 64A8 8 0 0 1 72 168m141.66-66.34l-64 64a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L144 148.69l58.34-58.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhChecksFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChecksLightIcon],svg[ph-checks-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m148.2 84.28l-89.6 88a6 6 0 0 1-8.4 0l-38.4-37.71a6 6 0 1 1 8.4-8.57l34.2 33.58l85.4-83.87a6 6 0 1 1 8.4 8.56Zm96.08-8.48a6 6 0 0 0-8.48-.08l-85.4 83.87l-20.23-19.87a6 6 0 1 0-8.41 8.56l24.44 24a6 6 0 0 0 8.4 0l89.6-88a6 6 0 0 0 .08-8.48"></svg:path>`,
})
export class PhChecksLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChecksThinIcon],svg[ph-checks-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m146.8 82.85l-89.6 88a4 4 0 0 1-5.6 0l-38.4-37.71a4 4 0 0 1 5.6-5.71l35.6 35l86.8-85.24a4 4 0 0 1 5.6 5.7Zm96-5.65a4 4 0 0 0-5.65 0l-86.8 85.24l-21.63-21.24a4 4 0 1 0-5.61 5.7l24.44 24a4 4 0 0 0 5.6 0l89.6-88a4 4 0 0 0 .1-5.7Z"></svg:path>`,
})
export class PhChecksThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheersIcon],svg[ph-cheers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.93 213.94l-17.65 4.73l-10.42-38.89a40.06 40.06 0 0 0 20.77-46.14c-12.6-47-38.78-88.22-39.89-89.95a8 8 0 0 0-8.68-3.45l-21.86 5.47c0-8.25-.18-13.43-.21-14.08a8 8 0 0 0-6.05-7.39l-32-8a8 8 0 0 0-8.68 3.45c-1.11 1.73-27.29 42.93-39.89 90a40.06 40.06 0 0 0 20.77 46.14l-10.42 38.84l-17.65-4.73a8 8 0 0 0-4.14 15.46l48 12.86a8.2 8.2 0 0 0 2.07.27a8 8 0 0 0 2.07-15.73l-14.9-4l10.42-38.89c.81.05 1.61.08 2.41.08a40.12 40.12 0 0 0 37-24.88c1.18 6.37 2.6 12.82 4.31 19.22A40.08 40.08 0 0 0 168 184c.8 0 1.6 0 2.41-.08l10.42 38.89l-14.9 4a8 8 0 0 0 2.07 15.72a8.2 8.2 0 0 0 2.07-.27l48-12.86a8 8 0 0 0-4.14-15.46M156.22 57.19c2.78 4.7 7.23 12.54 12.2 22.46L136 87.77c-.42-10-.38-18.25-.25-23.79c0-.56.05-1.12.08-1.68Zm-56.44-24l20.37 5.09c.06 4.28 0 10.67-.21 18.47c-.06 1.21-.16 3.19-.23 5.84c0 1-.1 2-.16 3l-32.86-8.16C92 46.67 96.84 38.16 99.78 33.19m11.39 93.09a24 24 0 0 1-46.34-12.5a291 291 0 0 1 15-41.59l38.58 9.64a314 314 0 0 1-7.24 44.45m33.64 23.92A274 274 0 0 1 137 104l38.41-9.6a293 293 0 0 1 15.75 43.39a24 24 0 1 1-46.36 12.42Zm40-106.62a8 8 0 0 1 3.58-10.74l16-8a8 8 0 1 1 7.16 14.32l-16 8a8 8 0 0 1-10.74-3.58M232 72a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8M32.84 20.42a8 8 0 0 1 10.74-3.58l16 8a8 8 0 0 1-7.16 14.32l-16-8a8 8 0 0 1-3.58-10.74M40 72H24a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhCheersIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheersBoldIcon],svg[ph-cheers-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.89 210.08l-13.78 3.69l-8.57-32a44.07 44.07 0 0 0 20-49.17c-12.81-47.6-39.31-89.32-40.43-91.07a12 12 0 0 0-13-5.17l-16.9 4.22c0-5.34-.18-8.63-.2-9.13a12 12 0 0 0-9.08-11.09l-32-8a12 12 0 0 0-13 5.17C84.77 19.28 58.27 61 45.51 108.6a44.07 44.07 0 0 0 19.95 49.17l-8.57 32l-13.78-3.69a12 12 0 0 0-6.22 23.18l48 12.86a12 12 0 0 0 6.22-23.18l-11-3l8.57-32a44.21 44.21 0 0 0 34.62-17.65q1 4.53 2.23 9A44.06 44.06 0 0 0 167.36 188l8.57 32l-11 3a12 12 0 0 0 6.22 23.18l48-12.86a12 12 0 1 0-6.22-23.18ZM162.59 77l-22.82 5.71c-.21-6.92-.19-12.83-.1-17.24l14.62-3.65c2.21 3.79 5.09 8.97 8.3 15.18m-60.87-39.2l14.46 3.61c0 4 0 9.25-.24 15.34c0 .92-.11 2.2-.17 3.82l-23.26-5.81a388 388 0 0 1 9.21-16.96M82.83 139.31a20 20 0 0 1-14.14-24.49a281 281 0 0 1 13.4-37.93l31.94 8a304 304 0 0 1-6.73 40.4a20 20 0 0 1-24.47 14.02m65.84 9.86a265 265 0 0 1-7.36-42.17l31.82-8a283 283 0 0 1 14.18 39.73a20 20 0 0 1-38.64 10.35Zm36-109.38a12 12 0 0 1 7.59-15.17l12-4a12 12 0 0 1 7.58 22.76l-12 4a12 12 0 0 1-15.17-7.59M236 72a12 12 0 0 1-12 12h-12a12 12 0 0 1 0-24h12a12 12 0 0 1 12 12M28.62 20.21a12 12 0 0 1 15.17-7.59l12 4a12 12 0 1 1-7.58 22.76l-12-4a12 12 0 0 1-7.59-15.17M36 76H24a12 12 0 0 1 0-24h12a12 12 0 0 1 0 24"></svg:path>`,
})
export class PhCheersBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheersDuotoneIcon],svg[ph-cheers-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m75.23 62.81l51.69 12.92a332 332 0 0 1-8 52.54a32 32 0 1 1-61.82-16.56a307.7 307.7 0 0 1 18.13-48.9m123.67 72.9a311 311 0 0 0-19-50.69l-51.41 12.86c1.13 16.36 3.57 35.67 8.59 54.39a32 32 0 1 0 61.82-16.56" opacity=".2"></svg:path><svg:path d="m213.93 213.94l-17.65 4.73l-10.42-38.89a40.06 40.06 0 0 0 20.77-46.14c-12.6-47-38.78-88.22-39.89-89.95a8 8 0 0 0-8.68-3.45l-21.86 5.47c0-8.25-.18-13.43-.21-14.08a8 8 0 0 0-6.05-7.39l-32-8a8 8 0 0 0-8.68 3.45c-1.11 1.73-27.29 42.93-39.89 90a40.06 40.06 0 0 0 20.77 46.14l-10.42 38.84l-17.65-4.73a8 8 0 0 0-4.14 15.46l48 12.86a8.2 8.2 0 0 0 2.07.27a8 8 0 0 0 2.07-15.73l-14.9-4l10.42-38.89c.81.05 1.61.08 2.41.08a40.12 40.12 0 0 0 37-24.88c1.18 6.37 2.6 12.82 4.31 19.22A40.08 40.08 0 0 0 168 184c.8 0 1.6 0 2.41-.08l10.42 38.89l-14.9 4a8 8 0 0 0 2.07 15.72a8.2 8.2 0 0 0 2.07-.27l48-12.86a8 8 0 0 0-4.14-15.46M156.22 57.19c2.78 4.7 7.23 12.54 12.2 22.46L136 87.77c-.42-10-.38-18.25-.25-23.79c0-.56.05-1.12.08-1.68Zm-56.44-24l20.37 5.09c.06 4.28 0 10.67-.21 18.47c-.06 1.21-.16 3.19-.23 5.84c0 1-.1 2-.16 3l-32.86-8.16C92 46.67 96.84 38.16 99.78 33.19m11.39 93.09a24 24 0 0 1-46.34-12.5a291 291 0 0 1 15-41.59l38.58 9.64a314 314 0 0 1-7.24 44.45m33.64 23.92A274 274 0 0 1 137 104l38.41-9.6a293 293 0 0 1 15.75 43.39a24 24 0 1 1-46.36 12.42Zm40-106.62a8 8 0 0 1 3.58-10.74l16-8a8 8 0 1 1 7.16 14.32l-16 8a8 8 0 0 1-10.74-3.58M232 72a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8M32.84 20.42a8 8 0 0 1 10.74-3.58l16 8a8 8 0 0 1-7.16 14.32l-16-8a8 8 0 0 1-3.58-10.74M40 72H24a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16"></svg:path></svg:g>`,
})
export class PhCheersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheersFillIcon],svg[ph-cheers-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.93 213.94l-17.65 4.73l-10.42-38.89a40.06 40.06 0 0 0 20.77-46.14c-12.6-47-38.78-88.22-39.89-89.95a8 8 0 0 0-8.68-3.45l-21.86 5.47c0-8.25-.18-13.43-.21-14.08a8 8 0 0 0-6.05-7.39l-32-8a8 8 0 0 0-8.68 3.45c-1.11 1.73-27.29 42.93-39.89 90a40.06 40.06 0 0 0 20.77 46.14l-10.42 38.84l-17.65-4.73a8 8 0 0 0-4.14 15.46l48 12.86a8.2 8.2 0 0 0 2.07.27a8 8 0 0 0 2.07-15.73l-14.9-4l10.42-38.89c.81.05 1.61.08 2.41.08a40.12 40.12 0 0 0 37-24.88c1.18 6.37 2.6 12.82 4.31 19.22A40.08 40.08 0 0 0 168 184c.8 0 1.6 0 2.41-.08l10.42 38.89l-14.9 4a8 8 0 0 0 2.07 15.72a8.2 8.2 0 0 0 2.07-.27l48-12.86a8 8 0 0 0-4.14-15.46M156.22 57.19c2.78 4.7 7.23 12.54 12.2 22.46L136 87.77c-.42-10-.38-18.25-.25-23.79c0-.56.05-1.12.08-1.68Zm-56.44-24l20.37 5.09c.06 4.28 0 10.67-.21 18.47c-.06 1.21-.16 3.19-.23 5.84c0 1-.1 2-.16 3l-32.86-8.16C92 46.67 96.84 38.16 99.78 33.19m85.06 10.39a8 8 0 0 1 3.58-10.74l16-8a8 8 0 1 1 7.16 14.32l-16 8a8 8 0 0 1-10.74-3.58M232 72a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8M32.84 20.42a8 8 0 0 1 10.74-3.58l16 8a8 8 0 0 1-7.16 14.32l-16-8a8 8 0 0 1-3.58-10.74M40 72H24a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhCheersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheersLightIcon],svg[ph-cheers-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m214.45 215.87l-19.58 5.25l-11.37-42.44a38.06 38.06 0 0 0 21.2-44.52c-12.52-46.73-38.55-87.68-39.65-89.4a6 6 0 0 0-6.51-2.58l-24.36 6.09c.11-9.67-.15-15.84-.19-16.55a6 6 0 0 0-4.53-5.54l-32-8A6 6 0 0 0 91 20.76c-1.1 1.72-27.13 42.67-39.65 89.4a38.06 38.06 0 0 0 21.2 44.52l-11.42 42.44l-19.58-5.25a6 6 0 1 0-3.1 11.59l48 12.87a6.4 6.4 0 0 0 1.55.2a6 6 0 0 0 1.55-11.8l-16.83-4.51l11.38-42.45a36 36 0 0 0 3.9.23a38.08 38.08 0 0 0 36.71-28.17v-.13c.28-1.15.55-2.29.81-3.44a262 262 0 0 0 5.73 27.57A38.06 38.06 0 0 0 168 182a37 37 0 0 0 3.9-.23l11.38 42.45l-16.83 4.51a6 6 0 0 0 1.55 11.8a6.4 6.4 0 0 0 1.55-.2l48-12.87a6 6 0 1 0-3.1-11.59m-57.27-161C160.06 59.7 165.39 69 171.32 81l-37.25 9.3c-.55-11.07-.51-20.31-.37-26.33c.05-1.1.1-2.19.14-3.25Zm-58.36-24l23.31 5.83c.07 4.25.11 11.32-.19 20.2c-.07 1.18-.16 3.09-.23 5.62c-.09 1.82-.19 3.7-.3 5.63l-37.6-9.4c6.27-12.86 11.99-22.82 15.01-27.86Zm14.29 95.89a26 26 0 0 1-50.22-13.52a295.4 295.4 0 0 1 15.75-43.4l41.86 10.47a318 318 0 0 1-7.39 46.47Zm29.77 23.94a279 279 0 0 1-8-48.25l41.68-10.42a298 298 0 0 1 16.56 45.21a26 26 0 1 1-50.23 13.46Zm43.75-108a6 6 0 0 1 2.69-8l16-8a6 6 0 1 1 5.36 10.74l-16 8a6 6 0 0 1-8.05-2.69ZM230 72a6 6 0 0 1-6 6h-16a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6M34.63 21.32a6 6 0 0 1 8-2.69l16 8a6 6 0 0 1-5.36 10.74l-16-8a6 6 0 0 1-2.64-8.05M40 70H24a6 6 0 0 1 0-12h16a6 6 0 0 1 0 12"></svg:path>`,
})
export class PhCheersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheersThinIcon],svg[ph-cheers-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m215 217.8l-21.5 5.77l-12.35-46.06a36.06 36.06 0 0 0 21.66-42.84c-12.45-46.43-38.31-87.12-39.4-88.83a4 4 0 0 0-4.41-1.72l-26.94 6.73c.23-11.53-.09-18.84-.09-19a4 4 0 0 0-3-3.7l-32-8a4 4 0 0 0-4.34 1.72c-1.09 1.71-26.95 42.4-39.4 88.83a36.06 36.06 0 0 0 21.66 42.84l-12.35 46.03L41 193.8a4 4 0 0 0-2 7.73l48 12.86a3.8 3.8 0 0 0 1 .14a4 4 0 0 0 1-7.86l-18.77-5l12.35-46.07a35.8 35.8 0 0 0 40.18-26.34c1.2-4.92 2.25-9.87 3.17-14.81a275 275 0 0 0 7.25 38.89A36.06 36.06 0 0 0 168 180a35 35 0 0 0 5.38-.43l12.35 46.07l-18.77 5a4 4 0 0 0 1 7.86a3.8 3.8 0 0 0 1-.14l48-12.86a4 4 0 0 0-1.96-7.7M158.13 52.59c2.79 4.6 9.11 15.4 16.07 29.74l-42 10.5c-.81-14.58-.61-26.31-.4-32.28v-1.39Zm-60.26-24l26.23 6.56c.09 4 .17 11.77-.17 21.87c-.06 1.18-.15 3.09-.22 5.63s-.27 5.26-.45 8L80.94 60.11C88.24 44.88 95 33.38 97.87 28.59M80.76 147A28 28 0 0 1 61 112.75A300 300 0 0 1 77.5 67.5l45.14 11.28a320 320 0 0 1-7.59 48.46A28 28 0 0 1 80.76 147m60.19 4.2a283 283 0 0 1-8.2-50.3l44.93-11.2A302.4 302.4 0 0 1 195 136.75a28 28 0 0 1-54 14.49Zm47.47-109.41a4 4 0 0 1 1.79-5.37l16-8a4 4 0 1 1 3.58 7.16l-16 8a4 4 0 0 1-5.37-1.79M228 72a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4M36.42 22.21a4 4 0 0 1 5.37-1.79l16 8a4 4 0 0 1-3.58 7.16l-16-8a4 4 0 0 1-1.79-5.37M40 68H24a4 4 0 0 1 0-8h16a4 4 0 0 1 0 8"></svg:path>`,
})
export class PhCheersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheeseIcon],svg[ph-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 32a7.8 7.8 0 0 0-2.3.34l-160 48A8 8 0 0 0 16 88v24a8 8 0 0 0 8 8h8a16.08 16.08 0 0 1 16 15.69A15.6 15.6 0 0 1 43.42 147a16.87 16.87 0 0 1-12 5.05H24a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h200a16 16 0 0 0 16-16V88a56.06 56.06 0 0 0-56-56m1.12 16a40.06 40.06 0 0 1 38.07 32H78.51Zm6.88 56a24 24 0 1 1-46.62-8h45.24a23.9 23.9 0 0 1 1.38 8M88 184a24 24 0 0 1 48 0Zm136 0h-72a40 40 0 0 0-80 0H32v-16a33 33 0 0 0 22.84-9.85A31.4 31.4 0 0 0 64 135.38A32.15 32.15 0 0 0 32 104v-8h96.81a40 40 0 1 0 78.38 0H224Z"></svg:path>`,
})
export class PhCheeseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheeseBoldIcon],svg[ph-cheese-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 28a11.9 11.9 0 0 0-3.45.51l-160 48A12 12 0 0 0 12 88v24a12 12 0 0 0 12 12h8a12.07 12.07 0 0 1 12 11.76a11.6 11.6 0 0 1-3.43 8.38a12.88 12.88 0 0 1-9.11 3.86H24a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h200a20 20 0 0 0 20-20V88a60.07 60.07 0 0 0-60-60m1.64 24a36.06 36.06 0 0 1 32.3 24H105.76ZM152 100h32v4a16 16 0 0 1-32 0Zm-56 80a16 16 0 0 1 32 0Zm124 0h-68a40 40 0 0 0-80 0H36v-8.29A37.1 37.1 0 0 0 57.7 161A35.4 35.4 0 0 0 68 135.31a36.21 36.21 0 0 0-32-35.09V100h92v4a40 40 0 0 0 80 0v-4h12Z"></svg:path>`,
})
export class PhCheeseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheeseDuotoneIcon],svg[ph-cheese-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 40L24 88v24h8a24 24 0 0 1 24 23.54C56.25 149 44.91 160 31.46 160H24v32h56v-8a32 32 0 0 1 64 0v8h80a8 8 0 0 0 8-8V88a48 48 0 0 0-48-48m-16 96a32 32 0 0 1-27.72-48h55.44A32 32 0 0 1 168 136" opacity=".2"></svg:path><svg:path d="M184 32a7.8 7.8 0 0 0-2.3.34l-160 48A8 8 0 0 0 16 88v24a8 8 0 0 0 8 8h8a16.08 16.08 0 0 1 16 15.69A15.6 15.6 0 0 1 43.42 147a16.87 16.87 0 0 1-12 5.05H24a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h200a16 16 0 0 0 16-16V88a56.06 56.06 0 0 0-56-56m1.12 16a40.06 40.06 0 0 1 38.07 32H78.51Zm6.88 56a24 24 0 1 1-46.62-8h45.24a23.9 23.9 0 0 1 1.38 8M88 184a24 24 0 0 1 48 0Zm136 0h-72a40 40 0 0 0-80 0H32v-16a33 33 0 0 0 22.84-9.85A31.4 31.4 0 0 0 64 135.38A32.15 32.15 0 0 0 32 104v-8h96.81a40 40 0 1 0 78.38 0H224Z"></svg:path></svg:g>`,
})
export class PhCheeseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheeseFillIcon],svg[ph-cheese-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 32a7.8 7.8 0 0 0-2.3.34l-160 48A8 8 0 0 0 16 88v16a8 8 0 0 0 8 8h7.46c13.45 0 24.79 11 24.54 24.46A24 24 0 0 1 32 160h-8a8 8 0 0 0-8 8v24a8 8 0 0 0 8 8h200a16 16 0 0 0 16-16V88a56.06 56.06 0 0 0-56-56M80 184a32 32 0 0 1 64 0Zm88-48a32 32 0 0 1-31-40h62a32 32 0 0 1-31 40M78.51 80l106.61-32a40.06 40.06 0 0 1 38.07 32Z"></svg:path>`,
})
export class PhCheeseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheeseLightIcon],svg[ph-cheese-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 34a6 6 0 0 0-1.72.25l-160 48A6 6 0 0 0 18 88v24a6 6 0 0 0 6 6h8a18.09 18.09 0 0 1 18 17.65a17.6 17.6 0 0 1-5.15 12.7A18.9 18.9 0 0 1 31.46 154H24a6 6 0 0 0-6 6v32a6 6 0 0 0 6 6h200a14 14 0 0 0 14-14V88a54.06 54.06 0 0 0-54-54m.85 12a42.07 42.07 0 0 1 40.72 36H64.88Zm9.15 58a26 26 0 1 1-50-10h48a25.9 25.9 0 0 1 2 10m-56 82H86v-2a26 26 0 0 1 52 0Zm88-2a2 2 0 0 1-2 2h-74v-2a38 38 0 0 0-76 0v2H30v-20h1.46a31 31 0 0 0 22-9.25A29.45 29.45 0 0 0 62 135.42A30.14 30.14 0 0 0 32 106h-2V94h101.34a38 38 0 1 0 73.32 0H226Z"></svg:path>`,
})
export class PhCheeseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCheeseThinIcon],svg[ph-cheese-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 36a4 4 0 0 0-1.15.17l-160 48A4 4 0 0 0 20 88v24a4 4 0 0 0 4 4h8a20.11 20.11 0 0 1 20 19.61a19.6 19.6 0 0 1-5.72 14.14A20.92 20.92 0 0 1 31.46 156H24a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h200a12 12 0 0 0 12-12V88a52.06 52.06 0 0 0-52-52m.57 8a44.06 44.06 0 0 1 43.24 40H51.25ZM196 104a28 28 0 1 1-53.29-12h50.58a28 28 0 0 1 2.71 12m-56 84H84v-4a28 28 0 0 1 56 0Zm88-4a4 4 0 0 1-4 4h-76v-4a36 36 0 0 0-72 0v4H28v-24h3.46A29 29 0 0 0 52 155.35a27.52 27.52 0 0 0 8-19.89A28.14 28.14 0 0 0 32 108h-4V92h106.07a36 36 0 1 0 67.86 0H228Z"></svg:path>`,
})
export class PhCheeseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChefHatIcon],svg[ph-chef-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 112a56.06 56.06 0 0 0-56-56c-1.77 0-3.54.1-5.29.26a56 56 0 0 0-101.42 0C75.54 56.1 73.77 56 72 56a56 56 0 0 0-24 106.59V208a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-45.41A56.09 56.09 0 0 0 240 112m-48 96H64v-40.58a55.5 55.5 0 0 0 8 .58h112a55.5 55.5 0 0 0 8-.58Zm-8-56h-13.75l5.51-22.06a8 8 0 0 0-15.52-3.88L153.75 152H136v-24a8 8 0 0 0-16 0v24h-17.75l-6.49-25.94a8 8 0 1 0-15.52 3.88L85.75 152H72a40 40 0 0 1 0-80h.58a55 55 0 0 0-.58 8a8 8 0 0 0 16 0a40 40 0 0 1 80 0a8 8 0 0 0 16 0a55 55 0 0 0-.58-8h.58a40 40 0 0 1 0 80"></svg:path>`,
})
export class PhChefHatIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChefHatBoldIcon],svg[ph-chef-hat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 112a60.07 60.07 0 0 0-60-60c-1 0-1.95 0-2.92.08a60 60 0 0 0-106.16 0C74 52 73 52 72 52a60 60 0 0 0-28 113v43a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20v-43a60 60 0 0 0 32-53m-56 92H68v-32.15c1.32.09 2.65.15 4 .15h112c1.35 0 2.68-.06 4-.15Zm-4-56h-8.63l4.27-17.09a12 12 0 0 0-23.28-5.82L150.63 148H140v-20a12 12 0 0 0-24 0v20h-10.63l-5.73-22.91a12 12 0 1 0-23.28 5.82L80.63 148H72a36 36 0 0 1-3.87-71.79C68.05 77.47 68 78.73 68 80a12 12 0 0 0 24 0a36 36 0 0 1 72 0a12 12 0 0 0 24 0c0-1.27-.05-2.53-.13-3.79A36 36 0 0 1 184 148"></svg:path>`,
})
export class PhChefHatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChefHatDuotoneIcon],svg[ph-chef-hat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 112a48 48 0 0 1-48 48H72a48 48 0 1 1 10.35-94.88a48 48 0 0 1 91.28 0A48 48 0 0 1 232 112" opacity=".2"></svg:path><svg:path d="M240 112a56.06 56.06 0 0 0-56-56c-1.77 0-3.54.1-5.29.26a56 56 0 0 0-101.42 0C75.54 56.1 73.77 56 72 56a56 56 0 0 0-24 106.59V208a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-45.41A56.09 56.09 0 0 0 240 112m-48 96H64v-40.58a55.5 55.5 0 0 0 8 .58h112a55.5 55.5 0 0 0 8-.58Zm-8-56h-13.75l5.51-22.06a8 8 0 0 0-15.52-3.88L153.75 152H136v-24a8 8 0 0 0-16 0v24h-17.75l-6.49-25.94a8 8 0 1 0-15.52 3.88L85.75 152H72a40 40 0 0 1 0-80h.58a55 55 0 0 0-.58 8a8 8 0 0 0 16 0a40 40 0 0 1 80 0a8 8 0 0 0 16 0a55 55 0 0 0-.58-8h.58a40 40 0 0 1 0 80"></svg:path></svg:g>`,
})
export class PhChefHatDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChefHatFillIcon],svg[ph-chef-hat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 112a56.06 56.06 0 0 0-56-56c-1.77 0-3.54.1-5.29.26a56 56 0 0 0-101.42 0C75.54 56.1 73.77 56 72 56a56 56 0 0 0-24 106.59V208a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-45.41A56.09 56.09 0 0 0 240 112m-87.76 30.06l8-32a8 8 0 0 1 15.52 3.88l-8 32A8 8 0 0 1 160 152a8 8 0 0 1-1.95-.24a8 8 0 0 1-5.81-9.7M120 112a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0Zm-33.94-7.76a8 8 0 0 1 9.7 5.82l8 32a8 8 0 0 1-5.82 9.7a8 8 0 0 1-2 .24a8 8 0 0 1-7.75-6.06l-8-32a8 8 0 0 1 5.87-9.7M192 208H64v-40.58a55.5 55.5 0 0 0 8 .58h112a55.5 55.5 0 0 0 8-.58Z"></svg:path>`,
})
export class PhChefHatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChefHatLightIcon],svg[ph-chef-hat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 112a54.06 54.06 0 0 0-54-54a55 55 0 0 0-6.52.4a54 54 0 0 0-99 0A55 55 0 0 0 72 58a54 54 0 0 0-22 103.3V208a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14v-46.7a54.07 54.07 0 0 0 32-49.3m-44 96a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2v-42.94a54 54 0 0 0 10 .94h112a54 54 0 0 0 10-.94Zm-10-54h-16.31l6.13-24.54a6 6 0 1 0-11.64-2.92L155.31 154H134v-26a6 6 0 0 0-12 0v26h-21.31l-6.87-27.46a6 6 0 0 0-11.64 2.92L88.31 154H72a42 42 0 0 1 0-84c1 0 2 0 2.92.11A54.6 54.6 0 0 0 74 80a6 6 0 0 0 12 0a42 42 0 0 1 84 0a6 6 0 0 0 12 0a54.6 54.6 0 0 0-.92-9.89c1-.06 1.94-.11 2.92-.11a42 42 0 0 1 0 84"></svg:path>`,
})
export class PhChefHatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChefHatThinIcon],svg[ph-chef-hat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 112a52.06 52.06 0 0 0-52-52a53 53 0 0 0-7.77.59a52 52 0 0 0-96.46 0A53 53 0 0 0 72 60a52 52 0 0 0-20 100v48a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-48a52.07 52.07 0 0 0 32-48m-40 96a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4v-45.41A52 52 0 0 0 72 164h112a52 52 0 0 0 12-1.41Zm-12-52h-18.88l6.76-27a4 4 0 0 0-7.76-1.94l-7.24 29H132V128a4 4 0 0 0-8 0v28H99.12l-7.24-29a4 4 0 1 0-7.76 2l6.76 27H72a44 44 0 0 1 0-88a45 45 0 0 1 5.34.33A51.7 51.7 0 0 0 76 80a4 4 0 0 0 8 0a44 44 0 0 1 88 0a4 4 0 0 0 8 0a51.7 51.7 0 0 0-1.34-11.67A45 45 0 0 1 184 68a44 44 0 0 1 0 88"></svg:path>`,
})
export class PhChefHatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCherriesIcon],svg[ph-cherries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 72a72 72 0 0 0-7.76.43a91.8 91.8 0 0 0-21.62-25.11c-37.84-30.53-89.57-23.55-91.75-23.24a8 8 0 0 0-3.31 14.58c17.5 11.66 25.51 31 28.85 49.74A72 72 0 1 0 142 207.5A72 72 0 1 0 176 72M76 39.37c16.67.72 41.24 4.78 60.64 20.48a75.3 75.3 0 0 1 15 16.4A72.2 72.2 0 0 0 121.9 96.5a71.5 71.5 0 0 0-25.23-8C93.54 68.59 86.56 52 76 39.37M88 216a56 56 0 0 1-5.76-111.7a176.5 176.5 0 0 1-1 31.08c-7.58-1.43-11.35-4.85-11.55-5a8 8 0 0 0-11.32 11.32C59.4 142.71 69.2 152 87.92 152h.25c18.66-.05 28.43-9.28 29.49-10.33a8 8 0 0 0-11.32-11.32a22.3 22.3 0 0 1-8.93 4.44a190.4 190.4 0 0 0 .93-29.79A56 56 0 0 1 88 216m57-99.89a72.3 72.3 0 0 0-9.82-10.42a56.15 56.15 0 0 1 24.22-15.16a110.8 110.8 0 0 1 7.6 28.35c-6.09-1.6-9.16-4.37-9.33-4.54a8 8 0 0 0-12.67 1.77M176 200a55.76 55.76 0 0 1-24.69-5.73a71.83 71.83 0 0 0 2.5-63.42a47.5 47.5 0 0 0 21.86 5.15h.33c18.77 0 28.6-9.28 29.66-10.34a8 8 0 0 0-11.32-11.32c-.19.19-3.84 3.49-11.15 5A131.7 131.7 0 0 0 175.7 88h.3a56 56 0 0 1 0 112"></svg:path>`,
})
export class PhCherriesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCherriesBoldIcon],svg[ph-cherries-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 68c-1.88 0-3.76.08-5.62.22a95.7 95.7 0 0 0-21.24-24C110 12.6 56.56 19.8 54.3 20.12a12 12 0 0 0-5 21.86C64.52 52.1 72.13 68.45 75.71 85a76 76 0 1 0 67.22 127.43A76 76 0 1 0 176 68m-22.76 53.06A76.8 76.8 0 0 0 141 105.59a52.1 52.1 0 0 1 16.14-10a107 107 0 0 1 5.12 18.9a12 12 0 0 0-9.02 6.57M134.19 63a70.8 70.8 0 0 1 11.23 11.46A76.3 76.3 0 0 0 121 91.55A75.4 75.4 0 0 0 100.19 85C97.72 71.05 93 56.65 84.58 44c15.2 1.68 34.17 6.48 49.61 19M88 212a52 52 0 0 1-9.53-103.11a173 173 0 0 1-.75 21.59a12 12 0 0 0-5.09 23.38a56.27 56.27 0 0 0 30.74 0a12 12 0 0 0-1.5-23.36a194 194 0 0 0 .69-20.41A52 52 0 0 1 88 212m88-16a51.9 51.9 0 0 1-19.24-3.68a75.83 75.83 0 0 0 4-54.43a56.36 56.36 0 0 0 30.66 0a12 12 0 0 0-4.79-23.42a136.4 136.4 0 0 0-5.12-22.15A52 52 0 0 1 176 196"></svg:path>`,
})
export class PhCherriesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCherriesDuotoneIcon],svg[ph-cherries-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 144a64 64 0 0 1-99.78 53.07V197a64 64 0 1 1-16.39-90A64 64 0 0 1 240 144" opacity=".2"></svg:path><svg:path d="M176 72a72 72 0 0 0-7.76.43a91.8 91.8 0 0 0-21.62-25.11c-37.84-30.53-89.57-23.55-91.75-23.24a8 8 0 0 0-3.31 14.58c17.5 11.66 25.51 31 28.85 49.74A72 72 0 1 0 142 207.5A72 72 0 1 0 176 72M76 39.37c16.67.72 41.24 4.78 60.64 20.48a75.3 75.3 0 0 1 15 16.4A72.2 72.2 0 0 0 121.9 96.5a71.5 71.5 0 0 0-25.23-8C93.54 68.59 86.56 52 76 39.37M88 216a56 56 0 0 1-5.76-111.7a176.5 176.5 0 0 1-1 31.08c-7.58-1.43-11.35-4.85-11.55-5a8 8 0 0 0-11.32 11.32C59.4 142.71 69.2 152 87.92 152h.25c18.66-.05 28.43-9.28 29.49-10.33a8 8 0 0 0-11.32-11.32a22.3 22.3 0 0 1-8.93 4.44a190.4 190.4 0 0 0 .93-29.79A56 56 0 0 1 88 216m57-99.89a72.3 72.3 0 0 0-9.82-10.42a56.15 56.15 0 0 1 24.22-15.16a110.8 110.8 0 0 1 7.6 28.35c-6.09-1.6-9.16-4.37-9.33-4.54a8 8 0 0 0-12.67 1.77M176 200a55.76 55.76 0 0 1-24.69-5.73a71.83 71.83 0 0 0 2.5-63.42a47.5 47.5 0 0 0 21.86 5.15h.33c18.77 0 28.6-9.28 29.66-10.34a8 8 0 0 0-11.32-11.32c-.19.19-3.84 3.49-11.15 5A131.7 131.7 0 0 0 175.7 88h.3a56 56 0 0 1 0 112"></svg:path></svg:g>`,
})
export class PhCherriesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCherriesFillIcon],svg[ph-cherries-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.42 72a75 75 0 0 0-10.21.37a91.9 91.9 0 0 0-21.59-25.09c-37.84-30.49-89.57-23.51-91.75-23.2A8 8 0 0 0 48 31.43a8.19 8.19 0 0 0 3.69 7.32c17.4 11.68 25.37 30.91 28.7 49.65a72.08 72.08 0 1 0 16.26.14C93.54 68.59 86.56 52 76 39.37c16.67.72 41.24 4.78 60.64 20.48a74.8 74.8 0 0 1 15 16.39c-1.9.69-3.79 1.44-5.65 2.29a8.42 8.42 0 0 0-4.49 4.63a8 8 0 0 0 2.41 9a89 89 0 0 1 13.59 14a3.6 3.6 0 0 0 .65.65C160 108.15 165.83 112 176 112c12.15 0 18.18-5.51 18.43-5.75l-.09.09a8 8 0 1 1 11.32 11.32C204.6 118.72 194.77 128 176 128h-1.61a3 3 0 0 0-3 4a87.9 87.9 0 0 1-7 71.6a8.4 8.4 0 0 0-1 6.24a8 8 0 0 0 7.16 6c1.78.13 3.59.2 5.37.2a72 72 0 0 0 2.42-144Zm-72 50.21l-.09.09a8 8 0 0 1 11.32 11.32C116.6 134.72 106.77 144 88 144s-28.6-9.28-29.66-10.34a8 8 0 0 1 11.32-11.32l-.09-.09c.25.24 6.28 5.75 18.43 5.75s18.18-5.51 18.43-5.75Z"></svg:path>`,
})
export class PhCherriesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCherriesLightIcon],svg[ph-cherries-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 74a68 68 0 0 0-8.83.57a89.8 89.8 0 0 0-21.8-25.69c-37.18-30-88.07-23.13-90.22-22.82A6 6 0 0 0 52.67 37c18.72 12.47 26.87 33.31 30.05 53.22A70 70 0 1 0 141.59 205A70 70 0 1 0 176 74m-38.1-15.73a77.6 77.6 0 0 1 16.86 19A70.3 70.3 0 0 0 122.35 99a69.5 69.5 0 0 0-27.42-8.69c-3.22-22.13-11.2-40.14-23.46-53.1c16.76.22 44.72 3.51 66.43 21.06m8.2 62.73a70.7 70.7 0 0 0-13.77-15.12a58.17 58.17 0 0 1 28.23-17.74a113.5 113.5 0 0 1 8.78 33.31c-8.61-1.5-12.92-5.51-13.1-5.68A6 6 0 0 0 146.1 121M88 218a58 58 0 0 1-3.92-115.85a177 177 0 0 1-1.15 35.52c-9.66-1.25-14.5-5.73-14.69-5.91a6 6 0 0 0-8.48 8.48c.4.4 10 9.76 28.24 9.76s27.84-9.36 28.24-9.76a6 6 0 1 0-8.43-8.53c-.22.2-4.41 4.08-12.72 5.64a186.4 186.4 0 0 0 1.11-34.76A58 58 0 0 1 88 218m88-16a57.75 57.75 0 0 1-27.47-6.91a69.73 69.73 0 0 0 0-70.12c2.65 2.26 11.88 9 27.44 9c18.28 0 27.84-9.36 28.24-9.76a6 6 0 0 0 0-8.51a6 6 0 0 0-8.46 0c-.23.22-5 4.59-14.36 5.91a129 129 0 0 0-8.66-35.52c1.06-.06 2.14-.1 3.21-.1a58 58 0 0 1 0 116Z"></svg:path>`,
})
export class PhCherriesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCherriesThinIcon],svg[ph-cherries-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 76a67 67 0 0 0-9.94.74a88.1 88.1 0 0 0-21.95-26.3C107.61 21 57.55 27.74 55.43 28a4 4 0 0 0-1.65 7.29C73.74 48.64 82 71.09 85 92.08a68 68 0 1 0 56.12 110.29A68 68 0 1 0 176 76M66.62 35.27c16-.4 48 1.66 72.47 21.39a79.9 79.9 0 0 1 18.75 21.82a68.3 68.3 0 0 0-35 23.14a67.44 67.44 0 0 0-29.66-9.4c-3.3-24.44-12.35-43.85-26.56-56.95M88 220a60 60 0 0 1-2.09-119.95a177.8 177.8 0 0 1-1.28 39.8c-11.7-.93-17.56-6.44-17.8-6.68a4 4 0 0 0-5.66 5.66c.38.37 9.37 9.17 26.83 9.17s26.45-8.8 26.83-9.17a4 4 0 0 0-5.64-5.68c-.25.25-5.65 5.35-16.43 6.58A183.7 183.7 0 0 0 94 100.3A60 60 0 0 1 88 220m88-16a59.75 59.75 0 0 1-30.24-8.17a67.86 67.86 0 0 0-16.31-89.68a60.25 60.25 0 0 1 32.22-20.4c5.17 11 8.49 23.68 9.93 38c-11-1.16-16.53-6.36-16.77-6.59a4 4 0 0 0-5.66 5.66c.38.37 9.37 9.17 26.83 9.17s26.45-8.8 26.83-9.17a4 4 0 0 0-5.64-5.68c-.26.25-6 5.68-17.55 6.68q-2.1-22.14-9.81-39.49A60 60 0 1 1 176 204"></svg:path>`,
})
export class PhCherriesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChurchIcon],svg[ph-church-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.12 145.14L192 123.47V104a8 8 0 0 0-4-7l-52-29.64V48h16a8 8 0 0 0 0-16h-16V16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v19.36L68 97.05a8 8 0 0 0-4 7v19.47l-36.12 21.62A8 8 0 0 0 24 152v64a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-48a8 8 0 0 1 16 0v48a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-64a8 8 0 0 0-3.88-6.86M40 156.53l24-14.4V208H40ZM128 144a24 24 0 0 0-24 24v40H80v-99.36l48-27.43l48 27.43V208h-24v-40a24 24 0 0 0-24-24m88 64h-24v-65.87l24 14.4Z"></svg:path>`,
})
export class PhChurchIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChurchBoldIcon],svg[ph-church-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.17 141.71L196 121.21V104a12 12 0 0 0-6-10.42L140 65V52h12a12 12 0 0 0 0-24h-12V16a12 12 0 0 0-24 0v12h-12a12 12 0 0 0 0 24h12v13L66.05 93.58A12 12 0 0 0 60 104v17.21l-34.17 20.5A12 12 0 0 0 20 152v64a12 12 0 0 0 12 12h76a12 12 0 0 0 12-12v-44a8 8 0 0 1 16 0v44a12 12 0 0 0 12 12h76a12 12 0 0 0 12-12v-64a12 12 0 0 0-5.83-10.29M44 158.79l16-9.6V204H44ZM128 140a32 32 0 0 0-32 32v32H84v-93l44-25.14L172 111v93h-12v-32a32 32 0 0 0-32-32m84 64h-16v-54.81l16 9.6Z"></svg:path>`,
})
export class PhChurchBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChurchDuotoneIcon],svg[ph-church-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 152v64h-40v-88ZM32 216h40v-88l-40 24Z" opacity=".2"></svg:path><svg:path d="M228.12 145.14L192 123.47V104a8 8 0 0 0-4-7l-52-29.64V48h16a8 8 0 0 0 0-16h-16V16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v19.36L68 97.05a8 8 0 0 0-4 7v19.47l-36.12 21.62A8 8 0 0 0 24 152v64a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-48a8 8 0 0 1 16 0v48a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-64a8 8 0 0 0-3.88-6.86M40 156.53l24-14.4V208H40ZM128 144a24 24 0 0 0-24 24v40H80v-99.36l48-27.43l48 27.43V208h-24v-40a24 24 0 0 0-24-24m88 64h-24v-65.87l24 14.4Z"></svg:path></svg:g>`,
})
export class PhChurchDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChurchFillIcon],svg[ph-church-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.12 145.14L192 123.47V104a8 8 0 0 0-4-7l-52-29.64V48h16a8 8 0 0 0 0-16h-16V16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v19.36L68 97.05a8 8 0 0 0-4 7v19.47l-36.12 21.62A8 8 0 0 0 24 152v64a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-48a16 16 0 0 1 32 0v48a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-64a8 8 0 0 0-3.88-6.86M64 208H40v-51.47l24-14.4Zm152 0h-24v-65.87l24 14.4Z"></svg:path>`,
})
export class PhChurchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChurchLightIcon],svg[ph-church-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.09 146.86L190 124.6V104a6 6 0 0 0-3-5.21l-53-30.27V46h18a6 6 0 0 0 0-12h-18V16a6 6 0 0 0-12 0v18h-18a6 6 0 0 0 0 12h18v22.52L69 98.79a6 6 0 0 0-3 5.21v20.6l-37.09 22.26A6 6 0 0 0 26 152v64a6 6 0 0 0 6 6h80a6 6 0 0 0 6-6v-48a10 10 0 0 1 20 0v48a6 6 0 0 0 6 6h80a6 6 0 0 0 6-6v-64a6 6 0 0 0-2.91-5.14M38 155.4l28-16.8V210H38Zm90-9.4a22 22 0 0 0-22 22v42H78V107.48l50-28.57l50 28.57V210h-28v-42a22 22 0 0 0-22-22m90 64h-28v-71.4l28 16.8Z"></svg:path>`,
})
export class PhChurchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChurchThinIcon],svg[ph-church-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.06 148.57L188 125.74V104a4 4 0 0 0-2-3.47l-54-30.85V44h20a4 4 0 0 0 0-8h-20V16a4 4 0 0 0-8 0v20h-20a4 4 0 0 0 0 8h20v25.68l-54 30.85a4 4 0 0 0-2 3.47v21.74l-38.06 22.83A4 4 0 0 0 28 152v64a4 4 0 0 0 4 4h80a4 4 0 0 0 4-4v-48a12 12 0 0 1 24 0v48a4 4 0 0 0 4 4h80a4 4 0 0 0 4-4v-64a4 4 0 0 0-1.94-3.43M36 154.26l32-19.2V212H36Zm92-6.26a20 20 0 0 0-20 20v44H76V106.32l52-29.71l52 29.71V212h-32v-44a20 20 0 0 0-20-20m92 64h-32v-76.94l32 19.2Z"></svg:path>`,
})
export class PhChurchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteIcon],svg[ph-cigarette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M32 144h48v32H32Zm192 32H96v-32h128zM201 60.08c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.91a7.8 7.8 0 0 0 2.64 3.86a8 8 0 1 1-6.5 14.62a22.57 22.57 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79m-40 0c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.91a7.8 7.8 0 0 0 2.64 3.86a8 8 0 1 1-6.5 14.62a22.57 22.57 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79"></svg:path>`,
})
export class PhCigaretteIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteBoldIcon],svg[ph-cigarette-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 124H32a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20M36 148h40v24H36Zm184 24H100v-24h120ZM201.67 55.89c7.53-12.71 7.12-19.63 5.07-21.1A12 12 0 0 1 216.67 13a25.9 25.9 0 0 1 13.8 15.79c3.6 10.92.86 24.17-8.14 39.38c-7.53 12.7-7.12 19.63-5.07 21.1a12 12 0 0 1-9.93 21.84a26 26 0 0 1-13.8-15.79c-3.6-10.98-.86-24.23 8.14-39.43m-48 0c7.53-12.71 7.12-19.63 5.07-21.1A12 12 0 0 1 168.67 13a25.9 25.9 0 0 1 13.8 15.79c3.6 10.92.86 24.17-8.14 39.38c-7.53 12.7-7.12 19.63-5.07 21.1a12 12 0 0 1-9.93 21.84a26 26 0 0 1-13.8-15.79c-3.6-10.98-.86-24.23 8.14-39.43"></svg:path>`,
})
export class PhCigaretteBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteDuotoneIcon],svg[ph-cigarette-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 136v48H32a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8Z" opacity=".2"></svg:path><svg:path d="M224 128H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M32 144h48v32H32Zm192 32H96v-32h128zM201 60.08c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.92a7.8 7.8 0 0 0 2.64 3.85a8 8 0 1 1-6.5 14.62a22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79m-40 0c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.92a7.8 7.8 0 0 0 2.64 3.85a8 8 0 1 1-6.5 14.62a22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79"></svg:path></svg:g>`,
})
export class PhCigaretteDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteFillIcon],svg[ph-cigarette-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0 48H96v-32h128zM201 60.08c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.92a7.8 7.8 0 0 0 2.64 3.85a8 8 0 1 1-6.5 14.62a22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79m-40 0c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.92a7.8 7.8 0 0 0 2.64 3.85a8 8 0 1 1-6.5 14.62a22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79"></svg:path>`,
})
export class PhCigaretteFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteLightIcon],svg[ph-cigarette-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 130H32a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14M30 176v-32a2 2 0 0 1 2-2h50v36H32a2 2 0 0 1-2-2m196 0a2 2 0 0 1-2 2H94v-36h130a2 2 0 0 1 2 2ZM202.77 61.06c7.81-13.88 7.91-21.91 6.62-26.2a9 9 0 0 0-3.93-5.42A6 6 0 0 1 208 18a5.9 5.9 0 0 1 2.44.52a20.42 20.42 0 0 1 10.23 12.24c3.18 9.58.68 21.75-7.44 36.18c-7.81 13.88-7.91 21.91-6.62 26.2a8.94 8.94 0 0 0 3.88 5.4A6 6 0 0 1 208 110a5.9 5.9 0 0 1-2.44-.52a20.42 20.42 0 0 1-10.23-12.24c-3.18-9.58-.68-21.75 7.44-36.18m-40 0c7.81-13.88 7.91-21.91 6.62-26.2a9 9 0 0 0-3.93-5.42A6 6 0 0 1 168 18a5.9 5.9 0 0 1 2.44.52a20.42 20.42 0 0 1 10.23 12.24c3.18 9.58.68 21.75-7.44 36.18c-7.81 13.88-7.91 21.91-6.62 26.2a8.94 8.94 0 0 0 3.88 5.4A6 6 0 0 1 168 110a5.9 5.9 0 0 1-2.44-.52a20.42 20.42 0 0 1-10.23-12.24c-3.18-9.58-.68-21.75 7.44-36.18"></svg:path>`,
})
export class PhCigaretteLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteSlashIcon],svg[ph-cigarette-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201 60.08c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.92a7.8 7.8 0 0 0 2.64 3.85a8 8 0 1 1-6.5 14.62a22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79m-47.6 37.79a22.53 22.53 0 0 0 11.32 13.44a8 8 0 1 0 6.5-14.62a7.8 7.8 0 0 1-2.64-3.85c-1.06-3.2-1.64-10.69 6.36-24.92c8.41-14.94 11-27.65 7.6-37.79a22.57 22.57 0 0 0-11.32-13.44a8 8 0 1 0-6.5 14.62a7.8 7.8 0 0 1 2.64 3.86c1.06 3.2 1.64 10.68-6.36 24.91c-8.38 14.92-10.93 27.65-7.57 37.79Zm60.49 112.75a8 8 0 1 1-11.84 10.76L175.37 192H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h85.19L42.08 45.38a8 8 0 1 1 11.84-10.76ZM32 176h48v-32H32Zm128.82 0l-29.09-32H96v32ZM224 128h-45.48a8 8 0 1 0 0 16H224v32h-1.84a8 8 0 1 0 0 16H224a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhCigaretteSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteSlashBoldIcon],svg[ph-cigarette-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.67 55.89c7.53-12.71 7.12-19.63 5.07-21.1A12 12 0 0 1 216.67 13a25.9 25.9 0 0 1 13.8 15.79c3.6 10.92.86 24.17-8.14 39.38c-7.53 12.7-7.12 19.63-5.07 21.1a12 12 0 0 1-9.93 21.84a26 26 0 0 1-13.8-15.79c-3.6-10.98-.86-24.23 8.14-39.43m-56.14 39.38a26 26 0 0 0 13.8 15.79a12 12 0 0 0 9.93-21.84c-2-1.47-2.46-8.4 5.07-21.1c9-15.21 11.74-28.46 8.14-39.38A25.9 25.9 0 0 0 168.67 13a12 12 0 0 0-9.93 21.84c2 1.47 2.46 8.39-5.07 21.1c-9 15.15-11.74 28.4-8.14 39.33m71.35 112.66a12 12 0 1 1-17.76 16.14L173.6 196H32a20 20 0 0 1-20-20v-32a20 20 0 0 1 20-20h76.15l-69-75.93a12 12 0 1 1 17.73-16.14ZM36 172h40v-24H36Zm115.78 0L130 148h-30v24ZM224 124h-34.67a12 12 0 0 0 0 24H220v34.94a12 12 0 0 0 24 0V144a20 20 0 0 0-20-20"></svg:path>`,
})
export class PhCigaretteSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteSlashDuotoneIcon],svg[ph-cigarette-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 136v48H32a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8Z" opacity=".2"></svg:path><svg:path d="M201 60.08c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.92a7.8 7.8 0 0 0 2.64 3.85a8 8 0 1 1-6.5 14.62a22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79m-47.6 37.79a22.53 22.53 0 0 0 11.32 13.44a8 8 0 1 0 6.5-14.62a7.8 7.8 0 0 1-2.64-3.85c-1.06-3.2-1.64-10.69 6.36-24.92c8.41-14.94 11-27.65 7.6-37.79a22.57 22.57 0 0 0-11.32-13.44a8 8 0 1 0-6.5 14.62a7.8 7.8 0 0 1 2.64 3.86c1.06 3.2 1.64 10.68-6.36 24.91c-8.38 14.92-10.93 27.65-7.57 37.79Zm60.49 112.75a8 8 0 1 1-11.84 10.76L175.37 192H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h85.19L42.08 45.38a8 8 0 1 1 11.84-10.76ZM32 176h48v-32H32Zm128.82 0l-29.09-32H96v32ZM224 128h-45.48a8 8 0 1 0 0 16H224v32h-1.84a8 8 0 1 0 0 16H224a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path></svg:g>`,
})
export class PhCigaretteSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteSlashFillIcon],svg[ph-cigarette-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201 60.08c8-14.23 7.42-21.71 6.36-24.91a7.8 7.8 0 0 0-2.64-3.86a8 8 0 1 1 6.5-14.62a22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79c-8 14.23-7.42 21.72-6.36 24.92a7.8 7.8 0 0 0 2.64 3.85a8 8 0 1 1-6.5 14.62a22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79m-47.6 37.79a22.53 22.53 0 0 0 11.32 13.44a8 8 0 1 0 6.5-14.62a7.8 7.8 0 0 1-2.64-3.85c-1.06-3.2-1.64-10.69 6.36-24.92c8.41-14.94 11-27.65 7.6-37.79a22.57 22.57 0 0 0-11.32-13.44a8 8 0 1 0-6.5 14.62a7.8 7.8 0 0 1 2.64 3.86c1.06 3.2 1.64 10.68-6.36 24.91c-8.38 14.92-10.93 27.65-7.57 37.79Zm60.49 112.75a8 8 0 1 1-11.84 10.76L175.37 192H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h85.19L42.08 45.38a8 8 0 1 1 11.84-10.76ZM160.82 176l-29.09-32H96v32ZM224 128h-45.48a8 8 0 1 0 0 16H224v32h-1.84a8 8 0 1 0 0 16H224a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhCigaretteSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteSlashLightIcon],svg[ph-cigarette-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l78.15 86H32a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h144.25l27.31 30a6 6 0 0 0 8.88-8.08ZM30 176v-32a2 2 0 0 1 2-2h50v36H32a2 2 0 0 1-2-2m64 2v-36h38.62l32.73 36Zm144-34v32a14 14 0 0 1-14 14h-1.84a6 6 0 1 1 0-12H224a2 2 0 0 0 2-2v-32a2 2 0 0 0-2-2h-45.48a6 6 0 1 1 0-12H224a14 14 0 0 1 14 14m-35.23-82.94c7.81-13.88 7.91-21.91 6.62-26.2a9 9 0 0 0-3.93-5.42A6 6 0 0 1 208 18a5.9 5.9 0 0 1 2.44.52a20.42 20.42 0 0 1 10.23 12.24c3.18 9.58.68 21.75-7.44 36.18c-7.81 13.88-7.91 21.91-6.62 26.2a8.94 8.94 0 0 0 3.88 5.4A6 6 0 0 1 208 110a5.9 5.9 0 0 1-2.44-.52a20.42 20.42 0 0 1-10.23-12.24c-3.18-9.58-.68-21.75 7.44-36.18m-40 0c7.81-13.88 7.91-21.91 6.62-26.2a9 9 0 0 0-3.93-5.42A6 6 0 0 1 168 18a5.9 5.9 0 0 1 2.44.52a20.42 20.42 0 0 1 10.23 12.24c3.18 9.58.68 21.75-7.44 36.18c-7.81 13.88-7.91 21.91-6.62 26.2a8.94 8.94 0 0 0 3.88 5.4A6 6 0 0 1 168 110a5.9 5.9 0 0 1-2.44-.52a20.42 20.42 0 0 1-10.23-12.24c-3.18-9.58-.68-21.75 7.44-36.18"></svg:path>`,
})
export class PhCigaretteSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteSlashThinIcon],svg[ph-cigarette-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.51 62c8.22-14.61 8.21-23.23 6.75-27.9a10.82 10.82 0 0 0-4.94-6.51a4 4 0 0 1-2-5.27a4 4 0 0 1 5.3-2c.66.29 6.52 3.09 9.16 11c3 9 .53 20.66-7.29 34.57c-8.22 14.61-8.21 23.24-6.75 27.91a10.74 10.74 0 0 0 4.94 6.5A4 4 0 0 1 208 108a4.1 4.1 0 0 1-1.63-.35c-.66-.3-6.52-3.09-9.16-11c-2.98-9.06-.52-20.65 7.3-34.65m-47.29 34.61c2.64 8 8.5 10.75 9.16 11a4.1 4.1 0 0 0 1.62.39a4 4 0 0 0 1.67-7.64a10.74 10.74 0 0 1-4.94-6.5c-1.46-4.67-1.47-13.3 6.75-27.91c7.82-13.91 10.28-25.54 7.29-34.57c-2.64-7.95-8.5-10.75-9.16-11a4 4 0 0 0-5.3 2a4 4 0 0 0 2 5.27a10.82 10.82 0 0 1 4.94 6.51c1.46 4.67 1.47 13.29-6.75 27.9c-7.81 13.94-10.27 25.53-7.28 34.55M211 213.31a4 4 0 1 1-5.92 5.38L177.14 188H32a12 12 0 0 1-12-12v-32a12 12 0 0 1 12-12h94.23L45 42.69a4 4 0 0 1 6-5.38ZM32 180h52v-40H32a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4m137.87 0l-36.37-40H92v40ZM224 132h-45.48a4 4 0 1 0 0 8H224a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-1.84a4 4 0 1 0 0 8H224a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCigaretteSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCigaretteThinIcon],svg[ph-cigarette-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 132H32a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12M28 176v-32a4 4 0 0 1 4-4h52v40H32a4 4 0 0 1-4-4m200 0a4 4 0 0 1-4 4H92v-40h132a4 4 0 0 1 4 4ZM204.51 62c8.22-14.61 8.21-23.23 6.75-27.9a10.82 10.82 0 0 0-4.94-6.51a4 4 0 0 1-2-5.26a4 4 0 0 1 5.3-2c.66.29 6.52 3.09 9.16 11c3 9 .53 20.66-7.29 34.57c-8.22 14.61-8.21 23.24-6.75 27.91a10.74 10.74 0 0 0 4.94 6.5A4 4 0 0 1 208 108a4.1 4.1 0 0 1-1.63-.35c-.66-.3-6.52-3.09-9.16-11c-2.98-9.06-.52-20.65 7.3-34.65m-40 0c8.22-14.61 8.21-23.23 6.75-27.9a10.82 10.82 0 0 0-4.94-6.51a4 4 0 0 1-2-5.26a4 4 0 0 1 5.3-2c.66.29 6.52 3.09 9.16 11c3 9 .53 20.66-7.29 34.57c-8.22 14.61-8.21 23.24-6.75 27.91a10.74 10.74 0 0 0 4.94 6.5A4 4 0 0 1 168 108a4.1 4.1 0 0 1-1.63-.35c-.66-.3-6.52-3.09-9.16-11c-2.98-9.06-.52-20.65 7.3-34.65"></svg:path>`,
})
export class PhCigaretteThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleIcon],svg[ph-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88"></svg:path>`,
})
export class PhCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleBoldIcon],svg[ph-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84"></svg:path>`,
})
export class PhCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleDashedIcon],svg[ph-circle-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96.26 37.05a8 8 0 0 1 5.74-9.76a104.1 104.1 0 0 1 52 0a8 8 0 0 1-2 15.75a8.2 8.2 0 0 1-2-.26a88.1 88.1 0 0 0-44 0a8 8 0 0 1-9.74-5.73M53.79 55.14a104.05 104.05 0 0 0-26 45a8 8 0 0 0 15.42 4.27a88 88 0 0 1 22-38.09a8 8 0 0 0-11.42-11.18m-10.58 96.41a8 8 0 1 0-15.42 4.28a104.1 104.1 0 0 0 26 45a8 8 0 0 0 11.41-11.22a88.14 88.14 0 0 1-21.99-38.06M150 213.22a88 88 0 0 1-44 0a8 8 0 1 0-4 15.49a104.1 104.1 0 0 0 52 0a8 8 0 0 0-4-15.49M222.65 146a8 8 0 0 0-9.85 5.58a87.9 87.9 0 0 1-22 38.08a8 8 0 1 0 11.42 11.21a104 104 0 0 0 26-45a8 8 0 0 0-5.57-9.87m-9.86-41.54a8 8 0 0 0 15.42-4.28a104 104 0 0 0-26-45A8 8 0 1 0 190.8 66.4a88 88 0 0 1 21.99 38.05Z"></svg:path>`,
})
export class PhCircleDashedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleDashedBoldIcon],svg[ph-circle-dashed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92.38 38.05A12 12 0 0 1 101 23.42a108 108 0 0 1 54 0a12 12 0 1 1-6 23.23a84.1 84.1 0 0 0-42 0a12 12 0 0 1-14.62-8.6M50.94 52.34a108.1 108.1 0 0 0-27 46.76a12 12 0 0 0 8.37 14.77a12.2 12.2 0 0 0 3.2.43a12 12 0 0 0 11.56-8.8a84 84 0 0 1 21-36.35a12 12 0 1 0-17.13-16.81m-3.88 98.14a12 12 0 0 0-23.12 6.42a108 108 0 0 0 27 46.78A12 12 0 0 0 68 186.85a84 84 0 0 1-20.94-36.37M149 209.35a84 84 0 0 1-42 0a12 12 0 1 0-6 23.23a108 108 0 0 0 54 0a12 12 0 1 0-6-23.23m74.72-67.22A12 12 0 0 0 209 150.5a84 84 0 0 1-21 36.35a12 12 0 0 0 17.12 16.82a108.2 108.2 0 0 0 27-46.77a12 12 0 0 0-8.41-14.77Zm-14.77-36.61a12 12 0 0 0 23.12-6.42a108 108 0 0 0-27-46.78A12 12 0 1 0 188 69.15a84 84 0 0 1 20.94 36.37Z"></svg:path>`,
})
export class PhCircleDashedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleDashedDuotoneIcon],svg[ph-circle-dashed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M96.26 37a8 8 0 0 1 5.74-9.71a104.1 104.1 0 0 1 52 0a8 8 0 0 1-2 15.75a8.2 8.2 0 0 1-2-.26a88.1 88.1 0 0 0-44 0A8 8 0 0 1 96.26 37M53.79 55.14a104 104 0 0 0-26 45a8 8 0 1 0 15.42 4.26a87.9 87.9 0 0 1 22-38.08a8 8 0 0 0-11.42-11.18m-10.58 96.41a8 8 0 1 0-15.42 4.28a104 104 0 0 0 26 45a8 8 0 1 0 11.41-11.21a88.14 88.14 0 0 1-21.99-38.07M150 213.22a88 88 0 0 1-44 0a8 8 0 1 0-4 15.49a104.1 104.1 0 0 0 52 0a8 8 0 0 0-4-15.49M222.65 146a8 8 0 0 0-9.85 5.57a87.9 87.9 0 0 1-22 38.09a8 8 0 1 0 11.42 11.21a104.05 104.05 0 0 0 26-45a8 8 0 0 0-5.57-9.87m-9.86-41.54a8 8 0 0 0 15.42-4.28a104 104 0 0 0-26-45a8 8 0 1 0-11.41 11.21a88.14 88.14 0 0 1 21.99 38.06Z"></svg:path></svg:g>`,
})
export class PhCircleDashedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleDashedFillIcon],svg[ph-circle-dashed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m54.59 45a8 8 0 0 1 11.29.7a88 88 0 0 1 17.6 30.47a8 8 0 0 1-15.18 5.08a71.9 71.9 0 0 0-14.4-25a8 8 0 0 1 .69-11.25M73.41 187.05a8 8 0 0 1-11.29-.7a88 88 0 0 1-17.6-30.47a8 8 0 1 1 15.18-5.08a71.9 71.9 0 0 0 14.4 24.95a8 8 0 0 1-.69 11.3m.69-106.8a71.9 71.9 0 0 0-14.4 25a8 8 0 1 1-15.18-5.08a88 88 0 0 1 17.6-30.47a8 8 0 1 1 12 10.6Zm71.49 134a87.8 87.8 0 0 1-35.18 0a8 8 0 0 1 3.18-15.68a72.1 72.1 0 0 0 28.82 0a8 8 0 0 1 3.18 15.68m6.25-163a8 8 0 0 1-7.84 6.36a8 8 0 0 1-1.6-.16a72.1 72.1 0 0 0-28.82 0a8 8 0 1 1-3.18-15.68a87.9 87.9 0 0 1 35.18 0a8 8 0 0 1 6.26 9.43Zm59.64 104.68a88 88 0 0 1-17.6 30.47a8 8 0 1 1-12-10.6a71.9 71.9 0 0 0 14.4-24.95a8 8 0 0 1 15.18 5.08Z"></svg:path>`,
})
export class PhCircleDashedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleDashedLightIcon],svg[ph-circle-dashed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M98.19 36.54a6 6 0 0 1 4.3-7.31a102.1 102.1 0 0 1 51 0a6 6 0 0 1-3 11.62a90 90 0 0 0-45 0a6 6 0 0 1-7.3-4.31m-43 20A102.1 102.1 0 0 0 29.7 100.7a6 6 0 0 0 4.19 7.38a6 6 0 0 0 1.6.22a6 6 0 0 0 5.78-4.4A90 90 0 0 1 63.78 65a6 6 0 1 0-8.56-8.41Zm-13.91 95.55a6 6 0 1 0-11.56 3.2a102 102 0 0 0 25.49 44.18a6 6 0 0 0 8.55-8.41a90.1 90.1 0 0 1-22.48-38.97m109.21 63.06a90 90 0 0 1-45 0a6 6 0 1 0-3 11.62a102.16 102.16 0 0 0 51 0a6 6 0 0 0-3-11.62m71.62-67.23a6 6 0 0 0-7.38 4.18a90 90 0 0 1-22.51 39a6 6 0 1 0 8.56 8.41a102.1 102.1 0 0 0 25.52-44.21a6 6 0 0 0-4.19-7.38m-7.39-44a6 6 0 0 0 5.78 4.4a6 6 0 0 0 1.6-.22a6 6 0 0 0 4.18-7.38a102 102 0 0 0-25.49-44.18a6 6 0 0 0-8.55 8.41a90.05 90.05 0 0 1 22.48 38.96Z"></svg:path>`,
})
export class PhCircleDashedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleDashedThinIcon],svg[ph-circle-dashed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M155.87 36.06a4 4 0 0 1-3.87 3a4.3 4.3 0 0 1-1-.13a92 92 0 0 0-46 0a4 4 0 0 1-2-7.74a100.1 100.1 0 0 1 50 0a4 4 0 0 1 2.87 4.87M56.65 57.94a100.2 100.2 0 0 0-25 43.29a4 4 0 0 0 7.71 2.14a92.06 92.06 0 0 1 23-39.82a4 4 0 1 0-5.7-5.61Zm-17.29 94.68a4 4 0 0 0-7.71 2.14a100.1 100.1 0 0 0 25 43.31a4 4 0 1 0 5.71-5.61a91.9 91.9 0 0 1-23-39.84M151 217.09a92 92 0 0 1-46 0a4 4 0 0 0-2 7.75a100 100 0 0 0 50 0a4 4 0 1 0-2-7.74Zm70.58-67.25a4 4 0 0 0-4.92 2.79a92.1 92.1 0 0 1-23 39.82a4 4 0 1 0 5.7 5.61a100.2 100.2 0 0 0 25-43.29a4 4 0 0 0-2.78-4.93m-4.94-46.46a4 4 0 0 0 7.71-2.14a100.1 100.1 0 0 0-25-43.31a4 4 0 1 0-5.71 5.61a91.9 91.9 0 0 1 23 39.84"></svg:path>`,
})
export class PhCircleDashedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleDuotoneIcon],svg[ph-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88"></svg:path></svg:g>`,
})
export class PhCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleFillIcon],svg[ph-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104"></svg:path>`,
})
export class PhCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfIcon],svg[ph-circle-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 16.37a86.4 86.4 0 0 1 16 3v169.3a86.4 86.4 0 0 1-16 3Zm32 9.26a87.8 87.8 0 0 1 16 10.54v135.66a87.8 87.8 0 0 1-16 10.54ZM40 128a88.11 88.11 0 0 1 80-87.63v175.26A88.11 88.11 0 0 1 40 128m160 50.54V77.46a87.82 87.82 0 0 1 0 101.08"></svg:path>`,
})
export class PhCircleHalfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfBoldIcon],svg[ph-circle-half-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 24.87a83.5 83.5 0 0 1 24 7.25v151.76a83.5 83.5 0 0 1-24 7.25ZM44 128a84.12 84.12 0 0 1 72-83.13v166.26A84.12 84.12 0 0 1 44 128m144 58.71V69.29a83.81 83.81 0 0 1 0 117.42"></svg:path>`,
})
export class PhCircleHalfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfDuotoneIcon],svg[ph-circle-half-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 0 1-96 96V32a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40 128a88.11 88.11 0 0 1 80-87.63v175.26A88.11 88.11 0 0 1 40 128m96 87.63V40.37a88 88 0 0 1 0 175.26"></svg:path></svg:g>`,
})
export class PhCircleHalfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfFillIcon],svg[ph-circle-half-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40 128a88.1 88.1 0 0 1 88-88v176a88.1 88.1 0 0 1-88-88"></svg:path>`,
})
export class PhCircleHalfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfLightIcon],svg[ph-circle-half-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m6 12.2a90 90 0 0 1 20 3.63v172.34a90 90 0 0 1-20 3.63Zm32 8.23a90.5 90.5 0 0 1 20 12.81v137.52a90.5 90.5 0 0 1-20 12.81ZM38 128a90.12 90.12 0 0 1 84-89.8v179.6A90.12 90.12 0 0 1 38 128m160 56.5v-113a89.81 89.81 0 0 1 0 113"></svg:path>`,
})
export class PhCircleHalfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfThinIcon],svg[ph-circle-half-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m4 8.09a91.6 91.6 0 0 1 24 4.27v175.28a91.6 91.6 0 0 1-24 4.27Zm32 7.25a92.2 92.2 0 0 1 24 15v139.35a92.2 92.2 0 0 1-24 15ZM36 128a92.11 92.11 0 0 1 88-91.91v183.82A92.11 92.11 0 0 1 36 128m160 61.9V66.1a91.83 91.83 0 0 1 0 123.8"></svg:path>`,
})
export class PhCircleHalfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfTiltIcon],svg[ph-circle-half-tilt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46M184 195.87a87 87 0 0 1-16 10.5V99.31l16-16Zm-80-32.56l16-16v68.28a88.4 88.4 0 0 1-16-3Zm-16 43.06a87 87 0 0 1-16.3-10.76l16.3-16.3Zm48-75.06l16-16v97.32a88.4 88.4 0 0 1-16 3ZM40 128a88 88 0 0 1 144.3-67.61L60.38 184.31A87.34 87.34 0 0 1 40 128m160 50.59V77.41a88 88 0 0 1 0 101.18"></svg:path>`,
})
export class PhCircleHalfTiltIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfTiltBoldIcon],svg[ph-circle-half-tilt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.37 51.6A108.08 108.08 0 1 0 236 128a108.1 108.1 0 0 0-31.63-76.4M176 197a83.4 83.4 0 0 1-16 8.75V113l16-16ZM68.6 68.58a84.08 84.08 0 0 1 109.7-7.88L60.72 178.33A84.08 84.08 0 0 1 68.6 68.58M96 177v28.69a83.6 83.6 0 0 1-18.3-10.39Zm24 34.62V153l16-16v74.64a84.7 84.7 0 0 1-16-.02m80-40.27v-86.7a84.24 84.24 0 0 1 0 86.7"></svg:path>`,
})
export class PhCircleHalfTiltBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfTiltDuotoneIcon],svg[ph-circle-half-tilt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M195.88 195.88a96 96 0 0 1-135.76 0L195.88 60.12a96 96 0 0 1 0 135.76" opacity=".2"></svg:path><svg:path d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46M65.78 65.77a88.08 88.08 0 0 1 118.52-5.38L60.38 184.31a88 88 0 0 1 5.4-118.54m124.44 124.46a88.1 88.1 0 0 1-118.52 5.38L195.62 71.69a88 88 0 0 1-5.4 118.54"></svg:path></svg:g>`,
})
export class PhCircleHalfTiltDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfTiltFillIcon],svg[ph-circle-half-tilt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40 128a88 88 0 0 1 150.2-62.2L65.8 190.2A87.76 87.76 0 0 1 40 128"></svg:path>`,
})
export class PhCircleHalfTiltFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfTiltLightIcon],svg[ph-circle-half-tilt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.12 55.88A102 102 0 1 0 55.88 200.13A102 102 0 1 0 200.12 55.88M90 209.62a89.6 89.6 0 0 1-21.23-13.89L90 174.49Zm32 8.16a90 90 0 0 1-20-3.58v-51.71l20-20Zm32-3.58a89.8 89.8 0 0 1-20 3.58v-87.29l20-20Zm32-17.4a89.5 89.5 0 0 1-20 12.83V98.49l20-20Zm-125.73-9.56a90 90 0 0 1 127-127ZM198 184.57V71.43a90 90 0 0 1 0 113.14"></svg:path>`,
})
export class PhCircleHalfTiltLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleHalfTiltThinIcon],svg[ph-circle-half-tilt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.71 57.29A100 100 0 1 0 57.29 198.71A100 100 0 1 0 198.71 57.29M188 197.72a91.4 91.4 0 0 1-24 15v-115l24-24Zm-88-36.06l24-24v82.24a92 92 0 0 1-24-4.24Zm-8 51a91.7 91.7 0 0 1-26.15-16.89L92 169.66Zm40-83l24-24v110a91.8 91.8 0 0 1-24 4.24ZM36 128a92 92 0 0 1 154.16-67.81l-130 130A91.34 91.34 0 0 1 36 128m160 62V66a92 92 0 0 1 0 124"></svg:path>`,
})
export class PhCircleHalfTiltThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleLightIcon],svg[ph-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90"></svg:path>`,
})
export class PhCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleNotchIcon],svg[ph-circle-notch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128"></svg:path>`,
})
export class PhCircleNotchIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleNotchBoldIcon],svg[ph-circle-notch-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 128a108 108 0 0 1-216 0c0-42.52 24.73-81.34 63-98.9a12 12 0 1 1 10 21.81C63.24 64.57 44 94.83 44 128a84 84 0 0 0 168 0c0-33.17-19.24-63.43-49-77.09a12 12 0 1 1 10-21.81c38.27 17.56 63 56.38 63 98.9"></svg:path>`,
})
export class PhCircleNotchBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleNotchDuotoneIcon],svg[ph-circle-notch-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128"></svg:path></svg:g>`,
})
export class PhCircleNotchDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleNotchFillIcon],svg[ph-circle-notch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 176A72 72 0 0 1 92 65.64a8 8 0 0 1 8 13.85a56 56 0 1 0 56 0a8 8 0 0 1 8-13.85A72 72 0 0 1 128 200"></svg:path>`,
})
export class PhCircleNotchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleNotchLightIcon],svg[ph-circle-notch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 128a102 102 0 0 1-204 0c0-40.18 23.35-76.86 59.5-93.45a6 6 0 0 1 5 10.9C58.61 60.09 38 92.49 38 128a90 90 0 0 0 180 0c0-35.51-20.61-67.91-52.5-82.55a6 6 0 0 1 5-10.9C206.65 51.14 230 87.82 230 128"></svg:path>`,
})
export class PhCircleNotchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleNotchThinIcon],svg[ph-circle-notch-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a100 100 0 0 1-200 0c0-39.4 22.9-75.37 58.33-91.63a4 4 0 1 1 3.34 7.27C57.07 58.6 36 91.71 36 128a92 92 0 0 0 184 0c0-36.29-21.07-69.4-53.67-84.36a4 4 0 1 1 3.34-7.27C205.1 52.63 228 88.6 228 128"></svg:path>`,
})
export class PhCircleNotchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleThinIcon],svg[ph-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92"></svg:path>`,
})
export class PhCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyIcon],svg[ph-circle-wavy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-11.6 39.3c-4.8 5-9.7 10.2-12.4 16.5s-2.6 13.1-2.7 19.8s-.2 14.4-3.3 17.5s-10.4 3.2-17.5 3.3s-13.7.2-19.8 2.7s-11.5 7.6-16.5 12.4S132 224 128 224s-9.1-4.9-14.1-9.7s-10.2-9.7-16.5-12.4s-13.1-2.6-19.8-2.7s-14.4-.2-17.5-3.3c-3.1-3.1-3.2-10.4-3.3-17.5s-.2-13.7-2.7-19.8s-7.6-11.5-12.4-16.5S32 132 32 128s4.9-9.1 9.7-14.1s9.7-10.2 12.4-16.5s2.6-13.1 2.7-19.8s.2-14.4 3.3-17.5s10.4-3.2 17.5-3.3s13.7-.2 19.8-2.7s11.5-7.6 16.5-12.4S124 32 128 32s9.1 4.9 14.1 9.7s10.2 9.7 16.5 12.4s13.1 2.6 19.8 2.7s14.4.2 17.5 3.3s3.2 10.4 3.3 17.5s.2 13.7 2.7 19.8s7.6 11.5 12.4 16.5S224 124 224 128s-4.9 9.1-9.7 14.1Z"></svg:path>`,
})
export class PhCircleWavyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyBoldIcon],svg[ph-circle-wavy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.7 100c-3.5-3.6-7.1-7.4-8.3-10.3s-1.1-7.8-1.2-12.4c-.2-10-.3-22.5-9.2-31.3s-21.3-9-31.3-9.2c-4.6-.1-9.9-.1-12.4-1.2s-6.7-4.8-10.3-8.3c-7.1-6.8-15.9-15.3-28-15.3s-20.9 8.5-28 15.3c-3.6 3.5-7.4 7.1-10.3 8.3s-7.8 1.1-12.4 1.2c-10 .2-22.5.3-31.3 9.2s-9 21.3-9.2 31.3c-.1 4.6-.1 9.9-1.2 12.4s-4.8 6.7-8.3 10.3c-6.8 7.1-15.3 15.9-15.3 28s8.5 20.9 15.3 28c3.5 3.6 7.1 7.4 8.3 10.3s1.1 7.8 1.2 12.4c.2 10 .3 22.5 9.2 31.3s21.3 9 31.3 9.2c4.6.1 9.9.1 12.4 1.2s6.7 4.8 10.3 8.3c7.1 6.8 15.9 15.3 28 15.3s20.9-8.5 28-15.3c3.6-3.5 7.4-7.1 10.3-8.3s7.8-1.1 12.4-1.2c10-.2 22.5-.3 31.3-9.2s9-21.3 9.2-31.3c.1-4.6.1-9.9 1.2-12.4s4.8-6.7 8.3-10.3c6.8-7.1 15.3-15.9 15.3-28s-8.5-20.9-15.3-28Zm-17.3 39.3c-4.8 5.1-10.3 10.8-13.2 17.8s-2.9 14.2-3 21.3c-.1 5.4-.2 12.7-2.1 14.7s-9.3 2-14.7 2.1c-7.1.1-14.5.2-21.3 3s-12.7 8.4-17.8 13.2c-3.5 3.4-8.9 8.6-11.3 8.6s-7.8-5.2-11.3-8.6c-5.1-4.8-10.8-10.3-17.8-13.2s-14.2-2.9-21.3-3c-5.4-.1-12.7-.2-14.7-2.1s-2-9.3-2.1-14.7c-.1-7.1-.2-14.5-3-21.3s-8.4-12.7-13.2-17.8c-3.4-3.5-8.6-8.9-8.6-11.3s5.2-7.8 8.6-11.3c4.8-5.1 10.3-10.8 13.2-17.8s2.9-14.2 3-21.3c.1-5.4.2-12.7 2.1-14.7s9.3-2 14.7-2.1c7.1-.1 14.5-.2 21.3-3s12.7-8.4 17.8-13.2c3.5-3.4 8.9-8.6 11.3-8.6s7.8 5.2 11.3 8.6c5.1 4.8 10.8 10.3 17.8 13.2s14.2 2.9 21.3 3c5.4.1 12.7.2 14.7 2.1s2 9.3 2.1 14.7c.1 7.1.2 14.5 3 21.3s8.4 12.7 13.2 17.8c3.4 3.5 8.6 8.9 8.6 11.3s-5.2 7.8-8.6 11.3Z"></svg:path>`,
})
export class PhCircleWavyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyCheckIcon],svg[ph-circle-wavy-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-11.6 39.3c-4.8 5-9.7 10.2-12.4 16.5s-2.6 13.1-2.7 19.8s-.2 14.4-3.3 17.5s-10.4 3.2-17.5 3.3s-13.7.2-19.8 2.7s-11.5 7.6-16.5 12.4S132 224 128 224s-9.1-4.9-14.1-9.7s-10.2-9.7-16.5-12.4s-13.1-2.6-19.8-2.7s-14.4-.2-17.5-3.3s-3.2-10.4-3.3-17.5s-.2-13.7-2.7-19.8s-7.6-11.5-12.4-16.5S32 132 32 128s4.9-9.1 9.7-14.1s9.7-10.2 12.4-16.5s2.6-13.1 2.7-19.8s.2-14.4 3.3-17.5s10.4-3.2 17.5-3.3s13.7-.2 19.8-2.7s11.5-7.6 16.5-12.4S124 32 128 32s9.1 4.9 14.1 9.7s10.2 9.7 16.5 12.4s13.1 2.6 19.8 2.7s14.4.2 17.5 3.3s3.2 10.4 3.3 17.5s.2 13.7 2.7 19.8s7.6 11.5 12.4 16.5S224 124 224 128s-4.9 9.1-9.7 14.1Zm-36.5-43.6a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3Z"></svg:path>`,
})
export class PhCircleWavyCheckIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyCheckBoldIcon],svg[ph-circle-wavy-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.7 100c-3.5-3.6-7.1-7.4-8.3-10.3s-1.1-7.8-1.2-12.4c-.2-10-.3-22.5-9.2-31.3s-21.3-9-31.3-9.2c-4.6-.1-9.9-.1-12.4-1.2s-6.7-4.8-10.3-8.3c-7.1-6.8-15.9-15.3-28-15.3s-20.9 8.5-28 15.3c-3.6 3.5-7.4 7.1-10.3 8.3s-7.8 1.1-12.4 1.2c-10 .2-22.5.3-31.3 9.2s-9 21.3-9.2 31.3c-.1 4.6-.1 9.9-1.2 12.4s-4.8 6.7-8.3 10.3c-6.8 7.1-15.3 15.9-15.3 28s8.5 20.9 15.3 28c3.5 3.6 7.1 7.4 8.3 10.3s1.1 7.8 1.2 12.4c.2 10 .3 22.5 9.2 31.3s21.3 9 31.3 9.2c4.6.1 9.9.1 12.4 1.2s6.7 4.8 10.3 8.3c7.1 6.8 15.9 15.3 28 15.3s20.9-8.5 28-15.3c3.6-3.5 7.4-7.1 10.3-8.3s7.8-1.1 12.4-1.2c10-.2 22.5-.3 31.3-9.2s9-21.3 9.2-31.3c.1-4.6.1-9.9 1.2-12.4s4.8-6.7 8.3-10.3c6.8-7.1 15.3-15.9 15.3-28s-8.5-20.9-15.3-28Zm-17.3 39.3c-4.8 5.1-10.3 10.8-13.2 17.8s-2.9 14.2-3 21.3c-.1 5.3-.2 12.7-2.1 14.7s-9.3 2-14.7 2.1c-7.1.1-14.5.2-21.3 3s-12.7 8.4-17.8 13.2c-3.5 3.4-8.9 8.6-11.3 8.6s-7.8-5.2-11.3-8.6c-5.1-4.8-10.8-10.3-17.8-13.2s-14.2-2.9-21.3-3c-5.3-.1-12.7-.2-14.7-2.1s-2-9.4-2.1-14.7c-.1-7.1-.2-14.5-3-21.3s-8.4-12.7-13.2-17.8c-3.4-3.5-8.6-8.9-8.6-11.3s5.2-7.8 8.6-11.3c4.8-5.1 10.3-10.8 13.2-17.8s2.9-14.2 3-21.3c.1-5.4.2-12.7 2.1-14.7s9.4-2 14.7-2.1c7.1-.1 14.5-.2 21.3-3s12.7-8.4 17.8-13.2c3.5-3.4 8.9-8.6 11.3-8.6s7.8 5.2 11.3 8.6c5.1 4.8 10.8 10.3 17.8 13.2s14.2 2.9 21.3 3c5.4.1 12.7.2 14.7 2.1s2 9.3 2.1 14.7c.1 7.1.2 14.5 3 21.3s8.4 12.7 13.2 17.8c3.4 3.5 8.6 8.9 8.6 11.3s-5.2 7.8-8.6 11.3Zm-30.7-43.6a12 12 0 0 1-.4 17l-58.7 56a12 12 0 0 1-8.3 3.3a12.2 12.2 0 0 1-8.3-3.3l-29.3-28a12 12 0 1 1 16.6-17.4l21 20.1l50.4-48.1a12 12 0 0 1 17 .4Z"></svg:path>`,
})
export class PhCircleWavyCheckBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyCheckDuotoneIcon],svg[ph-circle-wavy-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128c0 12.5-17.8 22-22.7 33.7s1.4 30.6-7.8 39.8s-28.5 3.1-39.8 7.8S140.5 232 128 232s-22-17.8-33.7-22.7s-30.6 1.4-39.8-7.8s-3.1-28.5-7.8-39.8S24 140.5 24 128s17.8-22 22.7-33.7s-1.4-30.6 7.8-39.8s28.5-3.1 39.8-7.8S115.5 24 128 24s22 17.8 33.7 22.7s30.6-1.4 39.8 7.8s3.1 28.5 7.8 39.8S232 115.5 232 128Z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-11.6 39.3c-4.8 5-9.7 10.2-12.4 16.5s-2.6 13.1-2.7 19.8s-.2 14.4-3.3 17.5s-10.4 3.2-17.5 3.3s-13.7.2-19.8 2.7s-11.5 7.6-16.5 12.4S132 224 128 224s-9.1-4.9-14.1-9.7s-10.2-9.7-16.5-12.4s-13.1-2.6-19.8-2.7s-14.4-.2-17.5-3.3s-3.2-10.4-3.3-17.5s-.2-13.7-2.7-19.8s-7.6-11.5-12.4-16.5S32 132 32 128s4.9-9.1 9.7-14.1s9.7-10.2 12.4-16.5s2.6-13.1 2.7-19.8s.2-14.4 3.3-17.5s10.4-3.2 17.5-3.3s13.7-.2 19.8-2.7s11.5-7.6 16.5-12.4S124 32 128 32s9.1 4.9 14.1 9.7s10.2 9.7 16.5 12.4s13.1 2.6 19.8 2.7s14.4.2 17.5 3.3s3.2 10.4 3.3 17.5s.2 13.7 2.7 19.8s7.6 11.5 12.4 16.5S224 124 224 128s-4.9 9.1-9.7 14.1Zm-36.5-43.6a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3Z"></svg:path>`,
})
export class PhCircleWavyCheckDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyCheckFillIcon],svg[ph-circle-wavy-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-48.4 7l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11 11.6Z"></svg:path>`,
})
export class PhCircleWavyCheckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyCheckLightIcon],svg[ph-circle-wavy-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.4 104.2c-3.9-4.1-7.9-8.3-9.5-12.2s-1.6-9-1.7-14.7c-.1-9.3-.3-20-7.4-27.1s-17.8-7.3-27.1-7.4c-5.7-.1-11.1-.2-14.7-1.7s-8.1-5.6-12.2-9.5C145.2 25.2 137.6 18 128 18s-17.2 7.2-23.8 13.6c-4.1 3.9-8.3 7.9-12.2 9.5s-9 1.6-14.7 1.7c-9.3.1-20 .3-27.1 7.4S42.9 68 42.8 77.3c-.1 5.7-.2 11.1-1.7 14.7s-5.6 8.1-9.5 12.2C25.2 110.8 18 118.4 18 128s7.2 17.2 13.6 23.8c3.9 4.1 7.9 8.3 9.5 12.2s1.6 9 1.7 14.7c.1 9.3.3 20 7.4 27.1s17.8 7.3 27.1 7.4c5.7.1 11.1.2 14.7 1.7s8.1 5.6 12.2 9.5c6.6 6.4 14.2 13.6 23.8 13.6s17.2-7.2 23.8-13.6c4.1-3.9 8.3-7.9 12.2-9.5s9-1.6 14.7-1.7c9.3-.1 20-.3 27.1-7.4s7.3-17.8 7.4-27.1c.1-5.7.2-11.1 1.7-14.7s5.6-8.1 9.5-12.2c6.4-6.6 13.6-14.2 13.6-23.8s-7.2-17.2-13.6-23.8Zm-8.6 39.3c-4.7 4.9-9.5 9.9-12 15.9s-2.5 12.5-2.6 19.1s-.2 15.1-3.9 18.8s-11.4 3.8-18.8 3.9s-13.4.2-19.1 2.6s-11 7.3-15.9 12S132.8 226 128 226s-10.2-5.2-15.5-10.2s-9.9-9.5-15.9-12s-12.5-2.5-19.1-2.6s-15.1-.2-18.8-3.9s-3.8-11.4-3.9-18.8s-.2-13.4-2.6-19.1s-7.3-11-12-15.9S30 132.8 30 128s5.2-10.2 10.2-15.5s9.5-9.9 12-15.9s2.5-12.5 2.6-19.1s.2-15.1 3.9-18.8s11.4-3.8 18.8-3.9s13.4-.2 19.1-2.6s11-7.3 15.9-12S123.2 30 128 30s10.2 5.2 15.5 10.2s9.9 9.5 15.9 12s12.5 2.5 19.1 2.6s15.1.2 18.8 3.9s3.8 11.4 3.9 18.8s.2 13.4 2.6 19.1s7.3 11 12 15.9S226 123.2 226 128s-5.2 10.2-10.2 15.5Zm-39.5-43.6a5.9 5.9 0 0 1-.2 8.4l-58.6 56a6.3 6.3 0 0 1-4.2 1.7a5.8 5.8 0 0 1-4.1-1.7l-29.3-28a5.9 5.9 0 0 1 8.2-8.6l25.2 24l54.6-52a5.9 5.9 0 0 1 8.4.2Z"></svg:path>`,
})
export class PhCircleWavyCheckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyCheckThinIcon],svg[ph-circle-wavy-check-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.6c-4.1-4.2-8.2-8.6-10-12.8s-1.7-9.5-1.8-15.4c-.1-9-.3-19.2-6.8-25.8s-16.8-6.7-25.8-6.8c-5.9-.1-11.4-.2-15.4-1.8s-8.6-5.9-12.8-10c-6.7-6.4-13.6-13-22.4-13s-15.7 6.6-22.4 13c-4.2 4.1-8.6 8.2-12.8 10s-9.5 1.7-15.4 1.8c-9 .1-19.2.3-25.8 6.8s-6.7 16.8-6.8 25.8c-.1 5.9-.2 11.4-1.8 15.4s-5.9 8.6-10 12.8c-6.4 6.7-13 13.6-13 22.4s6.6 15.7 13 22.4c4.1 4.2 8.2 8.6 10 12.8s1.7 9.5 1.8 15.4c.1 9 .3 19.2 6.8 25.8s16.8 6.7 25.8 6.8c5.9.1 11.4.2 15.4 1.8s8.6 5.9 12.8 10c6.7 6.4 13.6 13 22.4 13s15.7-6.6 22.4-13c4.2-4.1 8.6-8.2 12.8-10s9.5-1.7 15.4-1.8c9-.1 19.2-.3 25.8-6.8s6.7-16.8 6.8-25.8c.1-5.9.2-11.4 1.8-15.4s5.9-8.6 10-12.8c6.4-6.7 13-13.6 13-22.4s-6.6-15.7-13-22.4Zm-5.8 39.3c-4.5 4.7-9.2 9.6-11.6 15.3s-2.3 11.9-2.4 18.3c-.1 8.2-.2 16-4.5 20.2s-12 4.4-20.2 4.5c-6.4.1-13 .2-18.3 2.4s-10.6 7.1-15.3 11.6S133.6 228 128 228s-11.1-5.2-16.9-10.8s-9.6-9.2-15.3-11.6s-11.9-2.3-18.3-2.4c-8.2-.1-16-.2-20.2-4.5s-4.4-12-4.5-20.2c-.1-6.4-.2-13-2.4-18.3s-7.1-10.6-11.6-15.3S28 133.6 28 128s5.2-11.1 10.8-16.9s9.2-9.6 11.6-15.3s2.3-11.9 2.4-18.3c.1-8.2.2-16 4.5-20.2s12-4.4 20.2-4.5c6.4-.1 13-.2 18.3-2.4s10.6-7.1 15.3-11.6S122.4 28 128 28s11.1 5.2 16.9 10.8s9.6 9.2 15.3 11.6s11.9 2.3 18.3 2.4c8.2.1 16 .2 20.2 4.5s4.4 12 4.5 20.2c.1 6.4.2 13 2.4 18.3s7.1 10.6 11.6 15.3S228 122.4 228 128s-5.2 11.1-10.8 16.9Zm-42.3-43.7a4.1 4.1 0 0 1-.1 5.7l-58.7 56a4.3 4.3 0 0 1-2.8 1.1a3.9 3.9 0 0 1-2.7-1.1l-29.4-28a4 4 0 1 1 5.6-5.8l26.5 25.4l55.9-53.4a4.1 4.1 0 0 1 5.7.1Z"></svg:path>`,
})
export class PhCircleWavyCheckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyDuotoneIcon],svg[ph-circle-wavy-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128c0 12.5-17.8 22-22.7 33.7s1.4 30.6-7.8 39.8s-28.5 3.1-39.8 7.8S140.5 232 128 232s-22-17.8-33.7-22.7s-30.6 1.4-39.8-7.8s-3.1-28.5-7.8-39.8S24 140.5 24 128s17.8-22 22.7-33.7s-1.4-30.6 7.8-39.8s28.5-3.1 39.8-7.8S115.5 24 128 24s22 17.8 33.7 22.7s30.6-1.4 39.8 7.8s3.1 28.5 7.8 39.8S232 115.5 232 128Z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-11.6 39.3c-4.8 5-9.7 10.2-12.4 16.5s-2.6 13.1-2.7 19.8s-.2 14.4-3.3 17.5s-10.4 3.2-17.5 3.3s-13.7.2-19.8 2.7s-11.5 7.6-16.5 12.4S132 224 128 224s-9.1-4.9-14.1-9.7s-10.2-9.7-16.5-12.4s-13.1-2.6-19.8-2.7s-14.4-.2-17.5-3.3c-3.1-3.1-3.2-10.4-3.3-17.5s-.2-13.7-2.7-19.8s-7.6-11.5-12.4-16.5S32 132 32 128s4.9-9.1 9.7-14.1s9.7-10.2 12.4-16.5s2.6-13.1 2.7-19.8s.2-14.4 3.3-17.5s10.4-3.2 17.5-3.3s13.7-.2 19.8-2.7s11.5-7.6 16.5-12.4S124 32 128 32s9.1 4.9 14.1 9.7s10.2 9.7 16.5 12.4s13.1 2.6 19.8 2.7s14.4.2 17.5 3.3s3.2 10.4 3.3 17.5s.2 13.7 2.7 19.8s7.6 11.5 12.4 16.5S224 124 224 128s-4.9 9.1-9.7 14.1Z"></svg:path>`,
})
export class PhCircleWavyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyFillIcon],svg[ph-circle-wavy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 128c0 10.4-7.5 18.3-14.1 25.2c-3.8 3.9-7.7 8-9.2 11.5s-1.4 8.7-1.5 14c-.1 9.7-.3 20.8-8 28.5s-18.8 7.9-28.5 8c-5.3.1-10.7.2-14 1.5s-7.6 5.4-11.5 9.2c-6.9 6.6-14.8 14.1-25.2 14.1s-18.3-7.5-25.2-14.1c-3.9-3.8-8-7.7-11.5-9.2s-8.7-1.4-14-1.5c-9.7-.1-20.8-.3-28.5-8s-7.9-18.8-8-28.5c-.1-5.3-.2-10.7-1.5-14s-5.4-7.6-9.2-11.5C23.5 146.3 16 138.4 16 128s7.5-18.3 14.1-25.2c3.8-3.9 7.7-8 9.2-11.5s1.4-8.7 1.5-14c.1-9.7.3-20.8 8-28.5s18.8-7.9 28.5-8c5.3-.1 10.7-.2 14-1.5s7.6-5.4 11.5-9.2C109.7 23.5 117.6 16 128 16s18.3 7.5 25.2 14.1c3.9 3.8 8 7.7 11.5 9.2s8.7 1.4 14 1.5c9.7.1 20.8.3 28.5 8s7.9 18.8 8 28.5c.1 5.3.2 10.7 1.5 14s5.4 7.6 9.2 11.5c6.6 6.9 14.1 14.8 14.1 25.2Z"></svg:path>`,
})
export class PhCircleWavyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyLightIcon],svg[ph-circle-wavy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.4 104.2c-3.9-4.1-7.9-8.3-9.5-12.2s-1.6-9-1.7-14.7c-.1-9.3-.3-20-7.4-27.1s-17.8-7.3-27.1-7.4c-5.7-.1-11.1-.2-14.7-1.7s-8.1-5.6-12.2-9.5C145.2 25.2 137.6 18 128 18s-17.2 7.2-23.8 13.6c-4.1 3.9-8.3 7.9-12.2 9.5s-9 1.6-14.7 1.7c-9.3.1-20 .3-27.1 7.4S42.9 68 42.8 77.3c-.1 5.7-.2 11.1-1.7 14.7s-5.6 8.1-9.5 12.2C25.2 110.8 18 118.4 18 128s7.2 17.2 13.6 23.8c3.9 4.1 7.9 8.3 9.5 12.2s1.6 9 1.7 14.7c.1 9.3.3 20 7.4 27.1s17.8 7.3 27.1 7.4c5.7.1 11.1.2 14.7 1.7s8.1 5.6 12.2 9.5c6.6 6.4 14.2 13.6 23.8 13.6s17.2-7.2 23.8-13.6c4.1-3.9 8.3-7.9 12.2-9.5s9-1.6 14.7-1.7c9.3-.1 20-.3 27.1-7.4s7.3-17.8 7.4-27.1c.1-5.7.2-11.1 1.7-14.7s5.6-8.1 9.5-12.2c6.4-6.6 13.6-14.2 13.6-23.8s-7.2-17.2-13.6-23.8Zm-8.6 39.3c-4.7 4.9-9.5 9.9-12 15.9s-2.5 12.5-2.6 19.1s-.2 15.1-3.9 18.8s-11.4 3.8-18.8 3.9s-13.4.2-19.1 2.6s-11 7.3-15.9 12S132.8 226 128 226s-10.2-5.2-15.5-10.2s-9.9-9.5-15.9-12s-12.5-2.5-19.1-2.6s-15.1-.2-18.8-3.9s-3.8-11.4-3.9-18.8s-.2-13.4-2.6-19.1s-7.3-11-12-15.9S30 132.8 30 128s5.2-10.2 10.2-15.5s9.5-9.9 12-15.9s2.5-12.5 2.6-19.1s.2-15.1 3.9-18.8s11.4-3.8 18.8-3.9s13.4-.2 19.1-2.6s11-7.3 15.9-12S123.2 30 128 30s10.2 5.2 15.5 10.2s9.9 9.5 15.9 12s12.5 2.5 19.1 2.6s15.1.2 18.8 3.9s3.8 11.4 3.9 18.8s.2 13.4 2.6 19.1s7.3 11 12 15.9S226 123.2 226 128s-5.2 10.2-10.2 15.5Z"></svg:path>`,
})
export class PhCircleWavyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyQuestionIcon],svg[ph-circle-wavy-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-11.6 39.3c-4.8 5-9.7 10.2-12.4 16.5s-2.6 13.1-2.7 19.8s-.2 14.4-3.3 17.5s-10.4 3.2-17.5 3.3s-13.7.2-19.8 2.7s-11.5 7.6-16.5 12.4S132 224 128 224s-9.1-4.9-14.1-9.7s-10.2-9.7-16.5-12.4s-13.1-2.6-19.8-2.7s-14.4-.2-17.5-3.3s-3.2-10.4-3.3-17.5s-.2-13.7-2.7-19.8s-7.6-11.5-12.4-16.5S32 132 32 128s4.9-9.1 9.7-14.1s9.7-10.2 12.4-16.5s2.6-13.1 2.7-19.8s.2-14.4 3.3-17.5s10.4-3.2 17.5-3.3s13.7-.2 19.8-2.7s11.5-7.6 16.5-12.4S124 32 128 32s9.1 4.9 14.1 9.7s10.2 9.7 16.5 12.4s13.1 2.6 19.8 2.7s14.4.2 17.5 3.3s3.2 10.4 3.3 17.5s.2 13.7 2.7 19.8s7.6 11.5 12.4 16.5S224 124 224 128s-4.9 9.1-9.7 14.1ZM140 180a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm24-72a36 36 0 0 1-28 35.1v.9a8 8 0 0 1-16 0v-8a8 8 0 0 1 8-8a20 20 0 1 0-20-20a8 8 0 0 1-16 0a36 36 0 0 1 72 0Z"></svg:path>`,
})
export class PhCircleWavyQuestionIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyQuestionBoldIcon],svg[ph-circle-wavy-question-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.7 100c-3.5-3.6-7.1-7.4-8.3-10.3s-1.1-7.8-1.2-12.4c-.2-10-.3-22.5-9.2-31.3s-21.3-9-31.3-9.2c-4.6-.1-9.9-.1-12.4-1.2s-6.7-4.8-10.3-8.3c-7.1-6.8-15.9-15.3-28-15.3s-20.9 8.5-28 15.3c-3.6 3.5-7.4 7.1-10.3 8.3s-7.8 1.1-12.4 1.2c-10 .2-22.5.3-31.3 9.2s-9 21.3-9.2 31.3c-.1 4.6-.1 9.9-1.2 12.4s-4.8 6.7-8.3 10.3c-6.8 7.1-15.3 15.9-15.3 28s8.5 20.9 15.3 28c3.5 3.6 7.1 7.4 8.3 10.3s1.1 7.8 1.2 12.4c.2 10 .3 22.5 9.2 31.3s21.3 9 31.3 9.2c4.6.1 9.9.1 12.4 1.2s6.7 4.8 10.3 8.3c7.1 6.8 15.9 15.3 28 15.3s20.9-8.5 28-15.3c3.6-3.5 7.4-7.1 10.3-8.3s7.8-1.1 12.4-1.2c10-.2 22.5-.3 31.3-9.2s9-21.3 9.2-31.3c.1-4.6.1-9.9 1.2-12.4s4.8-6.7 8.3-10.3c6.8-7.1 15.3-15.9 15.3-28s-8.5-20.9-15.3-28Zm-17.3 39.3c-4.8 5.1-10.3 10.8-13.2 17.8s-2.9 14.2-3 21.3c-.1 5.3-.2 12.7-2.1 14.7s-9.3 2-14.7 2.1c-7.1.1-14.5.2-21.3 3s-12.7 8.4-17.8 13.2c-3.5 3.4-8.9 8.6-11.3 8.6s-7.8-5.2-11.3-8.6c-5.1-4.8-10.8-10.3-17.8-13.2s-14.2-2.9-21.3-3c-5.3-.1-12.7-.2-14.7-2.1s-2-9.4-2.1-14.7c-.1-7.1-.2-14.5-3-21.3s-8.4-12.7-13.2-17.8c-3.4-3.5-8.6-8.9-8.6-11.3s5.2-7.8 8.6-11.3c4.8-5.1 10.3-10.8 13.2-17.8s2.9-14.2 3-21.3c.1-5.4.2-12.7 2.1-14.7s9.4-2 14.7-2.1c7.1-.1 14.5-.2 21.3-3s12.7-8.4 17.8-13.2c3.5-3.4 8.9-8.6 11.3-8.6s7.8 5.2 11.3 8.6c5.1 4.8 10.8 10.3 17.8 13.2s14.2 2.9 21.3 3c5.4.1 12.7.2 14.7 2.1s2 9.3 2.1 14.7c.1 7.1.2 14.5 3 21.3s8.4 12.7 13.2 17.8c3.4 3.5 8.6 8.9 8.6 11.3s-5.2 7.8-8.6 11.3ZM144 176a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm24-68a40 40 0 0 1-40 40a12 12 0 0 1 0-24a16 16 0 1 0-16-16a12 12 0 0 1-24 0a40 40 0 0 1 80 0Z"></svg:path>`,
})
export class PhCircleWavyQuestionBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyQuestionDuotoneIcon],svg[ph-circle-wavy-question-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128c0 12.5-17.8 22-22.7 33.7s1.4 30.6-7.8 39.8s-28.5 3.1-39.8 7.8S140.5 232 128 232s-22-17.8-33.7-22.7s-30.6 1.4-39.8-7.8s-3.1-28.5-7.8-39.8S24 140.5 24 128s17.8-22 22.7-33.7s-1.4-30.6 7.8-39.8s28.5-3.1 39.8-7.8S115.5 24 128 24s22 17.8 33.7 22.7s30.6-1.4 39.8 7.8s3.1 28.5 7.8 39.8S232 115.5 232 128Z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-11.6 39.3c-4.8 5-9.7 10.2-12.4 16.5s-2.6 13.1-2.7 19.8s-.2 14.4-3.3 17.5s-10.4 3.2-17.5 3.3s-13.7.2-19.8 2.7s-11.5 7.6-16.5 12.4S132 224 128 224s-9.1-4.9-14.1-9.7s-10.2-9.7-16.5-12.4s-13.1-2.6-19.8-2.7s-14.4-.2-17.5-3.3s-3.2-10.4-3.3-17.5s-.2-13.7-2.7-19.8s-7.6-11.5-12.4-16.5S32 132 32 128s4.9-9.1 9.7-14.1s9.7-10.2 12.4-16.5s2.6-13.1 2.7-19.8s.2-14.4 3.3-17.5s10.4-3.2 17.5-3.3s13.7-.2 19.8-2.7s11.5-7.6 16.5-12.4S124 32 128 32s9.1 4.9 14.1 9.7s10.2 9.7 16.5 12.4s13.1 2.6 19.8 2.7s14.4.2 17.5 3.3s3.2 10.4 3.3 17.5s.2 13.7 2.7 19.8s7.6 11.5 12.4 16.5S224 124 224 128s-4.9 9.1-9.7 14.1ZM140 180a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm24-72a36 36 0 0 1-28 35.1v.9a8 8 0 0 1-16 0v-8a8 8 0 0 1 8-8a20 20 0 1 0-20-20a8 8 0 0 1-16 0a36 36 0 0 1 72 0Z"></svg:path>`,
})
export class PhCircleWavyQuestionDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyQuestionFillIcon],svg[ph-circle-wavy-question-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2ZM128 192a12 12 0 1 1 12-12a12 12 0 0 1-12 12Zm8-48.9v.9a8 8 0 0 1-16 0v-8a8 8 0 0 1 8-8a20 20 0 1 0-20-20a8 8 0 0 1-16 0a36 36 0 1 1 44 35.1Z"></svg:path>`,
})
export class PhCircleWavyQuestionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyQuestionLightIcon],svg[ph-circle-wavy-question-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.4 104.2c-3.9-4.1-7.9-8.3-9.5-12.2s-1.6-9-1.7-14.7c-.1-9.3-.3-20-7.4-27.1s-17.8-7.3-27.1-7.4c-5.7-.1-11.1-.2-14.7-1.7s-8.1-5.6-12.2-9.5C145.2 25.2 137.6 18 128 18s-17.2 7.2-23.8 13.6c-4.1 3.9-8.3 7.9-12.2 9.5s-9 1.6-14.7 1.7c-9.3.1-20 .3-27.1 7.4S42.9 68 42.8 77.3c-.1 5.7-.2 11.1-1.7 14.7s-5.6 8.1-9.5 12.2C25.2 110.8 18 118.4 18 128s7.2 17.2 13.6 23.8c3.9 4.1 7.9 8.3 9.5 12.2s1.6 9 1.7 14.7c.1 9.3.3 20 7.4 27.1s17.8 7.3 27.1 7.4c5.7.1 11.1.2 14.7 1.7s8.1 5.6 12.2 9.5c6.6 6.4 14.2 13.6 23.8 13.6s17.2-7.2 23.8-13.6c4.1-3.9 8.3-7.9 12.2-9.5s9-1.6 14.7-1.7c9.3-.1 20-.3 27.1-7.4s7.3-17.8 7.4-27.1c.1-5.7.2-11.1 1.7-14.7s5.6-8.1 9.5-12.2c6.4-6.6 13.6-14.2 13.6-23.8s-7.2-17.2-13.6-23.8Zm-8.6 39.3c-4.7 4.9-9.5 9.9-12 15.9s-2.5 12.5-2.6 19.1s-.2 15.1-3.9 18.8s-11.4 3.8-18.8 3.9s-13.4.2-19.1 2.6s-11 7.3-15.9 12S132.8 226 128 226s-10.2-5.2-15.5-10.2s-9.9-9.5-15.9-12s-12.5-2.5-19.1-2.6s-15.1-.2-18.8-3.9s-3.8-11.4-3.9-18.8s-.2-13.4-2.6-19.1s-7.3-11-12-15.9S30 132.8 30 128s5.2-10.2 10.2-15.5s9.5-9.9 12-15.9s2.5-12.5 2.6-19.1s.2-15.1 3.9-18.8s11.4-3.8 18.8-3.9s13.4-.2 19.1-2.6s11-7.3 15.9-12S123.2 30 128 30s10.2 5.2 15.5 10.2s9.9 9.5 15.9 12s12.5 2.5 19.1 2.6s15.1.2 18.8 3.9s3.8 11.4 3.9 18.8s.2 13.4 2.6 19.1s7.3 11 12 15.9S226 123.2 226 128s-5.2 10.2-10.2 15.5ZM138 180a10 10 0 1 1-10-10a10 10 0 0 1 10 10Zm24-72a34.1 34.1 0 0 1-28 33.5v2.5a6 6 0 0 1-12 0v-8a6 6 0 0 1 6-6a22 22 0 1 0-22-22a6 6 0 0 1-12 0a34 34 0 0 1 68 0Z"></svg:path>`,
})
export class PhCircleWavyQuestionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyQuestionThinIcon],svg[ph-circle-wavy-question-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.6c-4.1-4.2-8.2-8.6-10-12.8s-1.7-9.5-1.8-15.4c-.1-9-.3-19.2-6.8-25.8s-16.8-6.7-25.8-6.8c-5.9-.1-11.4-.2-15.4-1.8s-8.6-5.9-12.8-10c-6.7-6.4-13.6-13-22.4-13s-15.7 6.6-22.4 13c-4.2 4.1-8.6 8.2-12.8 10s-9.5 1.7-15.4 1.8c-9 .1-19.2.3-25.8 6.8s-6.7 16.8-6.8 25.8c-.1 5.9-.2 11.4-1.8 15.4s-5.9 8.6-10 12.8c-6.4 6.7-13 13.6-13 22.4s6.6 15.7 13 22.4c4.1 4.2 8.2 8.6 10 12.8s1.7 9.5 1.8 15.4c.1 9 .3 19.2 6.8 25.8s16.8 6.7 25.8 6.8c5.9.1 11.4.2 15.4 1.8s8.6 5.9 12.8 10c6.7 6.4 13.6 13 22.4 13s15.7-6.6 22.4-13c4.2-4.1 8.6-8.2 12.8-10s9.5-1.7 15.4-1.8c9-.1 19.2-.3 25.8-6.8s6.7-16.8 6.8-25.8c.1-5.9.2-11.4 1.8-15.4s5.9-8.6 10-12.8c6.4-6.7 13-13.6 13-22.4s-6.6-15.7-13-22.4Zm-5.8 39.3c-4.5 4.7-9.2 9.6-11.6 15.3s-2.3 11.9-2.4 18.3c-.1 8.2-.2 16-4.5 20.2s-12 4.4-20.2 4.5c-6.4.1-13 .2-18.3 2.4s-10.6 7.1-15.3 11.6S133.6 228 128 228s-11.1-5.2-16.9-10.8s-9.6-9.2-15.3-11.6s-11.9-2.3-18.3-2.4c-8.2-.1-16-.2-20.2-4.5s-4.4-12-4.5-20.2c-.1-6.4-.2-13-2.4-18.3s-7.1-10.6-11.6-15.3S28 133.6 28 128s5.2-11.1 10.8-16.9s9.2-9.6 11.6-15.3s2.3-11.9 2.4-18.3c.1-8.2.2-16 4.5-20.2s12-4.4 20.2-4.5c6.4-.1 13-.2 18.3-2.4s10.6-7.1 15.3-11.6S122.4 28 128 28s11.1 5.2 16.9 10.8s9.6 9.2 15.3 11.6s11.9 2.3 18.3 2.4c8.2.1 16 .2 20.2 4.5s4.4 12 4.5 20.2c.1 6.4.2 13 2.4 18.3s7.1 10.6 11.6 15.3S228 122.4 228 128s-5.2 11.1-10.8 16.9ZM136 180a8 8 0 1 1-8-8a8 8 0 0 1 8 8Zm24-72a32.1 32.1 0 0 1-28 31.8v4.2a4 4 0 0 1-8 0v-8a4 4 0 0 1 4-4a24 24 0 1 0-24-24a4 4 0 0 1-8 0a32 32 0 0 1 64 0Z"></svg:path>`,
})
export class PhCircleWavyQuestionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyThinIcon],svg[ph-circle-wavy-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.6c-4.1-4.2-8.2-8.6-10-12.8s-1.7-9.5-1.8-15.4c-.1-9-.3-19.2-6.8-25.8s-16.8-6.7-25.8-6.8c-5.9-.1-11.4-.2-15.4-1.8s-8.6-5.9-12.8-10c-6.7-6.4-13.6-13-22.4-13s-15.7 6.6-22.4 13c-4.2 4.1-8.6 8.2-12.8 10s-9.5 1.7-15.4 1.8c-9 .1-19.2.3-25.8 6.8s-6.7 16.8-6.8 25.8c-.1 5.9-.2 11.4-1.8 15.4s-5.9 8.6-10 12.8c-6.4 6.7-13 13.6-13 22.4s6.6 15.7 13 22.4c4.1 4.2 8.2 8.6 10 12.8s1.7 9.5 1.8 15.4c.1 9 .3 19.2 6.8 25.8s16.8 6.7 25.8 6.8c5.9.1 11.4.2 15.4 1.8s8.6 5.9 12.8 10c6.7 6.4 13.6 13 22.4 13s15.7-6.6 22.4-13c4.2-4.1 8.6-8.2 12.8-10s9.5-1.7 15.4-1.8c9-.1 19.2-.3 25.8-6.8s6.7-16.8 6.8-25.8c.1-5.9.2-11.4 1.8-15.4s5.9-8.6 10-12.8c6.4-6.7 13-13.6 13-22.4s-6.6-15.7-13-22.4Zm-5.8 39.3c-4.5 4.7-9.2 9.6-11.6 15.3s-2.3 11.9-2.4 18.3c-.1 8.2-.2 16-4.5 20.2s-12 4.4-20.2 4.5c-6.4.1-13 .2-18.3 2.4s-10.6 7.1-15.3 11.6S133.6 228 128 228s-11.1-5.2-16.9-10.8s-9.6-9.2-15.3-11.6s-11.9-2.3-18.3-2.4c-8.2-.1-16-.2-20.2-4.5c-4.3-4.2-4.4-12-4.5-20.2c-.1-6.4-.2-13-2.4-18.3s-7.1-10.6-11.6-15.3S28 133.6 28 128s5.2-11.1 10.8-16.9s9.2-9.6 11.6-15.3s2.3-11.9 2.4-18.3c.1-8.2.2-16 4.5-20.2s12-4.4 20.2-4.5c6.4-.1 13-.2 18.3-2.4s10.6-7.1 15.3-11.6S122.4 28 128 28s11.1 5.2 16.9 10.8s9.6 9.2 15.3 11.6s11.9 2.3 18.3 2.4c8.2.1 16 .2 20.2 4.5s4.4 12 4.5 20.2c.1 6.4.2 13 2.4 18.3s7.1 10.6 11.6 15.3S228 122.4 228 128s-5.2 11.1-10.8 16.9Z"></svg:path>`,
})
export class PhCircleWavyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyWarningIcon],svg[ph-circle-wavy-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-11.6 39.3c-4.8 5-9.7 10.2-12.4 16.5s-2.6 13.1-2.7 19.8s-.2 14.4-3.3 17.5s-10.4 3.2-17.5 3.3s-13.7.2-19.8 2.7s-11.5 7.6-16.5 12.4S132 224 128 224s-9.1-4.9-14.1-9.7s-10.2-9.7-16.5-12.4s-13.1-2.6-19.8-2.7s-14.4-.2-17.5-3.3s-3.2-10.4-3.3-17.5s-.2-13.7-2.7-19.8s-7.6-11.5-12.4-16.5S32 132 32 128s4.9-9.1 9.7-14.1s9.7-10.2 12.4-16.5s2.6-13.1 2.7-19.8s.2-14.4 3.3-17.5s10.4-3.2 17.5-3.3s13.7-.2 19.8-2.7s11.5-7.6 16.5-12.4S124 32 128 32s9.1 4.9 14.1 9.7s10.2 9.7 16.5 12.4s13.1 2.6 19.8 2.7s14.4.2 17.5 3.3s3.2 10.4 3.3 17.5s.2 13.7 2.7 19.8s7.6 11.5 12.4 16.5S224 124 224 128s-4.9 9.1-9.7 14.1ZM120 136V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"></svg:path>`,
})
export class PhCircleWavyWarningIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyWarningBoldIcon],svg[ph-circle-wavy-warning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.7 100c-3.5-3.6-7.1-7.4-8.3-10.3s-1.1-7.8-1.2-12.4c-.2-10-.3-22.5-9.2-31.3s-21.3-9-31.3-9.2c-4.6-.1-9.9-.1-12.4-1.2s-6.7-4.8-10.3-8.3c-7.1-6.8-15.9-15.3-28-15.3s-20.9 8.5-28 15.3c-3.6 3.5-7.4 7.1-10.3 8.3s-7.8 1.1-12.4 1.2c-10 .2-22.5.3-31.3 9.2s-9 21.3-9.2 31.3c-.1 4.6-.1 9.9-1.2 12.4s-4.8 6.7-8.3 10.3c-6.8 7.1-15.3 15.9-15.3 28s8.5 20.9 15.3 28c3.5 3.6 7.1 7.4 8.3 10.3s1.1 7.8 1.2 12.4c.2 10 .3 22.5 9.2 31.3s21.3 9 31.3 9.2c4.6.1 9.9.1 12.4 1.2s6.7 4.8 10.3 8.3c7.1 6.8 15.9 15.3 28 15.3s20.9-8.5 28-15.3c3.6-3.5 7.4-7.1 10.3-8.3s7.8-1.1 12.4-1.2c10-.2 22.5-.3 31.3-9.2s9-21.3 9.2-31.3c.1-4.6.1-9.9 1.2-12.4s4.8-6.7 8.3-10.3c6.8-7.1 15.3-15.9 15.3-28s-8.5-20.9-15.3-28Zm-17.3 39.3c-4.8 5.1-10.3 10.8-13.2 17.8s-2.9 14.2-3 21.3c-.1 5.3-.2 12.7-2.1 14.7s-9.3 2-14.7 2.1c-7.1.1-14.5.2-21.3 3s-12.7 8.4-17.8 13.2c-3.5 3.4-8.9 8.6-11.3 8.6s-7.8-5.2-11.3-8.6c-5.1-4.8-10.8-10.3-17.8-13.2s-14.2-2.9-21.3-3c-5.3-.1-12.7-.2-14.7-2.1s-2-9.4-2.1-14.7c-.1-7.1-.2-14.5-3-21.3s-8.4-12.7-13.2-17.8c-3.4-3.5-8.6-8.9-8.6-11.3s5.2-7.8 8.6-11.3c4.8-5.1 10.3-10.8 13.2-17.8s2.9-14.2 3-21.3c.1-5.4.2-12.7 2.1-14.7s9.4-2 14.7-2.1c7.1-.1 14.5-.2 21.3-3s12.7-8.4 17.8-13.2c3.5-3.4 8.9-8.6 11.3-8.6s7.8 5.2 11.3 8.6c5.1 4.8 10.8 10.3 17.8 13.2s14.2 2.9 21.3 3c5.4.1 12.7.2 14.7 2.1s2 9.3 2.1 14.7c.1 7.1.2 14.5 3 21.3s8.4 12.7 13.2 17.8c3.4 3.5 8.6 8.9 8.6 11.3s-5.2 7.8-8.6 11.3ZM116 132V80a12 12 0 0 1 24 0v52a12 12 0 0 1-24 0Zm28 40a16 16 0 1 1-16-16a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class PhCircleWavyWarningBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyWarningDuotoneIcon],svg[ph-circle-wavy-warning-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128c0 12.5-17.8 22-22.7 33.7s1.4 30.6-7.8 39.8s-28.5 3.1-39.8 7.8S140.5 232 128 232s-22-17.8-33.7-22.7s-30.6 1.4-39.8-7.8s-3.1-28.5-7.8-39.8S24 140.5 24 128s17.8-22 22.7-33.7s-1.4-30.6 7.8-39.8s28.5-3.1 39.8-7.8S115.5 24 128 24s22 17.8 33.7 22.7s30.6-1.4 39.8 7.8s3.1 28.5 7.8 39.8S232 115.5 232 128Z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-11.6 39.3c-4.8 5-9.7 10.2-12.4 16.5s-2.6 13.1-2.7 19.8s-.2 14.4-3.3 17.5s-10.4 3.2-17.5 3.3s-13.7.2-19.8 2.7s-11.5 7.6-16.5 12.4S132 224 128 224s-9.1-4.9-14.1-9.7s-10.2-9.7-16.5-12.4s-13.1-2.6-19.8-2.7s-14.4-.2-17.5-3.3s-3.2-10.4-3.3-17.5s-.2-13.7-2.7-19.8s-7.6-11.5-12.4-16.5S32 132 32 128s4.9-9.1 9.7-14.1s9.7-10.2 12.4-16.5s2.6-13.1 2.7-19.8s.2-14.4 3.3-17.5s10.4-3.2 17.5-3.3s13.7-.2 19.8-2.7s11.5-7.6 16.5-12.4S124 32 128 32s9.1 4.9 14.1 9.7s10.2 9.7 16.5 12.4s13.1 2.6 19.8 2.7s14.4.2 17.5 3.3s3.2 10.4 3.3 17.5s.2 13.7 2.7 19.8s7.6 11.5 12.4 16.5S224 124 224 128s-4.9 9.1-9.7 14.1ZM120 136V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"></svg:path>`,
})
export class PhCircleWavyWarningDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyWarningFillIcon],svg[ph-circle-wavy-warning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2ZM120 80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm8 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"></svg:path>`,
})
export class PhCircleWavyWarningFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyWarningLightIcon],svg[ph-circle-wavy-warning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.4 104.2c-3.9-4.1-7.9-8.3-9.5-12.2s-1.6-9-1.7-14.7c-.1-9.3-.3-20-7.4-27.1s-17.8-7.3-27.1-7.4c-5.7-.1-11.1-.2-14.7-1.7s-8.1-5.6-12.2-9.5C145.2 25.2 137.6 18 128 18s-17.2 7.2-23.8 13.6c-4.1 3.9-8.3 7.9-12.2 9.5s-9 1.6-14.7 1.7c-9.3.1-20 .3-27.1 7.4S42.9 68 42.8 77.3c-.1 5.7-.2 11.1-1.7 14.7s-5.6 8.1-9.5 12.2C25.2 110.8 18 118.4 18 128s7.2 17.2 13.6 23.8c3.9 4.1 7.9 8.3 9.5 12.2s1.6 9 1.7 14.7c.1 9.3.3 20 7.4 27.1s17.8 7.3 27.1 7.4c5.7.1 11.1.2 14.7 1.7s8.1 5.6 12.2 9.5c6.6 6.4 14.2 13.6 23.8 13.6s17.2-7.2 23.8-13.6c4.1-3.9 8.3-7.9 12.2-9.5s9-1.6 14.7-1.7c9.3-.1 20-.3 27.1-7.4s7.3-17.8 7.4-27.1c.1-5.7.2-11.1 1.7-14.7s5.6-8.1 9.5-12.2c6.4-6.6 13.6-14.2 13.6-23.8s-7.2-17.2-13.6-23.8Zm-8.6 39.3c-4.7 4.9-9.5 9.9-12 15.9s-2.5 12.5-2.6 19.1s-.2 15.1-3.9 18.8s-11.4 3.8-18.8 3.9s-13.4.2-19.1 2.6s-11 7.3-15.9 12S132.8 226 128 226s-10.2-5.2-15.5-10.2s-9.9-9.5-15.9-12s-12.5-2.5-19.1-2.6s-15.1-.2-18.8-3.9s-3.8-11.4-3.9-18.8s-.2-13.4-2.6-19.1s-7.3-11-12-15.9S30 132.8 30 128s5.2-10.2 10.2-15.5s9.5-9.9 12-15.9s2.5-12.5 2.6-19.1s.2-15.1 3.9-18.8s11.4-3.8 18.8-3.9s13.4-.2 19.1-2.6s11-7.3 15.9-12S123.2 30 128 30s10.2 5.2 15.5 10.2s9.9 9.5 15.9 12s12.5 2.5 19.1 2.6s15.1.2 18.8 3.9s3.8 11.4 3.9 18.8s.2 13.4 2.6 19.1s7.3 11 12 15.9S226 123.2 226 128s-5.2 10.2-10.2 15.5ZM122 136V80a6 6 0 0 1 12 0v56a6 6 0 0 1-12 0Zm16 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10Z"></svg:path>`,
})
export class PhCircleWavyWarningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircleWavyWarningThinIcon],svg[ph-circle-wavy-warning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.6c-4.1-4.2-8.2-8.6-10-12.8s-1.7-9.5-1.8-15.4c-.1-9-.3-19.2-6.8-25.8s-16.8-6.7-25.8-6.8c-5.9-.1-11.4-.2-15.4-1.8s-8.6-5.9-12.8-10c-6.7-6.4-13.6-13-22.4-13s-15.7 6.6-22.4 13c-4.2 4.1-8.6 8.2-12.8 10s-9.5 1.7-15.4 1.8c-9 .1-19.2.3-25.8 6.8s-6.7 16.8-6.8 25.8c-.1 5.9-.2 11.4-1.8 15.4s-5.9 8.6-10 12.8c-6.4 6.7-13 13.6-13 22.4s6.6 15.7 13 22.4c4.1 4.2 8.2 8.6 10 12.8s1.7 9.5 1.8 15.4c.1 9 .3 19.2 6.8 25.8s16.8 6.7 25.8 6.8c5.9.1 11.4.2 15.4 1.8s8.6 5.9 12.8 10c6.7 6.4 13.6 13 22.4 13s15.7-6.6 22.4-13c4.2-4.1 8.6-8.2 12.8-10s9.5-1.7 15.4-1.8c9-.1 19.2-.3 25.8-6.8s6.7-16.8 6.8-25.8c.1-5.9.2-11.4 1.8-15.4s5.9-8.6 10-12.8c6.4-6.7 13-13.6 13-22.4s-6.6-15.7-13-22.4Zm-5.8 39.3c-4.5 4.7-9.2 9.6-11.6 15.3s-2.3 11.9-2.4 18.3c-.1 8.2-.2 16-4.5 20.2s-12 4.4-20.2 4.5c-6.4.1-13 .2-18.3 2.4s-10.6 7.1-15.3 11.6S133.6 228 128 228s-11.1-5.2-16.9-10.8s-9.6-9.2-15.3-11.6s-11.9-2.3-18.3-2.4c-8.2-.1-16-.2-20.2-4.5s-4.4-12-4.5-20.2c-.1-6.4-.2-13-2.4-18.3s-7.1-10.6-11.6-15.3S28 133.6 28 128s5.2-11.1 10.8-16.9s9.2-9.6 11.6-15.3s2.3-11.9 2.4-18.3c.1-8.2.2-16 4.5-20.2s12-4.4 20.2-4.5c6.4-.1 13-.2 18.3-2.4s10.6-7.1 15.3-11.6S122.4 28 128 28s11.1 5.2 16.9 10.8s9.6 9.2 15.3 11.6s11.9 2.3 18.3 2.4c8.2.1 16 .2 20.2 4.5s4.4 12 4.5 20.2c.1 6.4.2 13 2.4 18.3s7.1 10.6 11.6 15.3S228 122.4 228 128s-5.2 11.1-10.8 16.9ZM124 136V80a4 4 0 0 1 8 0v56a4 4 0 0 1-8 0Zm12 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhCircleWavyWarningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesFourIcon],svg[ph-circles-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 40a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96 16a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-64a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-96 80a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96-64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhCirclesFourIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesFourBoldIcon],svg[ph-circles-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78 36a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18m100 24a42 42 0 1 0-42-42a42 42 0 0 0 42 42m0-60a18 18 0 1 1-18 18a18 18 0 0 1 18-18M78 136a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18m100-60a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhCirclesFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesFourDuotoneIcon],svg[ph-circles-four-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M112 80a32 32 0 1 1-32-32a32 32 0 0 1 32 32m64 32a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-96 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32m96 0a32 32 0 1 0 32 32a32 32 0 0 0-32-32" opacity=".2"></svg:path><svg:path d="M80 40a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96 16a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-64a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-96 80a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96-64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path></svg:g>`,
})
export class PhCirclesFourDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesFourFillIcon],svg[ph-circles-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 80a40 40 0 1 1-40-40a40 40 0 0 1 40 40m56 40a40 40 0 1 0-40-40a40 40 0 0 0 40 40m-96 16a40 40 0 1 0 40 40a40 40 0 0 0-40-40m96 0a40 40 0 1 0 40 40a40 40 0 0 0-40-40"></svg:path>`,
})
export class PhCirclesFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesFourLightIcon],svg[ph-circles-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 42a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m96 12a38 38 0 1 0-38-38a38 38 0 0 0 38 38m0-64a26 26 0 1 1-26 26a26 26 0 0 1 26-26m-96 84a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m96-64a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhCirclesFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesFourThinIcon],svg[ph-circles-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 44a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m96 8a36 36 0 1 0-36-36a36 36 0 0 0 36 36m0-64a28 28 0 1 1-28 28a28 28 0 0 1 28-28m-96 88a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m96-64a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhCirclesFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreeIcon],svg[ph-circles-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 76a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44m-44 28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m60 24a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28M68 128a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhCirclesThreeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreeBoldIcon],svg[ph-circles-three-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 76a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48m-48 24a24 24 0 1 1 24-24a24 24 0 0 1-24 24m60 24a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24M68 124a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhCirclesThreeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreeDuotoneIcon],svg[ph-circles-three-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 112a36 36 0 1 1 36-36a36 36 0 0 1-36 36m60 24a36 36 0 1 0 36 36a36 36 0 0 0-36-36m-120 0a36 36 0 1 0 36 36a36 36 0 0 0-36-36" opacity=".2"></svg:path><svg:path d="M172 76a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44m-44 28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m60 24a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28M68 128a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path></svg:g>`,
})
export class PhCirclesThreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreeFillIcon],svg[ph-circles-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 120a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44m60 8a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m-120 0a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44"></svg:path>`,
})
export class PhCirclesThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreeLightIcon],svg[ph-circles-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170 76a42 42 0 1 0-42 42a42 42 0 0 0 42-42m-42 30a30 30 0 1 1 30-30a30 30 0 0 1-30 30m60 24a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 72a30 30 0 1 1 30-30a30 30 0 0 1-30 30M68 130a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 72a30 30 0 1 1 30-30a30 30 0 0 1-30 30"></svg:path>`,
})
export class PhCirclesThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreePlusIcon],svg[ph-circles-three-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 40a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96 16a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-64a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-96 80a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m136-24a8 8 0 0 1-8 8h-24v24a8 8 0 0 1-16 0v-24h-24a8 8 0 0 1 0-16h24v-24a8 8 0 0 1 16 0v24h24a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCirclesThreePlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreePlusBoldIcon],svg[ph-circles-three-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78 36a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18m100 24a42 42 0 1 0-42-42a42 42 0 0 0 42 42m0-60a18 18 0 1 1-18 18a18 18 0 0 1 18-18M78 136a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18m142-18a12 12 0 0 1-12 12h-18v18a12 12 0 0 1-24 0v-18h-18a12 12 0 0 1 0-24h18v-18a12 12 0 0 1 24 0v18h18a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCirclesThreePlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreePlusDuotoneIcon],svg[ph-circles-three-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M112 80a32 32 0 1 1-32-32a32 32 0 0 1 32 32m64-32a32 32 0 1 0 32 32a32 32 0 0 0-32-32m-96 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32" opacity=".2"></svg:path><svg:path d="M80 40a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96 16a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-64a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-96 80a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m136-24a8 8 0 0 1-8 8h-24v24a8 8 0 0 1-16 0v-24h-24a8 8 0 0 1 0-16h24v-24a8 8 0 0 1 16 0v24h24a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCirclesThreePlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreePlusFillIcon],svg[ph-circles-three-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 80a40 40 0 1 1-40-40a40 40 0 0 1 40 40m56 40a40 40 0 1 0-40-40a40 40 0 0 0 40 40m-96 16a40 40 0 1 0 40 40a40 40 0 0 0-40-40m128 32h-24v-24a8 8 0 0 0-16 0v24h-24a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0v-24h24a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhCirclesThreePlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreePlusLightIcon],svg[ph-circles-three-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 42a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m96 12a38 38 0 1 0-38-38a38 38 0 0 0 38 38m0-64a26 26 0 1 1-26 26a26 26 0 0 1 26-26m-96 84a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m134-26a6 6 0 0 1-6 6h-26v26a6 6 0 0 1-12 0v-26h-26a6 6 0 0 1 0-12h26v-26a6 6 0 0 1 12 0v26h26a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCirclesThreePlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreePlusThinIcon],svg[ph-circles-three-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 44a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m96 8a36 36 0 1 0-36-36a36 36 0 0 0 36 36m0-64a28 28 0 1 1-28 28a28 28 0 0 1 28-28m-96 88a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m132-28a4 4 0 0 1-4 4h-28v28a4 4 0 0 1-8 0v-28h-28a4 4 0 0 1 0-8h28v-28a4 4 0 0 1 8 0v28h28a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCirclesThreePlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreeThinIcon],svg[ph-circles-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 76a40 40 0 1 0-40 40a40 40 0 0 0 40-40m-40 32a32 32 0 1 1 32-32a32 32 0 0 1-32 32m60 24a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 72a32 32 0 1 1 32-32a32 32 0 0 1-32 32M68 132a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 72a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class PhCirclesThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircuitryIcon],svg[ph-circuitry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M88 160a8 8 0 1 1-8 8a8 8 0 0 1 8-8M48 48h32v97.38a24 24 0 1 0 16 0v-30.07l48 48V208H48Zm160 160h-48v-48a8 8 0 0 0-2.34-5.66L96 92.69V48h32v24a8 8 0 0 0 2.34 5.66l16 16A23.74 23.74 0 0 0 144 104a24 24 0 1 0 24-24a23.74 23.74 0 0 0-10.34 2.35L144 68.69V48h64zM168 96a8 8 0 1 1-8 8a8 8 0 0 1 8-8"></svg:path>`,
})
export class PhCircuitryIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircuitryBoldIcon],svg[ph-circuitry-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M52 52h24v95.22a24 24 0 1 0 24 0V125l40 40v39H52Zm152 152h-40v-44a12 12 0 0 0-3.51-8.49L100 91V52h24v20a12 12 0 0 0 3.51 8.49l17.31 17.3a24 24 0 1 0 17-17L148 67V52h56Z"></svg:path>`,
})
export class PhCircuitryBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircuitryDuotoneIcon],svg[ph-circuitry-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40H48a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8M88 184a16 16 0 1 1 16-16a16 16 0 0 1-16 16m80-64a16 16 0 1 1 16-16a16 16 0 0 1-16 16" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M88 160a8 8 0 1 1-8 8a8 8 0 0 1 8-8M48 48h32v97.38a24 24 0 1 0 16 0v-30.07l48 48V208H48Zm160 160h-48v-48a8 8 0 0 0-2.34-5.66L96 92.69V48h32v24a8 8 0 0 0 2.34 5.66l16 16A23.74 23.74 0 0 0 144 104a24 24 0 1 0 24-24a23.74 23.74 0 0 0-10.34 2.35L144 68.69V48h64zM168 96a8 8 0 1 1-8 8a8 8 0 0 1 8-8"></svg:path></svg:g>`,
})
export class PhCircuitryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircuitryFillIcon],svg[ph-circuitry-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m88 111.31l48 48V220a4 4 0 0 1-4 4H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h20a4 4 0 0 1 4 4v117.38a24 24 0 1 0 16 0ZM80 184a8 8 0 1 0-8-8a8 8 0 0 0 8 8m104-80a8 8 0 1 0-8 8a8 8 0 0 0 8-8m24-72h-52a4 4 0 0 0-4 4v32.69l13.66 13.66a24 24 0 1 1-11.31 11.31l-16-16A8 8 0 0 1 136 72V36a4 4 0 0 0-4-4H92a4 4 0 0 0-4 4v52.69l61.66 61.65A8 8 0 0 1 152 156v64a4 4 0 0 0 4 4h52a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhCircuitryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircuitryLightIcon],svg[ph-circuitry-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M88 158a10 10 0 1 1-10 10a10 10 0 0 1 10-10m-42 50V48a2 2 0 0 1 2-2h34v100.84a22 22 0 1 0 12 0v-36.35l52 52V210H48a2 2 0 0 1-2-2m164 0a2 2 0 0 1-2 2h-50v-50a6 6 0 0 0-1.76-4.24L94 93.51V46h36v26a6 6 0 0 0 1.76 4.24l17 17a22 22 0 1 0 8.48-8.48L142 69.51V46h66a2 2 0 0 1 2 2ZM168 94a10 10 0 1 1-10 10a10 10 0 0 1 10-10"></svg:path>`,
})
export class PhCircuitryLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCircuitryThinIcon],svg[ph-circuitry-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M88 156a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-44 52V48a4 4 0 0 1 4-4h36v104.4a20 20 0 1 0 8 0v-42.74l56 56V212H48a4 4 0 0 1-4-4m168 0a4 4 0 0 1-4 4h-52v-52a4 4 0 0 0-1.17-2.83L92 94.34V44h40v28a4 4 0 0 0 1.17 2.83L151.33 93a20 20 0 1 0 5.67-5.67l-17-17V44h68a4 4 0 0 1 4 4ZM168 92a12 12 0 1 1-12 12a12 12 0 0 1 12-12"></svg:path>`,
})
export class PhCircuitryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCityIcon],svg[ph-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 208h-8V88a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v40h-48V40a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v168h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M168 96h48v112h-48Zm-16 48v64h-48v-64ZM40 48h48v160H40Zm32 24v16a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0m0 48v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m0 48v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m48 16v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0m64 0v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0m0-48v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0"></svg:path>`,
})
export class PhCityIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCityBoldIcon],svg[ph-city-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 204h-4V88a12 12 0 0 0-12-12h-72a12 12 0 0 0-12 12v36h-24V40a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v164h-4a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24m-76-104h48v104h-48Zm-24 48v56h-24v-56ZM44 52h48v152H44Zm36 24v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0m0 48v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0m0 48v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0m96 8v-8a12 12 0 0 1 24 0v8a12 12 0 0 1-24 0m0-48v-8a12 12 0 0 1 24 0v8a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhCityBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCityDuotoneIcon],svg[ph-city-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 40h64v176H32Zm128 48v128h64V88Z" opacity=".2"></svg:path><svg:path d="M240 208h-8V88a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v40h-48V40a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v168h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M168 96h48v112h-48Zm-16 48v64h-48v-64ZM40 48h48v160H40Zm32 24v16a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0m0 48v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m0 48v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m48 16v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0m64 0v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0m0-48v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0"></svg:path></svg:g>`,
})
export class PhCityDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCityFillIcon],svg[ph-city-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 208h-8V88a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v40h-48V40a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v168h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M72 184a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-48a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-48a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0Zm64 96a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm64 0a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-48a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhCityFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCityLightIcon],svg[ph-city-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 210h-10V88a6 6 0 0 0-6-6h-64a6 6 0 0 0-6 6v42h-52V40a6 6 0 0 0-6-6H32a6 6 0 0 0-6 6v170H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M166 94h52v116h-52Zm-12 48v68h-52v-68ZM38 46h52v164H38Zm32 26v16a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0m0 48v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m0 48v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m52 16v-16a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0m64 0v-16a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0m0-48v-16a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0"></svg:path>`,
})
export class PhCityLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCityThinIcon],svg[ph-city-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 212h-12V88a4 4 0 0 0-4-4h-64a4 4 0 0 0-4 4v44h-56V40a4 4 0 0 0-4-4H32a4 4 0 0 0-4 4v172H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M164 92h56v120h-56Zm-8 48v72h-56v-72ZM36 44h56v168H36Zm32 28v16a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0m0 48v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0m0 48v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0m56 16v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0m64 0v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0m0-48v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0"></svg:path>`,
})
export class PhCityThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardIcon],svg[ph-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m72 184H56V48h26.75A47.9 47.9 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.9 47.9 0 0 0-2.75-16H200Z"></svg:path>`,
})
export class PhClipboardIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardBoldIcon],svg[ph-clipboard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 28h-34.53a51.88 51.88 0 0 0-74.94 0H56a20 20 0 0 0-20 20v168a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-44.29 32h-55.42a28 28 0 0 1 55.42 0M196 212H60V52h17.41A52 52 0 0 0 76 64v8a12 12 0 0 0 12 12h80a12 12 0 0 0 12-12v-8a52 52 0 0 0-1.41-12H196Z"></svg:path>`,
})
export class PhClipboardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardDuotoneIcon],svg[ph-clipboard-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 48v168a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h40a39.83 39.83 0 0 0-8 24v8h80v-8a39.83 39.83 0 0 0-8-24h40a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m72 184H56V48h26.75A47.9 47.9 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.9 47.9 0 0 0-2.75-16H200Z"></svg:path></svg:g>`,
})
export class PhClipboardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardFillIcon],svg[ph-clipboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32"></svg:path>`,
})
export class PhClipboardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardLightIcon],svg[ph-clipboard-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 34h-37.17a45.91 45.91 0 0 0-69.66 0H56a14 14 0 0 0-14 14v168a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m-72-4a34 34 0 0 1 34 34v2H94v-2a34 34 0 0 1 34-34m74 186a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h29.67A45.8 45.8 0 0 0 82 64v8a6 6 0 0 0 6 6h80a6 6 0 0 0 6-6v-8a45.8 45.8 0 0 0-3.67-18H200a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhClipboardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardTextIcon],svg[ph-clipboard-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 152a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8-40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m56-64v168a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h36.26a47.92 47.92 0 0 1 71.48 0H200a16 16 0 0 1 16 16M96 64h64a32 32 0 0 0-64 0m104-16h-26.75A47.9 47.9 0 0 1 176 64v8a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8v-8a47.9 47.9 0 0 1 2.75-16H56v168h144Z"></svg:path>`,
})
export class PhClipboardTextIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardTextBoldIcon],svg[ph-clipboard-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 164a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m-12-52H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m60-64v168a20 20 0 0 1-20 20H56a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h34.53a51.88 51.88 0 0 1 74.94 0H200a20 20 0 0 1 20 20M100.29 60h55.42a28 28 0 0 0-55.42 0M196 52h-17.41A52 52 0 0 1 180 64v8a12 12 0 0 1-12 12H88a12 12 0 0 1-12-12v-8a52 52 0 0 1 1.41-12H60v160h136Z"></svg:path>`,
})
export class PhClipboardTextBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardTextDuotoneIcon],svg[ph-clipboard-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 48v168a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h40a39.83 39.83 0 0 0-8 24v8h80v-8a39.83 39.83 0 0 0-8-24h40a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M168 152a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8-40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m56-64v168a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h36.26a47.92 47.92 0 0 1 71.48 0H200a16 16 0 0 1 16 16M96 64h64a32 32 0 0 0-64 0m104-16h-26.75A47.9 47.9 0 0 1 176 64v8a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8v-8a47.9 47.9 0 0 1 2.75-16H56v168h144Z"></svg:path></svg:g>`,
})
export class PhClipboardTextDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardTextFillIcon],svg[ph-clipboard-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m32 128H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhClipboardTextFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardTextLightIcon],svg[ph-clipboard-text-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 152a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6-38H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m54-66v168a14 14 0 0 1-14 14H56a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h37.17a45.91 45.91 0 0 1 69.66 0H200a14 14 0 0 1 14 14M94 64v2h68v-2a34 34 0 0 0-68 0m108-16a2 2 0 0 0-2-2h-29.67A45.8 45.8 0 0 1 174 64v8a6 6 0 0 1-6 6H88a6 6 0 0 1-6-6v-8a45.8 45.8 0 0 1 3.67-18H56a2 2 0 0 0-2 2v168a2 2 0 0 0 2 2h144a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhClipboardTextLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardTextThinIcon],svg[ph-clipboard-text-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 152a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4-36H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m52-68v168a12 12 0 0 1-12 12H56a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h38.08a44 44 0 0 1 67.84 0H200a12 12 0 0 1 12 12M92 64v4h72v-4a36 36 0 0 0-72 0m112-16a4 4 0 0 0-4-4h-32.83A43.7 43.7 0 0 1 172 64v8a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4v-8a43.7 43.7 0 0 1 4.83-20H56a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h144a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhClipboardTextThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClipboardThinIcon],svg[ph-clipboard-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 36h-38.08a44 44 0 0 0-67.84 0H56a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m-72-8a36 36 0 0 1 36 36v4H92v-4a36 36 0 0 1 36-36m76 188a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h32.83A43.7 43.7 0 0 0 84 64v8a4 4 0 0 0 4 4h80a4 4 0 0 0 4-4v-8a43.7 43.7 0 0 0-4.83-20H200a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhClipboardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockIcon],svg[ph-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhClockIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockAfternoonIcon],svg[ph-clock-afternoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-36.69l26.35 26.34a8 8 0 0 1-11.32 11.32l-40-40A8 8 0 0 1 128 120h56a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhClockAfternoonIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockAfternoonBoldIcon],svg[ph-clock-afternoon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m68-84a12 12 0 0 1-12 12h-27l19.52 19.51a12 12 0 0 1-17 17l-40-40A12 12 0 0 1 128 116h56a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhClockAfternoonBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockAfternoonDuotoneIcon],svg[ph-clock-afternoon-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-36.69l26.35 26.34a8 8 0 0 1-11.32 11.32l-40-40A8 8 0 0 1 128 120h56a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhClockAfternoonDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockAfternoonFillIcon],svg[ph-clock-afternoon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m56 112h-36.69l26.35 26.34a8 8 0 0 1-11.32 11.32l-40-40A8 8 0 0 1 128 120h56a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhClockAfternoonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockAfternoonLightIcon],svg[ph-clock-afternoon-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m62-90a6 6 0 0 1-6 6h-41.51l29.75 29.76a6 6 0 1 1-8.48 8.48l-40-40A6 6 0 0 1 128 122h56a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhClockAfternoonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockAfternoonThinIcon],svg[ph-clock-afternoon-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m60-92a4 4 0 0 1-4 4h-46.34l33.17 33.17a4 4 0 0 1-5.66 5.66l-40-40A4 4 0 0 1 128 124h56a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhClockAfternoonThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockBoldIcon],svg[ph-clock-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m68-84a12 12 0 0 1-12 12h-56a12 12 0 0 1-12-12V72a12 12 0 0 1 24 0v44h44a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhClockBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockClockwiseIcon],svg[ph-clock-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 80v43.47l36.12 21.67a8 8 0 0 1-8.24 13.72l-40-24A8 8 0 0 1 120 128V80a8 8 0 0 1 16 0m88-24a8 8 0 0 0-8 8v18c-6.35-7.36-12.83-14.45-20.12-21.83a96 96 0 1 0-2 137.7a8 8 0 0 0-11-11.64a80 80 0 1 1 1.66-114.83c8.14 8.24 15.27 16.18 22.46 24.6h-23a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhClockClockwiseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockClockwiseBoldIcon],svg[ph-clock-clockwise-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 80v41.21l34.17 20.5a12 12 0 1 1-12.34 20.58l-40-24A12 12 0 0 1 116 128V80a12 12 0 0 1 24 0m84-28a12 12 0 0 0-12 12v7.37c-4.21-4.67-8.58-9.31-13.29-14.08a100 100 0 1 0-2.07 143.44a12 12 0 0 0-16.48-17.46a76 76 0 1 1 1.53-109.06C187.61 80.2 193 86 198.23 92H184a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhClockClockwiseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockClockwiseDuotoneIcon],svg[ph-clock-clockwise-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity=".2"></svg:path><svg:path d="M136 80v43.47l36.12 21.67a8 8 0 0 1-8.24 13.72l-40-24A8 8 0 0 1 120 128V80a8 8 0 0 1 16 0m88-24a8 8 0 0 0-8 8v18c-6.35-7.36-12.83-14.45-20.12-21.83a96 96 0 1 0-2 137.7a8 8 0 0 0-11-11.64a80 80 0 1 1 1.66-114.83c8.14 8.24 15.27 16.18 22.46 24.6h-23a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhClockClockwiseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockClockwiseFillIcon],svg[ph-clock-clockwise-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 80v43.47l36.12 21.67a8 8 0 0 1-8.24 13.72l-40-24A8 8 0 0 1 120 128V80a8 8 0 0 1 16 0m91.06-23.39a8 8 0 0 0-8.72 1.73L206 70.71c-3.23-3.51-6.56-7-10.1-10.59a96 96 0 1 0-2 137.7a8 8 0 0 0-11-11.64a80 80 0 1 1 1.64-114.78c3.54 3.58 6.87 7.1 10.11 10.63l-16.31 16.31A8 8 0 0 0 184 112h40a8 8 0 0 0 8-8V64a8 8 0 0 0-4.94-7.39"></svg:path>`,
})
export class PhClockClockwiseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockClockwiseLightIcon],svg[ph-clock-clockwise-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 80v44.6l37.09 22.25a6 6 0 0 1-6.18 10.3l-40-24A6 6 0 0 1 122 128V80a6 6 0 0 1 12 0m90-22a6 6 0 0 0-6 6v23.36c-7.48-8.83-14.94-17.13-23.53-25.83a94 94 0 1 0-1.95 134.83a6 6 0 0 0-8.24-8.72A82 82 0 1 1 186 70c9.24 9.36 17.18 18.3 25.31 28H184a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6V64a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhClockClockwiseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockClockwiseThinIcon],svg[ph-clock-clockwise-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 80v45.74l38.06 22.83a4 4 0 0 1-4.12 6.86l-40-24A4 4 0 0 1 124 128V80a4 4 0 0 1 8 0m92-20a4 4 0 0 0-4 4v28.85C211.33 82.46 203 73 193.05 63a92 92 0 1 0-1.9 132a4 4 0 0 0-5.5-5.82a84 84 0 1 1 1.73-120.5C197.7 79 206.39 89 215.53 100H184a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhClockClockwiseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCountdownIcon],svg[ph-clock-countdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 136.66A104.12 104.12 0 1 1 119.34 24a8 8 0 0 1 1.32 16A88.12 88.12 0 1 0 216 135.34a8 8 0 0 1 16 1.32M120 72v56a8 8 0 0 0 8 8h56a8 8 0 0 0 0-16h-48V72a8 8 0 0 0-16 0m40-24a12 12 0 1 0-12-12a12 12 0 0 0 12 12m36 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12m24 36a12 12 0 1 0-12-12a12 12 0 0 0 12 12"></svg:path>`,
})
export class PhClockCountdownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCountdownBoldIcon],svg[ph-clock-countdown-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 137A108.13 108.13 0 1 1 119 20a12 12 0 0 1 2 24a84.12 84.12 0 1 0 91 91a12 12 0 1 1 24 2M116 76v52a12 12 0 0 0 12 12h52a12 12 0 0 0 0-24h-40V76a12 12 0 0 0-24 0m92 20a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-32-32a16 16 0 1 0-16-16a16 16 0 0 0 16 16"></svg:path>`,
})
export class PhClockCountdownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCountdownDuotoneIcon],svg[ph-clock-countdown-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M232 136.66A104.12 104.12 0 1 1 119.34 24a8 8 0 0 1 1.32 16A88.12 88.12 0 1 0 216 135.34a8 8 0 0 1 16 1.32M120 72v56a8 8 0 0 0 8 8h56a8 8 0 0 0 0-16h-48V72a8 8 0 0 0-16 0m40-24a12 12 0 1 0-12-12a12 12 0 0 0 12 12m36 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12m24 36a12 12 0 1 0-12-12a12 12 0 0 0 12 12"></svg:path></svg:g>`,
})
export class PhClockCountdownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCountdownFillIcon],svg[ph-clock-countdown-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 96a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-12-24a12 12 0 1 0-12-12a12 12 0 0 0 12 12m28.66 56a8 8 0 0 0-8.63 7.31A88.12 88.12 0 1 1 120.66 40a8 8 0 0 0-1.32-16A104.12 104.12 0 1 0 232 136.66a8 8 0 0 0-7.34-8.66M128 56a72 72 0 1 1-72 72a72.08 72.08 0 0 1 72-72m-8 72a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16h-40V80a8 8 0 0 0-16 0Zm40-80a12 12 0 1 0-12-12a12 12 0 0 0 12 12"></svg:path>`,
})
export class PhClockCountdownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCountdownLightIcon],svg[ph-clock-countdown-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 136.49A102.12 102.12 0 1 1 119.51 26a6 6 0 0 1 1 12A90.13 90.13 0 1 0 218 135.51a6 6 0 1 1 12 1ZM122 72v56a6 6 0 0 0 6 6h56a6 6 0 0 0 0-12h-50V72a6 6 0 0 0-12 0m38-26a10 10 0 1 0-10-10a10 10 0 0 0 10 10m36 24a10 10 0 1 0-10-10a10 10 0 0 0 10 10m24 36a10 10 0 1 0-10-10a10 10 0 0 0 10 10"></svg:path>`,
})
export class PhClockCountdownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCountdownThinIcon],svg[ph-clock-countdown-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 136.33A100.13 100.13 0 1 1 119.67 28a4 4 0 1 1 .66 8A92.13 92.13 0 1 0 220 135.67a4 4 0 1 1 8 .66M128 132h56a4 4 0 0 0 0-8h-52V72a4 4 0 0 0-8 0v56a4 4 0 0 0 4 4m32-88a8 8 0 1 0-8-8a8 8 0 0 0 8 8m36 24a8 8 0 1 0-8-8a8 8 0 0 0 8 8m24 36a8 8 0 1 0-8-8a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhClockCountdownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCounterClockwiseIcon],svg[ph-clock-counter-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 80v43.47l36.12 21.67a8 8 0 0 1-8.24 13.72l-40-24A8 8 0 0 1 120 128V80a8 8 0 0 1 16 0m-8-48a95.44 95.44 0 0 0-67.92 28.15C52.81 67.51 46.35 74.59 40 82V64a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16H49c7.15-8.42 14.27-16.35 22.39-24.57a80 80 0 1 1 1.66 114.75a8 8 0 1 0-11 11.64A96 96 0 1 0 128 32"></svg:path>`,
})
export class PhClockCounterClockwiseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCounterClockwiseBoldIcon],svg[ph-clock-counter-clockwise-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 80v41.21l34.17 20.5a12 12 0 1 1-12.34 20.58l-40-24A12 12 0 0 1 116 128V80a12 12 0 0 1 24 0m-12-52a99.38 99.38 0 0 0-70.76 29.34c-4.69 4.74-9 9.37-13.24 14V64a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24H57.77c5.23-6 10.6-11.78 16.49-17.74a76 76 0 1 1 1.58 109a12 12 0 0 0-16.48 17.46A100 100 0 1 0 128 28"></svg:path>`,
})
export class PhClockCounterClockwiseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCounterClockwiseDuotoneIcon],svg[ph-clock-counter-clockwise-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity=".2"></svg:path><svg:path d="M136 80v43.47l36.12 21.67a8 8 0 0 1-8.24 13.72l-40-24A8 8 0 0 1 120 128V80a8 8 0 0 1 16 0m-8-48a95.44 95.44 0 0 0-67.92 28.15C52.81 67.51 46.35 74.59 40 82V64a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16H49c7.15-8.42 14.27-16.35 22.39-24.57a80 80 0 1 1 1.66 114.75a8 8 0 1 0-11 11.64A96 96 0 1 0 128 32"></svg:path></svg:g>`,
})
export class PhClockCounterClockwiseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCounterClockwiseFillIcon],svg[ph-clock-counter-clockwise-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a96 96 0 0 1-161.89 69.82a8 8 0 1 1 11-11.64a80 80 0 1 0-1.68-114.75A439 439 0 0 0 61.35 82l16.31 16.34A8 8 0 0 1 72 112H32a8 8 0 0 1-8-8V64a8 8 0 0 1 13.66-5.66L50 70.7c3.22-3.49 6.54-7 10.06-10.55A96 96 0 0 1 224 128m-96-56a8 8 0 0 0-8 8v48a8 8 0 0 0 3.88 6.86l40 24a8 8 0 1 0 8.24-13.72L136 123.47V80a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhClockCounterClockwiseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCounterClockwiseLightIcon],svg[ph-clock-counter-clockwise-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 80v44.6l37.09 22.25a6 6 0 0 1-6.18 10.3l-40-24A6 6 0 0 1 122 128V80a6 6 0 0 1 12 0m-6-46a93.4 93.4 0 0 0-66.49 27.56c-8.58 8.68-16 17-23.51 25.8V64a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6h40a6 6 0 0 0 0-12H44.73C52.86 88.29 60.79 79.35 70 70a82 82 0 1 1 1.7 117.62a6 6 0 1 0-8.24 8.72A94 94 0 1 0 128 34"></svg:path>`,
})
export class PhClockCounterClockwiseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockCounterClockwiseThinIcon],svg[ph-clock-counter-clockwise-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 80v45.74l38.06 22.83a4 4 0 0 1-4.12 6.86l-40-24A4 4 0 0 1 124 128V80a4 4 0 0 1 8 0m-4-44a91.42 91.42 0 0 0-65.07 27C53.05 73 44.66 82.47 36 92.86V64a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4h40a4 4 0 0 0 0-8H40.47C49.61 89 58.3 79 68.6 68.6a84 84 0 1 1 1.75 120.49a4 4 0 1 0-5.5 5.82A92 92 0 1 0 128 36"></svg:path>`,
})
export class PhClockCounterClockwiseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockDuotoneIcon],svg[ph-clock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhClockDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockFillIcon],svg[ph-clock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m56 112h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhClockFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockLightIcon],svg[ph-clock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m62-90a6 6 0 0 1-6 6h-56a6 6 0 0 1-6-6V72a6 6 0 0 1 12 0v50h50a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhClockLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockThinIcon],svg[ph-clock-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m60-92a4 4 0 0 1-4 4h-56a4 4 0 0 1-4-4V72a4 4 0 0 1 8 0v52h52a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhClockThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockUserIcon],svg[ph-clock-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 72v43.05l36.42-18.21a8 8 0 0 1 7.16 14.31l-48 24A8 8 0 0 1 120 128V72a8 8 0 0 1 16 0m-8 144a88 88 0 1 1 88-88a8 8 0 0 0 16 0a104 104 0 1 0-104 104a8 8 0 0 0 0-16m103.73 5.94a8 8 0 1 1-15.46 4.11C213.44 215.42 203.46 208 192 208s-21.44 7.42-24.27 18.05A8 8 0 0 1 160 232a8.2 8.2 0 0 1-2.06-.27a8 8 0 0 1-5.67-9.79a40 40 0 0 1 17.11-23.32a32 32 0 1 1 45.23 0a40 40 0 0 1 17.12 23.32M176 176a16 16 0 1 0 16-16a16 16 0 0 0-16 16"></svg:path>`,
})
export class PhClockUserIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockUserBoldIcon],svg[ph-clock-user-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m181.36 114.73l-48 24A12 12 0 0 1 116 128V72a12 12 0 0 1 24 0v36.58l30.63-15.31a12 12 0 1 1 10.73 21.46m45.72 120.86a12 12 0 0 1-14.68-8.51C210 218.2 201.65 212 192 212s-18 6.2-20.4 15.08A12 12 0 0 1 160 236a11.8 11.8 0 0 1-3.09-.41a12 12 0 0 1-8.52-14.68a43.76 43.76 0 0 1 15.08-23a36 36 0 1 1 57 0a43.7 43.7 0 0 1 15.08 23a12 12 0 0 1-8.47 14.68M180 176a12 12 0 1 0 12-12a12 12 0 0 0-12 12m-62.52 35.35a84 84 0 1 1 93.87-93.87a12 12 0 1 0 23.81-3a108 108 0 1 0-120.65 120.68a11 11 0 0 0 1.5.1a12 12 0 0 0 1.47-23.91"></svg:path>`,
})
export class PhClockUserBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockUserDuotoneIcon],svg[ph-clock-user-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a95.6 95.6 0 0 1-9.09 40.82A24 24 0 1 0 191.5 200a33.15 33.15 0 0 0-29 17.6A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M136 72v43.05l36.42-18.21a8 8 0 0 1 7.16 14.31l-48 24A8 8 0 0 1 120 128V72a8 8 0 0 1 16 0m-8 144a88 88 0 1 1 88-88a8 8 0 0 0 16 0a104 104 0 1 0-104 104a8 8 0 0 0 0-16m103.73 5.94a8 8 0 1 1-15.46 4.11C213.44 215.42 203.46 208 192 208s-21.44 7.42-24.27 18.05A8 8 0 0 1 160 232a8.2 8.2 0 0 1-2.06-.27a8 8 0 0 1-5.67-9.79a40 40 0 0 1 17.11-23.32a32 32 0 1 1 45.23 0a40 40 0 0 1 17.12 23.32M176 176a16 16 0 1 0 16-16a16 16 0 0 0-16 16"></svg:path></svg:g>`,
})
export class PhClockUserDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockUserFillIcon],svg[ph-clock-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 72v43.06l36.42-18.22a8 8 0 1 1 7.16 14.32l-48 24A8 8 0 0 1 120 128V72a8 8 0 0 1 16 0m-8 144a88 88 0 1 1 88-88a8 8 0 0 0 16 0a104 104 0 1 0-104 104a8 8 0 0 0 0-16m86.62-17.38a32 32 0 1 0-45.24 0A40 40 0 0 0 152.27 222a8 8 0 0 0 7.73 10h64a8 8 0 0 0 7.73-10.06a40 40 0 0 0-17.11-23.32"></svg:path>`,
})
export class PhClockUserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockUserLightIcon],svg[ph-clock-user-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 72v46.29l39.32-19.66a6 6 0 0 1 5.36 10.74l-48 24A6 6 0 0 1 122 128V72a6 6 0 0 1 12 0m-6 146a90 90 0 1 1 90-90a6 6 0 0 0 12 0a102 102 0 1 0-102 102a6 6 0 0 0 0-12m101.8 4.46a6 6 0 0 1-11.6 3.08C215.14 214 204.37 206 192 206s-23.14 8-26.2 19.54A6 6 0 0 1 160 230a6.3 6.3 0 0 1-1.54-.2a6 6 0 0 1-4.26-7.34A38.1 38.1 0 0 1 172.72 199a30 30 0 1 1 38.56 0a38.1 38.1 0 0 1 18.52 23.46M174 176a18 18 0 1 0 18-18a18 18 0 0 0-18 18"></svg:path>`,
})
export class PhClockUserLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClockUserThinIcon],svg[ph-clock-user-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 72v49.53l42.21-21.11a4 4 0 1 1 3.58 7.16l-48 24a4.05 4.05 0 0 1-1.79.42a4 4 0 0 1-4-4V72a4 4 0 0 1 8 0m-4 148a92 92 0 1 1 92-92a4 4 0 0 0 8 0a100 100 0 1 0-100 100a4 4 0 0 0 0-8m99.86 3a4 4 0 1 1-7.73 2.05c-3.29-12.37-14.86-21-28.13-21s-24.84 8.65-28.14 21a4 4 0 0 1-3.86 3a3.7 3.7 0 0 1-1-.14a4 4 0 0 1-2.84-4.89a36.24 36.24 0 0 1 20.34-23.72a28 28 0 1 1 31 0a36.2 36.2 0 0 1 20.36 23.7M192 196a20 20 0 1 0-20-20a20 20 0 0 0 20 20"></svg:path>`,
})
export class PhClockUserThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClosedCaptioningIcon],svg[ph-closed-captioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H32V64h192zm-105.08-40.29a8 8 0 0 1-2.92 10.93a40 40 0 1 1 0-69.28a8 8 0 1 1-8 13.85a24 24 0 1 0 0 41.58a8 8 0 0 1 10.92 2.92m80 0a8 8 0 0 1-2.92 10.93a40 40 0 1 1 0-69.28a8 8 0 1 1-8 13.85a24 24 0 1 0 0 41.58a8 8 0 0 1 10.92 2.92"></svg:path>`,
})
export class PhClosedCaptioningIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClosedCaptioningBoldIcon],svg[ph-closed-captioning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H36V68h184ZM52 128a44 44 0 0 1 66-38.11a12 12 0 0 1-12 20.78a20 20 0 1 0 0 34.66a12 12 0 1 1 12 20.77A44 44 0 0 1 52 128m80 0a44 44 0 0 1 66-38.11a12 12 0 0 1-12 20.78a20 20 0 1 0 0 34.66a12 12 0 1 1 12 20.77a44 44 0 0 1-66-38.1"></svg:path>`,
})
export class PhClosedCaptioningBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClosedCaptioningDuotoneIcon],svg[ph-closed-captioning-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 64v128a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H32V64h192zm-105.07-40.29a8 8 0 0 1-2.93 10.93a40 40 0 1 1 0-69.28a8 8 0 1 1-8 13.85a24 24 0 1 0 0 41.58a8 8 0 0 1 10.93 2.92m80 0a8 8 0 0 1-2.93 10.93a40 40 0 1 1 0-69.28a8 8 0 1 1-8 13.85a24 24 0 1 0 0 41.58a8 8 0 0 1 10.93 2.92"></svg:path></svg:g>`,
})
export class PhClosedCaptioningDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClosedCaptioningFillIcon],svg[ph-closed-captioning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M116 162.64a40 40 0 1 1 0-69.28a8 8 0 1 1-8 13.85a24 24 0 1 0 0 41.58a8 8 0 0 1 8 13.85m80 0a40 40 0 1 1 0-69.28a8 8 0 1 1-8 13.85a24 24 0 1 0 0 41.58a8 8 0 0 1 8 13.85"></svg:path>`,
})
export class PhClosedCaptioningFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClosedCaptioningLightIcon],svg[ph-closed-captioning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2Zm-108.81-39.29a6 6 0 0 1-2.19 8.2a38 38 0 1 1 0-65.82a6 6 0 1 1-6 10.38a26 26 0 1 0 0 45.05a6 6 0 0 1 8.19 2.19m80 0a6 6 0 0 1-2.19 8.2a38 38 0 1 1 0-65.82a6 6 0 1 1-6 10.38a26 26 0 1 0 0 45.05a6 6 0 0 1 8.19 2.19"></svg:path>`,
})
export class PhClosedCaptioningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClosedCaptioningThinIcon],svg[ph-closed-captioning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4Zm-112.54-38.29a4 4 0 0 1-1.46 5.47a36 36 0 1 1 0-62.36a4 4 0 0 1-4 6.92a28 28 0 1 0 0 48.52a4 4 0 0 1 5.46 1.45m80 0a4 4 0 0 1-1.46 5.47a36 36 0 1 1 0-62.36a4 4 0 0 1-4 6.92a28 28 0 1 0 0 48.52a4 4 0 0 1 5.46 1.45"></svg:path>`,
})
export class PhClosedCaptioningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudIcon],svg[ph-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 40a88.09 88.09 0 0 0-78.71 48.67A64 64 0 1 0 72 216h88a88 88 0 0 0 0-176m0 160H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.11A88 88 0 0 0 72 128a8 8 0 0 0 16 0a72 72 0 1 1 72 72"></svg:path>`,
})
export class PhCloudIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowDownIcon],svg[ph-cloud-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 128a87.34 87.34 0 0 1-17.6 52.81a8 8 0 1 1-12.8-9.62A71.34 71.34 0 0 0 232 128a72 72 0 0 0-144 0a8 8 0 0 1-16 0a88 88 0 0 1 3.29-23.88C74.2 104 73.1 104 72 104a48 48 0 0 0 0 96h24a8 8 0 0 1 0 16H72a64 64 0 1 1 9.29-127.32A88 88 0 0 1 248 128m-69.66 42.34L160 188.69V128a8 8 0 0 0-16 0v60.69l-18.34-18.35a8 8 0 0 0-11.32 11.32l32 32a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32"></svg:path>`,
})
export class PhCloudArrowDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowDownBoldIcon],svg[ph-cloud-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192.49 167.51a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L140 179v-51a12 12 0 0 1 24 0v51l11.51-11.52a12 12 0 0 1 16.98.03M160 36a92.08 92.08 0 0 0-81 48.37A68 68 0 1 0 72 220h12a12 12 0 0 0 0-24H72a44 44 0 0 1-1.81-87.95A91.7 91.7 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 0 1 136 0a67.3 67.3 0 0 1-7.25 30.59a12 12 0 1 0 21.42 10.82A91.1 91.1 0 0 0 252 128a92.1 92.1 0 0 0-92-92"></svg:path>`,
})
export class PhCloudArrowDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowDownDuotoneIcon],svg[ph-cloud-arrow-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128a80 80 0 0 1-80 80H72A56 56 0 1 1 85.92 97.74v.1A80 80 0 0 1 240 128" opacity=".2"></svg:path><svg:path d="M248 128a87.34 87.34 0 0 1-17.6 52.81a8 8 0 1 1-12.8-9.62A71.34 71.34 0 0 0 232 128a72 72 0 0 0-144 0a8 8 0 0 1-16 0a88 88 0 0 1 3.29-23.88C74.2 104 73.1 104 72 104a48 48 0 0 0 0 96h24a8 8 0 0 1 0 16H72a64 64 0 1 1 9.29-127.32A88 88 0 0 1 248 128m-69.66 42.34L160 188.69V128a8 8 0 0 0-16 0v60.69l-18.34-18.35a8 8 0 0 0-11.32 11.32l32 32a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32"></svg:path></svg:g>`,
})
export class PhCloudArrowDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowDownFillIcon],svg[ph-cloud-arrow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.93 124.52C246.11 77.54 207.07 40 160.06 40a88.1 88.1 0 0 0-78.77 48.67A87.5 87.5 0 0 0 72 127.73a8.18 8.18 0 0 1-7.43 8.27a8 8 0 0 1-8.57-8a103.7 103.7 0 0 1 5.34-32.92a4 4 0 0 0-4.75-5.18A64.09 64.09 0 0 0 8 152c0 35.19 29.75 64 65 64h87a88.09 88.09 0 0 0 87.93-91.48m-50.27 25.14l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L152 156.69V96a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCloudArrowDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowDownLightIcon],svg[ph-cloud-arrow-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 128a85.27 85.27 0 0 1-17.2 51.6a6 6 0 1 1-9.6-7.2A74 74 0 1 0 86 128a6 6 0 0 1-12 0a85.5 85.5 0 0 1 3.91-25.64A51 51 0 0 0 72 102a50 50 0 0 0 0 100h24a6 6 0 0 1 0 12H72A62 62 0 1 1 82.43 90.88A86 86 0 0 1 246 128m-66.24 43.76L158 193.51V128a6 6 0 0 0-12 0v65.51l-21.76-21.75a6 6 0 0 0-8.48 8.48l32 32a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48"></svg:path>`,
})
export class PhCloudArrowDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowDownThinIcon],svg[ph-cloud-arrow-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 128a83.28 83.28 0 0 1-16.8 50.4a4 4 0 1 1-6.4-4.8A76 76 0 1 0 84 128a4 4 0 0 1-8 0a83.5 83.5 0 0 1 4.57-27.27A52 52 0 1 0 72 204h24a4 4 0 0 1 0 8H72A60 60 0 1 1 83.61 93.13A84 84 0 0 1 244 128m-62.83 45.17L156 198.34V128a4 4 0 0 0-8 0v70.34l-25.17-25.17a4 4 0 0 0-5.66 5.66l32 32a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66"></svg:path>`,
})
export class PhCloudArrowDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowUpIcon],svg[ph-cloud-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.34 165.66L160 147.31V208a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32M160 40a88.08 88.08 0 0 0-78.71 48.68A64 64 0 1 0 72 216h40a8 8 0 0 0 0-16H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.12A88 88 0 0 0 72 128a8 8 0 0 0 16 0a72 72 0 1 1 100.8 66a8 8 0 0 0 3.2 15.34a7.9 7.9 0 0 0 3.2-.68A88 88 0 0 0 160 40"></svg:path>`,
})
export class PhCloudArrowUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowUpBoldIcon],svg[ph-cloud-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.49 151.51a12 12 0 0 1-17 17L168 157v51a12 12 0 0 1-24 0v-51l-11.51 11.52a12 12 0 1 1-17-17l32-32a12 12 0 0 1 17 0ZM160 36a92.08 92.08 0 0 0-81 48.37A68 68 0 1 0 72 220h28a12 12 0 0 0 0-24H72a44 44 0 0 1-1.81-87.95A91.7 91.7 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 1 1 132.6 21.29a12 12 0 1 0 22.8 7.51A92.06 92.06 0 0 0 160 36"></svg:path>`,
})
export class PhCloudArrowUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowUpDuotoneIcon],svg[ph-cloud-arrow-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128a80 80 0 0 1-80 80H72A56 56 0 1 1 85.92 97.74v.1A80 80 0 0 1 240 128" opacity=".2"></svg:path><svg:path d="M178.34 165.66L160 147.31V208a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32M160 40a88.08 88.08 0 0 0-78.71 48.68A64 64 0 1 0 72 216h40a8 8 0 0 0 0-16H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.12A88 88 0 0 0 72 128a8 8 0 0 0 16 0a72 72 0 1 1 100.8 66a8 8 0 0 0 3.2 15.34a7.9 7.9 0 0 0 3.2-.68A88 88 0 0 0 160 40"></svg:path></svg:g>`,
})
export class PhCloudArrowUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowUpFillIcon],svg[ph-cloud-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.93 124.52C246.11 77.54 207.07 40 160.06 40a88.1 88.1 0 0 0-78.77 48.67A87.5 87.5 0 0 0 72 127.73a8.18 8.18 0 0 1-7.43 8.27a8 8 0 0 1-8.57-8a103.7 103.7 0 0 1 5.34-32.92a4 4 0 0 0-4.75-5.18A64.09 64.09 0 0 0 8 152c0 35.19 29.75 64 65 64h87a88.09 88.09 0 0 0 87.93-91.48m-50.27 9.14a8 8 0 0 1-11.32 0L168 115.31V176a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhCloudArrowUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowUpLightIcon],svg[ph-cloud-arrow-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.24 164.24a6 6 0 0 1-8.48 0L158 142.49V208a6 6 0 0 1-12 0v-65.51l-21.76 21.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 0 1 0 8.48M160 42a86.1 86.1 0 0 0-77.57 48.88A62 62 0 1 0 72 214h40a6 6 0 0 0 0-12H72a50 50 0 0 1 0-100a51 51 0 0 1 5.91.36A85.5 85.5 0 0 0 74 128a6 6 0 0 0 12 0a74 74 0 1 1 103.6 67.85a6 6 0 0 0 4.8 11A86 86 0 0 0 160 42"></svg:path>`,
})
export class PhCloudArrowUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowUpThinIcon],svg[ph-cloud-arrow-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186.83 162.83a4 4 0 0 1-5.66 0L156 137.66V208a4 4 0 0 1-8 0v-70.34l-25.17 25.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1 0 5.66M160 44a84.09 84.09 0 0 0-76.39 49.13A60 60 0 1 0 72 212h40a4 4 0 0 0 0-8H72a52 52 0 1 1 8.57-103.27A83.5 83.5 0 0 0 76 128a4 4 0 0 0 8 0a76 76 0 1 1 106.4 69.68a4 4 0 0 0 1.6 7.66a3.9 3.9 0 0 0 1.6-.33A84 84 0 0 0 160 44"></svg:path>`,
})
export class PhCloudArrowUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudBoldIcon],svg[ph-cloud-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 36a92.09 92.09 0 0 0-81 48.36A68 68 0 1 0 72 220h88a92 92 0 0 0 0-184m0 160H72a44 44 0 0 1-1.82-88A92 92 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 1 1 68 68"></svg:path>`,
})
export class PhCloudBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudCheckIcon],svg[ph-cloud-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 40a88.09 88.09 0 0 0-78.71 48.67A64 64 0 1 0 72 216h88a88 88 0 0 0 0-176m0 160H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.11A88 88 0 0 0 72 128a8 8 0 0 0 16 0a72 72 0 1 1 72 72m37.66-93.66a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L144 148.69l42.34-42.35a8 8 0 0 1 11.32 0"></svg:path>`,
})
export class PhCloudCheckIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudCheckBoldIcon],svg[ph-cloud-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 36a92.09 92.09 0 0 0-81 48.36A68 68 0 1 0 72 220h88a92 92 0 0 0 0-184m0 160H72a44 44 0 0 1-1.82-88A92 92 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 1 1 68 68m40.49-92.49a12 12 0 0 1 0 17l-48 48a12 12 0 0 1-17 0l-24-24a12 12 0 1 1 17-17L144 143l39.51-39.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhCloudCheckBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudCheckDuotoneIcon],svg[ph-cloud-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128a80 80 0 0 1-80 80H72A56 56 0 1 1 85.92 97.74v.1A80 80 0 0 1 240 128" opacity=".2"></svg:path><svg:path d="M160 40a88.09 88.09 0 0 0-78.71 48.67A64 64 0 1 0 72 216h88a88 88 0 0 0 0-176m0 160H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.11A88 88 0 0 0 72 128a8 8 0 0 0 16 0a72 72 0 1 1 72 72m37.66-93.66a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L144 148.69l42.34-42.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhCloudCheckDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudCheckFillIcon],svg[ph-cloud-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.93 124.52C246.11 77.54 207.07 40 160.06 40a88.1 88.1 0 0 0-78.77 48.67A87.5 87.5 0 0 0 72 127.73a8.18 8.18 0 0 1-7.43 8.27a8 8 0 0 1-8.57-8a103.7 103.7 0 0 1 5.34-32.92a4 4 0 0 0-4.75-5.18A64.09 64.09 0 0 0 8 152c0 35.19 29.75 64 65 64h87a88.09 88.09 0 0 0 87.93-91.48m-50.27-6.86l-48 48a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L144 148.69l42.34-42.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCloudCheckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudCheckLightIcon],svg[ph-cloud-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 42a86.11 86.11 0 0 0-77.57 48.88A62 62 0 1 0 72 214h88a86 86 0 0 0 0-172m0 160H72a50 50 0 0 1 0-100a51 51 0 0 1 5.91.35A85.6 85.6 0 0 0 74 128a6 6 0 0 0 12 0a74 74 0 1 1 74 74m36.24-94.24a6 6 0 0 1 0 8.48l-48 48a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L144 151.51l43.76-43.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhCloudCheckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudCheckThinIcon],svg[ph-cloud-check-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 44a84.11 84.11 0 0 0-76.41 49.12A60.7 60.7 0 0 0 72 92a60 60 0 0 0 0 120h88a84 84 0 0 0 0-168m0 160H72a52 52 0 1 1 8.55-103.3A83.7 83.7 0 0 0 76 128a4 4 0 0 0 8 0a76 76 0 1 1 76 76m34.83-94.83a4 4 0 0 1 0 5.66l-48 48a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L144 154.34l45.17-45.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhCloudCheckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudDuotoneIcon],svg[ph-cloud-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128a80 80 0 0 1-80 80H72A56 56 0 1 1 85.92 97.74v.1A80 80 0 0 1 240 128" opacity=".2"></svg:path><svg:path d="M160 40a88.09 88.09 0 0 0-78.71 48.67A64 64 0 1 0 72 216h88a88 88 0 0 0 0-176m0 160H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.11A88 88 0 0 0 72 128a8 8 0 0 0 16 0a72 72 0 1 1 72 72"></svg:path></svg:g>`,
})
export class PhCloudDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudFillIcon],svg[ph-cloud-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160.06 40a88.1 88.1 0 0 0-78.77 48.67A87.5 87.5 0 0 0 72 127.73a8.18 8.18 0 0 1-7.43 8.27a8 8 0 0 1-8.57-8a103.7 103.7 0 0 1 5.34-32.92a4 4 0 0 0-4.75-5.18A64.09 64.09 0 0 0 8 152c0 35.19 29.75 64 65 64h87a88.09 88.09 0 0 0 87.93-91.48C246.11 77.54 207.07 40 160.06 40"></svg:path>`,
})
export class PhCloudFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudFogIcon],svg[ph-cloud-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 208H72a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m64-16h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m-24 32h-56a8 8 0 0 0 0 16h56a8 8 0 0 0 0-16m72-124a76.08 76.08 0 0 1-76 76H76a52 52 0 0 1 0-104a53 53 0 0 1 8.92.76A76.08 76.08 0 0 1 232 100m-16 0a60.06 60.06 0 0 0-120-3.54a8 8 0 0 1-16-.92q.21-3.66.77-7.23A38 38 0 0 0 76 88a36 36 0 0 0 0 72h80a60.07 60.07 0 0 0 60-60"></svg:path>`,
})
export class PhCloudFogIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudFogBoldIcon],svg[ph-cloud-fog-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 208H72a12 12 0 0 1 0-24h48a12 12 0 0 1 0 24m64-24h-24a12 12 0 0 0 0 24h24a12 12 0 0 0 0-24m-24 36h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m72-124a76.08 76.08 0 0 1-76 76H76a52 52 0 1 1 9-103.22A76 76 0 0 1 232 96m-24 0a52 52 0 0 0-104 0a12 12 0 0 1-24 0c0-1.24 0-2.48.09-3.71A29 29 0 0 0 76 92a28 28 0 0 0 0 56h80a52.06 52.06 0 0 0 52-52"></svg:path>`,
})
export class PhCloudFogBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudFogDuotoneIcon],svg[ph-cloud-fog-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 100a68 68 0 0 1-68 68H76a44 44 0 1 1 14.2-85.66v.11A68.06 68.06 0 0 1 224 100" opacity=".2"></svg:path><svg:path d="M120 208H72a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m64-16h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m-24 32h-56a8 8 0 0 0 0 16h56a8 8 0 0 0 0-16m72-124a76.08 76.08 0 0 1-76 76H76a52 52 0 0 1 0-104a53 53 0 0 1 8.92.76A76.08 76.08 0 0 1 232 100m-16 0a60.06 60.06 0 0 0-120-3.54a8 8 0 0 1-16-.92q.21-3.66.77-7.23A38 38 0 0 0 76 88a36 36 0 0 0 0 72h80a60.07 60.07 0 0 0 60-60"></svg:path></svg:g>`,
})
export class PhCloudFogDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudFogFillIcon],svg[ph-cloud-fog-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 232a8 8 0 0 1-8 8h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 8 8m-40-32a8 8 0 0 0-8-8H72a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8m56-8h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m47.87-96.45a76 76 0 0 0-151.78.73A8.18 8.18 0 0 1 72 104h-.6a8.14 8.14 0 0 1-7.4-8.61a92.5 92.5 0 0 1 2.33-16.51a4 4 0 0 0-5-4.78A52.09 52.09 0 0 0 24 124.36C24.2 153.07 48.12 176 76.84 176H156a76.08 76.08 0 0 0 75.87-80.45"></svg:path>`,
})
export class PhCloudFogFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudFogLightIcon],svg[ph-cloud-fog-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 206H72a6 6 0 0 1 0-12h48a6 6 0 0 1 0 12m64-12h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m-24 32h-56a6 6 0 0 0 0 12h56a6 6 0 0 0 0-12m70-126a74.09 74.09 0 0 1-74 74H76a50 50 0 1 1 10.2-99A74.08 74.08 0 0 1 230 100m-12 0a62.06 62.06 0 0 0-124-3.65a6 6 0 0 1-12-.7a76 76 0 0 1 1.07-9A38 38 0 1 0 76 162h80a62.07 62.07 0 0 0 62-62"></svg:path>`,
})
export class PhCloudFogLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudFogThinIcon],svg[ph-cloud-fog-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 204H72a4 4 0 0 1 0-8h48a4 4 0 0 1 0 8m64-8h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m-24 32h-56a4 4 0 0 0 0 8h56a4 4 0 0 0 0-8m68-128a72.08 72.08 0 0 1-72 72H76a48 48 0 1 1 11.51-94.61A72.08 72.08 0 0 1 228 100m-8 0a64.06 64.06 0 0 0-128-3.77a4 4 0 0 1-8-.46a71.6 71.6 0 0 1 1.42-10.65A40 40 0 1 0 76 164h80a64.07 64.07 0 0 0 64-64"></svg:path>`,
})
export class PhCloudFogThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudLightIcon],svg[ph-cloud-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 42a86.11 86.11 0 0 0-77.57 48.88A62 62 0 1 0 72 214h88a86 86 0 0 0 0-172m0 160H72a50 50 0 0 1 0-100a51 51 0 0 1 5.91.35A85.6 85.6 0 0 0 74 128a6 6 0 0 0 12 0a74 74 0 1 1 74 74"></svg:path>`,
})
export class PhCloudLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudLightningIcon],svg[ph-cloud-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 16a76.2 76.2 0 0 0-71.08 48.76A53 53 0 0 0 76 64a52 52 0 0 0 0 104h37.87l-16.73 27.88A8 8 0 0 0 104 208h25.87l-16.73 27.88a8 8 0 0 0 13.72 8.24l24-40A8 8 0 0 0 144 192h-25.87l14.4-24H156a76 76 0 0 0 0-152m0 136H76a36 36 0 0 1 0-72a38 38 0 0 1 4.78.31q-.56 3.57-.77 7.23a8 8 0 0 0 16 .92A60.06 60.06 0 1 1 156 152"></svg:path>`,
})
export class PhCloudLightningIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudLightningBoldIcon],svg[ph-cloud-lightning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 12a80.22 80.22 0 0 0-73.61 48.36A57 57 0 0 0 76 60a56 56 0 0 0 0 112h30.81l-13.1 21.82A12 12 0 0 0 104 212h18.81l-13.1 21.82a12 12 0 1 0 20.58 12.35l24-40A12 12 0 0 0 144 188h-18.81l9.6-16H156a80 80 0 0 0 0-160m0 136H76a32 32 0 0 1 0-64h.28c-.11 1.1-.2 2.2-.26 3.3a12 12 0 1 0 24 1.39A56.06 56.06 0 1 1 156 148"></svg:path>`,
})
export class PhCloudLightningBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudLightningDuotoneIcon],svg[ph-cloud-lightning-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 92a68 68 0 0 1-68 68H76a44 44 0 1 1 14.2-85.66v.11A68.06 68.06 0 0 1 224 92" opacity=".2"></svg:path><svg:path d="M156 16a76.2 76.2 0 0 0-71.08 48.76A53 53 0 0 0 76 64a52 52 0 0 0 0 104h37.87l-16.73 27.88A8 8 0 0 0 104 208h25.87l-16.73 27.88a8 8 0 0 0 13.72 8.24l24-40A8 8 0 0 0 144 192h-25.87l14.4-24H156a76 76 0 0 0 0-152m0 136H76a36 36 0 0 1 0-72a38 38 0 0 1 4.78.31q-.56 3.57-.77 7.23a8 8 0 0 0 16 .92A60.06 60.06 0 1 1 156 152"></svg:path></svg:g>`,
})
export class PhCloudLightningDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudLightningFillIcon],svg[ph-cloud-lightning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 168h-23.47l-14.4 24H144a8 8 0 0 1 6.86 12.12l-24 40a8 8 0 0 1-13.72-8.24L129.87 208H104a8 8 0 0 1-6.86-12.12L113.87 168h-37C48.12 168 24.2 145.07 24 116.36A52.09 52.09 0 0 1 61.35 66.1a4 4 0 0 1 5 4.78A92.5 92.5 0 0 0 64 87.39A8.14 8.14 0 0 0 71.41 96h.6a8.18 8.18 0 0 0 8.08-7.72A76 76 0 1 1 156 168"></svg:path>`,
})
export class PhCloudLightningFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudLightningLightIcon],svg[ph-cloud-lightning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 18a74.21 74.21 0 0 0-69.89 49.3a6.2 6.2 0 0 0-1.83-.62A51 51 0 0 0 76 66a50 50 0 0 0 0 100h41.4l-18.55 30.91A6 6 0 0 0 104 206h29.4l-18.55 30.91a6 6 0 0 0 10.3 6.18l24-40A6 6 0 0 0 144 194h-29.4l16.8-28H156a74 74 0 0 0 0-148m0 136H76a38 38 0 1 1 6.31-75.48a7 7 0 0 0 .79.08a73 73 0 0 0-1.1 9.05a6 6 0 0 0 12 .7A62.06 62.06 0 1 1 156 154"></svg:path>`,
})
export class PhCloudLightningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudLightningThinIcon],svg[ph-cloud-lightning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 20a72.19 72.19 0 0 0-68.49 49.39A48 48 0 1 0 76 164h44.94l-20.37 33.94A4 4 0 0 0 104 204h32.94l-20.37 33.94a4 4 0 0 0 6.86 4.12l24-40A4 4 0 0 0 144 196h-32.94l19.2-32H156a72 72 0 0 0 0-144m0 136H76a40 40 0 1 1 9.43-78.88A71.6 71.6 0 0 0 84 87.77a4 4 0 0 0 8 .46A64.06 64.06 0 1 1 156 156"></svg:path>`,
})
export class PhCloudLightningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudMoonIcon],svg[ph-cloud-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 72a76.5 76.5 0 0 0-12.36 1a71.93 71.93 0 0 0-55.47-63.17a8 8 0 0 0-9.59 9.58A56.05 56.05 0 0 1 40 88a56.5 56.5 0 0 1-12.59-1.42a8 8 0 0 0-9.59 9.59a72.22 72.22 0 0 0 32.29 45.06A52 52 0 0 0 92 224h80a76 76 0 0 0 0-152M37.37 104H40a72.08 72.08 0 0 0 72-72v-2.67a55.63 55.63 0 0 1 32 48a76.28 76.28 0 0 0-43 43.4a52 52 0 0 0-39 8.86A56.22 56.22 0 0 1 37.37 104M172 208H92a36 36 0 1 1 4.78-71.69c-.37 2.37-.63 4.79-.77 7.23a8 8 0 0 0 16 .92a59 59 0 0 1 1.88-11.81c0-.16.09-.32.12-.48A60.06 60.06 0 1 1 172 208"></svg:path>`,
})
export class PhCloudMoonIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudMoonBoldIcon],svg[ph-cloud-moon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 68c-1.66 0-3.31.06-4.95.16a75.93 75.93 0 0 0-58-62.23a12 12 0 0 0-14.37 14.38A52.05 52.05 0 0 1 32.3 82.68a12 12 0 0 0-14.37 14.39a76.6 76.6 0 0 0 27.91 43.27A56 56 0 0 0 92 228h80a80 80 0 0 0 0-160m-52.11-32a51.64 51.64 0 0 1 23.68 37.17a80.4 80.4 0 0 0-45.18 43.15A57 57 0 0 0 92 116a55.7 55.7 0 0 0-28.23 7.66a52.7 52.7 0 0 1-15.63-15.77A76.11 76.11 0 0 0 119.89 36M172 204H92a32 32 0 0 1 0-64h.28c-.11 1.1-.2 2.2-.26 3.3a12 12 0 0 0 24 1.4a56 56 0 0 1 1.74-11l.15-.55A56.06 56.06 0 1 1 172 204"></svg:path>`,
})
export class PhCloudMoonBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudMoonDuotoneIcon],svg[ph-cloud-moon-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M102.38 17.62a64.06 64.06 0 0 1-76.76 76.76A64.12 64.12 0 0 0 63 138.93a44.08 44.08 0 0 1 43.33-8.54a68.13 68.13 0 0 1 45.47-47.32h.15c0-1 .07-2 .07-3a64 64 0 0 0-49.64-62.45" opacity=".2"></svg:path><svg:path d="M172 72a76.5 76.5 0 0 0-12.36 1a71.93 71.93 0 0 0-55.47-63.17a8 8 0 0 0-9.59 9.58A56.05 56.05 0 0 1 40 88a56.5 56.5 0 0 1-12.59-1.42a8 8 0 0 0-9.59 9.59a72.22 72.22 0 0 0 32.29 45.06A52 52 0 0 0 92 224h80a76 76 0 0 0 0-152M37.37 104H40a72.08 72.08 0 0 0 72-72v-2.67a55.63 55.63 0 0 1 32 48a76.28 76.28 0 0 0-43 43.4a52 52 0 0 0-39 8.86A56.22 56.22 0 0 1 37.37 104M172 208H92a36 36 0 1 1 4.78-71.69c-.37 2.37-.63 4.79-.77 7.23a8 8 0 0 0 16 .92a59 59 0 0 1 1.88-11.81c0-.16.09-.32.12-.48A60.06 60.06 0 1 1 172 208"></svg:path></svg:g>`,
})
export class PhCloudMoonDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudMoonFillIcon],svg[ph-cloud-moon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 72a76.4 76.4 0 0 0-12.36 1a71.93 71.93 0 0 0-55.47-63.17a8 8 0 0 0-9.59 9.58A56.05 56.05 0 0 1 40 88a56.5 56.5 0 0 1-12.59-1.42a8 8 0 0 0-9.59 9.59a72.22 72.22 0 0 0 32.29 45.06A52 52 0 0 0 92 224h80a76 76 0 0 0 0-152M37.37 104H40a72.08 72.08 0 0 0 72-72v-2.67a55.64 55.64 0 0 1 32 48.05a76.4 76.4 0 0 0-43 43.4a52.4 52.4 0 0 0-9-.78a51.7 51.7 0 0 0-30 9.59A56.22 56.22 0 0 1 37.37 104"></svg:path>`,
})
export class PhCloudMoonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudMoonLightIcon],svg[ph-cloud-moon-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 74a74.4 74.4 0 0 0-14.17 1.36a70 70 0 0 0-54.11-63.59A6 6 0 0 0 96.53 19A58.06 58.06 0 0 1 27 88.53a6 6 0 0 0-7.19 7.19a70.22 70.22 0 0 0 33.3 44.95A50 50 0 0 0 92 222h80a74 74 0 0 0 0-148M34.22 101.76q2.88.24 5.78.24a70.08 70.08 0 0 0 70-70c0-1.94-.08-3.88-.24-5.8A57.64 57.64 0 0 1 146 78.71A74.32 74.32 0 0 0 102.2 123a50.4 50.4 0 0 0-10.2-1a49.74 49.74 0 0 0-29.86 9.92a58.24 58.24 0 0 1-27.92-30.16M172 210H92a38 38 0 1 1 7.08-75.34a76 76 0 0 0-1.07 9a6 6 0 0 0 12 .7a61.5 61.5 0 0 1 2-12.24c0-.15.08-.29.11-.43A62.06 62.06 0 1 1 172 210"></svg:path>`,
})
export class PhCloudMoonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudMoonThinIcon],svg[ph-cloud-moon-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 76a72 72 0 0 0-16 1.81a68 68 0 0 0-52.68-64.09a4 4 0 0 0-4.79 4.8a60.05 60.05 0 0 1-72 72a4 4 0 0 0-4.8 4.8a68.2 68.2 0 0 0 34.44 44.78A48 48 0 0 0 92 220h80a72 72 0 0 0 0-144M31.22 99.44A70 70 0 0 0 40 100a68.07 68.07 0 0 0 68-68a70 70 0 0 0-.56-8.79A59.66 59.66 0 0 1 148 80v.11a72.27 72.27 0 0 0-44.49 45.28A48.3 48.3 0 0 0 92 124a47.75 47.75 0 0 0-29.61 10.26a60.2 60.2 0 0 1-31.17-34.82M172 212H92a40 40 0 1 1 9.43-78.88a71.6 71.6 0 0 0-1.43 10.65a4 4 0 0 0 8 .46a64.3 64.3 0 0 1 2-12.67c0-.12.07-.24.09-.36A64.06 64.06 0 1 1 172 212"></svg:path>`,
})
export class PhCloudMoonThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudRainIcon],svg[ph-cloud-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m158.66 196.44l-32 48a8 8 0 1 1-13.32-8.88l32-48a8 8 0 0 1 13.32 8.88M232 92a76.08 76.08 0 0 1-76 76h-23.72l-29.62 44.44a8 8 0 1 1-13.32-8.88L113.05 168H76a52 52 0 0 1 0-104a53 53 0 0 1 8.92.76A76.08 76.08 0 0 1 232 92m-16 0a60.06 60.06 0 0 0-120-3.54a8 8 0 0 1-16-.92q.21-3.66.77-7.23A38 38 0 0 0 76 80a36 36 0 0 0 0 72h80a60.07 60.07 0 0 0 60-60"></svg:path>`,
})
export class PhCloudRainIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudRainBoldIcon],svg[ph-cloud-rain-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 12a80.22 80.22 0 0 0-73.61 48.36A57 57 0 0 0 76 60a56 56 0 0 0 0 112h29.58L86 201.34a12 12 0 1 0 20 13.32L134.42 172H156a80 80 0 0 0 0-160m0 136H76a32 32 0 0 1 0-64h.28c-.11 1.1-.2 2.2-.26 3.3a12 12 0 1 0 24 1.39A56.06 56.06 0 1 1 156 148m.65 58.66l-26.67 40a12 12 0 1 1-20-13.32l26.66-40a12 12 0 1 1 20 13.32Z"></svg:path>`,
})
export class PhCloudRainBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudRainDuotoneIcon],svg[ph-cloud-rain-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 92a68 68 0 0 1-68 68H76a44 44 0 1 1 14.2-85.66v.11A68.06 68.06 0 0 1 224 92" opacity=".2"></svg:path><svg:path d="m158.66 196.44l-32 48a8 8 0 1 1-13.32-8.88l32-48a8 8 0 0 1 13.32 8.88M232 92a76.08 76.08 0 0 1-76 76h-23.72l-29.62 44.44a8 8 0 1 1-13.32-8.88L113.05 168H76a52 52 0 0 1 0-104a53 53 0 0 1 8.92.76A76.08 76.08 0 0 1 232 92m-16 0a60.06 60.06 0 0 0-120-3.54a8 8 0 0 1-16-.92q.21-3.66.77-7.23A38 38 0 0 0 76 80a36 36 0 0 0 0 72h80a60.07 60.07 0 0 0 60-60"></svg:path></svg:g>`,
})
export class PhCloudRainDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudRainFillIcon],svg[ph-cloud-rain-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m158.66 196.44l-32 48a8 8 0 1 1-13.32-8.88l32-48a8 8 0 0 1 13.32 8.88m73.21-108.89a76 76 0 0 0-151.78.73A8.18 8.18 0 0 1 72 96h-.6a8.14 8.14 0 0 1-7.4-8.61a92.5 92.5 0 0 1 2.33-16.51a4 4 0 0 0-5-4.78A52.09 52.09 0 0 0 24 116.36C24.2 145.07 48.12 168 76.84 168h36.21l-23.71 35.56a8 8 0 0 0 13.32 8.88L132.28 168H156a76.08 76.08 0 0 0 75.87-80.45"></svg:path>`,
})
export class PhCloudRainFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudRainLightIcon],svg[ph-cloud-rain-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m157 195.33l-32 48a6 6 0 1 1-10-6.66l32-48a6 6 0 0 1 10 6.66M230 92a74.09 74.09 0 0 1-74 74h-24.79L101 211.33a6 6 0 1 1-10-6.66L116.79 166H76a50 50 0 1 1 10.2-99A74.08 74.08 0 0 1 230 92m-12 0a62.06 62.06 0 0 0-124-3.65a6 6 0 0 1-12-.7a76 76 0 0 1 1.07-9A38 38 0 1 0 76 154h80a62.07 62.07 0 0 0 62-62"></svg:path>`,
})
export class PhCloudRainLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudRainThinIcon],svg[ph-cloud-rain-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m155.33 194.22l-32 48a4 4 0 1 1-6.66-4.44l32-48a4 4 0 0 1 6.66 4.44M228 92a72.08 72.08 0 0 1-72 72h-25.86l-30.81 46.22a4 4 0 1 1-6.66-4.44L120.53 164H76a48 48 0 1 1 11.51-94.61A72.08 72.08 0 0 1 228 92m-8 0a64.06 64.06 0 0 0-128-3.77a4 4 0 0 1-8-.46a71.6 71.6 0 0 1 1.42-10.65A40 40 0 1 0 76 156h80a64.07 64.07 0 0 0 64-64"></svg:path>`,
})
export class PhCloudRainThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSlashIcon],svg[ph-cloud-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76l39.24 43.17l-.06.12A65 65 0 0 0 72 88a64 64 0 0 0 0 128h88a87.3 87.3 0 0 0 31.8-5.93l10.28 11.31a8 8 0 1 0 11.84-10.76ZM160 200H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.3.12A88.4 88.4 0 0 0 72 128a8 8 0 0 0 16 0a72.3 72.3 0 0 1 5.06-26.54l87 95.7A71.7 71.7 0 0 1 160 200m88-72a87.9 87.9 0 0 1-22.35 58.61A8 8 0 0 1 213.71 176a72 72 0 0 0-96.34-106a8 8 0 0 1-9.48-12.89A88 88 0 0 1 248 128"></svg:path>`,
})
export class PhCloudSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSlashBoldIcon],svg[ph-cloud-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93a12 12 0 1 0-17.76 16.14L71.79 84A68 68 0 0 0 72 220h88a91.3 91.3 0 0 0 30.66-5.24l8.46 9.31a12 12 0 0 0 17.76-16.14ZM160 196H72a44 44 0 0 1-1.8-87.95A92 92 0 0 0 68 128a12 12 0 0 0 24 0a68.2 68.2 0 0 1 2.66-18.84l77.88 85.67A68.7 68.7 0 0 1 160 196m92-68a91.32 91.32 0 0 1-17.53 54a12 12 0 1 1-19.41-14.11a68 68 0 0 0-89.57-98.53a12 12 0 0 1-12.2-20.66A92 92 0 0 1 252 128"></svg:path>`,
})
export class PhCloudSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSlashDuotoneIcon],svg[ph-cloud-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128a80 80 0 0 1-80 80H72A56 56 0 1 1 85.92 97.74v.1A80 80 0 0 1 240 128" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l39.24 43.17l-.06.12A65 65 0 0 0 72 88a64 64 0 0 0 0 128h88a87.3 87.3 0 0 0 31.8-5.93l10.28 11.31a8 8 0 1 0 11.84-10.76ZM160 200H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.3.12A88.4 88.4 0 0 0 72 128a8 8 0 0 0 16 0a72.3 72.3 0 0 1 5.06-26.54l87 95.7A71.7 71.7 0 0 1 160 200m88-72a87.9 87.9 0 0 1-22.35 58.61A8 8 0 0 1 213.71 176a72 72 0 0 0-96.34-106a8 8 0 0 1-9.48-12.89A88 88 0 0 1 248 128"></svg:path></svg:g>`,
})
export class PhCloudSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSlashFillIcon],svg[ph-cloud-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 128.72A87.74 87.74 0 0 1 222.41 190a4 4 0 0 1-5.77-.16L103.78 65.67a4 4 0 0 1 .39-5.76A87.82 87.82 0 0 1 160.87 40c48.28.47 87.51 40.43 87.13 88.72M53.92 34.62a8 8 0 1 0-11.84 10.76l39.25 43.18l-.06.11A64 64 0 0 0 8 153c.53 35.12 29.84 63 65 63h87a87.7 87.7 0 0 0 31.78-5.95l10.3 11.33a8 8 0 0 0 11.33.52a8.32 8.32 0 0 0 .29-11.52Z"></svg:path>`,
})
export class PhCloudSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSlashLightIcon],svg[ph-cloud-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l40.18 44.2c-.45.87-.9 1.75-1.32 2.64A62 62 0 1 0 72 214h88a85.2 85.2 0 0 0 32.35-6.3l11.21 12.3a6 6 0 0 0 8.88-8.08ZM160 202H72a50 50 0 1 1 5.9-99.64A86.3 86.3 0 0 0 74 128a6 6 0 0 0 12 0a73.9 73.9 0 0 1 6.44-30.2l91.22 100.34A73.7 73.7 0 0 1 160 202m86-74a85.85 85.85 0 0 1-21.85 57.27a6 6 0 0 1-4.47 2a6 6 0 0 1-4.47-10a74 74 0 0 0-99-108.92a6 6 0 1 1-7.11-9.67A86 86 0 0 1 246 128"></svg:path>`,
})
export class PhCloudSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSlashThinIcon],svg[ph-cloud-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38l41.16 45.24q-1.38 2.55-2.59 5.19A60 60 0 1 0 72 212h88a83.2 83.2 0 0 0 32.88-6.69L205 218.69a4 4 0 1 0 5.92-5.38ZM160 204H72a52 52 0 0 1 0-104a53 53 0 0 1 8.54.72A84.2 84.2 0 0 0 76 128a4 4 0 0 0 8 0a76 76 0 0 1 7.9-33.76L187.13 199a75.4 75.4 0 0 1-27.13 5m84-76a83.86 83.86 0 0 1-21.34 55.94a4 4 0 1 1-6-5.33A76 76 0 0 0 115 66.75a4 4 0 0 1-4.74-6.45A84 84 0 0 1 244 128"></svg:path>`,
})
export class PhCloudSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSnowIcon],svg[ph-cloud-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 196a12 12 0 1 1-12-12a12 12 0 0 1 12 12m28 4a12 12 0 1 0 12 12a12 12 0 0 0-12-12m48-16a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-96 40a12 12 0 1 0 12 12a12 12 0 0 0-12-12m88 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m76-132a76.08 76.08 0 0 1-76 76H76a52 52 0 0 1 0-104a53 53 0 0 1 8.92.76A76.08 76.08 0 0 1 232 92m-16 0a60.06 60.06 0 0 0-120-3.54a8 8 0 0 1-16-.92q.21-3.66.77-7.23A38 38 0 0 0 76 80a36 36 0 0 0 0 72h80a60.07 60.07 0 0 0 60-60"></svg:path>`,
})
export class PhCloudSnowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSnowBoldIcon],svg[ph-cloud-snow-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 208a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-64-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-48 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16M236 92a80.09 80.09 0 0 1-80 80H76a56 56 0 0 1 0-112a57 57 0 0 1 6.39.36A80.08 80.08 0 0 1 236 92m-24 0a56.06 56.06 0 0 0-112-3.31a12 12 0 1 1-24-1.38c.06-1.11.15-2.21.26-3.31H76a32 32 0 0 0 0 64h80a56.06 56.06 0 0 0 56-56"></svg:path>`,
})
export class PhCloudSnowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSnowDuotoneIcon],svg[ph-cloud-snow-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 92a68 68 0 0 1-68 68H76a44 44 0 1 1 14.2-85.66v.11A68.06 68.06 0 0 1 224 92" opacity=".2"></svg:path><svg:path d="M88 196a12 12 0 1 1-12-12a12 12 0 0 1 12 12m28 4a12 12 0 1 0 12 12a12 12 0 0 0-12-12m48-16a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-96 40a12 12 0 1 0 12 12a12 12 0 0 0-12-12m88 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m76-132a76.08 76.08 0 0 1-76 76H76a52 52 0 0 1 0-104a53 53 0 0 1 8.92.76A76.08 76.08 0 0 1 232 92m-16 0a60.06 60.06 0 0 0-120-3.54a8 8 0 0 1-16-.92q.21-3.66.77-7.23A38 38 0 0 0 76 80a36 36 0 0 0 0 72h80a60.07 60.07 0 0 0 60-60"></svg:path></svg:g>`,
})
export class PhCloudSnowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSnowFillIcon],svg[ph-cloud-snow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 196a12 12 0 1 1-12-12a12 12 0 0 1 12 12m28 4a12 12 0 1 0 12 12a12 12 0 0 0-12-12m48-16a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-96 40a12 12 0 1 0 12 12a12 12 0 0 0-12-12m88 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m75.87-136.45a76 76 0 0 0-151.78.73A8.18 8.18 0 0 1 72 96h-.6a8.14 8.14 0 0 1-7.4-8.61a92.5 92.5 0 0 1 2.33-16.51a4 4 0 0 0-5-4.78A52.09 52.09 0 0 0 24 116.36C24.2 145.07 48.12 168 76.84 168H156a76.08 76.08 0 0 0 75.87-80.45"></svg:path>`,
})
export class PhCloudSnowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSnowLightIcon],svg[ph-cloud-snow-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M86 196a10 10 0 1 1-10-10a10 10 0 0 1 10 10m30 6a10 10 0 1 0 10 10a10 10 0 0 0-10-10m48-16a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-96 40a10 10 0 1 0 10 10a10 10 0 0 0-10-10m88 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m74-134a74.09 74.09 0 0 1-74 74H76a50 50 0 1 1 10.2-99A74.08 74.08 0 0 1 230 92m-12 0a62.06 62.06 0 0 0-124-3.65a6 6 0 0 1-12-.7a76 76 0 0 1 1.07-9A38 38 0 1 0 76 154h80a62.07 62.07 0 0 0 62-62"></svg:path>`,
})
export class PhCloudSnowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSnowThinIcon],svg[ph-cloud-snow-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 196a8 8 0 1 1-8-8a8 8 0 0 1 8 8m32 8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m48-16a8 8 0 1 0 8 8a8 8 0 0 0-8-8m-96 40a8 8 0 1 0 8 8a8 8 0 0 0-8-8m88 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m72-136a72.08 72.08 0 0 1-72 72H76a48 48 0 1 1 11.51-94.61A72.08 72.08 0 0 1 228 92m-8 0a64.06 64.06 0 0 0-128-3.77a4 4 0 0 1-8-.46a71.6 71.6 0 0 1 1.42-10.65A40 40 0 1 0 76 156h80a64.07 64.07 0 0 0 64-64"></svg:path>`,
})
export class PhCloudSnowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSunIcon],svg[ph-cloud-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 72a76.2 76.2 0 0 0-20.26 2.73a55.6 55.6 0 0 0-9.41-11.54l9.51-13.57a8 8 0 1 0-13.11-9.18L121.22 54A55.9 55.9 0 0 0 96 48h-1.74l-2.89-16.29a8 8 0 1 0-15.75 2.77l2.88 16.34a56.1 56.1 0 0 0-23.27 14.85l-13.62-9.53a8 8 0 1 0-9.17 13.11L46 78.77A55.55 55.55 0 0 0 40 104v1.72l-16.29 2.88a8 8 0 0 0 1.38 15.88a8 8 0 0 0 1.39-.12l16.32-2.88a55.7 55.7 0 0 0 5.86 12.42A52 52 0 0 0 84 224h80a76 76 0 0 0 0-152M56 104a40 40 0 0 1 72.54-23.24a76.26 76.26 0 0 0-35.62 40a52.14 52.14 0 0 0-31 4.17A40 40 0 0 1 56 104m108 104H84a36 36 0 1 1 4.78-71.69c-.37 2.37-.63 4.79-.77 7.23a8 8 0 0 0 16 .92a59 59 0 0 1 1.88-11.81c0-.16.09-.32.12-.48A60.06 60.06 0 1 1 164 208"></svg:path>`,
})
export class PhCloudSunIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSunBoldIcon],svg[ph-cloud-sun-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 68a80.4 80.4 0 0 0-18.46 2.15a60 60 0 0 0-6-7.42l7.57-10.82a12 12 0 0 0-19.66-13.77L119.87 49a59.9 59.9 0 0 0-22.26-5l-2.3-13a12 12 0 0 0-23.63 4.17l2.3 13a60 60 0 0 0-19.21 12.3l-10.86-7.61a12 12 0 0 0-13.77 19.66L41 80.11a59.5 59.5 0 0 0-5 22.25l-13 2.3a12 12 0 0 0 2.07 23.82a12.6 12.6 0 0 0 2.1-.18l13-2.3a59 59 0 0 0 3.44 7.25A56 56 0 0 0 84 228h80a80 80 0 0 0 0-160m-68 0a36 36 0 0 1 26.45 11.61a80.37 80.37 0 0 0-32.06 36.75A57 57 0 0 0 84 116a55.8 55.8 0 0 0-20.33 3.83A36 36 0 0 1 96 68m68 136H84a32 32 0 0 1 0-64h.28c-.11 1.1-.2 2.2-.26 3.3a12 12 0 0 0 24 1.4a56 56 0 0 1 1.74-11l.15-.55A56.06 56.06 0 1 1 164 204"></svg:path>`,
})
export class PhCloudSunBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSunDuotoneIcon],svg[ph-cloud-sun-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M139.84 84.41a68.22 68.22 0 0 0-41.65 46v-.11a44.08 44.08 0 0 0-38.54 5a48 48 0 1 1 80.19-50.94Z" opacity=".2"></svg:path><svg:path d="M164 72a76.2 76.2 0 0 0-20.26 2.73a55.6 55.6 0 0 0-9.41-11.54l9.51-13.57a8 8 0 1 0-13.11-9.18L121.22 54A55.9 55.9 0 0 0 96 48h-1.74l-2.89-16.29a8 8 0 1 0-15.75 2.77l2.88 16.34a56.1 56.1 0 0 0-23.27 14.85l-13.62-9.53a8 8 0 1 0-9.17 13.11L46 78.77A55.55 55.55 0 0 0 40 104v1.72l-16.29 2.88a8 8 0 0 0 1.38 15.88a8 8 0 0 0 1.39-.12l16.32-2.88a55.7 55.7 0 0 0 5.86 12.42A52 52 0 0 0 84 224h80a76 76 0 0 0 0-152M56 104a40 40 0 0 1 72.54-23.24a76.26 76.26 0 0 0-35.62 40a52.14 52.14 0 0 0-31 4.17A40 40 0 0 1 56 104m108 104H84a36 36 0 1 1 4.78-71.69c-.37 2.37-.63 4.79-.77 7.23a8 8 0 0 0 16 .92a59 59 0 0 1 1.88-11.81c0-.16.09-.32.12-.48A60.06 60.06 0 1 1 164 208"></svg:path></svg:g>`,
})
export class PhCloudSunDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSunFillIcon],svg[ph-cloud-sun-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 72a76.2 76.2 0 0 0-20.26 2.73a55.6 55.6 0 0 0-9.41-11.54l9.51-13.57a8 8 0 1 0-13.11-9.18L121.22 54A55.9 55.9 0 0 0 96 48h-1.74l-2.89-16.29a8 8 0 1 0-15.75 2.77l2.88 16.34a56.1 56.1 0 0 0-23.27 14.85l-13.62-9.53a8 8 0 1 0-9.17 13.11L46 78.77A55.55 55.55 0 0 0 40 104v1.72l-16.29 2.88a8 8 0 0 0 1.38 15.88a8 8 0 0 0 1.39-.12l16.32-2.88a55.7 55.7 0 0 0 5.86 12.42A52 52 0 0 0 84 224h80a76 76 0 0 0 0-152m-71.08 48.76a52.14 52.14 0 0 0-31 4.17a40 40 0 0 1 66.62-44.17a76.26 76.26 0 0 0-35.62 40"></svg:path>`,
})
export class PhCloudSunFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSunLightIcon],svg[ph-cloud-sun-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 74a74.2 74.2 0 0 0-21.18 3.09a54.1 54.1 0 0 0-11.14-13.61l10.52-15a6 6 0 1 0-9.83-6.89l-10.52 15A53.9 53.9 0 0 0 96 50c-1.15 0-2.28 0-3.41.12L89.4 32.05a6 6 0 1 0-11.81 2.09l3.18 18.06a54 54 0 0 0-25.25 16.12L40.47 57.78a6 6 0 0 0-6.89 9.83l15 10.52A53.7 53.7 0 0 0 42 104c0 1.13 0 2.26.12 3.39l-18.07 3.18a6 6 0 0 0 1 11.91a6.4 6.4 0 0 0 1.05-.09l18.1-3.19a53.5 53.5 0 0 0 7.08 15A50 50 0 0 0 84 222h80a74 74 0 0 0 0-148M54 104a42 42 0 0 1 77.48-22.49A74.3 74.3 0 0 0 94.2 123a50.4 50.4 0 0 0-10.2-1a49.65 49.65 0 0 0-22.79 5.52A42 42 0 0 1 54 104m110 106H84a38 38 0 1 1 7.08-75.34a76 76 0 0 0-1.07 9a6 6 0 0 0 12 .7a61.5 61.5 0 0 1 2-12.24c0-.15.08-.29.11-.43A62.06 62.06 0 1 1 164 210"></svg:path>`,
})
export class PhCloudSunLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudSunThinIcon],svg[ph-cloud-sun-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 76a71.9 71.9 0 0 0-22.14 3.48A51.8 51.8 0 0 0 129 63.83l11.56-16.51a4 4 0 0 0-6.56-4.59l-11.55 16.51A52 52 0 0 0 96 52c-1.71 0-3.4.09-5.06.25l-3.5-19.85a4 4 0 0 0-7.88 1.39l3.5 19.84A52.2 52.2 0 0 0 55.85 71L39.32 59.42A4 4 0 0 0 34.73 66l16.53 11.54A51.63 51.63 0 0 0 44 104c0 1.69.09 3.37.25 5l-19.85 3.5a4 4 0 0 0 .69 7.94a4 4 0 0 0 .7-.06l19.85-3.5A52.1 52.1 0 0 0 54 134.6A48 48 0 0 0 84 220h80a72 72 0 0 0 0-144M52 104a44 44 0 0 1 82.33-21.61a72.23 72.23 0 0 0-38.82 43A48.3 48.3 0 0 0 84 124a47.76 47.76 0 0 0-23.4 6.11A44 44 0 0 1 52 104m112 108H84a40 40 0 1 1 9.43-78.88A71.6 71.6 0 0 0 92 143.77a4 4 0 0 0 8 .46a64.3 64.3 0 0 1 2-12.67c0-.12.07-.24.09-.36A64.06 64.06 0 1 1 164 212"></svg:path>`,
})
export class PhCloudSunThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudThinIcon],svg[ph-cloud-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 44a84.11 84.11 0 0 0-76.41 49.12A60.7 60.7 0 0 0 72 92a60 60 0 0 0 0 120h88a84 84 0 0 0 0-168m0 160H72a52 52 0 1 1 8.55-103.3A83.7 83.7 0 0 0 76 128a4 4 0 0 0 8 0a76 76 0 1 1 76 76"></svg:path>`,
})
export class PhCloudThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudWarningIcon],svg[ph-cloud-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 40a88.09 88.09 0 0 0-78.71 48.67A64 64 0 1 0 72 216h88a88 88 0 0 0 0-176m0 160H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.11A88 88 0 0 0 72 128a8 8 0 0 0 16 0a72 72 0 1 1 72 72m-8-72V88a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCloudWarningIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudWarningBoldIcon],svg[ph-cloud-warning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 36a92.09 92.09 0 0 0-81 48.36A68 68 0 1 0 72 220h88a92 92 0 0 0 0-184m0 160H72a44 44 0 0 1-1.82-88A92 92 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 1 1 68 68m-12-76V88a12 12 0 0 1 24 0v32a12 12 0 0 1-24 0m28 40a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhCloudWarningBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudWarningDuotoneIcon],svg[ph-cloud-warning-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 127.62a80 80 0 0 1-80 80H72A56 56 0 1 1 85.92 97.36v.1A80 80 0 0 1 240 127.62" opacity=".2"></svg:path><svg:path d="M160 40a88.09 88.09 0 0 0-78.71 48.67A64 64 0 1 0 72 216h88a88 88 0 0 0 0-176m0 160H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.11A88 88 0 0 0 72 128a8 8 0 0 0 16 0a72 72 0 1 1 72 72m-8-72V88a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhCloudWarningDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudWarningFillIcon],svg[ph-cloud-warning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.93 124.52C246.11 77.54 207.07 40 160.06 40a88.1 88.1 0 0 0-78.77 48.67A87.5 87.5 0 0 0 72 127.73a8.18 8.18 0 0 1-7.43 8.27a8 8 0 0 1-8.57-8a103.7 103.7 0 0 1 5.34-32.92a4 4 0 0 0-4.75-5.18A64.09 64.09 0 0 0 8 152c0 35.19 29.75 64 65 64h87a88.09 88.09 0 0 0 87.93-91.48M152 88a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm8 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhCloudWarningFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudWarningLightIcon],svg[ph-cloud-warning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 42a86.11 86.11 0 0 0-77.57 48.88A62 62 0 1 0 72 214h88a86 86 0 0 0 0-172m0 160H72a50 50 0 0 1 0-100a51 51 0 0 1 5.91.35A85.6 85.6 0 0 0 74 128a6 6 0 0 0 12 0a74 74 0 1 1 74 74m-6-74V88a6 6 0 0 1 12 0v40a6 6 0 0 1-12 0m16 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhCloudWarningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudWarningThinIcon],svg[ph-cloud-warning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 44a84.11 84.11 0 0 0-76.41 49.12A60.7 60.7 0 0 0 72 92a60 60 0 0 0 0 120h88a84 84 0 0 0 0-168m0 160H72a52 52 0 1 1 8.55-103.3A83.7 83.7 0 0 0 76 128a4 4 0 0 0 8 0a76 76 0 1 1 76 76m-4-76V88a4 4 0 0 1 8 0v40a4 4 0 0 1-8 0m12 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCloudWarningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudXIcon],svg[ph-cloud-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 40a88.09 88.09 0 0 0-78.71 48.67A64 64 0 1 0 72 216h88a88 88 0 0 0 0-176m0 160H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.11A88 88 0 0 0 72 128a8 8 0 0 0 16 0a72 72 0 1 1 72 72m29.66-82.34L171.31 136l18.35 18.34a8 8 0 0 1-11.32 11.32L160 147.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L148.69 136l-18.35-18.34a8 8 0 0 1 11.32-11.32L160 124.69l18.34-18.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCloudXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudXBoldIcon],svg[ph-cloud-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 36a92.09 92.09 0 0 0-81 48.36A68 68 0 1 0 72 220h88a92 92 0 0 0 0-184m0 160H72a44 44 0 0 1-1.82-88A92 92 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 1 1 68 68m32.49-79.51L177 132l15.52 15.51a12 12 0 0 1-17 17L160 149l-15.51 15.52a12 12 0 1 1-17-17L143 132l-15.52-15.51a12 12 0 1 1 17-17L160 115l15.51-15.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhCloudXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudXDuotoneIcon],svg[ph-cloud-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 127.62a80 80 0 0 1-80 80H72A56 56 0 1 1 85.92 97.36v.1A80 80 0 0 1 240 127.62" opacity=".2"></svg:path><svg:path d="M160 40a88.09 88.09 0 0 0-78.71 48.67A64 64 0 1 0 72 216h88a88 88 0 0 0 0-176m0 160H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.11A88 88 0 0 0 72 128a8 8 0 0 0 16 0a72 72 0 1 1 72 72m29.66-82.34L171.31 136l18.35 18.34a8 8 0 0 1-11.32 11.32L160 147.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L148.69 136l-18.35-18.34a8 8 0 0 1 11.32-11.32L160 124.69l18.34-18.35a8 8 0 0 1 11.32 11.32"></svg:path></svg:g>`,
})
export class PhCloudXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudXFillIcon],svg[ph-cloud-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.93 124.52C246.11 77.54 207.07 40 160.06 40a88.1 88.1 0 0 0-78.77 48.67A87.5 87.5 0 0 0 72 127.73a8.18 8.18 0 0 1-7.43 8.27a8 8 0 0 1-8.57-8a103.7 103.7 0 0 1 5.34-32.92a4 4 0 0 0-4.75-5.18A64.09 64.09 0 0 0 8 152c0 35.19 29.75 64 65 64h87a88.09 88.09 0 0 0 87.93-91.48m-58.27 29.82a8 8 0 0 1-11.32 11.32L160 147.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L148.69 136l-18.35-18.34a8 8 0 0 1 11.32-11.32L160 124.69l18.34-18.35a8 8 0 0 1 11.32 11.32L171.31 136Z"></svg:path>`,
})
export class PhCloudXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudXLightIcon],svg[ph-cloud-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 42a86.11 86.11 0 0 0-77.57 48.88A62 62 0 1 0 72 214h88a86 86 0 0 0 0-172m0 160H72a50 50 0 0 1 0-100a51 51 0 0 1 5.91.35A85.6 85.6 0 0 0 74 128a6 6 0 0 0 12 0a74 74 0 1 1 74 74m28.24-85.76L168.48 136l19.76 19.76a6 6 0 1 1-8.48 8.48L160 144.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L151.52 136l-19.76-19.76a6 6 0 0 1 8.48-8.48L160 127.52l19.76-19.76a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhCloudXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloudXThinIcon],svg[ph-cloud-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 44a84.11 84.11 0 0 0-76.41 49.12A60.7 60.7 0 0 0 72 92a60 60 0 0 0 0 120h88a84 84 0 0 0 0-168m0 160H72a52 52 0 1 1 8.55-103.3A83.7 83.7 0 0 0 76 128a4 4 0 0 0 8 0a76 76 0 1 1 76 76m26.83-89.17L165.66 136l21.17 21.17a4 4 0 0 1-5.66 5.66L160 141.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L154.34 136l-21.17-21.17a4 4 0 0 1 5.66-5.66L160 130.34l21.17-21.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhCloudXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloverIcon],svg[ph-clover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.66 165.54C225.16 159.7 232 144.37 232 120s-6.84-39.7-20.34-45.55c-11.65-5-27.24-2.23-46.46 8.35c10.58-19.22 13.39-34.81 8.35-46.46C167.7 22.84 152.37 16 128 16s-39.7 6.84-45.55 20.34c-5 11.65-2.23 27.24 8.35 46.45C71.58 72.22 56 69.4 44.34 74.45C30.84 80.3 24 95.63 24 120s6.84 39.7 20.34 45.54A31 31 0 0 0 56.8 168c9.6 0 21-3.62 34-10.79c-10.58 19.2-13.39 34.79-8.35 46.44C88.3 217.15 103.63 224 128 224s39.7-6.85 45.55-20.35a32.24 32.24 0 0 0 2.34-15c10.45 16.23 19.64 34.48 24.35 53.33A8 8 0 0 0 208 248a8 8 0 0 0 1.95-.24a8 8 0 0 0 5.82-9.7c-6.94-27.76-22.27-53.8-37.86-74.79Q189.68 168 199.2 168a31 31 0 0 0 12.46-2.46m-6.37-76.4C214.14 93 216 108 216 120s-1.86 27-10.7 30.86c-8.36 3.63-23.52-1.31-42.68-13.91a243 243 0 0 1-22.54-17c18.41-15.58 50.32-37.27 65.21-30.81M97.14 42.7C101 33.86 116 32 128 32s27 1.86 30.86 10.7c3.63 8.36-1.31 23.52-13.91 42.68a243 243 0 0 1-17 22.54C112.37 89.51 90.69 57.59 97.14 42.7M50.71 150.86C41.86 147 40 132 40 120s1.86-27 10.7-30.86A15.6 15.6 0 0 1 57 88c8.75 0 21.34 5.17 36.4 15.07a243 243 0 0 1 22.54 17c-18.43 15.55-50.35 37.25-65.23 30.79m108.15 46.43C155 206.14 140 208 128 208s-27-1.86-30.86-10.7c-3.63-8.36 1.31-23.52 13.91-42.68a243 243 0 0 1 17-22.54c15.58 18.41 37.26 50.33 30.81 65.21"></svg:path>`,
})
export class PhCloverIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloverBoldIcon],svg[ph-clover-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.25 169.21C228.34 162.67 236 146.11 236 120s-7.66-42.68-22.75-49.22c-10.66-4.61-23.59-3.6-39.17 3.14c6.73-15.58 7.75-28.51 3.14-39.17C170.67 19.66 154.12 12 128 12s-42.67 7.66-49.22 22.75c-4.61 10.66-3.59 23.59 3.14 39.17c-15.58-6.74-28.51-7.75-39.17-3.14C27.66 77.32 20 93.88 20 120s7.66 42.67 22.75 49.21A35.35 35.35 0 0 0 57 172.05q11.15 0 24.94-6c-6.73 15.59-7.75 28.52-3.14 39.17C85.33 220.34 101.88 228 128 228s42.67-7.66 49.22-22.76a34 34 0 0 0 1.53-4.33c7.57 13.18 14 27.41 17.61 42A12 12 0 0 0 208 252a12.3 12.3 0 0 0 2.92-.36a12 12 0 0 0 8.73-14.55c-6-24.11-18.23-46.91-31.51-66.33a50.2 50.2 0 0 0 10.86 1.29a35.35 35.35 0 0 0 14.25-2.84M100.81 44.29C103.09 39 113 36 128 36s24.91 3 27.19 8.29c1.12 2.57 3.44 13-13.53 38.81c-4.63 7-9.59 13.51-13.66 18.52c-4.07-5-9-11.48-13.66-18.52c-16.97-25.84-14.65-36.24-13.53-38.81m-48.52 102.9C47 144.91 44 135 44 120s3-24.91 8.29-27.19a11.5 11.5 0 0 1 4.62-.81c5.56 0 16.09 2.45 34.19 14.34A228 228 0 0 1 109.62 120c-5 4.07-11.48 9-18.52 13.66c-25.84 16.97-36.24 14.65-38.81 13.53m102.9 48.52C152.91 201 143 204 128 204s-24.91-3-27.19-8.29c-1.12-2.58-3.44-13 13.53-38.81c4.63-7 9.59-13.51 13.66-18.52c4.07 5 9 11.48 13.66 18.52c16.97 25.84 14.65 36.23 13.53 38.81m9.71-62.05c-7-4.63-13.51-9.59-18.52-13.66a228 228 0 0 1 18.52-13.66c25.84-17 36.24-14.65 38.81-13.53C209 95.09 212 105 212 120s-3 24.91-8.29 27.19c-2.57 1.12-12.97 3.44-38.81-13.53"></svg:path>`,
})
export class PhCloverBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloverDuotoneIcon],svg[ph-clover-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 120s-90-96 0-96s0 96 0 96m-96 0c0 90 96 0 96 0s-96-90-96 0m96 96c90 0 0-96 0-96s-90 96 0 96m0-96s96 90 96 0s-96 0-96 0" opacity=".2"></svg:path><svg:path d="M211.66 165.54C225.16 159.7 232 144.37 232 120s-6.84-39.7-20.34-45.55c-11.65-5-27.24-2.23-46.46 8.35c10.58-19.22 13.39-34.81 8.35-46.46C167.7 22.84 152.37 16 128 16s-39.7 6.84-45.55 20.34C77.41 48 80.22 63.58 90.8 82.8C71.58 72.22 56 69.4 44.34 74.45C30.84 80.3 24 95.63 24 120s6.84 39.7 20.34 45.54A31 31 0 0 0 56.8 168c9.6 0 21-3.62 34-10.79c-10.58 19.2-13.39 34.79-8.35 46.44C88.3 217.15 103.63 224 128 224s39.7-6.85 45.55-20.35a32.24 32.24 0 0 0 2.34-15c10.45 16.23 19.64 34.48 24.35 53.33A8 8 0 0 0 208 248a8 8 0 0 0 1.95-.24a8 8 0 0 0 5.82-9.7c-6.94-27.76-22.27-53.8-37.86-74.79Q189.68 168 199.2 168a31 31 0 0 0 12.46-2.46m-6.37-76.4C214.14 93 216 108 216 120s-1.86 27-10.7 30.86c-8.36 3.63-23.52-1.31-42.68-13.91a243 243 0 0 1-22.54-17c18.41-15.58 50.32-37.27 65.21-30.81M97.14 42.7C101 33.86 116 32 128 32s27 1.86 30.86 10.7c3.63 8.36-1.31 23.52-13.91 42.68a243 243 0 0 1-17 22.54C112.37 89.51 90.69 57.59 97.14 42.7M50.71 150.86C41.86 147 40 132 40 120s1.86-27 10.7-30.86A15.6 15.6 0 0 1 57 88c8.75 0 21.34 5.17 36.4 15.07a243 243 0 0 1 22.54 17c-18.43 15.55-50.35 37.25-65.23 30.79m108.15 46.43C155 206.14 140 208 128 208s-27-1.86-30.86-10.7c-3.63-8.36 1.31-23.52 13.91-42.68a243 243 0 0 1 17-22.54c15.58 18.41 37.26 50.33 30.81 65.21"></svg:path></svg:g>`,
})
export class PhCloverDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloverFillIcon],svg[ph-clover-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 120c0 22.63-6 36.72-17.93 41.87a27.3 27.3 0 0 1-11 2.13a41.8 41.8 0 0 1-8.4-.93a4.05 4.05 0 0 1-2.52-1.64a368.5 368.5 0 0 0-47.75-55.26a8 8 0 0 0-11 11.62c14.84 13.91 64.13 63.49 78.32 120.27a8 8 0 0 1-5.82 9.7a8 8 0 0 1-1.9.24a8 8 0 0 1-7.75-6.06c-4.12-16.47-11.65-32.48-20.46-47.09a25.9 25.9 0 0 1-1.9 7.21C164.72 214 150.63 220 128 220s-36.72-6-41.88-17.94c-5.45-12.58-.39-30.82 15-54.21c.68-1 1.36-2 2-3l-3 2C82.84 158.27 68.35 164 56.89 164a27.3 27.3 0 0 1-11-2.13C34 156.72 28 142.63 28 120s6-36.72 17.93-41.88c12.59-5.45 30.83-.39 54.22 15l3 2l-2-3c-15.41-23.39-20.47-41.63-15-54.22C91.28 26 105.37 20 128 20s36.72 6 41.88 17.93c5.45 12.59.39 30.83-15 54.22q-1 1.53-2 3l3-2c23.39-15.41 41.63-20.47 54.22-15C222 83.28 228 97.37 228 120"></svg:path>`,
})
export class PhCloverFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloverLightIcon],svg[ph-clover-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.86 163.71C223.56 158.21 230 143.5 230 120s-6.44-38.21-19.14-43.71c-14.5-6.29-34 1.5-51 11.8c10.3-16.93 18.08-36.45 11.8-50.95C166.21 24.44 151.5 18 128 18s-38.21 6.44-43.71 19.14c-6.28 14.5 1.5 34 11.8 51C79.17 77.79 59.64 70 45.14 76.29C32.44 81.79 26 96.5 26 120s6.44 38.21 19.14 43.71A29.1 29.1 0 0 0 56.78 166c12.42 0 26.6-6.33 39.32-14.08c-10.31 16.93-18.1 36.46-11.81 51C89.79 215.56 104.5 222 128 222s38.21-6.44 43.71-19.14c3-6.82 2.79-14.76.72-23c12.62 18.21 24.22 39.49 29.75 61.6A6 6 0 0 0 208 246a6 6 0 0 0 1.46-.18a6 6 0 0 0 4.36-7.28c-7.56-30.24-25.2-58.44-42.18-80.2c9.32 4.51 18.88 7.63 27.58 7.63a29.1 29.1 0 0 0 11.64-2.26M95.3 41.91C98.73 34 109.73 30 128 30s29.27 4 32.7 11.91c3.9 9-1.11 24.85-14.11 44.61A247 247 0 0 1 128 111a247 247 0 0 1-18.59-24.45c-13-19.79-18.01-35.64-14.11-44.64M49.91 152.7C42 149.27 38 138.27 38 120s4-29.27 11.91-32.7a17.5 17.5 0 0 1 7-1.29c9.26 0 22.27 5.28 37.65 15.4A246 246 0 0 1 119 120a246 246 0 0 1-24.45 18.59c-19.79 13-35.64 18.01-44.64 14.11m110.79 45.39C157.27 206 146.27 210 128 210s-29.27-4-32.7-11.91c-3.9-9 1.11-24.85 14.11-44.61A246 246 0 0 1 128 129a246 246 0 0 1 18.59 24.45c13 19.79 18.01 35.63 14.11 44.64m.78-59.5A246 246 0 0 1 137 120a246 246 0 0 1 24.45-18.59c19.76-13 35.61-18 44.61-14.11C214 90.73 218 101.73 218 120s-4 29.27-11.91 32.7c-9 3.9-24.85-1.11-44.61-14.11"></svg:path>`,
})
export class PhCloverLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCloverThinIcon],svg[ph-clover-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.07 161.88C222 156.72 228 142.63 228 120s-6-36.72-17.93-41.88c-12.59-5.45-30.83-.39-54.22 15l-3 2l2-3c15.41-23.39 20.47-41.63 15-54.22C164.72 26 150.63 20 128 20s-36.72 6-41.88 17.93c-5.45 12.59-.39 30.83 15 54.22q1 1.53 2 3l-3-2c-23.39-15.41-41.63-20.47-54.22-15C34 83.28 28 97.37 28 120s6 36.72 17.93 41.88a27.5 27.5 0 0 0 11 2.12c11.46 0 26-5.73 43.26-17.14l3-2l-2 3c-15.41 23.39-20.47 41.63-15 54.21C91.28 214 105.37 220 128 220s36.72-6 41.88-17.94c3.81-8.8 2.47-20.39-3.95-34.56c15.65 20.5 31.41 46.36 38.19 73.5a4 4 0 0 0 3.88 3a4 4 0 0 0 1-.12a4 4 0 0 0 2.91-4.85c-8.41-33.65-29.45-64.78-48-87.2c13.82 8.09 25.62 12.17 35.26 12.17a27.5 27.5 0 0 0 10.9-2.12M93.47 41.11C97.24 32.41 108.86 28 128 28s30.76 4.41 34.53 13.11c8.21 18.94-19.86 56.41-34.53 73c-14.67-16.59-42.74-54.06-34.53-73M49.11 154.53C40.41 150.76 36 139.14 36 120s4.41-30.76 13.11-34.53a19.4 19.4 0 0 1 7.8-1.47c20.08 0 50.66 23.15 65.15 36c-16.54 14.67-54.01 42.74-72.95 34.53m113.42 44.36C158.76 207.59 147.14 212 128 212s-30.76-4.41-34.53-13.11C85.26 180 113.33 142.48 128 125.94c14.67 16.54 42.74 54.06 34.53 72.95m-28.42-78.74L134 120c16.54-14.68 54-42.75 72.94-34.53C215.59 89.24 220 100.86 220 120s-4.41 30.76-13.11 34.53c-18.89 8.18-56.16-19.67-72.78-34.38"></svg:path>`,
})
export class PhCloverThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClubIcon],svg[ph-club-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 88h-2.33a56 56 0 1 0-107.34 0H72a56 56 0 1 0 24.54 106.35l-8.2 27.35A8 8 0 0 0 96 232h64a8 8 0 0 0 7.66-10.3l-8.2-27.35A56 56 0 1 0 184 88m0 96a40 40 0 0 1-33.4-18a8 8 0 0 0-14.33 6.71l13 43.26h-42.5l13-43.26A8 8 0 0 0 105.4 166a40 40 0 1 1-19.93-59.71a8 8 0 0 0 9.33-12a40 40 0 1 1 66.4 0a8 8 0 0 0 9.33 12A40 40 0 1 1 184 184"></svg:path>`,
})
export class PhClubIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClubBoldIcon],svg[ph-club-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186.79 84.06a60 60 0 1 0-117.58 0a60 60 0 1 0 19 117.73l-4 19.86A12 12 0 0 0 96 236h64a12 12 0 0 0 11.77-14.35l-4-19.86a60 60 0 1 0 19-117.73ZM184 180a35.88 35.88 0 0 1-24.78-9.88a12 12 0 0 0-20 11.06l6.14 30.82h-34.72l6.16-30.82a12 12 0 0 0-20-11.06a36 36 0 1 1-12.65-60a12 12 0 0 0 14-18A35.7 35.7 0 0 1 92 72a36 36 0 1 1 65.88 20.08a12 12 0 0 0 14 18A36 36 0 1 1 184 180"></svg:path>`,
})
export class PhClubBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClubDuotoneIcon],svg[ph-club-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 144a48 48 0 0 1-88.07 26.44L160 224H96l16.07-53.56a48 48 0 1 1-23.9-71.65a48 48 0 1 1 79.66 0A48 48 0 0 1 232 144" opacity=".2"></svg:path><svg:path d="M184 88h-2.33a56 56 0 1 0-107.34 0H72a56 56 0 1 0 24.54 106.35l-8.2 27.35A8 8 0 0 0 96 232h64a8 8 0 0 0 7.66-10.3l-8.2-27.35A56 56 0 1 0 184 88m0 96a40 40 0 0 1-33.4-18a8 8 0 0 0-14.33 6.71l13 43.26h-42.5l13-43.26A8 8 0 0 0 105.4 166a40 40 0 1 1-19.93-59.71a8 8 0 0 0 9.33-12a40 40 0 1 1 66.4 0a8 8 0 0 0 9.33 12A40 40 0 1 1 184 184"></svg:path></svg:g>`,
})
export class PhClubDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClubFillIcon],svg[ph-club-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 144a56 56 0 0 1-84.81 48h-4.44l8.91 29.7A8 8 0 0 1 152 232h-48a8 8 0 0 1-7.66-10.3l8.91-29.7h-4.44A56 56 0 1 1 72 88h2.33a56 56 0 1 1 107.34 0H184a56.06 56.06 0 0 1 56 56"></svg:path>`,
})
export class PhClubFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClubLightIcon],svg[ph-club-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 90q-2.59 0-5.16.24a54 54 0 1 0-101.69 0c-1.7-.16-3.42-.24-5.15-.24a54 54 0 1 0 27.85 100.28l-9.6 32A6 6 0 0 0 96 230h64a6 6 0 0 0 5.75-7.72l-9.6-32A54 54 0 1 0 184 90m0 96a41.92 41.92 0 0 1-35.06-18.87a6 6 0 0 0-10.76 5L151.94 218h-47.88l13.76-45.84a6 6 0 0 0-10.76-5a42 42 0 1 1-20.91-62.69a6 6 0 0 0 7-9a42 42 0 1 1 69.72 0a6 6 0 0 0 7 9A42 42 0 1 1 184 186"></svg:path>`,
})
export class PhClubLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phClubThinIcon],svg[ph-club-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 92a53 53 0 0 0-8.26.65a52 52 0 1 0-95.48 0A53 53 0 0 0 72 92a52 52 0 1 0 31.38 93.48l-11.21 37.37A4 4 0 0 0 96 228h64a4 4 0 0 0 3.83-5.15l-11.21-37.37A52 52 0 1 0 184 92m0 96a43.92 43.92 0 0 1-36.73-19.77a4 4 0 0 0-7.17 3.36L154.62 220h-53.24l14.52-48.41a4 4 0 0 0-7.17-3.36a44 44 0 1 1-21.91-65.67a4 4 0 0 0 4.66-6a44 44 0 1 1 73 0a4 4 0 0 0 4.66 6A44 44 0 1 1 184 188"></svg:path>`,
})
export class PhClubThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoatHangerIcon],svg[ph-coat-hanger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.57 171.2L141.33 96l23.46-17.6A8 8 0 0 0 168 72a40 40 0 1 0-80 0a8 8 0 0 0 16 0a24 24 0 0 1 47.69-3.78l-28.35 21.27l-.28.21l-108.63 81.5A16 16 0 0 0 24 200h208a16 16 0 0 0 9.6-28.8ZM232 184H24l104-78z"></svg:path>`,
})
export class PhCoatHangerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoatHangerBoldIcon],svg[ph-coat-hanger-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244 168l-96-72l19.2-14.4A12 12 0 0 0 172 72a44 44 0 0 0-87.66-5.48a12 12 0 1 0 23.82 3a20 20 0 0 1 39.09-2.92L121 86.24c-.15.1-.29.21-.43.32L12 168a20 20 0 0 0 12 36h208a20 20 0 0 0 12-36M36 180l92-69l92 69Z"></svg:path>`,
})
export class PhCoatHangerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoatHangerDuotoneIcon],svg[ph-coat-hanger-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 192H24a8 8 0 0 1-4.8-14.4L128 96l108.79 81.6A8 8 0 0 1 232 192" opacity=".2"></svg:path><svg:path d="M241.57 171.2L141.33 96l23.46-17.6A8 8 0 0 0 168 72a40 40 0 1 0-80 0a8 8 0 0 0 16 0a24 24 0 0 1 47.69-3.78l-28.35 21.27l-.28.22L14.43 171.2A16 16 0 0 0 24 200h208a16 16 0 0 0 9.6-28.8ZM232 184H24l104-78z"></svg:path></svg:g>`,
})
export class PhCoatHangerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoatHangerFillIcon],svg[ph-coat-hanger-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.57 171.2L141.33 96l23.46-17.6A8 8 0 0 0 168 72a40 40 0 1 0-80 0a8 8 0 0 0 16 0a24 24 0 0 1 47.69-3.78L14.43 171.2A16 16 0 0 0 24 200h208a16 16 0 0 0 9.6-28.8ZM32.73 184c20.87-13.41 56.76-32 95.27-32s74.4 18.59 95.27 32Z"></svg:path>`,
})
export class PhCoatHangerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoatHangerLightIcon],svg[ph-coat-hanger-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240.37 172.8L138 96l25.59-19.2A6 6 0 0 0 166 72a38 38 0 1 0-76 0a6 6 0 0 0 12 0a26 26 0 0 1 51.82-2.88l-29.32 22l-.21.16L15.63 172.8A14 14 0 0 0 24 198h208a14 14 0 0 0 8.39-25.2Zm-6.5 11.83A1.85 1.85 0 0 1 232 186H24a2 2 0 0 1-1.19-3.6L128 103.5l105.17 78.9a1.85 1.85 0 0 1 .7 2.23"></svg:path>`,
})
export class PhCoatHangerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoatHangerThinIcon],svg[ph-coat-hanger-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.18 174.4L134.67 96l27.72-20.8A4 4 0 0 0 164 72a36 36 0 1 0-72 0a4 4 0 0 0 8 0a28 28 0 0 1 55.92-2l-30.26 22.7l-.14.1l-108.7 81.6A12 12 0 0 0 24 196h208a12 12 0 0 0 7.2-21.6Zm-3.41 10.87A3.88 3.88 0 0 1 232 188H24a4 4 0 0 1-2.4-7.2L128 101l106.38 79.8a3.88 3.88 0 0 1 1.39 4.47"></svg:path>`,
})
export class PhCoatHangerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodaLogoIcon],svg[ph-coda-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 88a39.8 39.8 0 0 1 21.53 6.1A12 12 0 0 0 216 84V48a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-36a12 12 0 0 0-18.44-10.11c-7.25 4.65-13.41 6.41-21.24 6.11H176a40 40 0 0 1 0-80m-56 40a56.07 56.07 0 0 0 55.84 56a48.37 48.37 0 0 0 24.16-5.11V208H56V48h144v29.23A56.3 56.3 0 0 0 120 128"></svg:path>`,
})
export class PhCodaLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodaLogoBoldIcon],svg[ph-coda-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 92a35.8 35.8 0 0 1 19.38 5.47A16 16 0 0 0 220 84V48a20 20 0 0 0-20-20H56a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-36a16 16 0 0 0-24.6-13.48c-6.58 4.22-11.89 5.76-18.92 5.48H176a36 36 0 0 1 0-72m-.24 96a52.4 52.4 0 0 0 20.24-3v19H60V52h136v19.3a61.6 61.6 0 0 0-20-3.3a60 60 0 0 0-.24 120"></svg:path>`,
})
export class PhCodaLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodaLogoDuotoneIcon],svg[ph-coda-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 128a48 48 0 0 0 48 48c10.27.41 17.9-2.25 25.88-7.37A4 4 0 0 1 208 172v36a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v36a4 4 0 0 1-6.15 3.36A48.24 48.24 0 0 0 128 128" opacity=".2"></svg:path><svg:path d="M176 88a39.8 39.8 0 0 1 21.53 6.1A12 12 0 0 0 216 84V48a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-36a12 12 0 0 0-18.44-10.11c-7.25 4.65-13.41 6.41-21.24 6.11H176a40 40 0 0 1 0-80m-56 40a56.07 56.07 0 0 0 55.84 56a48.4 48.4 0 0 0 24.16-5.11V208H56V48h144v29.23A56.3 56.3 0 0 0 120 128"></svg:path></svg:g>`,
})
export class PhCodaLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodaLogoFillIcon],svg[ph-coda-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 128a40 40 0 0 0 40 40h.32c7.83.3 14-1.46 21.24-6.11A12 12 0 0 1 216 172v36a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16v36a12 12 0 0 1-18.47 10.1A40.23 40.23 0 0 0 136 128"></svg:path>`,
})
export class PhCodaLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodaLogoLightIcon],svg[ph-coda-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 86a41.8 41.8 0 0 1 22.61 6.41A10 10 0 0 0 214 84V48a14 14 0 0 0-14-14H56a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-36a10 10 0 0 0-15.36-8.43c-7.63 4.89-14.11 6.76-22.4 6.42H176a42 42 0 0 1 0-84Zm-54 42a54.06 54.06 0 0 0 53.88 54a46.36 46.36 0 0 0 26.12-6.43V208a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2v32.48A54.28 54.28 0 0 0 122 128"></svg:path>`,
})
export class PhCodaLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodaLogoThinIcon],svg[ph-coda-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 84a43.8 43.8 0 0 1 23.69 6.73A8 8 0 0 0 212 84V48a12 12 0 0 0-12-12H56a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-36a8 8 0 0 0-12.28-6.75c-8 5.14-14.82 7.09-23.56 6.74H176a44 44 0 0 1 0-88Zm-52 44a52.05 52.05 0 0 0 51.92 52c10.35.4 18.76-2 28.08-8v36a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4v36a52.24 52.24 0 0 0-80 44"></svg:path>`,
})
export class PhCodaLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeIcon],svg[ph-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M69.12 94.15L28.5 128l40.62 33.85a8 8 0 1 1-10.24 12.29l-48-40a8 8 0 0 1 0-12.29l48-40a8 8 0 0 1 10.24 12.3m176 27.7l-48-40a8 8 0 1 0-10.24 12.3L227.5 128l-40.62 33.85a8 8 0 1 0 10.24 12.29l48-40a8 8 0 0 0 0-12.29m-82.39-89.37a8 8 0 0 0-10.25 4.79l-64 176a8 8 0 0 0 4.79 10.26A8.1 8.1 0 0 0 96 224a8 8 0 0 0 7.52-5.27l64-176a8 8 0 0 0-4.79-10.25"></svg:path>`,
})
export class PhCodeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeBlockIcon],svg[ph-code-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m58.34 101.66l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32L43.31 64l26.35 26.34a8 8 0 0 1-11.32 11.32m40 0a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0 0-11.32l-32-32a8 8 0 0 0-11.32 11.32L124.69 64L98.34 90.34a8 8 0 0 0 0 11.32M200 40h-24a8 8 0 0 0 0 16h24v144H56v-64a8 8 0 0 0-16 0v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhCodeBlockIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeBlockBoldIcon],svg[ph-code-block-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m51.51 104.49l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 1 1 17 17L45 64l23.49 23.51a12 12 0 0 1-17 17Zm48 0a12 12 0 0 0 17 0l32-32a12 12 0 0 0 0-17l-32-32a12 12 0 1 0-17 17L123 64L99.51 87.51a12 12 0 0 0 0 16.98M200 36h-20a12 12 0 0 0 0 24h16v136H60v-56a12 12 0 0 0-24 0v60a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20"></svg:path>`,
})
export class PhCodeBlockBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeBlockDuotoneIcon],svg[ph-code-block-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 32v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h104a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m58.34 101.66l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32L43.31 64l26.35 26.34a8 8 0 0 1-11.32 11.32m40 0a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0 0-11.32l-32-32a8 8 0 0 0-11.32 11.32L124.69 64L98.34 90.34a8 8 0 0 0 0 11.32M200 40h-24a8 8 0 0 0 0 16h24v144H56v-64a8 8 0 0 0-16 0v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16"></svg:path></svg:g>`,
})
export class PhCodeBlockDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeBlockFillIcon],svg[ph-code-block-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40h-32a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v80a16 16 0 0 0 16 16h8v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-93.66 21.66a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L124.69 80Zm-64 24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L59.31 80l18.35 18.34a8 8 0 0 1-11.32 11.32ZM200 200H56v-64h96a16 16 0 0 0 16-16V56h32Z"></svg:path>`,
})
export class PhCodeBlockFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeBlockLightIcon],svg[ph-code-block-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m59.76 100.24l-32-32a6 6 0 0 1 0-8.48l32-32a6 6 0 1 1 8.48 8.48L40.49 64l27.75 27.76a6 6 0 1 1-8.48 8.48m40 0a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0 0-8.48l-32-32a6 6 0 1 0-8.48 8.48L127.51 64L99.76 91.76a6 6 0 0 0 0 8.48M200 42h-24a6 6 0 0 0 0 12h24a2 2 0 0 1 2 2v144a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-64a6 6 0 0 0-12 0v64a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14"></svg:path>`,
})
export class PhCodeBlockLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeBlockThinIcon],svg[ph-code-block-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m61.17 98.83l-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 5.66L37.66 64l29.17 29.17a4 4 0 0 1-5.66 5.66m40 0a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0 0-5.66l-32-32a4 4 0 0 0-5.66 5.66L130.34 64l-29.17 29.17a4 4 0 0 0 0 5.66M200 44h-24a4 4 0 0 0 0 8h24a4 4 0 0 1 4 4v144a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-64a4 4 0 0 0-8 0v64a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCodeBlockThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeBoldIcon],svg[ph-code-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71.68 97.22L34.74 128l36.94 30.78a12 12 0 1 1-15.36 18.44l-48-40a12 12 0 0 1 0-18.44l48-40a12 12 0 0 1 15.36 18.44m176 21.56l-48-40a12 12 0 1 0-15.36 18.44L221.26 128l-36.94 30.78a12 12 0 1 0 15.36 18.44l48-40a12 12 0 0 0 0-18.44M164.1 28.72a12 12 0 0 0-15.38 7.18l-64 176a12 12 0 0 0 7.18 15.37a11.8 11.8 0 0 0 4.1.73a12 12 0 0 0 11.28-7.9l64-176a12 12 0 0 0-7.18-15.38"></svg:path>`,
})
export class PhCodeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeDuotoneIcon],svg[ph-code-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m240 128l-48 40H64l-48-40l48-40h128Z" opacity=".2"></svg:path><svg:path d="M69.12 94.15L28.5 128l40.62 33.85a8 8 0 1 1-10.24 12.29l-48-40a8 8 0 0 1 0-12.29l48-40a8 8 0 0 1 10.24 12.3m176 27.7l-48-40a8 8 0 1 0-10.24 12.3L227.5 128l-40.62 33.85a8 8 0 1 0 10.24 12.29l48-40a8 8 0 0 0 0-12.29m-82.39-89.37a8 8 0 0 0-10.25 4.79l-64 176a8 8 0 0 0 4.79 10.26A8.1 8.1 0 0 0 96 224a8 8 0 0 0 7.52-5.27l64-176a8 8 0 0 0-4.79-10.25"></svg:path></svg:g>`,
})
export class PhCodeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeFillIcon],svg[ph-code-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M92.8 145.6a8 8 0 1 1-9.6 12.8l-32-24a8 8 0 0 1 0-12.8l32-24a8 8 0 0 1 9.6 12.8L69.33 128Zm58.89-71.4l-32 112a8 8 0 1 1-15.38-4.4l32-112a8 8 0 0 1 15.38 4.4m53.11 60.2l-32 24a8 8 0 0 1-9.6-12.8l23.47-17.6l-23.47-17.6a8 8 0 1 1 9.6-12.8l32 24a8 8 0 0 1 0 12.8"></svg:path>`,
})
export class PhCodeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeLightIcon],svg[ph-code-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M67.84 92.61L25.37 128l42.47 35.39a6 6 0 1 1-7.68 9.22l-48-40a6 6 0 0 1 0-9.22l48-40a6 6 0 0 1 7.68 9.22m176 30.78l-48-40a6 6 0 1 0-7.68 9.22L230.63 128l-42.47 35.39a6 6 0 1 0 7.68 9.22l48-40a6 6 0 0 0 0-9.22m-81.79-89a6 6 0 0 0-7.69 3.61l-64 176a6 6 0 0 0 3.64 7.64a6.2 6.2 0 0 0 2 .36a6 6 0 0 0 5.64-3.95l64-176a6 6 0 0 0-3.59-7.69Z"></svg:path>`,
})
export class PhCodeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeSimpleIcon],svg[ph-code-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M93.31 70L28 128l65.27 58a8 8 0 1 1-10.62 12l-72-64a8 8 0 0 1 0-12l72-64a8 8 0 1 1 10.66 12m152 52l-72-64a8 8 0 0 0-10.62 12L228 128l-65.27 58a8 8 0 1 0 10.62 12l72-64a8 8 0 0 0 0-12Z"></svg:path>`,
})
export class PhCodeSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeSimpleBoldIcon],svg[ph-code-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m96 73l-61.94 55L96 183a12 12 0 1 1-16 18L8 137a12 12 0 0 1 0-18l72-64a12 12 0 0 1 16 18m152 46l-72-64a12 12 0 1 0-16 18l61.91 55L160 183a12 12 0 1 0 16 18l72-64a12 12 0 0 0 0-18"></svg:path>`,
})
export class PhCodeSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeSimpleDuotoneIcon],svg[ph-code-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m240 128l-72 64H88l-72-64l72-64h80Z" opacity=".2"></svg:path><svg:path d="M93.31 70L28 128l65.27 58a8 8 0 1 1-10.62 12l-72-64a8 8 0 0 1 0-12l72-64a8 8 0 1 1 10.66 12m152 52l-72-64a8 8 0 0 0-10.62 12L228 128l-65.27 58a8 8 0 1 0 10.62 12l72-64a8 8 0 0 0 0-12Z"></svg:path></svg:g>`,
})
export class PhCodeSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeSimpleFillIcon],svg[ph-code-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M101.66 162.34a8 8 0 0 1-11.32 11.32l-40-40a8 8 0 0 1 0-11.32l40-40a8 8 0 0 1 11.32 11.32L67.31 128Zm104-28.68l-40 40a8 8 0 0 1-11.32-11.32L188.69 128l-34.35-34.34a8 8 0 0 1 11.32-11.32l40 40a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhCodeSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeSimpleLightIcon],svg[ph-code-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 68.49L25 128l67 59.52a6 6 0 1 1-8 9l-72-64a6 6 0 0 1 0-9l72-64a6 6 0 0 1 8 9Zm152 55l-72-64a6 6 0 0 0-8 9L231 128l-67 59.52a6 6 0 1 0 8 9l72-64a6 6 0 0 0 0-9Z"></svg:path>`,
})
export class PhCodeSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeSimpleThinIcon],svg[ph-code-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90.66 67L22 128l68.64 61a4 4 0 0 1-5.32 6l-72-64a4 4 0 0 1 0-6l72-64a4 4 0 1 1 5.32 6Zm152 58l-72-64a4 4 0 1 0-5.32 6L234 128l-68.64 61a4 4 0 0 0 5.32 6l72-64a4 4 0 0 0 0-6Z"></svg:path>`,
})
export class PhCodeSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodeThinIcon],svg[ph-code-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M66.56 91.07L22.25 128l44.31 36.93A4 4 0 0 1 64 172a3.94 3.94 0 0 1-2.56-.93l-48-40a4 4 0 0 1 0-6.14l48-40a4 4 0 0 1 5.12 6.14m176 33.86l-48-40a4 4 0 1 0-5.12 6.14L233.75 128l-44.31 36.93a4 4 0 1 0 5.12 6.14l48-40a4 4 0 0 0 0-6.14m-81.19-88.69a4 4 0 0 0-5.13 2.39l-64 176a4 4 0 0 0 2.39 5.13A4.1 4.1 0 0 0 96 220a4 4 0 0 0 3.76-2.63l64-176a4 4 0 0 0-2.39-5.13"></svg:path>`,
})
export class PhCodeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodepenLogoIcon],svg[ph-codepen-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.79 89l-104-56a8 8 0 0 0-7.58 0l-104 56A8 8 0 0 0 16 96v64a8 8 0 0 0 4.21 7.05l104 56a8 8 0 0 0 7.58 0l104-56A8 8 0 0 0 240 160V96a8 8 0 0 0-4.21-7M224 146.61L189.45 128L224 109.39Zm-51.43-27.7L136 99.22V53.39L215.13 96Zm-44.57 24L100.3 128l27.7-14.91L155.7 128Zm-8-89.52v45.83l-36.57 19.69L40.87 96Zm-88 56L66.55 128L32 146.61Zm51.43 27.7L120 156.78v45.83L40.87 160ZM136 202.61v-45.83l36.57-19.69L215.13 160Z"></svg:path>`,
})
export class PhCodepenLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodepenLogoBoldIcon],svg[ph-codepen-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.68 85.43l-104-56a12 12 0 0 0-11.38 0l-104 56A12 12 0 0 0 12 96v64a12 12 0 0 0 6.32 10.57l104 56a12 12 0 0 0 11.38 0l104-56A12 12 0 0 0 244 160V96a12 12 0 0 0-6.32-10.57M220 139.91L197.88 128L220 116.09Zm-47.43-25.54L140 96.83V60.09L206.69 96Zm-44.57 24L108.74 128L128 117.63L147.26 128Zm-12-78.28v36.74l-32.57 17.54L49.31 96Zm-80 56L58.12 128L36 139.91Zm47.43 25.54L116 159.17v36.74L49.31 160ZM140 195.91v-36.74l32.57-17.54L206.69 160Z"></svg:path>`,
})
export class PhCodepenLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodepenLogoDuotoneIcon],svg[ph-codepen-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m232 160l-104 56l-104-56l104-56Z" opacity=".2"></svg:path><svg:path d="m235.79 89l-104-56a8 8 0 0 0-7.58 0l-104 56A8 8 0 0 0 16 96v64a8 8 0 0 0 4.21 7.05l104 56a8 8 0 0 0 7.58 0l104-56A8 8 0 0 0 240 160V96a8 8 0 0 0-4.21-7M224 146.61L189.45 128L224 109.39Zm-51.43-27.7L136 99.22V53.39L215.13 96Zm-44.57 24L100.3 128l27.7-14.91L155.7 128Zm-8-89.52v45.83l-36.57 19.69L40.87 96Zm-88 56L66.55 128L32 146.61Zm51.43 27.7L120 156.78v45.83L40.87 160ZM136 202.61v-45.83l36.57-19.69L215.13 160Z"></svg:path></svg:g>`,
})
export class PhCodepenLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodepenLogoFillIcon],svg[ph-codepen-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.79 89l-104-56a8 8 0 0 0-7.58 0l-104 56A8 8 0 0 0 16 96v64a8 8 0 0 0 4.21 7l93.89 50.6a4 4 0 0 0 5.9-3.52v-57.3L66.55 128L32 146.61v-37.22L66.55 128l16.88-9.09L40.87 96L120 53.39v45.83l-36.57 19.69l44.57 24l44.57-24l16.88 9.09L224 109.39v37.22L189.45 128L136 156.78v57.3a4 4 0 0 0 5.9 3.52l93.89-50.6a8 8 0 0 0 4.21-7V96a8 8 0 0 0-4.21-7m-63.22 30L136 99.22V53.39L215.13 96Z"></svg:path>`,
})
export class PhCodepenLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodepenLogoLightIcon],svg[ph-codepen-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.85 90.72l-104-56a6 6 0 0 0-5.68 0l-104 56A6 6 0 0 0 18 96v64a6 6 0 0 0 3.15 5.28l104 56a6 6 0 0 0 5.68 0l104-56A6 6 0 0 0 238 160V96a6 6 0 0 0-3.15-5.28M226 150l-40.77-22L226 106Zm-53.43-28.77L134 100.42V50l85.34 46Zm-44.57 24L96.08 128L128 110.81L159.92 128ZM122 50v50.38l-38.57 20.8L36.66 96Zm-92 56l40.77 22L30 150Zm53.43 28.76L122 155.58V206l-85.34-46ZM134 206v-50.42l38.57-20.77L219.34 160Z"></svg:path>`,
})
export class PhCodepenLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodepenLogoThinIcon],svg[ph-codepen-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234 92.55s-.05 0-.09-.07l-104-56a4 4 0 0 0-3.8 0l-104 56l-.11.08A4 4 0 0 0 20 96v64a4 4 0 0 0 2 3.45a1 1 0 0 0 .09.07l104 56a4 4 0 0 0 3.8 0l104-56a.3.3 0 0 0 .08-.07a4 4 0 0 0 2-3.45V96a4 4 0 0 0-1.97-3.45m-6 60.75L181 128l47-25.3Zm-55.43-29.84L132 101.61V46.7L223.56 96Zm-44.57 24L91.87 128L128 108.54L164.13 128ZM124 46.7v54.91l-40.57 21.85L32.44 96Zm-96 56L75 128l-47 25.3Zm55.43 29.84L124 154.39v54.91L32.44 160ZM132 209.3v-54.91l40.57-21.85l51 27.46Z"></svg:path>`,
})
export class PhCodepenLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodesandboxLogoIcon],svg[ph-codesandbox-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.68 66.15l-88-48.15a15.94 15.94 0 0 0-15.36 0l-88 48.18a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M168 152v50.09l-32 17.52v-86.87l80-43.8v32l-43.84 24A8 8 0 0 0 168 152m-84.16-7L40 121V89l80 43.8v86.87l-32-17.58V152a8 8 0 0 0-4.16-7m-.7-88.41l41 22.45a8 8 0 0 0 7.68 0l41-22.45l34.48 18.87l-79.3 43.42l-79.34-43.44ZM128 32l28.2 15.44L128 62.89L99.8 47.45ZM40 139.22l32 17.52v36.59l-32-17.51Zm144 54.11v-36.59l32-17.52v36.6Z"></svg:path>`,
})
export class PhCodesandboxLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodesandboxLogoBoldIcon],svg[ph-codesandbox-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m225.6 62.65l-88-48.18a19.91 19.91 0 0 0-19.2 0l-88 48.17A20 20 0 0 0 20 80.19v95.62a20 20 0 0 0 10.4 17.55l88 48.17a19.89 19.89 0 0 0 19.2 0l88-48.18a20 20 0 0 0 10.4-17.54V80.19a20 20 0 0 0-10.4-17.54M164 152v47.72l-24 13.14v-77.75l72-39.42v22.92l-41.76 22.86A12 12 0 0 0 164 152m-78.24-10.53L44 118.61V95.69l72 39.42v77.75l-24-13.14V152a12 12 0 0 0-6.24-10.53m-2.62-80.34l39.1 21.4a11.95 11.95 0 0 0 11.52 0l39.1-21.4L199 75.45l-71 38.87l-71-38.87ZM128 36.57l19.87 10.88L128 58.33l-19.87-10.88ZM44 146l24 13.14v27.47l-24-13.17Zm144 40.61v-27.5L212 146v27.47Z"></svg:path>`,
})
export class PhCodesandboxLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodesandboxLogoDuotoneIcon],svg[ph-codesandbox-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 125.73L80 152v54.84l-43.84-24a8 8 0 0 1-4.16-7ZM176 152v54.84l43.84-24a8 8 0 0 0 4.16-7v-50.1ZM124.16 25l-41 22.46L128 72l44.86-24.56L131.84 25a8 8 0 0 0-7.68 0" opacity=".2"></svg:path><svg:path d="m223.68 66.15l-88-48.15a15.94 15.94 0 0 0-15.36 0l-88 48.18a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M168 152v50.09l-32 17.52v-86.87l80-43.8v32l-43.84 24A8 8 0 0 0 168 152m-84.16-7L40 121V89l80 43.8v86.87l-32-17.58V152a8 8 0 0 0-4.16-7m-.7-88.41l41 22.45a8 8 0 0 0 7.68 0l41-22.45l34.48 18.87l-79.3 43.42l-79.34-43.44ZM128 32l28.2 15.44L128 62.89L99.8 47.45ZM40 139.22l32 17.52v36.59l-32-17.51Zm144 54.11v-36.59l32-17.52v36.6Z"></svg:path></svg:g>`,
})
export class PhCodesandboxLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodesandboxLogoFillIcon],svg[ph-codesandbox-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.89 72.25a15.93 15.93 0 0 0-6.18-6.06L135.68 18a15.94 15.94 0 0 0-15.36 0l-88 48.18a15.93 15.93 0 0 0-6.18 6.06A16 16 0 0 0 24 80.18v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-2.11-7.93M120 219.61l-32-17.52V152a8 8 0 0 0-4.16-7L40 121V89l80 43.8Zm8-100.73L48.66 75.44l34.48-18.87l41 22.45a8 8 0 0 0 7.68 0l41-22.45l34.48 18.87Zm88 2.1l-43.84 24a8 8 0 0 0-4.16 7v50.09l-32 17.52v-86.85l80-43.8Z"></svg:path>`,
})
export class PhCodesandboxLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodesandboxLogoLightIcon],svg[ph-codesandbox-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.72 67.91l-88-48.18a13.9 13.9 0 0 0-13.44 0l-88 48.17A14 14 0 0 0 26 80.18v95.64a14 14 0 0 0 7.28 12.28l88 48.17a13.92 13.92 0 0 0 13.44 0l88-48.17a14 14 0 0 0 7.28-12.28V80.18a14 14 0 0 0-7.28-12.27M128 121.16L44.49 75.44l38.65-21.15l42 23a6 6 0 0 0 5.76 0l42-23l38.65 21.15Zm-1-90.91a2 2 0 0 1 1.92 0l31.4 17.2L128 65.16L95.63 47.45ZM38 175.82v-40l36 19.7v41.16l-35-19.11a2 2 0 0 1-1-1.75m48 27.46V152a6 6 0 0 0-3.12-5.26L38 122.17v-36.6l84 46V223ZM134 223v-91.44l84-46v36.6l-44.88 24.57A6 6 0 0 0 170 152v51.28Zm83-45.42l-35 19.14v-41.17l36-19.7v40a2 2 0 0 1-1 1.72Z"></svg:path>`,
})
export class PhCodesandboxLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCodesandboxLogoThinIcon],svg[ph-codesandbox-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.76 69.66l-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52M128 123.44l-87.67-48L83.14 52l42.94 23.5a4 4 0 0 0 3.84 0L172.86 52l42.81 23.43Zm-1.92-94.94a3.94 3.94 0 0 1 3.84 0l34.61 19L128 67.44l-36.53-20ZM36 175.82v-43.35l40 21.9v45.72l-37.92-20.76a4 4 0 0 1-2.08-3.51m48 28.65V152a4 4 0 0 0-2.08-3.51L36 123.35V82.19l88 48.18v96Zm48 21.89v-96l88-48.18v41.16l-45.92 25.14A4 4 0 0 0 172 152v52.47Zm85.92-47L180 200.09v-45.72l40-21.9v43.35a4 4 0 0 1-2.08 3.51Z"></svg:path>`,
})
export class PhCodesandboxLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeIcon],svg[ph-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 56V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m96 56v8a40 40 0 0 1-37.51 39.91a96.6 96.6 0 0 1-27 40.09H208a8 8 0 0 1 0 16H32a8 8 0 0 1 0-16h24.54A96.3 96.3 0 0 1 24 136V88a8 8 0 0 1 8-8h176a40 40 0 0 1 40 40m-48-24H40v40a80.27 80.27 0 0 0 45.12 72h69.76A80.27 80.27 0 0 0 200 136Zm32 24a24 24 0 0 0-16-22.62V136a96 96 0 0 1-1.2 15a24 24 0 0 0 17.2-23Z"></svg:path>`,
})
export class PhCoffeeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeBeanIcon],svg[ph-coffee-bean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.75 44.25C195 27.47 170.37 20.79 142.46 25.44c-26.91 4.49-53.87 19.09-75.9 41.12s-36.63 49-41.12 75.9c-4.65 27.91 2 52.51 18.81 69.29C57.54 225.05 75.75 232 96.62 232a103.7 103.7 0 0 0 16.92-1.44c26.91-4.49 53.87-19.09 75.9-41.12s36.63-49 41.12-75.9c4.65-27.91-2.03-52.54-18.81-69.29M77.87 77.87c24.69-24.68 55.13-37.94 81.28-37.94a62.26 62.26 0 0 1 29 6.67a108.5 108.5 0 0 0-31.05 16.94c-19.2 15.16-31.63 36.32-36.94 62.89c-9.72 48.58-44.7 65.18-67.48 70.84c-23.97-28.51-13.28-80.92 25.19-119.4m100.26 100.26c-34.69 34.68-80.71 46.78-110.32 31.27a108.7 108.7 0 0 0 31.09-16.94c19.2-15.16 31.63-36.32 36.94-62.89c9.72-48.58 44.7-65.18 67.48-70.84c23.97 28.51 13.28 80.92-25.19 119.4"></svg:path>`,
})
export class PhCoffeeBeanIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeBeanBoldIcon],svg[ph-coffee-bean-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214.58 41.42C196.86 23.71 171 16.63 141.81 21.5c-27.74 4.62-55.46 19.62-78.08 42.23s-37.61 50.34-42.23 78.08c-4.87 29.21 2.21 55.05 19.92 72.77C55.48 228.64 74.67 236 96.6 236a107.4 107.4 0 0 0 17.59-1.5c27.74-4.62 55.46-19.62 78.08-42.23s37.61-50.34 42.23-78.08c4.87-29.19-2.21-55.05-19.92-72.77M45.17 145.75c3.8-22.84 16.42-45.94 35.53-65S122.91 49 145.75 45.17A82 82 0 0 1 159.27 44a62.8 62.8 0 0 1 18.24 2.57a110 110 0 0 0-22.89 13.83c-20 15.77-32.88 37.72-38.38 65.25c-8.95 44.73-40.3 61.1-62.07 67.09c-8.92-11.91-12.11-28.33-9-46.99m165.66-35.5c-3.8 22.84-16.42 45.94-35.53 65.05s-42.21 31.7-65.05 35.53c-11.65 1.94-22.4 1.41-31.75-1.42a109.4 109.4 0 0 0 22.87-13.81c20-15.77 32.89-37.72 38.39-65.25c9-44.73 40.3-61.1 62.07-67.09c8.92 11.91 12.11 28.33 9 46.99"></svg:path>`,
})
export class PhCoffeeBeanBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeBeanDuotoneIcon],svg[ph-coffee-bean-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M183.79 183.79c-43.14 43.14-103.09 53.14-133.9 22.32s-20.82-90.76 22.32-133.9s103.09-53.14 133.9-22.32s20.82 90.76-22.32 133.9" opacity=".2"></svg:path><svg:path d="M211.75 44.25C195 27.47 170.37 20.79 142.46 25.44c-26.91 4.49-53.87 19.09-75.9 41.12s-36.63 49-41.12 75.9c-4.65 27.91 2 52.51 18.81 69.29C57.54 225.05 75.75 232 96.62 232a103.7 103.7 0 0 0 16.92-1.44c26.91-4.49 53.87-19.09 75.9-41.12s36.63-49 41.12-75.9c4.65-27.91-2.03-52.54-18.81-69.29M77.87 77.87c24.69-24.68 55.13-37.94 81.28-37.94a62.26 62.26 0 0 1 29 6.67a108.5 108.5 0 0 0-31.05 16.94c-19.2 15.16-31.63 36.32-36.94 62.89c-9.72 48.58-44.7 65.18-67.48 70.84c-23.97-28.51-13.28-80.92 25.19-119.4m100.26 100.26c-34.69 34.68-80.71 46.78-110.32 31.27a108.7 108.7 0 0 0 31.09-16.94c19.2-15.16 31.63-36.32 36.94-62.89c9.72-48.58 44.7-65.18 67.48-70.84c23.97 28.51 13.28 80.92-25.19 119.4"></svg:path></svg:g>`,
})
export class PhCoffeeBeanDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeBeanFillIcon],svg[ph-coffee-bean-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71.22 190.47a108.9 108.9 0 0 1-33.84 9.16a4 4 0 0 1-3.89-2c-8.67-15.28-11.52-34.29-8-55.15c4.49-26.92 19.09-53.87 41.12-75.9s49-36.63 75.9-41.12c22.79-3.79 43.37 0 59.29 10.6a4 4 0 0 1-1.25 7.23a121 121 0 0 0-21.82 7.46c-21.77 9.9-49.6 31.06-58.52 75.7c-6.11 30.28-22.58 51.82-48.99 64.02M222.51 58.38a4 4 0 0 0-3.88-2a108.5 108.5 0 0 0-33.85 9.16c-26.41 12.2-42.88 33.74-48.94 64c-8.93 44.64-36.75 65.8-58.52 75.7a121 121 0 0 1-21.82 7.46a4 4 0 0 0-1.23 7.3c11.87 7.92 26.32 12 42.35 12a103.7 103.7 0 0 0 16.92-1.44c26.91-4.49 53.87-19.09 75.9-41.12s36.63-49 41.12-75.9c3.44-20.86.62-39.88-8.05-55.16"></svg:path>`,
})
export class PhCoffeeBeanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeBeanLightIcon],svg[ph-coffee-bean-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.34 45.66C194 29.35 170 22.87 142.79 27.42C116.28 31.83 89.71 46.24 68 68s-36.14 48.3-40.56 74.81C22.87 170 29.35 194 45.66 210.34C58.57 223.25 76.29 230 96.64 230a101.6 101.6 0 0 0 16.57-1.41c26.51-4.42 53.08-18.83 74.82-40.56s36.14-48.31 40.56-74.82C233.13 86 226.65 62 210.34 45.66M76.46 76.46C101.52 51.4 132.46 38 159.18 38c12.58 0 24.22 3 33.87 9.12a108 108 0 0 0-34.71 18c-18.82 14.86-31 35.62-36.22 61.71C112 177.35 75.18 194 52 199.5c-25.7-29.08-15.17-83.41 24.46-123.04m103.08 103.08C142.68 216.4 93.1 228.1 63 208.91a108 108 0 0 0 34.71-18c18.82-14.86 31-35.62 36.22-61.71C144 78.65 180.82 62 204.05 56.5c25.65 29.09 15.12 83.41-24.51 123.04"></svg:path>`,
})
export class PhCoffeeBeanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeBeanThinIcon],svg[ph-coffee-bean-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209 47c-32.36-32.35-95-22.33-139.7 22.34S14.63 176.66 47 209c12.82 12.81 30.38 19 49.71 19c29.46 0 63-14.34 90-41.32C231.35 142 241.37 79.34 209 47M75 75c25.47-25.46 57-39.09 84.26-39.09c14.51 0 27.83 3.87 38.43 11.84c-25.76 7.05-63 26.4-73.6 79.49c-10.5 52.52-49.25 69.26-72.91 74.58C23.77 172.12 34.16 115.81 75 75m106 106c-39 39-92.17 50.23-122.71 27.25c25.75-7 63-26.39 73.62-79.48c10.5-52.53 49.25-69.26 72.91-74.59C232.23 83.88 221.84 140.19 181 181"></svg:path>`,
})
export class PhCoffeeBeanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeBoldIcon],svg[ph-coffee-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 76H32a12 12 0 0 0-12 12v48a100.24 100.24 0 0 0 26.73 68H32a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24h-14.73a100.8 100.8 0 0 0 20-32A44 44 0 0 0 256 128v-8a44.05 44.05 0 0 0-44-44m-16 60a76.27 76.27 0 0 1-42 68H86a76.27 76.27 0 0 1-42-68v-36h152Zm36-8a20 20 0 0 1-12.57 18.55A97 97 0 0 0 220 136v-34.32A20 20 0 0 1 232 120ZM68 48V24a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0m40 0V24a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0m40 0V24a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhCoffeeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeDuotoneIcon],svg[ph-coffee-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88v48a88 88 0 0 1-51.3 80H83.3A88 88 0 0 1 32 136V88Z" opacity=".2"></svg:path><svg:path d="M80 56V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m96 56v8a40 40 0 0 1-37.51 39.91a96.6 96.6 0 0 1-27 40.09H208a8 8 0 0 1 0 16H32a8 8 0 0 1 0-16h24.54A96.3 96.3 0 0 1 24 136V88a8 8 0 0 1 8-8h176a40 40 0 0 1 40 40m-48-24H40v40a80.27 80.27 0 0 0 45.12 72h69.76A80.27 80.27 0 0 0 200 136Zm32 24a24 24 0 0 0-16-22.62V136a96 96 0 0 1-1.2 15a24 24 0 0 0 17.2-23Z"></svg:path></svg:g>`,
})
export class PhCoffeeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeFillIcon],svg[ph-coffee-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80H32a8 8 0 0 0-8 8v48a96.3 96.3 0 0 0 32.54 72H32a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16h-24.54a96.6 96.6 0 0 0 27-40.09A40 40 0 0 0 248 128v-8a40 40 0 0 0-40-40m24 48a24 24 0 0 1-17.2 23a96 96 0 0 0 1.2-15V97.38A24 24 0 0 1 232 120ZM112 56V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m32 0V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m-64 0V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0"></svg:path>`,
})
export class PhCoffeeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeLightIcon],svg[ph-coffee-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82 56V24a6 6 0 0 1 12 0v32a6 6 0 0 1-12 0m38 6a6 6 0 0 0 6-6V24a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 0a6 6 0 0 0 6-6V24a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m94 58v8a38 38 0 0 1-36.94 38a94.55 94.55 0 0 1-31.13 44H208a6 6 0 0 1 0 12H32a6 6 0 0 1 0-12h30.07A94.34 94.34 0 0 1 26 136V88a6 6 0 0 1 6-6h176a38 38 0 0 1 38 38m-44 16V94H38v42a82.27 82.27 0 0 0 46.67 74h70.66A82.27 82.27 0 0 0 202 136m32-16a26 26 0 0 0-20-25.29V136a93 93 0 0 1-1.69 17.64A26 26 0 0 0 234 128Z"></svg:path>`,
})
export class PhCoffeeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoffeeThinIcon],svg[ph-coffee-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 56V24a4 4 0 0 1 8 0v32a4 4 0 0 1-8 0m36 4a4 4 0 0 0 4-4V24a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 0a4 4 0 0 0 4-4V24a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m92 60v8a36 36 0 0 1-36 36h-.41a92.53 92.53 0 0 1-35.76 48H208a4 4 0 0 1 0 8H32a4 4 0 0 1 0-8h36.17A92.34 92.34 0 0 1 28 136V88a4 4 0 0 1 4-4h176a36 36 0 0 1 36 36m-40 16V92H36v44a84.28 84.28 0 0 0 48.21 76h71.58A84.28 84.28 0 0 0 204 136m32-16a28 28 0 0 0-24-27.71V136a91.8 91.8 0 0 1-2.2 19.94A28 28 0 0 0 236 128Z"></svg:path>`,
})
export class PhCoffeeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinIcon],svg[ph-coin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.58 63.84C186.85 53.48 159.33 48 128 48s-58.85 5.48-79.58 15.84S16 88.78 16 104v48c0 15.22 11.82 29.85 32.42 40.16S96.67 208 128 208s58.85-5.48 79.58-15.84S240 167.22 240 152v-48c0-15.22-11.82-29.85-32.42-40.16M128 64c62.64 0 96 23.23 96 40s-33.36 40-96 40s-96-23.23-96-40s33.36-40 96-40m-8 95.86v32c-19-.62-35-3.42-48-7.49v-31.32a203.4 203.4 0 0 0 48 6.81m16 0a203.4 203.4 0 0 0 48-6.81v31.31c-13 4.07-29 6.87-48 7.49ZM32 152v-18.47a83 83 0 0 0 16.42 10.63c2.43 1.21 5 2.35 7.58 3.43V178c-15.83-7.84-24-17.71-24-26m168 26v-30.41c2.61-1.08 5.15-2.22 7.58-3.43A83 83 0 0 0 224 133.53V152c0 8.29-8.17 18.16-24 26"></svg:path>`,
})
export class PhCoinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinBoldIcon],svg[ph-coin-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209.37 60.27C188.08 49.62 160 44 128 44s-60.08 5.62-81.37 16.27C24.62 71.27 12 87.21 12 104v48c0 16.79 12.62 32.73 34.63 43.73C67.92 206.38 96.05 212 128 212s60.08-5.62 81.37-16.27c22-11 34.63-26.94 34.63-43.73v-48c0-16.79-12.62-32.73-34.63-43.73m-152 21.46C75.08 72.88 100.16 68 128 68s52.92 4.88 70.63 13.73C211.81 88.32 220 96.86 220 104s-8.19 15.68-21.37 22.27C180.92 135.12 155.84 140 128 140s-52.92-4.88-70.63-13.73C44.19 119.68 36 111.14 36 104s8.19-15.68 21.37-22.27M180 181.38a180.4 180.4 0 0 1-40 6.3v-24a210.4 210.4 0 0 0 40-5.51ZM76 158.22a210.4 210.4 0 0 0 40 5.51v24a180.4 180.4 0 0 1-40-6.3ZM36 152v-10.46a95 95 0 0 0 10.63 6.19c1.74.87 3.54 1.7 5.37 2.5v21.07c-10-6.06-16-13.19-16-19.3m168 19.3v-21.07c1.83-.8 3.63-1.63 5.37-2.5a95 95 0 0 0 10.63-6.19V152c0 6.11-6 13.24-16 19.3"></svg:path>`,
})
export class PhCoinBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinDuotoneIcon],svg[ph-coin-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 104c0 24-40 48-104 48S24 128 24 104s40-48 104-48s104 24 104 48" opacity=".2"></svg:path><svg:path d="M207.58 63.84C186.85 53.48 159.33 48 128 48s-58.85 5.48-79.58 15.84S16 88.78 16 104v48c0 15.22 11.82 29.85 32.42 40.16S96.67 208 128 208s58.85-5.48 79.58-15.84S240 167.22 240 152v-48c0-15.22-11.82-29.85-32.42-40.16M128 64c62.64 0 96 23.23 96 40s-33.36 40-96 40s-96-23.23-96-40s33.36-40 96-40m-8 95.86v32c-19-.62-35-3.42-48-7.49v-31.32a203.4 203.4 0 0 0 48 6.81m16 0a203.4 203.4 0 0 0 48-6.81v31.31c-13 4.07-29 6.87-48 7.49ZM32 152v-18.47a83 83 0 0 0 16.42 10.63c2.43 1.21 5 2.35 7.58 3.43V178c-15.83-7.84-24-17.71-24-26m168 26v-30.41c2.61-1.08 5.15-2.22 7.58-3.43A83 83 0 0 0 224 133.53V152c0 8.29-8.17 18.16-24 26"></svg:path></svg:g>`,
})
export class PhCoinDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinFillIcon],svg[ph-coin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.58 63.84C186.85 53.48 159.33 48 128 48s-58.85 5.48-79.58 15.84S16 88.78 16 104v48c0 15.22 11.82 29.85 32.42 40.16S96.67 208 128 208s58.85-5.48 79.58-15.84S240 167.22 240 152v-48c0-15.22-11.82-29.85-32.42-40.16m-87.58 96v32c-19-.62-35-3.42-48-7.49v-31.3a203.4 203.4 0 0 0 48 6.81Zm16 0a203.4 203.4 0 0 0 48-6.81v31.31c-13 4.07-29 6.87-48 7.49ZM32 152v-18.47a83 83 0 0 0 16.42 10.63c2.43 1.21 5 2.35 7.58 3.43V178c-15.83-7.84-24-17.71-24-26m168 26v-30.41c2.61-1.08 5.15-2.22 7.58-3.43A83 83 0 0 0 224 133.53V152c0 8.29-8.17 18.16-24 26"></svg:path>`,
})
export class PhCoinFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinLightIcon],svg[ph-coin-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206.68 65.63C186.23 55.41 159 50 128 50s-58.23 5.41-78.68 15.63C29.41 75.58 18 89.57 18 104v48c0 14.43 11.41 28.42 31.32 38.37C69.77 200.59 97 206 128 206s58.23-5.41 78.68-15.63C226.59 180.42 238 166.43 238 152v-48c0-14.43-11.41-28.42-31.32-38.37m-152 10.74C73.21 67.1 99.25 62 128 62s54.79 5.1 73.32 14.37C217 84.21 226 94.28 226 104s-9 19.79-24.68 27.63C182.79 140.9 156.75 146 128 146s-54.79-5.1-73.32-14.37C39 123.79 30 113.72 30 104s9-19.79 24.68-27.63M122 157.93v36c-19.24-.48-37.07-3.28-52-8.11v-35.4c15.27 4.51 32.85 7.07 52 7.51m12 0c19.15-.44 36.73-3 52-7.52v35.4c-14.93 4.83-32.76 7.63-52 8.11ZM30 152v-23a76 76 0 0 0 19.32 13.36q4.16 2.07 8.68 3.88v35c-1.13-.52-2.24-1-3.32-1.58C39 171.79 30 161.72 30 152m171.32 27.63c-1.08.54-2.19 1.06-3.32 1.58v-35q4.51-1.81 8.68-3.88A76 76 0 0 0 226 129v23c0 9.72-9 19.79-24.68 27.63"></svg:path>`,
})
export class PhCoinLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinThinIcon],svg[ph-coin-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.79 67.42C185.9 57.48 158.27 52 128 52s-57.9 5.48-77.79 15.42C31 77 20 90.35 20 104v48c0 13.65 11 27 30.21 36.58C70.1 198.52 97.73 204 128 204s57.9-5.48 77.79-15.42C225 179 236 165.65 236 152v-48c0-13.65-11-27-30.21-36.58M128 60c61.77 0 100 22.84 100 44s-38.23 44-100 44s-100-22.84-100-44s38.23-44 100-44m-4 96v40c-22-.35-40.94-3.65-56-8.71v-39.64c16.23 5.1 35.44 7.97 56 8.35m8 0c20.56-.33 39.77-3.2 56-8.3v39.59c-15.06 5.06-33.95 8.36-56 8.71Zm-104-4v-28.08c5.15 6.19 12.67 11.89 22.21 16.66c3.08 1.54 6.36 2.95 9.79 4.28v39.38c-20.51-8.57-32-20.65-32-32.24m200 0c0 11.59-11.49 23.67-32 32.24v-39.38c3.43-1.33 6.71-2.74 9.79-4.28c9.54-4.77 17.06-10.47 22.21-16.66Z"></svg:path>`,
})
export class PhCoinThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinVerticalIcon],svg[ph-coin-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.51 56.09C186.44 35.4 169.92 24 152 24h-48c-17.92 0-34.44 11.4-46.51 32.09C46.21 75.42 40 101 40 128s6.21 52.58 17.49 71.91C69.56 220.6 86.08 232 104 232h48c17.92 0 34.44-11.4 46.51-32.09C209.79 180.58 216 155 216 128s-6.21-52.58-17.49-71.91m1.28 63.91h-32a152.8 152.8 0 0 0-9.68-48h30.59c6.12 13.38 10.16 30 11.09 48m-20.6-64h-28.73a83 83 0 0 0-12-16H152c10 0 19.4 6 27.19 16M56 128c0-47.7 22-88 48-88s48 40.3 48 88s-22 88-48 88s-48-40.3-48-88m96 88h-13.51a83 83 0 0 0 12-16h28.73C171.4 210 162 216 152 216m36.7-32h-30.58a152.8 152.8 0 0 0 9.68-48h32c-.94 18-4.98 34.62-11.1 48"></svg:path>`,
})
export class PhCoinVerticalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinVerticalBoldIcon],svg[ph-coin-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 20h-48c-38.13 0-68 47.44-68 108s29.87 108 68 108h48c38.13 0 68-47.44 68-108S190.13 20 152 20m37.21 152h-22.9a162.6 162.6 0 0 0 5.29-32h23.93a133.2 133.2 0 0 1-6.32 32m-17.61-56a162.6 162.6 0 0 0-5.29-32h22.9a133.2 133.2 0 0 1 6.32 32Zm5.63-56h-20a98.3 98.3 0 0 0-10-16H152c5.37 0 15.25 2.25 25.23 16M74.77 189.84C65.24 173.51 60 151.55 60 128s5.24-45.51 14.77-61.84C86 46.88 97.91 44 104 44s18 2.88 29.23 22.16C142.76 82.49 148 104.45 148 128s-5.24 45.51-14.77 61.84C122 209.12 110.09 212 104 212s-18-2.88-29.23-22.16M152 212h-4.79a98.3 98.3 0 0 0 10-16h20c-9.96 13.75-19.84 16-25.21 16"></svg:path>`,
})
export class PhCoinVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinVerticalDuotoneIcon],svg[ph-coin-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 128c0 53-25.07 96-56 96s-56-43-56-96s25.07-96 56-96s56 43 56 96" opacity=".2"></svg:path><svg:path d="M198.51 56.09C186.44 35.4 169.92 24 152 24h-48c-17.92 0-34.44 11.4-46.51 32.09C46.21 75.42 40 101 40 128s6.21 52.58 17.49 71.91C69.56 220.6 86.08 232 104 232h48c17.92 0 34.44-11.4 46.51-32.09C209.79 180.58 216 155 216 128s-6.21-52.58-17.49-71.91m1.28 63.91h-32a152.8 152.8 0 0 0-9.68-48h30.59c6.12 13.38 10.16 30 11.09 48m-20.6-64h-28.73a83 83 0 0 0-12-16H152c10 0 19.4 6 27.19 16M56 128c0-47.7 22-88 48-88s48 40.3 48 88s-22 88-48 88s-48-40.3-48-88m96 88h-13.51a83 83 0 0 0 12-16h28.73C171.4 210 162 216 152 216m36.7-32h-30.58a152.8 152.8 0 0 0 9.68-48h32c-.94 18-4.98 34.62-11.1 48"></svg:path></svg:g>`,
})
export class PhCoinVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinVerticalFillIcon],svg[ph-coin-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.51 56.09C186.44 35.4 169.92 24 152 24h-48c-17.92 0-34.44 11.4-46.51 32.09C46.21 75.42 40 101 40 128s6.21 52.58 17.49 71.91C69.56 220.6 86.08 232 104 232h48c17.92 0 34.44-11.4 46.51-32.09C209.79 180.58 216 155 216 128s-6.21-52.58-17.49-71.91m1.28 63.91h-32a152.8 152.8 0 0 0-9.68-48h30.59c6.12 13.38 10.16 30 11.09 48m-20.6-64h-28.73a83 83 0 0 0-12-16H152c10 0 19.4 6 27.19 16M152 216h-13.51a83 83 0 0 0 12-16h28.73C171.4 210 162 216 152 216m36.7-32h-30.58a152.8 152.8 0 0 0 9.68-48h32c-.94 18-4.98 34.62-11.1 48"></svg:path>`,
})
export class PhCoinVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinVerticalLightIcon],svg[ph-coin-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.78 57.09C185.08 37 169.18 26 152 26h-48c-17.18 0-33.08 11-44.78 31.09C48.12 76.13 42 101.31 42 128s6.12 51.87 17.22 70.91C70.92 219 86.82 230 104 230h48c17.18 0 33.08-11 44.78-31.09c11.1-19 17.22-44.22 17.22-70.91s-6.12-51.87-17.22-70.91m5.1 64.91h-36c-.65-18.84-4.37-36.73-10.74-52H190c7.06 14.74 11.16 32.77 11.88 52M152 38c11.31 0 22.22 7.06 31.14 20h-33.86l-.5-.91A76.8 76.8 0 0 0 133.49 38ZM69.58 192.86C59.54 175.63 54 152.6 54 128s5.54-47.63 15.58-64.86C79 46.93 91.26 38 104 38s25 8.93 34.42 25.14C148.46 80.37 154 103.4 154 128s-5.54 47.63-15.58 64.86C129 209.07 116.74 218 104 218s-25-8.93-34.42-25.14M152 218h-18.51a76.8 76.8 0 0 0 15.29-19.09l.5-.91h33.86c-8.92 12.94-19.83 20-31.14 20m38-32h-34.86c6.37-15.27 10.09-33.16 10.74-52h36c-.72 19.23-4.82 37.26-11.88 52"></svg:path>`,
})
export class PhCoinVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
