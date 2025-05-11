import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAdd1SolidIcon],svg[streamline-add-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a1 1 0 0 0-2 0v5H1a1 1 0 0 0 0 2h5v5a1 1 0 1 0 2 0V8h5a1 1 0 1 0 0-2H8z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAdd1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAdd1Icon],svg[streamline-add-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5v13M.5 6.96h13"></svg:path>`,
})
export class StreamlineAdd1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAddBellNotificationSolidIcon],svg[streamline-add-bell-notification-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5.75a.75.75 0 0 0-1.5 0V2.5H8.25a.75.75 0 0 0 0 1.5H10v1.75a.75.75 0 0 0 1.5 0V4h1.75a.75.75 0 0 0 0-1.5H11.5zM6 1.5q.555 0 1.086.123A2 2 0 0 0 8.25 5.25h.5v.5a2 2 0 0 0 1.822 1.992v1.833c0 .234.1.466.289.642c.219.204.391.283.639.283a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1c.248 0 .42-.079.64-.283a.88.88 0 0 0 .288-.642V5.8c0-1.152.49-2.25 1.351-3.053A4.72 4.72 0 0 1 6 1.5M4.25 13.25A.75.75 0 0 1 5 12.5h2A.75.75 0 0 1 7 14H5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAddBellNotificationSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAddCircleIcon],svg[streamline-add-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M7 4v6M4 7h6"></svg:path>`,
})
export class StreamlineAddCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAddLayer2Icon],svg[streamline-add-layer-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 3.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"></svg:path><svg:path d="M3.5.5h9a1 1 0 0 1 1 1v9M5.5 6v5M8 8.5H3"></svg:path></svg:g>`,
})
export class StreamlineAddLayer2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAddBellNotificationIcon],svg[streamline-add-bell-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 13.5h2M5.09 2.1A4 4 0 0 0 2 6v3.5A1.5 1.5 0 0 1 .5 11h11A1.5 1.5 0 0 1 10 9.5V9m.5-8.5v6m-3-3h6"></svg:path>`,
})
export class StreamlineAddBellNotificationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAddCircleSolidIcon],svg[streamline-add-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M7 3.25a.75.75 0 0 1 .75.75v2.25H10a.75.75 0 0 1 0 1.5H7.75V10a.75.75 0 0 1-1.5 0V7.75H4a.75.75 0 0 1 0-1.5h2.25V4A.75.75 0 0 1 7 3.25" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAddCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAddSquareSolidIcon],svg[streamline-add-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 3.5A3.5 3.5 0 0 1 3.5 0h7A3.5 3.5 0 0 1 14 3.5v7a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 0 10.5zm7-.25a.75.75 0 0 1 .75.75v2.25H10a.75.75 0 0 1 0 1.5H7.75V10a.75.75 0 0 1-1.5 0V7.75H4a.75.75 0 0 1 0-1.5h2.25V4A.75.75 0 0 1 7 3.25" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAddSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAdobeIcon],svg[streamline-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.233.816L.816 13.183H7.75l-.884-2.65H5.157L7 4.965l2.975 8.218h3.208L8.766.816z"></svg:path><svg:path d="M.816.816h12.367v12.367H.816z"></svg:path></svg:g>`,
})
export class StreamlineAdobeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAdobeSolidIcon],svg[streamline-adobe-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.316.816a.5.5 0 0 1 .5-.5h12.368a.5.5 0 0 1 .5.5v12.368a.5.5 0 0 1-.5.5H.816a.5.5 0 0 1-.5-.5zM1.37 12.63L5.391 1.37h3.217l4.022 11.26H9.71L7 5.147l-1.678 5.07h1.556l.805 2.413H1.369Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAdobeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAffordableAndCleanEnergyIcon],svg[streamline-affordable-and-clean-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.862.858v.644m0 3.194v1.535m0 5.991v.644M.859 6.862h.643m10.721 0h.643M11.15 2.574l-.428.428m-7.72 7.719l-.428.428m0-8.575l.428.428m7.72 7.719l.428.428M3 6.862a3.861 3.861 0 1 0 7.722 0a3.861 3.861 0 1 0-7.722 0"></svg:path><svg:path d="M5.45 5.779a1.764 1.764 0 1 0 2.823 0"></svg:path></svg:g>`,
})
export class StreamlineAffordableAndCleanEnergyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAffordableAndCleanEnergySolidIcon],svg[streamline-affordable-and-clean-energy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.862.014a.75.75 0 0 1 .75.75v.653a.75.75 0 1 1-1.5 0V.764a.75.75 0 0 1 .75-.75m4.288 6.848a4.289 4.289 0 1 1-8.578 0a4.289 4.289 0 0 1 8.578 0m-3.538 5.444a.75.75 0 0 0-1.5 0v.653a.75.75 0 0 0 1.5 0zM.015 6.862a.75.75 0 0 1 .75-.75h.652a.75.75 0 1 1 0 1.5H.765a.75.75 0 0 1-.75-.75m12.292-.75a.75.75 0 0 0 0 1.5h.652a.75.75 0 0 0 0-1.5zm-.56-4.136a.75.75 0 0 1 0 1.06l-.434.435a.75.75 0 1 1-1.061-1.06l.434-.435a.75.75 0 0 1 1.06 0ZM3.47 11.312a.75.75 0 1 0-1.06-1.06l-.434.433a.75.75 0 0 0 1.06 1.061zM1.977 1.976a.75.75 0 0 1 1.06 0l.434.434a.75.75 0 0 1-1.06 1.06l-.434-.433a.75.75 0 0 1 0-1.06Zm9.336 8.276a.75.75 0 1 0-1.061 1.06l.434.434a.75.75 0 0 0 1.06-1.06zm-4.45-6.706c.345 0 .625.28.625.625v1.766a.625.625 0 1 1-1.25 0V4.171c0-.345.28-.625.625-.625m-1.494 2.19a.625.625 0 1 0-1-.751a3.115 3.115 0 1 0 4.984 0a.625.625 0 0 0-1 .75a1.865 1.865 0 1 1-2.985 0Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAffordableAndCleanEnergySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiChipSparkIcon],svg[streamline-ai-chip-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 8.833H.679m12.642 0H11.5m-9-3.666H.679m12.642 0H11.5M5.167 2.5V.679m0 12.642V11.5m3.666-9V.679m0 12.642V11.5m1.667-9h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1"></svg:path><svg:path d="M4.667 7.25c-.281-.048-.281-.452 0-.501a2.55 2.55 0 0 0 2.05-1.964l.018-.078c.06-.278.457-.28.52-.002l.02.09a2.56 2.56 0 0 0 2.057 1.953c.283.049.283.455 0 .504a2.56 2.56 0 0 0-2.057 1.952l-.02.09c-.063.278-.46.276-.52-.002l-.017-.077A2.55 2.55 0 0 0 4.667 7.25"></svg:path></svg:g>`,
})
export class StreamlineAiChipSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiChipSparkSolidIcon],svg[streamline-ai-chip-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.714.04a.75.75 0 0 1 .75.75v1.188h1.035a1.5 1.5 0 0 1 1.5 1.5v1.036h1.219a.75.75 0 0 1 0 1.5h-1.22v1.93h1.22a.75.75 0 0 1 0 1.5h-1.22v1.033a1.5 1.5 0 0 1-1.5 1.5H9.465v1.233a.75.75 0 0 1-1.5 0v-1.233h-1.93v1.233a.75.75 0 0 1-1.5 0v-1.233H3.5a1.5 1.5 0 0 1-1.5-1.5V9.443H.782a.75.75 0 0 1 0-1.5H2v-1.93H.782a.75.75 0 1 1 0-1.5H2V3.479a1.5 1.5 0 0 1 1.5-1.5h1.035V.79a.75.75 0 0 1 1.5 0v1.188h1.93V.79a.75.75 0 0 1 .75-.75ZM6.243 4.568c.176-.804 1.32-.809 1.503-.006l.008.035l.016.07a2.1 2.1 0 0 0 1.68 1.585c.84.146.84 1.35 0 1.496a2.1 2.1 0 0 0-1.683 1.599l-.021.091c-.183.803-1.327.797-1.503-.006l-.018-.079a2.08 2.08 0 0 0-1.677-1.606c-.838-.146-.838-1.348 0-1.494a2.08 2.08 0 0 0 1.675-1.598l.013-.057z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAiChipSparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiCloudSparkIcon],svg[streamline-ai-cloud-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3 9.534a3 3 0 0 1-1.395-.692a3.193 3.193 0 0 1 1.887-5.59a.23.23 0 0 0 .21-.127a3.868 3.868 0 0 1 7.508.91a.25.25 0 0 0 .173.2a2.73 2.73 0 0 1-.173 5.35"></svg:path><svg:path d="M4.528 11.096c-.298-.052-.298-.48 0-.532A2.7 2.7 0 0 0 6.7 8.483l.02-.083c.065-.295.484-.297.551-.003l.022.096a2.71 2.71 0 0 0 2.18 2.069c.299.052.299.482 0 .534a2.71 2.71 0 0 0-2.18 2.069l-.022.096c-.067.294-.486.292-.55-.003l-.019-.082a2.7 2.7 0 0 0-2.173-2.081Z"></svg:path></svg:g>`,
})
export class StreamlineAiCloudSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiCloudSparkSolidIcon],svg[streamline-ai-cloud-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.883.165a4.37 4.37 0 0 0-4.582 2.717a3.693 3.693 0 0 0-1.194 7c.131-.787.692-1.501 1.683-1.674a1.43 1.43 0 0 0 1.147-1.092l.023-.105c.475-2.173 3.57-2.186 4.064-.017l.01.044l.018.077c.132.563.587.993 1.157 1.092c1.051.183 1.62.976 1.704 1.817a3.23 3.23 0 0 0-.227-6.11A4.37 4.37 0 0 0 7.883.165M6.181 7.28c.19-.869 1.427-.874 1.624-.007l.01.043l.02.086a2.69 2.69 0 0 0 2.16 2.037c.905.158.905 1.457 0 1.614a2.69 2.69 0 0 0-2.164 2.055l-.026.112c-.197.867-1.434.862-1.624-.007l-.021-.097a2.68 2.68 0 0 0-2.156-2.064c-.903-.157-.903-1.454 0-1.611a2.68 2.68 0 0 0 2.153-2.054l.016-.071z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAiCloudSparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiEditSparkIcon],svg[streamline-ai-edit-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.926 13.202l-3 .26l.26-3l6.24-6.2a1 1 0 0 1 1.43 0l1.27 1.28a1 1 0 0 1 0 1.42zM.842 3.972c-.351-.061-.351-.565 0-.626A3.18 3.18 0 0 0 3.4.896l.021-.097c.076-.346.57-.349.65-.002l.025.112A3.19 3.19 0 0 0 6.66 3.345c.353.06.353.567 0 .629a3.19 3.19 0 0 0-2.565 2.435l-.026.113c-.079.346-.573.344-.649-.003l-.02-.097a3.18 3.18 0 0 0-2.56-2.45Z"></svg:path>`,
})
export class StreamlineAiEditSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiEditSparkSolidIcon],svg[streamline-ai-edit-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.856.654c.19-.868 1.427-.874 1.625-.007l.01.044l.02.086a2.69 2.69 0 0 0 2.16 2.037c.905.157.905 1.457 0 1.614a2.69 2.69 0 0 0-2.164 2.054l-.026.113c-.198.867-1.434.861-1.625-.007l-.02-.097A2.68 2.68 0 0 0 .68 4.427c-.904-.158-.904-1.454 0-1.612A2.68 2.68 0 0 0 2.833.762l.016-.071zm7.78 2.962a1.5 1.5 0 0 1 1.652.333l.002.001l1.266 1.277a1.5 1.5 0 0 1 0 2.126l-.002.002l-6.197 6.237a.5.5 0 0 1-.312.146l-3 .26a.5.5 0 0 1-.541-.541l.26-3a.5.5 0 0 1 .146-.312l6.237-6.197a1.5 1.5 0 0 1 .488-.332Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAiEditSparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiEmailGeneratorSparkIcon],svg[streamline-ai-email-generator-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.076 9.546h-3.5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4.5"></svg:path><svg:path d="m.576 1.806l6 4.24l6-4.24m-5.236 8.84c-.351-.06-.351-.565 0-.626a3.18 3.18 0 0 0 2.558-2.45l.021-.096c.076-.347.57-.35.649-.003l.026.112a3.19 3.19 0 0 0 2.565 2.436c.353.061.353.568 0 .629a3.19 3.19 0 0 0-2.565 2.435l-.026.113c-.079.346-.573.344-.649-.003l-.021-.096a3.18 3.18 0 0 0-2.558-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiEmailGeneratorSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiEmailGeneratorSparkSolidIcon],svg[streamline-ai-email-generator-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.62.051h9.312c.857 0 1.552.695 1.552 1.552v.077L6.276 4.784L.07 1.68v-.077A1.55 1.55 0 0 1 1.62.051M.07 3.078V7.81c0 .857.694 1.552 1.551 1.552h4.927c.257-.292.622-.51 1.094-.592c.516-.09.926-.481 1.04-.991l.022-.095c.431-1.97 3.237-1.983 3.686-.016l.009.04l.016.07q.024.1.061.193q.009-.08.009-.161V3.078L6.556 6.042a.63.63 0 0 1-.56 0zm9.696 4.84c.183-.837 1.373-.842 1.564-.007l.009.04l.018.077a2.39 2.39 0 0 0 1.921 1.812c.873.152.873 1.404 0 1.556a2.395 2.395 0 0 0-1.925 1.827l-.023.103c-.19.834-1.381.83-1.564-.007l-.02-.088a2.38 2.38 0 0 0-1.917-1.836c-.871-.152-.871-1.402 0-1.553a2.38 2.38 0 0 0 1.915-1.827l.014-.064z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAiEmailGeneratorSparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiGamingSparkIcon],svg[streamline-ai-gaming-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.312 7.003v2.311m1.155-1.155h-2.31m1.909-3.632H4.15a3 3 0 0 0-2.981 2.669l-.412 3.71a2.283 2.283 0 0 0 4.31 1.273l.36-.72h2.971l.36.72a2.283 2.283 0 0 0 4.31-1.274l-.412-3.71"></svg:path><svg:path d="M8.644 8.736a.248.248 0 1 1 .496 0m-.495 0a.248.248 0 1 0 .495 0M7.175 3.994c-.351-.062-.351-.565 0-.626A3.18 3.18 0 0 0 9.733.918L9.754.82c.076-.347.57-.35.649-.003l.026.113a3.19 3.19 0 0 0 2.565 2.435c.353.061.353.568 0 .63A3.19 3.19 0 0 0 10.43 6.43l-.026.112c-.079.346-.573.344-.649-.003l-.02-.096a3.18 3.18 0 0 0-2.56-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiGamingSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiGamingSparkSolidIcon],svg[streamline-ai-gaming-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.29.77c.183-.837 1.375-.842 1.566-.006l.009.04l.018.077c.22.938.979 1.655 1.93 1.82c.873.152.873 1.406 0 1.558a2.41 2.41 0 0 0-1.934 1.835l-.023.102c-.19.836-1.383.831-1.567-.006l-.019-.088a2.39 2.39 0 0 0-1.926-1.845c-.871-.151-.871-1.403 0-1.554A2.39 2.39 0 0 0 9.268.868l.014-.064zM7.156 5.334a2 2 0 0 1-.697-.257H3.942A3 3 0 0 0 .96 7.745l-.4 3.608a2.247 2.247 0 0 0 4.24 1.253l.354-.707H8.08l.353.707a2.246 2.246 0 0 0 4.242-1.253l-.4-3.608a3 3 0 0 0-.387-1.175c-.542 1.842-3.242 1.786-3.665-.147l-.02-.088a1.3 1.3 0 0 0-1.045-1.001ZM4.684 7.513a.625.625 0 1 0-1.25 0v.512h-.512a.625.625 0 0 0 0 1.25h.512v.512a.625.625 0 0 0 1.25 0v-.512h.512a.625.625 0 1 0 0-1.25h-.512zm4.75 1.746a.61.61 0 1 1-1.218 0a.61.61 0 0 1 1.218 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAiGamingSparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiGenerateLandscapeImageSparkIcon],svg[streamline-ai-generate-landscape-image-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.576 6.733a6.5 6.5 0 0 1 1.164-.104c1.58 0 3.027.563 4.154 1.5"></svg:path><svg:path d="M5.076 10.629h-3.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.5"></svg:path><svg:path d="M6.326 5.629a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m1.014 4.934c-.351-.061-.351-.565 0-.626a3.18 3.18 0 0 0 2.558-2.45l.021-.097c.076-.347.57-.349.649-.003l.026.113a3.19 3.19 0 0 0 2.565 2.435c.353.062.353.568 0 .63A3.19 3.19 0 0 0 10.594 13l-.026.113c-.079.346-.573.344-.649-.003l-.021-.097a3.18 3.18 0 0 0-2.558-2.45"></svg:path></svg:g>`,
})
export class StreamlineAiGenerateLandscapeImageSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiGenerateLandscapeImageSparkSolidIcon],svg[streamline-ai-generate-landscape-image-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.391 10.677c-.35-.061-.35-.565 0-.626a3.18 3.18 0 0 0 2.556-2.437l.024-.11c.076-.347.57-.349.649-.003l.03.133a3.19 3.19 0 0 0 2.56 2.415c.353.062.353.568 0 .63a3.19 3.19 0 0 0-2.565 2.435l-.025.112c-.08.347-.573.344-.65-.002l-.02-.097a3.18 3.18 0 0 0-2.559-2.45"></svg:path><svg:path fill="currentColor" d="M7.391 10.677c-.35-.061-.35-.565 0-.626a3.18 3.18 0 0 0 2.556-2.437l.024-.11c.076-.347.57-.349.649-.003l.03.133a3.19 3.19 0 0 0 2.56 2.415c.353.062.353.568 0 .63a3.19 3.19 0 0 0-2.565 2.435l-.025.112c-.08.347-.573.344-.65-.002l-.02-.097a3.18 3.18 0 0 0-2.559-2.45"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M.025 8.798c0 .944.765 1.708 1.708 1.708h3.65a2.1 2.1 0 0 1 .479-1.5H1.775a.25.25 0 0 1-.25-.25V5.84l.203-.036a5.25 5.25 0 0 1 5.12 2.008l.368.487a1.42 1.42 0 0 0 1.022-1.065l.023-.104c.295-1.345 1.593-1.863 2.656-1.548V1.723c0-.943-.765-1.708-1.708-1.708H1.733C.79.015.025.78.025 1.723zm7.857-4.265a1.371 1.371 0 1 0 0-2.742a1.371 1.371 0 0 0 0 2.742" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class StreamlineAiGenerateLandscapeImageSparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiGenerateMusicSparkIcon],svg[streamline-ai-generate-music-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.12 13.462a1.597 1.597 0 1 0 0-3.193a1.597 1.597 0 0 0 0 3.193m7.186-1.597a1.597 1.597 0 1 0 0-3.193a1.597 1.597 0 0 0 0 3.193"></svg:path><svg:path d="M3.717 11.865V5.383a.4.4 0 0 1 .296-.384l1.26-.361M3.717 7.474l4.06-1.128m3.125 3.923V8.86m-3.51-4.888c-.35-.061-.35-.565 0-.626A3.18 3.18 0 0 0 9.951.896l.021-.097c.076-.347.57-.349.649-.003l.025.113a3.19 3.19 0 0 0 2.566 2.435c.353.062.353.568 0 .63a3.19 3.19 0 0 0-2.566 2.435l-.025.112c-.08.347-.573.344-.649-.002l-.021-.097a3.18 3.18 0 0 0-2.559-2.45"></svg:path></svg:g>`,
})
export class StreamlineAiGenerateMusicSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiGenerateMusicSparkSolidIcon],svg[streamline-ai-generate-music-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.812.633c.183-.836 1.374-.841 1.565-.006l.009.04l.018.077c.22.935.976 1.649 1.923 1.814c.872.151.872 1.404 0 1.556A2.4 2.4 0 0 0 11.4 5.943l-.023.102c-.19.835-1.382.83-1.565-.007l-.02-.088a2.38 2.38 0 0 0-1.918-1.838c-.871-.151-.871-1.401 0-1.553A2.38 2.38 0 0 0 9.79.731l.014-.065l.007-.033ZM3.74 4.24l2.406-.668c.088.75.602 1.45 1.541 1.614c.518.09.93.484 1.043.998l.019.088l.013.057L4.395 7.54v4.268a2.188 2.188 0 1 1-1.5-2.078V5.34a1.15 1.15 0 0 1 .845-1.1m7.807 3.273a1.98 1.98 0 0 1-1.637.123a2.192 2.192 0 0 0-2.739 2.118a2.188 2.188 0 0 0 4.376.056V7.512Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAiGenerateMusicSparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiGeneratePortraitImageSparkIcon],svg[streamline-ai-generate-portrait-image-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.77 8.286A3.5 3.5 0 0 1 5.577 6.88c.818 0 1.57.28 2.166.75"></svg:path><svg:path d="M5.076 10.629h-3.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3"></svg:path><svg:path d="M5.576 5.379a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.764 5.184c-.351-.061-.351-.565 0-.626a3.18 3.18 0 0 0 2.558-2.45l.021-.097c.076-.347.57-.349.649-.003l.026.113a3.19 3.19 0 0 0 2.565 2.435c.353.062.353.568 0 .63A3.19 3.19 0 0 0 10.594 13l-.026.113c-.079.346-.573.344-.649-.003l-.021-.097a3.18 3.18 0 0 0-2.558-2.45"></svg:path></svg:g>`,
})
export class StreamlineAiGeneratePortraitImageSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiGeneratePortraitImageSparkSolidIcon],svg[streamline-ai-generate-portrait-image-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.532.004a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h3.93a2.16 2.16 0 0 1 .285-1.847H2.871a.296.296 0 0 1-.296-.296a2.956 2.956 0 0 1 5.577-1.37q.05-.117.08-.246l.022-.104c.306-1.397 1.694-1.901 2.778-1.507v-4.13a1.5 1.5 0 0 0-1.5-1.5zm4 5.019a1.774 1.774 0 1 0 0-3.548a1.774 1.774 0 0 0 0 3.548m3.943 2.385c.19-.868 1.427-.874 1.625-.007l.01.044l.02.086a2.69 2.69 0 0 0 2.16 2.037c.905.157.905 1.457 0 1.614a2.69 2.69 0 0 0-2.164 2.054l-.026.113c-.198.867-1.434.861-1.625-.007l-.02-.097a2.68 2.68 0 0 0-2.156-2.064c-.904-.158-.904-1.454 0-1.611a2.68 2.68 0 0 0 2.153-2.054l.016-.071z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAiGeneratePortraitImageSparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiGenerateVariationSparkIcon],svg[streamline-ai-generate-variation-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.28 8.231H1.132a.49.49 0 0 0-.488.488v4.15c0 .27.219.488.488.488h4.15c.27 0 .488-.219.488-.488v-4.15a.49.49 0 0 0-.488-.488Zm7.589 0h-4.15a.49.49 0 0 0-.488.488v4.15c0 .27.218.488.488.488h4.15c.27 0 .488-.219.488-.488v-4.15a.49.49 0 0 0-.488-.488M5.28.643H1.132a.49.49 0 0 0-.488.488v4.15c0 .27.219.488.488.488h4.15c.27 0 .488-.219.488-.488V1.13a.49.49 0 0 0-.488-.488Zm2.866 2.941c-.301-.052-.301-.483 0-.536A2.72 2.72 0 0 0 10.337.95l.018-.083c.065-.297.488-.3.556-.003l.022.097a2.735 2.735 0 0 0 2.197 2.086c.302.052.302.486 0 .539a2.735 2.735 0 0 0-2.197 2.086l-.022.096c-.068.297-.49.295-.556-.002l-.018-.083a2.72 2.72 0 0 0-2.191-2.099"></svg:path>`,
})
export class StreamlineAiGenerateVariationSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiGenerateVariationSparkSolidIcon],svg[streamline-ai-generate-variation-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.919.731c.178-.816 1.34-.821 1.527-.007l.008.038l.017.072a2.21 2.21 0 0 0 1.774 1.673c.852.149.852 1.372 0 1.52a2.21 2.21 0 0 0-1.778 1.687l-.021.096c-.186.815-1.349.81-1.527-.007L9.9 5.721a2.2 2.2 0 0 0-1.77-1.695c-.85-.148-.85-1.37 0-1.517A2.2 2.2 0 0 0 9.899.822l.013-.06l.007-.03ZM1.105.171a.977.977 0 0 0-.978.977V5.3c0 .54.438.977.978.977h4.153c.54 0 .977-.437.977-.977V1.148A.977.977 0 0 0 5.258.17zm-.978 8.57c0-.54.438-.977.978-.977h4.153c.54 0 .977.437.977.977v4.153c0 .54-.437.978-.977.978H1.105a.977.977 0 0 1-.978-.978V8.742Zm7.595 0c0-.54.437-.977.977-.977h4.153c.54 0 .978.437.978.977v4.153c0 .54-.438.978-.978.978H8.7a.977.977 0 0 1-.977-.978V8.742Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAiGenerateVariationSparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiNavigationSparkIcon],svg[streamline-ai-navigation-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.519 6.746a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0"></svg:path><svg:path d="M9.629 8.74c-.948 2.542-3.366 4.756-4.36 4.756c-1.25 0-4.75-3.5-4.75-6.75a4.75 4.75 0 0 1 5.19-4.73M7.696 3.77c-.334-.059-.334-.538 0-.596a3.02 3.02 0 0 0 2.433-2.33l.02-.092c.072-.33.542-.331.617-.002l.024.107a3.04 3.04 0 0 0 2.44 2.316c.335.058.335.54 0 .598a3.04 3.04 0 0 0-2.44 2.316l-.024.107c-.075.329-.545.327-.617-.003l-.02-.092a3.02 3.02 0 0 0-2.433-2.33Z"></svg:path></svg:g>`,
})
export class StreamlineAiNavigationSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiNavigationSparkSolidIcon],svg[streamline-ai-navigation-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.957.659c.18-.82 1.347-.825 1.534-.007l.008.038l.017.073a2.25 2.25 0 0 0 1.802 1.7c.856.148.856 1.377 0 1.526a2.25 2.25 0 0 0-1.805 1.713l-.022.097c-.187.818-1.354.813-1.534-.007l-.018-.083A2.23 2.23 0 0 0 8.14 3.987c-.854-.148-.854-1.375 0-1.523A2.23 2.23 0 0 0 9.937.75L9.95.69l.007-.032ZM7.969 4.978c-1.65-.287-1.915-2.323-.793-3.17A5.25 5.25 0 0 0 .04 6.709c0 1.788.953 3.585 2.017 4.907a9.8 9.8 0 0 0 1.663 1.645c.271.203.54.373.793.493c.247.117.516.205.777.205c.262 0 .531-.088.778-.205c.253-.12.522-.29.792-.493a9.7 9.7 0 0 0 1.664-1.645c.927-1.152 1.769-2.663 1.97-4.215a1.74 1.74 0 0 1-1.519-1.394l-.018-.083a1.23 1.23 0 0 0-.988-.946M5.29 8.458a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAiNavigationSparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiNetworkSparkIcon],svg[streamline-ai-network-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.512 7.463a6 6 0 1 1-6-6m-6 6h6.923"></svg:path><svg:path d="M6.512 1.463a10.36 10.36 0 0 0-2.308 6a10.36 10.36 0 0 0 2.308 6a10.36 10.36 0 0 0 2.142-4.615"></svg:path><svg:path d="M7.404 3.97c-.35-.06-.35-.564 0-.625A3.18 3.18 0 0 0 9.963.895l.02-.097c.077-.347.57-.35.65-.003l.025.113a3.19 3.19 0 0 0 2.566 2.435c.352.061.352.568 0 .63a3.19 3.19 0 0 0-2.566 2.435l-.025.112c-.08.346-.573.344-.65-.003l-.02-.096a3.18 3.18 0 0 0-2.559-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiNetworkSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiNetworkSparkSolidIcon],svg[streamline-ai-network-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.814.666C9.997-.17 11.188-.175 11.38.66l.009.04l.017.077c.22.935.976 1.648 1.922 1.813c.872.152.872 1.404 0 1.556a2.4 2.4 0 0 0-1.925 1.827l-.023.102c-.19.835-1.382.83-1.565-.007l-.019-.087a2.38 2.38 0 0 0-1.918-1.837c-.87-.151-.87-1.401 0-1.553A2.38 2.38 0 0 0 9.793.764l.014-.065zM7.691 5.214c-1.876-.326-2.053-2.795-.532-3.527q-.204-.367-.431-.721a7 7 0 0 0-.475 0A13.3 13.3 0 0 0 4.22 6.838h4.543q-.045-.45-.12-.894a1.3 1.3 0 0 0-.95-.73ZM.02 6.838a6.51 6.51 0 0 1 4.63-5.612a14.6 14.6 0 0 0-1.686 5.612H.018Zm.009 1.25h2.936A14.6 14.6 0 0 0 4.65 13.7A6.51 6.51 0 0 1 .019 8.088zm4.191 0a13.3 13.3 0 0 0 2.034 5.872a7 7 0 0 0 .475 0a13.3 13.3 0 0 0 2.034-5.872zm8.743 0a6.51 6.51 0 0 1-4.63 5.612a14.6 14.6 0 0 0 1.685-5.612z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAiNetworkSparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiPromptSparkIcon],svg[streamline-ai-prompt-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.02 3.485h-3.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4m-11-2.5h6.5"></svg:path><svg:path d="m3.02 10.985l1.5-1.5l-1.5-1.5m3 3h1.5m-.124-7.036c-.35-.061-.35-.565 0-.626A3.18 3.18 0 0 0 9.955.873l.02-.097c.077-.347.57-.35.65-.003l.025.113a3.19 3.19 0 0 0 2.566 2.435c.352.061.352.568 0 .63a3.19 3.19 0 0 0-2.566 2.435l-.026.112c-.079.346-.572.344-.648-.003L9.955 6.4a3.18 3.18 0 0 0-2.559-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiPromptSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiPromptSparkSolidIcon],svg[streamline-ai-prompt-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.721.657c.186-.846 1.39-.851 1.582-.007l.01.04l.018.08a2.48 2.48 0 0 0 1.992 1.879c.881.153.881 1.42 0 1.573a2.48 2.48 0 0 0-1.996 1.894l-.024.105c-.192.844-1.396.839-1.582-.007l-.02-.09c-.214-.98-1-1.732-1.987-1.904c-.88-.153-.88-1.417 0-1.57A2.47 2.47 0 0 0 9.7.757l.015-.066zM1.766 2.48h4.39c-.57 1.05-.115 2.6 1.364 2.857c.486.085.882.43 1.036.893h-7.04v6c0 .138.112.25.25.25h9a.25.25 0 0 0 .25-.25V7.923c.644-.163 1.21-.646 1.394-1.45l.024-.106a1.4 1.4 0 0 1 .082-.247v6.11a1.75 1.75 0 0 1-1.75 1.75h-9a1.75 1.75 0 0 1-1.75-1.75v-8c0-.967.784-1.75 1.75-1.75m.963 4.836a.625.625 0 0 1 .884 0l1.5 1.5a.625.625 0 0 1 0 .884l-1.5 1.5a.625.625 0 1 1-.884-.884L3.787 9.26L2.73 8.201a.625.625 0 0 1 0-.884Zm2.817 3.442c0-.345.28-.625.625-.625h1.5a.625.625 0 1 1 0 1.25h-1.5a.625.625 0 0 1-.625-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAiPromptSparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiRedoSparkIcon],svg[streamline-ai-redo-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.04 13.448v-2.48h2.48"></svg:path><svg:path d="M13.339 5.815a6.449 6.449 0 0 1-11.3 5.308M.661 8.185a6.449 6.449 0 0 1 11.3-5.308"></svg:path><svg:path d="M11.96.552v2.48H9.48M4.09 7.334c-.351-.061-.351-.565 0-.626a3.18 3.18 0 0 0 2.558-2.45l.021-.097c.076-.347.57-.349.649-.003l.026.113a3.19 3.19 0 0 0 2.565 2.435c.353.061.353.568 0 .63A3.19 3.19 0 0 0 7.344 9.77l-.026.112c-.079.346-.573.344-.649-.003l-.02-.096a3.18 3.18 0 0 0-2.56-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiRedoSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiRedoSparkSolidIcon],svg[streamline-ai-redo-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.213 2.538A5.499 5.499 0 0 0 1.595 8.01a.75.75 0 0 1-1.474.277a6.999 6.999 0 0 1 11.163-6.821l.612-.612a.5.5 0 0 1 .854.353V3.5a.5.5 0 0 1-.5.5H9.957a.5.5 0 0 1-.353-.853zm2.791 2.577a.75.75 0 0 1 .876.598a6.999 6.999 0 0 1-11.164 6.821l-.612.613a.5.5 0 0 1-.854-.354V10.5a.5.5 0 0 1 .5-.5h2.293a.5.5 0 0 1 .354.854l-.61.609a5.499 5.499 0 0 0 8.618-5.472a.75.75 0 0 1 .6-.876ZM6.181 4.034c.19-.87 1.427-.874 1.625-.008l.01.044a2.69 2.69 0 0 0 2.18 2.123c.904.157.904 1.457-.001 1.614a2.69 2.69 0 0 0-2.164 2.054l-.025.113c-.198.867-1.435.861-1.625-.007L6.16 9.87a2.68 2.68 0 0 0-2.156-2.064c-.903-.157-.903-1.454 0-1.611A2.68 2.68 0 0 0 6.157 4.14l.016-.071z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAiRedoSparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiScienceSparkIcon],svg[streamline-ai-science-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.022 4.347a18.5 18.5 0 0 0-1.93 1.686C1.248 8.877-.192 12.046.874 13.113c1.066 1.066 4.236-.375 7.079-3.218a18.5 18.5 0 0 0 1.686-1.931"></svg:path><svg:path d="M9.639 7.964c1.677 2.226 2.36 4.32 1.532 5.148c-1.067 1.067-4.236-.374-7.08-3.217C1.249 7.05-.191 3.882.875 2.815c.828-.827 2.922-.144 5.148 1.532"></svg:path><svg:path d="M5.522 7.964a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0m2.51-4.354c-.315-.055-.315-.506 0-.56a2.84 2.84 0 0 0 2.29-2.193L10.34.77c.068-.31.51-.312.58-.003l.024.101a2.86 2.86 0 0 0 2.296 2.18c.316.055.316.509 0 .563a2.86 2.86 0 0 0-2.296 2.18l-.024.101c-.07.31-.512.308-.58-.002l-.02-.087A2.84 2.84 0 0 0 8.03 3.61Z"></svg:path></svg:g>`,
})
export class StreamlineAiScienceSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiScienceSparkSolidIcon],svg[streamline-ai-science-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.825.638c.183-.836 1.374-.841 1.565-.006l.008.039l.018.078c.22.934.976 1.647 1.922 1.812c.872.152.872 1.404 0 1.556a2.4 2.4 0 0 0-1.925 1.827l-.024.102c-.19.835-1.38.83-1.564-.006l-.019-.088a2.38 2.38 0 0 0-1.918-1.837c-.87-.151-.87-1.401 0-1.552A2.38 2.38 0 0 0 9.804.736L9.818.67l.007-.033Zm.727 7.118a1.9 1.9 0 0 1-1.275-.529a.8.8 0 0 0-.194.186c-.45.596-.977 1.205-1.573 1.8c-.452.452-.91.863-1.362 1.23c-.452-.367-.91-.778-1.362-1.23a18 18 0 0 1-1.23-1.361c.367-.453.779-.91 1.23-1.362a17 17 0 0 1 1.8-1.573a.8.8 0 0 0 .172-.172a1.87 1.87 0 0 1-.61-1.365c-.981-.687-1.951-1.196-2.817-1.461c-.938-.287-2.038-.364-2.759.356c-.467.468-.594 1.104-.558 1.709c.036.606.239 1.272.546 1.948a12 12 0 0 0 1.117 1.92A12 12 0 0 0 .56 9.77c-.307.676-.51 1.342-.546 1.948s.09 1.241.558 1.709s1.104.594 1.709.558c.605-.037 1.272-.239 1.948-.546c.61-.277 1.259-.655 1.92-1.117c.66.462 1.308.84 1.919 1.117c.675.307 1.342.51 1.948.546s1.24-.091 1.708-.559c.721-.72.644-1.82.357-2.758c-.274-.894-.807-1.9-1.529-2.913Zm-7.66-4.403c.576.176 1.263.51 2.007.994a19.5 19.5 0 0 0-2.256 2.256a10 10 0 0 1-.718-1.292c-.263-.58-.392-1.06-.414-1.417c-.021-.359.067-.503.122-.558c.09-.09.423-.238 1.26.017Zm-.967 7.039c.184-.405.425-.84.718-1.292A19.5 19.5 0 0 0 4.9 11.356a10 10 0 0 1-1.291.719c-.58.263-1.06.392-1.417.414c-.36.021-.503-.067-.558-.122s-.143-.2-.122-.558c.022-.357.15-.837.414-1.417Zm6.763 1.683a10 10 0 0 1-1.29-.719A19.5 19.5 0 0 0 9.652 9.1c.483.745.817 1.432.993 2.008c.256.836.108 1.169.018 1.259c-.056.055-.2.143-.558.121c-.358-.02-.838-.15-1.418-.413Zm-3.54-4.223a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAiScienceSparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiSettingsSparkIcon],svg[streamline-ai-settings-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.92 2.57h-.687a.84.84 0 0 0-.78.537l-.36.93l-1.24.703l-.988-.15a.84.84 0 0 0-.838.41l-.335.587a.84.84 0 0 0 .067.946l.628.78V8.72l-.611.78a.84.84 0 0 0-.067.946l.335.586a.84.84 0 0 0 .838.411l.988-.15l1.223.703l.36.93a.84.84 0 0 0 .78.536h.704a.84.84 0 0 0 .779-.536l.36-.93l1.223-.704l.989.151a.84.84 0 0 0 .838-.41l.335-.587a.84.84 0 0 0-.067-.947l-.629-.779v-.907m-5.864.203a1.676 1.676 0 1 0 3.351 0a1.676 1.676 0 0 0-3.351 0M8.1 3.542c-.306-.053-.306-.494 0-.547A2.78 2.78 0 0 0 10.34.85l.018-.085c.067-.303.499-.305.568-.002l.023.098a2.79 2.79 0 0 0 2.244 2.131c.309.054.309.497 0 .55a2.79 2.79 0 0 0-2.244 2.131l-.023.099c-.069.303-.501.3-.568-.003l-.018-.084a2.78 2.78 0 0 0-2.238-2.144Z"></svg:path>`,
})
export class StreamlineAiSettingsSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiSettingsSparkSolidIcon],svg[streamline-ai-settings-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.805.745c.18-.825 1.356-.83 1.544-.006l.009.038l.017.075c.21.895.935 1.58 1.843 1.738c.861.15.861 1.386 0 1.536c-.912.159-1.64.85-1.846 1.752l-.023.099c-.188.824-1.363.819-1.544-.007l-.018-.084a2.28 2.28 0 0 0-1.84-1.761c-.86-.15-.86-1.384 0-1.534A2.28 2.28 0 0 0 9.785.84l.014-.063zM7.771 5.142C6.429 4.91 5.987 3.541 6.444 2.56a.9.9 0 0 0-.622-.256h-.73a.89.89 0 0 0-.827.569l-.382.987l-1.316.747l-1.05-.16a.89.89 0 0 0-.889.435l-.355.623a.89.89 0 0 0 .07 1.005l.668.827V8.83l-.65.827a.89.89 0 0 0-.07 1.004l.355.623a.89.89 0 0 0 .89.435l1.049-.16l1.298.747l.382.988a.89.89 0 0 0 .827.569h.747a.89.89 0 0 0 .827-.57l.383-.987l1.298-.746l1.05.16a.89.89 0 0 0 .889-.436l.355-.623a.89.89 0 0 0-.07-1.004l-.668-.827V7.503c-.522-.198-.96-.636-1.107-1.312l-.019-.085a1.25 1.25 0 0 0-1.006-.964M5.457 9.94a1.858 1.858 0 1 0 0-3.715a1.858 1.858 0 0 0 0 3.715" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAiSettingsSparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiTechnologySparkIcon],svg[streamline-ai-technology-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.406 7.97c-.386.44-.856.8-1.385 1.061v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1.5A4.5 4.5 0 0 1 6.875.9M3.021 13.5h4"></svg:path><svg:path d="M7.395 3.934c-.351-.061-.351-.565 0-.626A3.18 3.18 0 0 0 9.953.858L9.974.76c.076-.347.57-.349.649-.003l.026.113a3.19 3.19 0 0 0 2.565 2.435c.353.062.353.568 0 .63A3.19 3.19 0 0 0 10.65 6.37l-.026.113c-.079.346-.573.344-.649-.003l-.02-.097a3.18 3.18 0 0 0-2.56-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiTechnologySparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiTechnologySparkSolidIcon],svg[streamline-ai-technology-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.527 9.331a5 5 0 0 0 1.49-1.319a2 2 0 0 1-.273-.661l-.019-.088a1.29 1.29 0 0 0-1.042-.998c-2.072-.36-2.072-3.334 0-3.695a1.29 1.29 0 0 0 1.03-.948a5 5 0 1 0-6.187 7.709V10.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9.331Zm-5 3.919a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75m7.28-11.533C9.99.881 11.18.876 11.37 1.71l.009.04l.018.078a2.4 2.4 0 0 0 1.921 1.812c.872.152.872 1.404 0 1.556a2.4 2.4 0 0 0-1.925 1.827l-.023.102c-.19.835-1.381.83-1.565-.007l-.019-.087A2.38 2.38 0 0 0 7.87 5.194c-.871-.151-.871-1.401 0-1.553a2.38 2.38 0 0 0 1.915-1.826L9.8 1.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAiTechnologySparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiUpscaleSparkIcon],svg[streamline-ai-upscale-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 12.5a6 6 0 1 0 0-12a6 6 0 0 0 0 12m4.24-1.76l2.76 2.76"></svg:path><svg:path d="M3.45 6.828c-.368-.064-.368-.592 0-.656a3.33 3.33 0 0 0 2.68-2.568l.022-.101c.08-.364.597-.366.68-.003l.027.118A3.35 3.35 0 0 0 9.55 6.17c.37.065.37.595 0 .66a3.35 3.35 0 0 0-2.69 2.552l-.027.118c-.083.363-.6.36-.68-.003l-.022-.1a3.33 3.33 0 0 0-2.681-2.57Z"></svg:path></svg:g>`,
})
export class StreamlineAiUpscaleSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiUpscaleSparkSolidIcon],svg[streamline-ai-upscale-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 1.5a5 5 0 1 0 0 10a5 5 0 0 0 0-10M0 6.5a6.5 6.5 0 1 1 11.749 3.835l1.958 1.958a1 1 0 1 1-1.414 1.414l-1.958-1.958A6.5 6.5 0 0 1 0 6.5m5.74-2.63c.18-.824 1.352-.829 1.539-.007l.009.038A2.275 2.275 0 0 0 9.13 5.697c.859.149.859 1.382 0 1.531A2.275 2.275 0 0 0 7.3 8.964l-.022.098c-.187.821-1.36.816-1.54-.007l-.018-.084a2.26 2.26 0 0 0-1.822-1.744c-.857-.15-.857-1.38 0-1.53a2.26 2.26 0 0 0 1.82-1.734l.013-.062l.007-.031Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAiUpscaleSparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiVehicleSpark1Icon],svg[streamline-ai-vehicle-spark-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.513 4.963H4.77a1 1 0 0 0-1 .68L3 7.963H1.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1H2m10-4h.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H12"></svg:path><svg:path d="M10.499 13.463a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002m-7 0a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002m5.499-1.5H5M7.416 3.97c-.351-.06-.351-.564 0-.625A3.18 3.18 0 0 0 9.974.895l.022-.097c.075-.347.57-.349.648-.003l.026.113a3.19 3.19 0 0 0 2.565 2.435c.353.062.353.568 0 .63a3.19 3.19 0 0 0-2.565 2.435l-.026.112c-.079.347-.572.344-.648-.002l-.022-.097a3.18 3.18 0 0 0-2.558-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiVehicleSpark1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAiVehicleSpark1SolidIcon],svg[streamline-ai-vehicle-spark-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.815.696C9.998-.14 11.19-.145 11.38.69l.009.04q.008.04.018.077a2.4 2.4 0 0 0 1.921 1.813c.872.152.872 1.404 0 1.556a2.4 2.4 0 0 0-1.925 1.827l-.023.102c-.19.835-1.382.83-1.565-.007l-.019-.087a2.38 2.38 0 0 0-1.918-1.837c-.87-.151-.87-1.401 0-1.553A2.38 2.38 0 0 0 9.794.794l.014-.065zM7.692 5.244C6.99 5.122 6.526 4.7 6.3 4.181H4.782a1.5 1.5 0 0 0-1.486 1.021v.002L2.638 7.18H1.5A1.5 1.5 0 0 0 0 8.68v2a1.5 1.5 0 0 0 1.02 1.421a2.502 2.502 0 0 1 4.968.08H8.01a2.501 2.501 0 0 1 4.968-.079A1.5 1.5 0 0 0 14 10.681v-2a1.5 1.5 0 0 0-1.5-1.5h-.473c-.926 1.07-2.916.783-3.274-.851l-.019-.088a1.29 1.29 0 0 0-1.042-.998M3.5 13.934a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002m7 0a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAiVehicleSpark1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirplaneIcon],svg[streamline-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.25 2.75h1.61a.49.49 0 0 1 .48.38l.51 2l5-1a3.69 3.69 0 0 1 4.4 3.59a1 1 0 0 1-1 1h-4.4l-1 1.58a2 2 0 0 1-1.68.92h-1.1a.5.5 0 0 1-.44-.73l.88-1.74H1.75a1 1 0 0 1-1-1v-4.5a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class StreamlineAirplaneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirplaneDisabledIcon],svg[streamline-airplane-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.146 13.274L7 12.345l-2.146.93a.99.99 0 0 1-1.035-1.664L5.72 10L5.5 7.97l-3.637.821a.989.989 0 0 1-.665-1.846l1.916-.972M13.5 13.5L.5.5M5.031 5l-.19-1.298a2.97 2.97 0 0 1 .607-2.268a1.977 1.977 0 0 1 3.104 0c.505.64.725 1.46.607 2.268L8.969 5l3.833 1.944a.989.989 0 0 1-.665 1.846L8.5 7.969l-.052.48"></svg:path>`,
})
export class StreamlineAirplaneDisabledIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirplaneDisabledSolidIcon],svg[streamline-airplane-disabled-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.219 1.28A.75.75 0 0 1 1.279.219l3.43 3.43l-.028-.193a3.2 3.2 0 0 1 .652-2.435a2.123 2.123 0 0 1 3.333 0c.543.688.779 1.568.652 2.435L9.114 4.85l4.117 2.088a1.062 1.062 0 0 1-.714 1.982L9.24 8.18l4.54 4.54a.75.75 0 0 1-1.06 1.061L.218 1.28Zm5.19 6.953l5.169 5.168c-.282.37-.796.542-1.273.335l-2.305-1l-2.305 1a1.064 1.064 0 0 1-1.111-1.788l2.04-1.729l-.214-1.986ZM2.99 5.812L5.247 8.07l-3.764.85a1.062 1.062 0 0 1-.714-1.982z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAirplaneDisabledSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirplaneEnabledIcon],svg[streamline-airplane-enabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.031 5l-.19-1.298a2.97 2.97 0 0 1 .607-2.267a1.977 1.977 0 0 1 3.104 0c.505.64.725 1.46.607 2.267L8.969 5l3.833 1.944a.989.989 0 0 1-.665 1.846L8.5 7.97L8.281 10l1.9 1.61a.991.991 0 0 1-1.035 1.664L7 12.344l-2.146.93a.99.99 0 0 1-1.035-1.665L5.72 10L5.5 7.969l-3.637.821a.989.989 0 0 1-.665-1.846z"></svg:path>`,
})
export class StreamlineAirplaneEnabledIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirplaneEnabledSolidIcon],svg[streamline-airplane-enabled-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.886 4.85l-.204-1.393a3.2 3.2 0 0 1 .651-2.435a2.123 2.123 0 0 1 3.334 0c.542.687.778 1.568.651 2.435L9.114 4.85l4.117 2.088a1.062 1.062 0 0 1-.714 1.982l-3.906-.882l-.235 2.181l2.04 1.729a1.064 1.064 0 0 1-1.111 1.788l-2.305-1l-2.305 1a1.064 1.064 0 0 1-1.111-1.788l2.04-1.729L5.39 8.04l-3.906.882A1.062 1.062 0 0 1 .77 6.94z"></svg:path>`,
})
export class StreamlineAirplaneEnabledSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirplaneSolidIcon],svg[streamline-airplane-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.563 2.197a.775.775 0 0 1 .758.598v-.003l-.243.062l.244-.056v-.003l.486 1.91L8.934 3.68a4.204 4.204 0 0 1 5.013 4.09v.003a1.32 1.32 0 0 1-1.321 1.321H8.048l-.997 1.577l-.001.001a2.4 2.4 0 0 1-2.01 1.101H3.857a.786.786 0 0 1-.692-1.146l.223.114l-.222-.115l.758-1.5h-2.55A1.32 1.32 0 0 1 .052 7.805V2.983a.786.786 0 0 1 .786-.786z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAirplaneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirportPlaneIcon],svg[streamline-airport-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.33 10.67H1.88a1.45 1.45 0 0 1 0-2.89h2.3L5.66 6.3L1.6 3.8a1.45 1.45 0 0 1-.52-1.91a1.47 1.47 0 0 1 2-.77l5.3 2.45L10.94.98a1.47 1.47 0 1 1 2.08 2.08l-2.59 2.56l2.45 5.35a1.46 1.46 0 0 1-.77 1.95a1.45 1.45 0 0 1-1.91-.52L7.7 8.34L6.22 9.82v2.3a1.45 1.45 0 0 1-2.89 0z"></svg:path>`,
})
export class StreamlineAirportPlaneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirportPlaneSolidIcon],svg[streamline-airport-plane-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.98.3a1.72 1.72 0 0 0-1.217.504h-.001L8.325 3.27L3.186.894a1.72 1.72 0 0 0-2.333.89a1.7 1.7 0 0 0 .615 2.23l3.79 2.334L4.077 7.53H1.859a1.7 1.7 0 0 0 .02 3.39h1.2v1.2l.001.02a1.7 1.7 0 0 0 3.39-.02V9.924l1.182-1.183l2.335 3.79v.001a1.7 1.7 0 0 0 2.229.615a1.71 1.71 0 0 0 .891-2.28L10.73 5.675l2.465-2.437h.001A1.72 1.72 0 0 0 11.98.3" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAirportPlaneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirportPlaneTransitIcon],svg[streamline-airport-plane-transit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.246 6.417l.71-.365a.257.257 0 0 1 .349.086l.67.764l2.77-1.94a1.882 1.882 0 0 1 2.801.547a.515.515 0 0 1-.242.686l-1.677.775l-.185.089l-.38 2.07a.27.27 0 0 1-.153.214L6.89 9.9a.28.28 0 0 1-.406-.26l.249-1.67l-.122.057l-1.814.904a.506.506 0 0 1-.681-.213l-.98-1.971a.257.257 0 0 1 .11-.33m-1.241 7.076v-2.497h2.498"></svg:path><svg:path d="M13.383 5.807A6.494 6.494 0 0 1 2.005 11.15M.617 8.193a6.494 6.494 0 0 1 11.378-5.345"></svg:path><svg:path d="M11.995.507v2.497H9.497"></svg:path></svg:g>`,
})
export class StreamlineAirportPlaneTransitIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirportPlaneTransitSolidIcon],svg[streamline-airport-plane-transit-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.213 2.538A5.499 5.499 0 0 0 1.595 8.01a.75.75 0 0 1-1.474.277a6.999 6.999 0 0 1 11.163-6.821l.612-.612a.5.5 0 0 1 .854.353V3.5a.5.5 0 0 1-.5.5H9.957a.5.5 0 0 1-.353-.853zm2.791 2.577a.75.75 0 0 1 .876.598a6.999 6.999 0 0 1-11.164 6.821l-.612.613a.5.5 0 0 1-.854-.354V10.5a.5.5 0 0 1 .5-.5h2.293a.5.5 0 0 1 .354.854l-.61.609a5.499 5.499 0 0 0 8.618-5.472a.75.75 0 0 1 .6-.876Zm-9.048.937l-.71.365a.257.257 0 0 0-.112.33l.98 1.971a.507.507 0 0 0 .682.213l1.606-.85l.122-.056l-.25 1.669a.28.28 0 0 0 .406.26l1.23-.611a.27.27 0 0 0 .151-.214l.38-2.07l.186-.089l1.677-.775a.514.514 0 0 0 .242-.686a1.882 1.882 0 0 0-2.801-.547l-2.77 1.94l-.67-.764a.257.257 0 0 0-.35-.086Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAirportPlaneTransitSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirportSecurityIcon],svg[streamline-airport-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.36 13.433a1 1 0 0 1-.72 0A9.565 9.565 0 0 1 .505 4.498V1.499a1 1 0 0 1 1-.999h10.993a1 1 0 0 1 1 1v2.998a9.565 9.565 0 0 1-6.137 8.935Z"></svg:path><svg:path d="m3.059 4.55l.826-.282a.28.28 0 0 1 .364.149l.603.934l3.306-1.653A2.058 2.058 0 0 1 11.1 4.739a.563.563 0 0 1-.372.703L8.79 6.01l-.215.066l-.744 2.178a.3.3 0 0 1-.198.207L6.439 8.9a.306.306 0 0 1-.397-.347l.537-1.765l-.14.041l-2.107.686a.554.554 0 0 1-.703-.339l-.744-2.289a.28.28 0 0 1 .174-.339Z"></svg:path></svg:g>`,
})
export class StreamlineAirportSecurityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAirportSecuritySolidIcon],svg[streamline-airport-security-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.443.44A1.5 1.5 0 0 1 1.503 0h10.994a1.5 1.5 0 0 1 1.5 1.5v2.998A10.065 10.065 0 0 1 7.539 13.9a1.5 1.5 0 0 1-1.078 0A10.065 10.065 0 0 1 .004 4.498V1.499c0-.397.158-.779.44-1.06Zm9.509 3.368a2.3 2.3 0 0 0-1.912.17l-3.1 1.549l-.472-.731a.53.53 0 0 0-.669-.263l-.827.281a.53.53 0 0 0-.328.64l.003.011l.746 2.296a.804.804 0 0 0 1.018.492l1.791-.583l-.399 1.31a.556.556 0 0 0 .715.657l.007-.002l1.19-.437a.55.55 0 0 0 .355-.369l.7-2.05l.092-.029l1.94-.57a.813.813 0 0 0 .531-1.031a2.3 2.3 0 0 0-1.381-1.341" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAirportSecuritySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlarmClockIcon],svg[streamline-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M.5 2.5A8.7 8.7 0 0 1 3 .5m10.5 2a8.7 8.7 0 0 0-2.5-2"></svg:path><svg:path d="M7 5v3h2.5"></svg:path></svg:g>`,
})
export class StreamlineAlarmClockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlarmClockSolidIcon],svg[streamline-alarm-clock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.603 1.412A.75.75 0 1 0 2.897.088A9.4 9.4 0 0 0 .182 2.261a.75.75 0 1 0 1.136.978a7.9 7.9 0 0 1 2.285-1.827M7 14A6 6 0 1 0 7 2a6 6 0 0 0 0 12M10.088.398a.75.75 0 0 1 1.015-.31a9.4 9.4 0 0 1 2.715 2.173a.75.75 0 0 1-1.136.978a7.9 7.9 0 0 0-2.285-1.827a.75.75 0 0 1-.309-1.014M7.625 5a.625.625 0 1 0-1.25 0v3c0 .345.28.625.625.625h2.5a.625.625 0 1 0 0-1.25H7.625z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAlarmClockSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlienIcon],svg[streamline-alien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 5.5c0 3.59-2.95 8-6.5 8S.5 9.09.5 5.5S3.41.5 7 .5s6.5 1.41 6.5 5"></svg:path><svg:path d="M2.75 4.75a3.12 3.12 0 0 0 .49 2.44a3.12 3.12 0 0 0 2.44.49a3.12 3.12 0 0 0-.49-2.44a3.12 3.12 0 0 0-2.44-.49m8.5 0a3.12 3.12 0 0 1-.49 2.44a3.12 3.12 0 0 1-2.44.49a3.12 3.12 0 0 1 .49-2.44a3.12 3.12 0 0 1 2.44-.49"></svg:path></svg:g>`,
})
export class StreamlineAlienIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlienSolidIcon],svg[streamline-alien-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0C5.152 0 3.413.361 2.122 1.24C.803 2.14 0 3.548 0 5.5c0 1.92.783 4.023 2.021 5.65C3.256 12.77 5.011 14 7 14s3.744-1.23 4.979-2.85C13.217 9.522 14 7.42 14 5.5c0-1.953-.803-3.361-2.122-4.26C10.587.362 8.848 0 7 0M2.52 4.169a3.26 3.26 0 0 1 2.552.512a.3.3 0 0 1 .062.062a3.26 3.26 0 0 1 .512 2.551a.25.25 0 0 1-.192.192a3.26 3.26 0 0 1-2.55-.512a.3.3 0 0 1-.063-.063a3.26 3.26 0 0 1-.512-2.55a.25.25 0 0 1 .192-.192Zm7.63-.01a3.3 3.3 0 0 1 1.33.01a.25.25 0 0 1 .191.192a3.26 3.26 0 0 1-.512 2.55a.3.3 0 0 1-.063.063a3.26 3.26 0 0 1-2.55.512a.25.25 0 0 1-.192-.192a3.26 3.26 0 0 1 .512-2.55a.3.3 0 0 1 .062-.063a3.3 3.3 0 0 1 1.222-.521Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAlienSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignBack1Icon],svg[streamline-align-back-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 .5H1.5a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1H10a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1"></svg:path><svg:path d="M13.5 3.5v9a1 1 0 0 1-1 1h-9"></svg:path></svg:g>`,
})
export class StreamlineAlignBack1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignBack1SolidIcon],svg[streamline-align-back-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v8A1.5 1.5 0 0 0 1.5 11h8A1.5 1.5 0 0 0 11 9.5v-8A1.5 1.5 0 0 0 9.5 0zM14 4.25a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 0 0 1.5h7.5A2.25 2.25 0 0 0 14 11.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAlignBack1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignCenterIcon],svg[streamline-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 1h13M2 4h10M3.5 7h7m-10 6h13M2 10h10"></svg:path>`,
})
export class StreamlineAlignCenterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignCenterSolidIcon],svg[streamline-align-center-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1A.75.75 0 0 1 .75.25h12.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 1m1.25 3A.75.75 0 0 1 2 3.25h10a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 4M3.5 6.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zM1.25 10A.75.75 0 0 1 2 9.25h10a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m-.5 2.25a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAlignCenterSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignFront1Icon],svg[streamline-align-front-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 13.5h8.5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1"></svg:path><svg:path d="M.5 10.5v-9a1 1 0 0 1 1-1h9"></svg:path></svg:g>`,
})
export class StreamlineAlignFront1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignFront1SolidIcon],svg[streamline-align-front-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 0A2.25 2.25 0 0 0 0 2.25v7.5a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 0 0-1.5zM4.5 3A1.5 1.5 0 0 0 3 4.5v8A1.5 1.5 0 0 0 4.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 12.5 3z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAlignFront1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignLeftIcon],svg[streamline-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 1h13M.5 4h10M.5 7h7m-7 6h13m-13-3h10"></svg:path>`,
})
export class StreamlineAlignLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignLeftSolidIcon],svg[streamline-align-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1A.75.75 0 0 1 .75.25h12.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 1m.75 2.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zM0 7a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 0 7m0 3a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 0 10m.75 2.25a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAlignLeftSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignRightIcon],svg[streamline-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 1H.5m13 3h-10m10 3h-7m7 6H.5m13-3h-10"></svg:path>`,
})
export class StreamlineAlignRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignRightSolidIcon],svg[streamline-align-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1A.75.75 0 0 1 .75.25h12.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 1m3.25 2.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zM5.5 7a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 5.5 7m-3 3a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 2.5 10M.75 12.25a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAlignRightSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAltIcon],svg[streamline-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.207.793a1 1 0 0 1 .293.707v11a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 .707.293m-2.76 4.412v3.59M9.25 5.205h2.394"></svg:path><svg:path d="M6.747 5.205v3.59h2.095m-6.592 0l1.102-3.307a.415.415 0 0 1 .394-.283v0c.179 0 .337.114.394.283l1.102 3.307M2.649 7.598h2.194"></svg:path></svg:g>`,
})
export class StreamlineAltIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAltSolidIcon],svg[streamline-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.44.44A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5v-11C0 1.102.158.72.44.44m11.855 5.219a.625.625 0 1 0 0-1.25H9.673a.625.625 0 1 0 0 1.25h.686v3.307a.625.625 0 1 0 1.25 0V5.66h.686Zm-5.572-1.25c.346 0 .625.28.625.625V8.34h1.67a.625.625 0 1 1 0 1.25H6.723a.625.625 0 0 1-.625-.625V5.034c0-.346.28-.625.625-.625m-2.355.738a1.08 1.08 0 0 0-2.049 0l-.765 2.297l-.01.028l-.432 1.297a.625.625 0 1 0 1.186.395l.294-.884h1.503l.294.884a.625.625 0 0 0 1.186-.395l-.432-1.297l-.01-.028zM3.009 7.03l.335-1.003l.334 1.003z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAltSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAmazonIcon],svg[streamline-amazon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.469 6.777c0 1.046-1.06 1.893-2.367 1.893c-1.308 0-2.368-.847-2.368-1.893s1.06-1.894 2.368-1.894h2.367"></svg:path><svg:path d="M3.734 2.988c0-1.046 1.06-1.894 2.368-1.894s2.367.848 2.367 1.894v4.018c.082.403.42 1.25 1.11 1.415M.84 10.061c1.135 1.03 3.57 1.996 6.6 1.848s5.179-1.338 5.874-1.914"></svg:path><svg:path d="M10.545 9.495c1.178-.423 2.78.33 2.78.33s-.08 1.769-1.005 2.613"></svg:path></svg:g>`,
})
export class StreamlineAmazonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAmazonSolidIcon],svg[streamline-amazon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.444 2.961c0-.47.545-1.117 1.585-1.117s1.585.648 1.585 1.117v1.12H6.029c-1.539 0-3.085 1.024-3.085 2.617S4.49 9.316 6.03 9.316c.847 0 1.697-.31 2.289-.856c.232.255.548.49.964.59a.75.75 0 0 0 .35-1.46c-.076-.018-.19-.09-.314-.284a1.8 1.8 0 0 1-.204-.467V2.96C9.115 1.367 7.569.343 6.03.343S2.944 1.368 2.944 2.96a.75.75 0 1 0 1.5 0Zm3.17 2.62H6.029c-1.04 0-1.585.647-1.585 1.117S4.99 7.816 6.03 7.816s1.585-.648 1.585-1.118V5.58ZM.284 10.05a.75.75 0 0 1 1.06-.052c.94.853 3.13 1.767 5.968 1.629a11.1 11.1 0 0 0 4.141-.998c-.291-.026-.565-.008-.788.072a.75.75 0 0 1-.508-1.411c.793-.285 1.657-.16 2.24-.016a6.6 6.6 0 0 1 1.045.355l.02.009l.005.003h.003v.001l-.066.143l.067-.142a.75.75 0 0 1 .43.712h-.021h.021v.011l-.002.021l-.005.07l-.002.03a1 1 0 0 1-.015.152a7 7 0 0 1-.15.839c-.145.583-.437 1.405-1.06 1.973a.75.75 0 0 1-1.011-1.107q.118-.11.217-.258a12.7 12.7 0 0 1-4.488 1.04c-3.14.152-5.75-.839-7.05-2.017a.75.75 0 0 1-.05-1.06Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAmazonSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAmbulanceIcon],svg[streamline-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.159 10.773V4a1 1 0 0 0-1-1H1.702a1 1 0 0 0-1 1v6.626a1 1 0 0 0 1 1h.787m10.809-3.894H9.16"></svg:path><svg:path d="M11.638 11.626h.682a1 1 0 0 0 1-1.008l-.024-3.18l-1.392-2.85a1 1 0 0 0-.899-.562h-1.86m-6.643 7.63a1.396 1.396 0 1 0 2.792 0a1.396 1.396 0 1 0-2.792 0"></svg:path><svg:path d="M8.839 11.656a1.396 1.396 0 1 0 2.792 0a1.396 1.396 0 1 0-2.792 0M3.431 7H6.43m-1.5-1.499v2.998m3.909 3.127H5.294"></svg:path></svg:g>`,
})
export class StreamlineAmbulanceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAmbulanceSolidIcon],svg[streamline-ambulance-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.353 4.368l1.338 2.74h-3.124V3.526h.438a1.5 1.5 0 0 1 1.348.842M8.16 2.5c.466 0 .883.213 1.158.548v4.685c0 .345.28.625.625.625h3.854v2.081a1.5 1.5 0 0 1-1.5 1.5h-.166v.06a1.896 1.896 0 0 1-3.787.127H5.79a1.896 1.896 0 0 1-3.784 0h-.304a1.5 1.5 0 0 1-1.5-1.5V4a1.5 1.5 0 0 1 1.5-1.5zM4.93 4.75c.345 0 .625.28.625.625v1h1a.625.625 0 1 1 0 1.25h-1v1a.625.625 0 1 1-1.25 0v-1h-1a.625.625 0 0 1 0-1.25h1v-1c0-.345.28-.625.625-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAmbulanceSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAmpersandIcon],svg[streamline-ampersand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.753 13.33c-.846-.725-2.299-1.89-3.837-3.21m0 0C7.467 8.873 5.942 7.49 4.774 6.201m4.142 3.917l-2.749 2.587A2.92 2.92 0 1 1 2.26 8.37l2.514-2.167m4.142 3.917l1.691-1.591M4.774 6.202C3.595 4.9 2.782 3.697 2.782 2.834C2.782.796 4.284.5 5.164.5c1.287 0 2.341.76 2.341 2.334c0 1.05-2.261 2.963-2.261 2.963z"></svg:path>`,
})
export class StreamlineAmpersandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAmpersandSolidIcon],svg[streamline-ampersand-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.192 1.758c-.233.158-.498.47-.498 1.236c0 .204.107.556.422 1.069c.21.34.486.715.819 1.114a13 13 0 0 0 .913-.89c.258-.277.498-.566.669-.83q.126-.196.18-.332c.035-.086.038-.127.039-.13q0-.001 0 0c0-.58-.188-.928-.417-1.136c-.24-.22-.608-.359-1.084-.359c-.363 0-.757.065-1.043.258M5.941 6.29a15 15 0 0 0 1.007-.983c.286-.308.59-.668.827-1.034c.219-.337.46-.797.46-1.279c0-.934-.318-1.709-.906-2.244C6.753.225 5.996 0 5.235 0C4.75 0 4 .077 3.35.516c-.7.475-1.157 1.285-1.157 2.478c0 .625.284 1.268.644 1.854c.26.422.588.863.961 1.31l-1.846 1.59a3.557 3.557 0 1 0 4.76 5.285l2.154-2.027a170 170 0 0 0 1.897 1.582c.508.42.945.781 1.28 1.068a.75.75 0 1 0 .976-1.138c-.346-.297-.796-.669-1.304-1.089l-.301-.249c-.45-.372-.94-.779-1.449-1.209l1.016-.956a.75.75 0 0 0-1.028-1.092L8.821 8.989c-1.01-.881-2.02-1.809-2.88-2.7Zm-1.137.981L2.932 8.884a2.057 2.057 0 1 0 2.753 3.057l2.039-1.919c-1.01-.885-2.036-1.83-2.92-2.75Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAmpersandSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAnchorIcon],svg[streamline-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 8H1.5a5.5 5.5 0 0 0 11 0H11M7 3.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 0v10m-1.5-7h3"></svg:path>`,
})
export class StreamlineAnchorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAnchorSolidIcon],svg[streamline-anchor-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 2.284a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m3 0a2.25 2.25 0 0 1-1.5 2.122v.872h.75a.75.75 0 0 1 0 1.5h-.75v5.612a4.75 4.75 0 0 0 3.94-3.94H11a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75a6.25 6.25 0 0 1-12.5 0a.75.75 0 0 1 .75-.75H3a.75.75 0 1 1 0 1.5h-.69a4.75 4.75 0 0 0 3.94 3.94V6.778H5.5a.75.75 0 1 1 0-1.5h.75v-.872a2.25 2.25 0 1 1 3-2.122" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAnchorSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAndroidIcon],svg[streamline-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3 13.5v-8a4 4 0 0 1 8 0v8M3 11h8"></svg:path><svg:path d="M.5 10V8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2M11 .5L9.28 2.22M3 .5l1.72 1.72"></svg:path></svg:g>`,
})
export class StreamlineAndroidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAndroidSolidIcon],svg[streamline-android-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.53.241a.75.75 0 1 0-1.06 1.06l1.29 1.292a4.33 4.33 0 0 0-1.07 2.491h8.62a4.33 4.33 0 0 0-1.07-2.49l1.29-1.292a.75.75 0 1 0-1.06-1.06L9.056 1.654a4.33 4.33 0 0 0-4.112 0L3.53.24Zm.644 11.167h5.652v1.752a.75.75 0 0 0 1.5 0V7.608a1.15 1.15 0 0 1 1.101 1.15v.9a.75.75 0 1 0 1.5 0v-.9a2.65 2.65 0 0 0-2.65-2.65H2.723a2.65 2.65 0 0 0-2.651 2.65v.9a.75.75 0 1 0 1.5 0v-.9a1.15 1.15 0 0 1 1.1-1.15v5.552a.75.75 0 0 0 1.5 0v-1.752Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAndroidSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAnnoncementMegaphoneIcon],svg[streamline-annoncement-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m7.182 3.747l3.857 6.681m-.202-.351l-9.51 2.209L.72 11.23L7.386 4.1"></svg:path><svg:path d="m3.396 11.805l.524.906a1.421 1.421 0 1 0 2.455-1.432l-.084-.145m1.153-9.297V.583m4.802 6.057H13.5m-12.111 0h1.253m.519-4.283l.886.887m6.793 0l.886-.887"></svg:path></svg:g>`,
})
export class StreamlineAnnoncementMegaphoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAnnoncementMegaphoneSolidIcon],svg[streamline-annoncement-megaphone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.933.767a.75.75 0 0 0-1.5 0v.754a.75.75 0 0 0 1.5 0zM6.595 2.928a.75.75 0 0 1 1.024.275l3.858 6.681a.75.75 0 0 1-1.299.75l-.055-.096l-3.092.718a2.171 2.171 0 0 1-3.97 1.664l-.002-.003l-.376-.651l-1.454.337a.5.5 0 0 1-.546-.237l-.609-1.055a.5.5 0 0 1 .068-.591l6.235-6.67l-.057-.097a.75.75 0 0 1 .275-1.025M4.21 11.911l1.357-.315a.671.671 0 0 1-1.21.57zm9.78-5.088a.75.75 0 0 1-.75.75h-.754a.75.75 0 0 1 0-1.5h.753a.75.75 0 0 1 .75.75Zm-12.108.75a.75.75 0 1 0 0-1.5h-.754a.75.75 0 1 0 0 1.5zm2.182-3.868a.75.75 0 0 1-1.06 0l-.634-.634a.75.75 0 1 1 1.06-1.06l.635.633a.75.75 0 0 1 0 1.061Zm7.932-.634a.75.75 0 0 0-1.06-1.06l-.642.64a.75.75 0 1 0 1.061 1.061z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAnnoncementMegaphoneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAppStoreIcon],svg[streamline-app-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.805 12.584a.977.977 0 0 0 1.791.247l.21-.36m3.112-3.035H5.566l1.444-2.49l1.938-3.342a.977.977 0 0 0-1.69-.98l-.248.427l-.247-.427a.977.977 0 1 0-1.69.98l.808 1.394l-2.574 4.438H1.602a.977.977 0 1 0 0 1.954H7.75"></svg:path><svg:path d="m8.939 6.324l1.775 3.113h1.556a.977.977 0 0 1 0 1.954h-.423l.268.461a.977.977 0 1 1-1.69.98L7.939 8.575"></svg:path></svg:g>`,
})
export class StreamlineAppStoreIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAppStoreSolidIcon],svg[streamline-app-store-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.853 1.298a1.054 1.054 0 0 0-1.44.383l-.268.46l-.267-.46a1.054 1.054 0 1 0-1.825 1.058l.873 1.505l-2.778 4.79h-1.84a1.054 1.054 0 0 0 0 2.108h7.32l-1.22-2.108H5.586l1.559-2.689L9.236 2.74a1.054 1.054 0 0 0-.383-1.441ZM1.738 13.647a1.08 1.08 0 0 0 1.474-.397l.594-1.03h-2.49a1.08 1.08 0 0 0 .422 1.427m9.351-.397L7.751 7.452l1.243-2.138l2.159 3.72h1.669a1.054 1.054 0 1 1 0 2.11h-.455l.593 1.029a1.08 1.08 0 1 1-1.87 1.077Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAppStoreSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAppleIcon],svg[streamline-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.182 7.49a2.49 2.49 0 0 1 1.737-2.366a2.906 2.906 0 0 0-4.214-.999a1 1 0 0 1-.999 0a3.086 3.086 0 0 0-4.404 1.208a5.12 5.12 0 0 0-.54 3.356A7.24 7.24 0 0 0 3.7 12.893a2.09 2.09 0 0 0 2.697.15a1.32 1.32 0 0 1 1.568 0a2.06 2.06 0 0 0 2.656-.06a6.57 6.57 0 0 0 1.698-2.996a2.476 2.476 0 0 1-2.137-2.497M8.184 1.998L9.682.5"></svg:path>`,
})
export class StreamlineAppleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAppleSolidIcon],svg[streamline-apple-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.147 1.337a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 1 0 1.06 1.06zM8.609 3.761a3.21 3.21 0 0 1 3.423 1.623a.5.5 0 0 1-.289.716a1.82 1.82 0 0 0-1.273 1.733v.008a1.813 1.813 0 0 0 1.564 1.827a.5.5 0 0 1 .416.62a6.63 6.63 0 0 1-1.738 3.047a2.42 2.42 0 0 1-3.116.078a.73.73 0 0 0-.86.004a2.45 2.45 0 0 1-3.18-.197a7.26 7.26 0 0 1-1.94-4.198a5.28 5.28 0 0 1 .556-3.436a3.38 3.38 0 0 1 4.81-1.325a.43.43 0 0 0 .412.004a3.2 3.2 0 0 1 1.215-.504" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAppleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineApplicationAddIcon],svg[streamline-application-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 .5H1.5a1 1 0 0 0-1 1V5a1 1 0 0 0 1 1H5a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1M12.5 8H9a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M5 8H1.5a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1H5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m5.75-2V.5M8 3.25h5.5"></svg:path>`,
})
export class StreamlineApplicationAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineApplicationAddSolidIcon],svg[streamline-application-add-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.077 0h3.77c.594 0 1.076.482 1.076 1.077v3.77c0 .594-.482 1.076-1.077 1.076h-3.77A1.077 1.077 0 0 1 0 4.846v-3.77C0 .483.482 0 1.077 0m8.077 8.077h3.77c.594 0 1.076.482 1.076 1.077v3.77c0 .594-.482 1.076-1.077 1.076h-3.77a1.077 1.077 0 0 1-1.076-1.077v-3.77c0-.594.482-1.076 1.077-1.076m-4.308 0h-3.77C.483 8.077 0 8.559 0 9.154v3.77C0 13.517.482 14 1.077 14h3.77c.594 0 1.076-.482 1.076-1.077v-3.77c0-.594-.482-1.076-1.077-1.076M10.761 0a.75.75 0 0 1 .75.75v1.733h1.732a.75.75 0 1 1 0 1.5h-1.732v1.732a.75.75 0 1 1-1.5 0V3.983H8.278a.75.75 0 0 1 0-1.5h1.733V.75a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineApplicationAddSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArchiveBoxIcon],svg[streamline-archive-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 5h11v7a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1zm12-1V2a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1m-8 4h3"></svg:path>`,
})
export class StreamlineArchiveBoxIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArchiveBoxSolidIcon],svg[streamline-archive-box-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 2A1.5 1.5 0 0 1 1.5.5h11A1.5 1.5 0 0 1 14 2v1.5A1.5 1.5 0 0 1 12.5 5h-11A1.5 1.5 0 0 1 0 3.5zm13 4.25H1V12a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 13 12zM5.5 7.875a.625.625 0 1 0 0 1.25h3a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArchiveBoxSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowBendLeftDown2Icon],svg[streamline-arrow-bend-left-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.5 10.5l3 3l3-3"></svg:path><svg:path d="M11.5.5h-2a4 4 0 0 0-4 4v9"></svg:path></svg:g>`,
})
export class StreamlineArrowBendLeftDown2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowBendLeftDown2SolidIcon],svg[streamline-arrow-bend-left-down-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 4a2 2 0 0 1 2-2H11a1 1 0 1 0 0-2H8.5a4 4 0 0 0-4 4v6h-2a.5.5 0 0 0-.354.854l3 3a.5.5 0 0 0 .708 0l3-3A.5.5 0 0 0 8.5 10h-2z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowBendLeftDown2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowBendRightDown2Icon],svg[streamline-arrow-bend-right-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.5 10.5l-3 3l-3-3"></svg:path><svg:path d="M2.5.5h2a4 4 0 0 1 4 4v9"></svg:path></svg:g>`,
})
export class StreamlineArrowBendRightDown2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowBendRightDown2SolidIcon],svg[streamline-arrow-bend-right-down-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 0a1 1 0 0 0 0 2h2.5a2 2 0 0 1 2 2v6h-2a.5.5 0 0 0-.354.854l3 3a.5.5 0 0 0 .708 0l3-3A.5.5 0 0 0 11.5 10h-2V4a4 4 0 0 0-4-4z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowBendRightDown2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCrossoverDownIcon],svg[streamline-arrow-crossover-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5.5l13 13m0-4v4h-4M5 9L.5 13.5m0-4v4h4M9 5L13.5.5"></svg:path>`,
})
export class StreamlineArrowCrossoverDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCrossoverDownSolidIcon],svg[streamline-arrow-crossover-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707l10.146 10.147l-1.293 1.292A.5.5 0 0 0 9.5 14h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.854-.354l-1.292 1.293zM.31 9.038a.5.5 0 0 1 .545.108l1.292 1.293l1.647-1.646a1 1 0 0 1 1.414 1.414l-1.646 1.647l1.293 1.292A.5.5 0 0 1 4.5 14h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .309-.462Zm13.398-7.33A1 1 0 0 0 12.293.292l-3.5 3.5a1 1 0 0 0 1.414 1.414l3.5-3.5Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowCrossoverDownSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCrossoverLeftIcon],svg[streamline-arrow-crossover-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5.5l-13 13m4 0h-4v-4M5 5L.5.5m4 0h-4v4M9 9l4.5 4.5"></svg:path>`,
})
export class StreamlineArrowCrossoverLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCrossoverLeftSolidIcon],svg[streamline-arrow-crossover-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.707 1.707L3.561 11.854l1.293 1.292A.5.5 0 0 1 4.5 14h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .854-.354l1.292 1.293L12.293.293a1 1 0 1 1 1.414 1.414M8.793 8.793a1 1 0 0 1 1.414 0l3.5 3.5a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414M0 1v3.5a.5.5 0 0 0 .854.354L2.146 3.56l1.647 1.646a1 1 0 0 0 1.414-1.414L3.561 2.146L4.854.854A.5.5 0 0 0 4.5 0h-4a.5.5 0 0 0-.5.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowCrossoverLeftSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCrossoverRightIcon],svg[streamline-arrow-crossover-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l13-13m-4 0h4v4M9 9l4.5 4.5m-4 0h4v-4M5 5L.5.5"></svg:path>`,
})
export class StreamlineArrowCrossoverRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCrossoverRightSolidIcon],svg[streamline-arrow-crossover-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 0H9.5a.5.5 0 0 0-.354.854l1.293 1.292L.293 12.293a1 1 0 1 0 1.414 1.414L11.854 3.561l1.292 1.293A.5.5 0 0 0 14 4.5v-4a.5.5 0 0 0-.5-.5zM.293.293a1 1 0 0 1 1.414 0l3.5 3.5a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414M14 9.5a.5.5 0 0 0-.854-.354l-1.292 1.293l-1.647-1.646a1 1 0 0 0-1.414 1.414l1.646 1.647l-1.293 1.292A.5.5 0 0 0 9.5 14h4a.5.5 0 0 0 .5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowCrossoverRightSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCrossoverUpIcon],svg[streamline-arrow-crossover-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5L.5.5m0 4v-4h4M9 5L13.5.5m0 4v-4h-4M5 9L.5 13.5"></svg:path>`,
})
export class StreamlineArrowCrossoverUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCrossoverUpSolidIcon],svg[streamline-arrow-crossover-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 0h-4a.5.5 0 0 0-.354.854l1.293 1.292l-1.646 1.647a1 1 0 0 0 1.414 1.414l1.647-1.646l1.292 1.293A.5.5 0 0 0 14 4.5v-4a.5.5 0 0 0-.5-.5M0 1V.5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 .354.854L3.56 2.146l10.146 10.147a1 1 0 0 1-1.414 1.414L2.146 3.561L.854 4.854A.5.5 0 0 1 0 4.5zm5.207 9.207a1 1 0 0 0-1.414-1.414l-3.5 3.5a1 1 0 1 0 1.414 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowCrossoverUpSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCursor1Icon],svg[streamline-arrow-cursor-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 10.5l-4-4l2-2a1.001 1.001 0 0 0-.5-1.68L1.74.53A1 1 0 0 0 .53 1.74L2.82 11a1 1 0 0 0 1.68.46l2-2l4 4z"></svg:path>`,
})
export class StreamlineArrowCursor1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCursor1SolidIcon],svg[streamline-arrow-cursor-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.858.043A1.5 1.5 0 0 0 .043 1.858v.001l2.29 9.26l.001.002a1.5 1.5 0 0 0 2.52.69L6.5 10.166l3.646 3.646a.5.5 0 0 0 .705.003l3-2.96a.5.5 0 0 0 .002-.71L10.206 6.5l1.646-1.646l.003-.003a1.5 1.5 0 0 0-.742-2.518L1.859.044Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowCursor1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCursor2Icon],svg[streamline-arrow-cursor-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.005 5.428c.157-.065.257-.094.35-.186a.494.494 0 0 0 0-.7c-.093-.092-.124-.147-.35-.214C12.78 4.262 1.81.554 1.81.554A.99.99 0 0 0 .553 1.809S4.35 12.856 4.396 13.006s.106.257.199.35a.495.495 0 0 0 .7 0c.092-.093.113-.146.183-.35l1.94-5.594s5.431-1.919 5.587-1.984"></svg:path>`,
})
export class StreamlineArrowCursor2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCursor2SolidIcon],svg[streamline-arrow-cursor-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.972.08H1.97A1.49 1.49 0 0 0 .08 1.97l.473-.162l-.473.163l.001.002l.002.006l.008.024l.032.092l.12.35L.675 3.7l3.07 8.944l.128.373l.035.104l.01.03a.995.995 0 0 0 1.73.56a1 1 0 0 0 .193-.26c.045-.088.078-.187.11-.279l.001-.004l.995-2.87l.65-1.876l.213-.613l.002-.005l.007-.002l.617-.218l1.885-.667a323 323 0 0 0 2.878-1.027l.046-.018c.11-.043.307-.118.465-.276a.994.994 0 0 0 0-1.406l-.01-.01a1.3 1.3 0 0 0-.182-.164a1.2 1.2 0 0 0-.373-.169h-.002l-.035-.012L13 3.8l-.382-.127l-1.298-.436A5548 5548 0 0 1 3.687.66L2.441.24L2.093.12L2 .091l-.023-.01z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowCursor2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCurvyUpDown1Icon],svg[streamline-arrow-curvy-up-down-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11L3 13.5v-11a2 2 0 1 1 4 0v9a2 2 0 0 0 4 0V.5L13.5 3"></svg:path>`,
})
export class StreamlineArrowCurvyUpDown1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCurvyUpDown1SolidIcon],svg[streamline-arrow-curvy-up-down-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.058.227a.996.996 0 0 1 1.248-.016a1 1 0 0 1 .093.082L13.707 2.6A1 1 0 0 1 13 4.308h-1.308v6.846a2.847 2.847 0 0 1-5.692 0V2.846a.846.846 0 0 0-1.692 0V13a1 1 0 0 1-1.707.707L.293 11.4A1 1 0 0 1 1 9.692h1.308V2.846a2.846 2.846 0 0 1 5.692 0v8.308a.846.846 0 1 0 1.692 0V1a1 1 0 0 1 .366-.773" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowCurvyUpDown1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCurvyUpDown2Icon],svg[streamline-arrow-curvy-up-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.385 2.958v8.084a2.193 2.193 0 0 1-4.385 0V2.958a2.192 2.192 0 1 0-4.385 0v8.084"></svg:path><svg:path d="m9.385 4.868l2-2l2 2M4.615 9.07l-2 2l-2-2"></svg:path></svg:g>`,
})
export class StreamlineArrowCurvyUpDown2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCurvyUpDown2SolidIcon],svg[streamline-arrow-curvy-up-down-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.808 1.515c-.797 0-1.443.646-1.443 1.443V8.57h1.25a.5.5 0 0 1 .354.854l-1.604 1.603v.015H3.35l-.381.382a.5.5 0 0 1-.708 0l-.38-.382h-.016v-.015L.261 9.424a.5.5 0 0 1 .354-.854h1.25V2.958a2.942 2.942 0 0 1 5.885 0v8.084a1.442 1.442 0 0 0 2.885 0V5.368h-1.25a.5.5 0 0 1-.354-.854l2-2a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1-.353.854h-1.25v5.674a2.942 2.942 0 1 1-5.885 0V2.958c0-.797-.646-1.443-1.442-1.443" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowCurvyUpDown2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowDown2Icon],svg[streamline-arrow-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 6.5l3 3l3-3m-3-6v9m-3.5 4h7"></svg:path>`,
})
export class StreamlineArrowDown2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowDown2SolidIcon],svg[streamline-arrow-down-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a1 1 0 0 0-2 0v5H4a.5.5 0 0 0-.354.854l3 3a.5.5 0 0 0 .708 0l3-3A.5.5 0 0 0 10 6H8zM4 12a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowDown2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowDownDashedSquareIcon],svg[streamline-arrow-down-dashed-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.705 13.394a3 3 0 0 1-2.07-2m10.66 2a3 3 0 0 0 2.07-2M6 13.5h2m0-13H6M.5 6v2m13-2v2M2.705.606a3 3 0 0 0-2.07 2m10.66-2a3 3 0 0 1 2.07 2M7 4v6M5 8l2 2l2-2"></svg:path>`,
})
export class StreamlineArrowDownDashedSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowDownDashedSquareSolidIcon],svg[streamline-arrow-down-dashed-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.961 12.5H6.038a.75.75 0 0 0 0 1.5h1.923a.75.75 0 0 0 0-1.5M5.288.75c0 .414.336.75.75.75h1.923a.75.75 0 1 0 0-1.5H6.038a.75.75 0 0 0-.75.75m5.643 11.674a.75.75 0 0 0 .397 1.447a3.64 3.64 0 0 0 2.508-2.424a.75.75 0 1 0-1.432-.446a2.14 2.14 0 0 1-1.473 1.423m-7.862 0a.75.75 0 1 1-.397 1.447a3.64 3.64 0 0 1-2.508-2.424a.75.75 0 0 1 1.432-.446a2.14 2.14 0 0 0 1.473 1.423m-1.57-4.462a.75.75 0 0 1-1.5 0V6.038a.75.75 0 0 1 1.5 0zm11.751.75a.75.75 0 0 1-.75-.75V6.038a.75.75 0 0 1 1.5 0v1.924a.75.75 0 0 1-.75.75M1.596 2.999a.75.75 0 1 1-1.432-.446A3.64 3.64 0 0 1 2.672.129a.75.75 0 1 1 .397 1.447a2.14 2.14 0 0 0-1.473 1.423m11.747.493a.75.75 0 0 1-.939-.493a2.14 2.14 0 0 0-1.473-1.423a.75.75 0 1 1 .397-1.447a3.64 3.64 0 0 1 2.508 2.424a.75.75 0 0 1-.493.939M7.75 4a.75.75 0 0 0-1.5 0v3.5H5a.5.5 0 0 0-.354.854l2 2a.5.5 0 0 0 .708 0l2-2A.5.5 0 0 0 9 7.5H7.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowDownDashedSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowExpandIcon],svg[streamline-arrow-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.5 5.5l5-5m-4 0h4v4m-8 1l-5-5m4 0h-4v4m8 4l5 5m-4 0h4v-4m-8-1l-5 5m4 0h-4v-4"></svg:path>`,
})
export class StreamlineArrowExpandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowExpandSolidIcon],svg[streamline-arrow-expand-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1v3.5a.5.5 0 0 0 .854.354L2.146 3.56l2.147 2.146a1 1 0 0 0 1.414-1.414L3.561 2.146L4.854.854A.5.5 0 0 0 4.5 0h-4a.5.5 0 0 0-.5.5zm5.707 8.707a1 1 0 0 0-1.414-1.414l-2.147 2.146L.854 9.146A.5.5 0 0 0 0 9.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .354-.854L3.56 11.854l2.146-2.147Zm2.586-1.414a1 1 0 0 1 1.414 0l2.147 2.146l1.292-1.293A.5.5 0 0 1 14 9.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.354-.854l1.293-1.292l-2.146-2.147a1 1 0 0 1 0-1.414M9.5 0a.5.5 0 0 0-.354.854l1.293 1.292l-2.146 2.147a1 1 0 0 0 1.414 1.414l2.147-2.146l1.292 1.293A.5.5 0 0 0 14 4.5v-4a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowExpandSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowInfiniteLoopIcon],svg[streamline-arrow-infinite-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 10.43a2.37 2.37 0 0 1-1.5.57A2.75 2.75 0 0 1 .65 9.192C.511 8.811.5 8 .5 8s.012-.81.15-1.192A2.75 2.75 0 0 1 3.5 5c2.75 0 4.25 6 7 6a2.75 2.75 0 0 0 2.85-1.808C13.489 8.811 13.5 8 13.5 8s-.012-.81-.15-1.192A2.75 2.75 0 0 0 10.5 5h-2l2-2"></svg:path>`,
})
export class StreamlineArrowInfiniteLoopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowInfiniteLoopSolidIcon],svg[streamline-arrow-infinite-loop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.109 3.155a.75.75 0 0 0-1.28-.53L7.915 4.538a.75.75 0 0 0-.104.946a.75.75 0 0 0 .629.34h1.916l.017.001a6 6 0 0 1 .36.02c.243.02.438.05.517.079a1.89 1.89 0 0 1 1.241 1.958a1 1 0 0 0 0 .143a1.89 1.89 0 0 1-2.06 2.061l-.072-.003c-.37 0-.774-.2-1.265-.684S8.132 8.255 7.612 7.52l-.022-.032c-.494-.696-1.036-1.461-1.63-2.048c-.596-.587-1.35-1.102-2.282-1.115A3.39 3.39 0 0 0 .009 7.954a3.39 3.39 0 0 0 3.675 3.628a3.03 3.03 0 0 0 1.885-.727a.75.75 0 1 0-.976-1.139c-.27.23-.61.36-.965.367l-.058.003a1.89 1.89 0 0 1-2.061-2.06a1 1 0 0 0 0-.144a1.89 1.89 0 0 1 2.06-2.06l.072.003c.37 0 .774.199 1.265.683s.962 1.145 1.482 1.88l.022.03c.494.698 1.036 1.462 1.63 2.049c.596.587 1.35 1.102 2.282 1.115a3.39 3.39 0 0 0 3.669-3.628a3.39 3.39 0 0 0-2.234-3.442a3 3 0 0 0-.648-.137z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowInfiniteLoopSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowMoveIcon],svg[streamline-arrow-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5 2.5l2-2l2 2m-4 9l2 2l2-2M7 .5v13M11.5 5l2 2l-2 2m-9-4l-2 2l2 2m11-2H.5"></svg:path>`,
})
export class StreamlineArrowMoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowMoveSolidIcon],svg[streamline-arrow-move-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.761 7.549a.75.75 0 0 0 0-1.057l-1.994-1.995a.75.75 0 0 0-.778-.16a.74.74 0 0 0-.499.689v.997a.25.25 0 0 1-.249.25H7.997a.25.25 0 0 1-.25-.25V3.779a.25.25 0 0 1 .25-.25h.997a.74.74 0 0 0 .689-.498a.75.75 0 0 0-.16-.818L7.529.22a.75.75 0 0 0-1.058 0L4.477 2.213a.75.75 0 0 0-.16.818a.74.74 0 0 0 .688.499h.998a.25.25 0 0 1 .249.25v2.243a.25.25 0 0 1-.25.25H3.76a.25.25 0 0 1-.25-.25v-.997a.748.748 0 0 0-1.276-.529L.24 6.492a.75.75 0 0 0 0 1.057l1.994 1.994c.141.139.33.217.529.22a.8.8 0 0 0 .249-.06a.74.74 0 0 0 .499-.688v-.998a.25.25 0 0 1 .249-.249h2.244a.25.25 0 0 1 .249.25v2.243a.25.25 0 0 1-.25.25h-.997a.74.74 0 0 0-.688.458a.75.75 0 0 0 .16.818l1.994 1.994a.75.75 0 0 0 1.058 0l1.994-1.994a.75.75 0 0 0 .16-.778a.74.74 0 0 0-.689-.498h-.997a.25.25 0 0 1-.25-.25V8.017a.25.25 0 0 1 .25-.249h2.244a.25.25 0 0 1 .25.25v.997a.74.74 0 0 0 .458.688q.138.06.29.06a.77.77 0 0 0 .528-.22z"></svg:path>`,
})
export class StreamlineArrowMoveSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowReloadHorizontal1Icon],svg[streamline-arrow-reload-horizontal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9 .5L11.5 3L9 5.5"></svg:path><svg:path d="M.5 6V4a1 1 0 0 1 1-1h10M5 13.5L2.5 11L5 8.5"></svg:path><svg:path d="M13.5 8v2a1 1 0 0 1-1 1h-10"></svg:path></svg:g>`,
})
export class StreamlineArrowReloadHorizontal1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowReloadHorizontal1SolidIcon],svg[streamline-arrow-reload-horizontal-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.354.146A.5.5 0 0 0 8.5.5V2h-6A2.5 2.5 0 0 0 0 4.5V6a1 1 0 0 0 2 0V4.5a.5.5 0 0 1 .5-.5h6v1.5a.5.5 0 0 0 .854.354l2.5-2.5a.5.5 0 0 0 0-.708zM5.19 8.038a.5.5 0 0 1 .31.462V10h6a.5.5 0 0 0 .5-.5V8a1 1 0 1 1 2 0v1.5a2.5 2.5 0 0 1-2.5 2.5h-6v1.5a.5.5 0 0 1-.854.354l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .545-.108Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowReloadHorizontal1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowReloadHorizontal2Icon],svg[streamline-arrow-reload-horizontal-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.25 8.5L7 10.75L9.25 13m-4.5-7.5L7 3.25L4.75 1"></svg:path><svg:path d="M7 10.75h4.5a2 2 0 0 0 2-2v-3.5a2 2 0 0 0-2-2H10m-3 0H2.5a2 2 0 0 0-2 2v3.5a2 2 0 0 0 2 2H4"></svg:path></svg:g>`,
})
export class StreamlineArrowReloadHorizontal2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowReloadHorizontal2SolidIcon],svg[streamline-arrow-reload-horizontal-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5.543V4.25H3a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2H3a3 3 0 0 1-3-3v-3.5a3 3 0 0 1 3-3h1V.957a.5.5 0 0 1 .854-.353l2.292 2.292a.5.5 0 0 1 0 .708L4.854 5.896A.5.5 0 0 1 4 5.543m6 6.207v1.293a.5.5 0 0 1-.854.354l-2.292-2.293a.5.5 0 0 1 0-.708l2.292-2.292a.5.5 0 0 1 .854.353V9.75h1a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1h-1a1 1 0 1 1 0-2h1a3 3 0 0 1 3 3v3.5a3 3 0 0 1-3 3z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowReloadHorizontal2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowReloadVertical1Icon],svg[streamline-arrow-reload-vertical-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 5L3 2.5L5.5 5"></svg:path><svg:path d="M6 13.5H4a1 1 0 0 1-1-1v-10M13.5 9L11 11.5L8.5 9"></svg:path><svg:path d="M8 .5h2a1 1 0 0 1 1 1v10"></svg:path></svg:g>`,
})
export class StreamlineArrowReloadVertical1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowReloadVertical1SolidIcon],svg[streamline-arrow-reload-vertical-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 0a1 1 0 0 0 0 2h1.5a.5.5 0 0 1 .5.5v6H8.5a.5.5 0 0 0-.354.854l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5A.5.5 0 0 0 13.5 8.5H12v-6A2.5 2.5 0 0 0 9.5 0zM3.354 2.146a.5.5 0 0 0-.708 0l-2.5 2.5A.5.5 0 0 0 .5 5.5H2v6A2.5 2.5 0 0 0 4.5 14H6a1 1 0 1 0 0-2H4.5a.5.5 0 0 1-.5-.5v-6h1.5a.5.5 0 0 0 .354-.854z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowReloadVertical1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowReloadVertical2Icon],svg[streamline-arrow-reload-vertical-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 9.25L3.25 7L1 9.25m7.5-4.5L10.75 7L13 4.75"></svg:path><svg:path d="M3.25 7v4.5a2 2 0 0 0 2 2h3.5a2 2 0 0 0 2-2V10m0-3V2.5a2 2 0 0 0-2-2h-3.5a2 2 0 0 0-2 2V4"></svg:path></svg:g>`,
})
export class StreamlineArrowReloadVertical2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowReloadVertical2SolidIcon],svg[streamline-arrow-reload-vertical-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.457 4H9.75V3a1 1 0 0 0-1-1h-3.5a1 1 0 0 0-1 1v1a1 1 0 0 1-2 0V3a3 3 0 0 1 3-3h3.5a3 3 0 0 1 3 3v1h1.293a.5.5 0 0 1 .353.854l-2.293 2.292a.5.5 0 0 1-.707 0L8.104 4.854A.5.5 0 0 1 8.457 4M2.25 10H.957a.5.5 0 0 1-.353-.854l2.292-2.292a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1-.353.854H4.25v1a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a3 3 0 0 1-3 3h-3.5a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowReloadVertical2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowRoadmapIcon],svg[streamline-arrow-roadmap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 11.643h6.5m-1.857-1.857l1.857 1.857l-1.857 1.857M3.286 1.893a1.393 1.393 0 1 0 2.786 0a1.393 1.393 0 1 0-2.786 0M7 6.536a1.393 1.393 0 1 0 2.786 0a1.393 1.393 0 1 0-2.786 0m-2.786 5.107a1.393 1.393 0 1 0 2.786 0a1.393 1.393 0 1 0-2.786 0"></svg:path><svg:path d="M7 6.536H3.054a2.554 2.554 0 0 0 0 5.107h1.16m5.572-5.107h1.393a2.321 2.321 0 0 0 0-4.643H6.07m-2.784 0H.5"></svg:path></svg:g>`,
})
export class StreamlineArrowRoadmapIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowRoadmapSolidIcon],svg[streamline-arrow-roadmap-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.233 3a2 2 0 0 1-3.465 0H1a1 1 0 0 1 0-2h1.768a2 2 0 0 1 3.465 0h4.517a3.25 3.25 0 0 1 0 6.5h-.517a2 2 0 0 1-3.466 0H3.5a1.5 1.5 0 1 0 0 3h.268a2 2 0 0 1 3.464 0H11v-1a.5.5 0 0 1 .854-.354l2 2a.5.5 0 0 1 0 .707l-2 2A.5.5 0 0 1 11 13.5v-1H7.233a2 2 0 0 1-3.466 0H3.5a3.5 3.5 0 1 1 0-7h3.268a2 2 0 0 1 3.464 0h.518a1.25 1.25 0 1 0 0-2.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowRoadmapSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowRoundLeftIcon],svg[streamline-arrow-round-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.75.5L2.25 3l2.5 2.5"></svg:path><svg:path d="M1.75 8.25A5.25 5.25 0 1 0 7 3H2.25"></svg:path></svg:g>`,
})
export class StreamlineArrowRoundLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowRoundLeftSolidIcon],svg[streamline-arrow-round-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.351 1.002a.75.75 0 0 0-1.28-.53l-2.4 2.4a.75.75 0 0 0 0 1.06l2.4 2.399a.75.75 0 0 0 1.28-.53V4.4H7a3.798 3.798 0 1 1-3.798 3.8a1 1 0 1 0-2 0A5.798 5.798 0 1 0 7 2.401H5.351z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowRoundLeftSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowRoundRightIcon],svg[streamline-arrow-round-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m9.25.5l2.5 2.5l-2.5 2.5"></svg:path><svg:path d="M12.25 8.25A5.25 5.25 0 1 1 7 3h4.75"></svg:path></svg:g>`,
})
export class StreamlineArrowRoundRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowRoundRightSolidIcon],svg[streamline-arrow-round-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.65 1.002a.75.75 0 0 1 1.28-.53l2.398 2.4a.75.75 0 0 1 0 1.06L9.93 6.33a.75.75 0 0 1-1.28-.53V4.4H7a3.798 3.798 0 1 0 3.798 3.8a1 1 0 1 1 2 0A5.798 5.798 0 1 1 7 2.401h1.65z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowRoundRightSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowShrinkIcon],svg[streamline-arrow-shrink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l4-4M1 9.5h3.5V13m9 .5l-4-4m3.5 0H9.5V13M.5.5l4 4M1 4.5h3.5V1m9-.5l-4 4m3.5 0H9.5V1"></svg:path>`,
})
export class StreamlineArrowShrinkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowShrinkDiagonal1Icon],svg[streamline-arrow-shrink-diagonal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l5-5m-4 0h4v4m8-12l-5 5m4 0h-4v-4"></svg:path>`,
})
export class StreamlineArrowShrinkDiagonal1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowShrinkDiagonal1SolidIcon],svg[streamline-arrow-shrink-diagonal-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.707 1.707A1 1 0 0 0 12.293.293l-2.147 2.146l-1.292-1.293A.5.5 0 0 0 8 1.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .354-.854L11.56 3.854l2.146-2.147Zm-8.56 11.147L3.853 11.56l-2.147 2.146a1 1 0 0 1-1.414-1.414l2.146-2.147l-1.293-1.292A.5.5 0 0 1 1.5 8h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.854.354Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowShrinkDiagonal1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowShrinkDiagonal2Icon],svg[streamline-arrow-shrink-diagonal-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 13.5l-5-5m4 0h-4v4M.5.5l5 5m-4 0h4v-4"></svg:path>`,
})
export class StreamlineArrowShrinkDiagonal2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowShrinkDiagonal2SolidIcon],svg[streamline-arrow-shrink-diagonal-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707l2.146 2.147l-1.293 1.292A.5.5 0 0 0 1.5 6h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.854-.354L3.854 2.44zm11.147 8.56l-1.293 1.293l2.146 2.147a1 1 0 0 1-1.414 1.414l-2.147-2.146l-1.292 1.293A.5.5 0 0 1 8 12.5v-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .354.854Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowShrinkDiagonal2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowShrinkSolidIcon],svg[streamline-arrow-shrink-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.293.293a1 1 0 0 1 1.414 0l1.397 1.396L4.146.646A.5.5 0 0 1 5 1v3.5a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.354-.854L1.69 3.104L.293 1.707a1 1 0 0 1 0-1.414m9.016.245a.5.5 0 0 1 .545.108l1.043 1.043L12.293.293a1 1 0 1 1 1.414 1.414l-1.396 1.397l1.043 1.042A.5.5 0 0 1 13 5H9.5a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 .309-.462M1 9a.5.5 0 0 0-.354.854l1.043 1.043l-1.396 1.396a1 1 0 1 0 1.414 1.414l1.397-1.396l1.042 1.043A.5.5 0 0 0 5 13V9.5a.5.5 0 0 0-.5-.5zm8 .5a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 .354.854l-1.043 1.043l1.396 1.396a1 1 0 0 1-1.414 1.414l-1.397-1.396l-1.042 1.043A.5.5 0 0 1 9 13z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowShrinkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowTransferDiagonal1Icon],svg[streamline-arrow-transfer-diagonal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 10.5l10-10H6m7.5 3l-10 10H8"></svg:path>`,
})
export class StreamlineArrowTransferDiagonal1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowTransferDiagonal1SolidIcon],svg[streamline-arrow-transfer-diagonal-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.998 1.068a1 1 0 0 1-.29.64l-2 2l-7 7A1 1 0 0 1 .292 9.292L6.586 3L5.293 1.707A1 1 0 0 1 6 0h4a1 1 0 0 1 .674.261M7.414 11l6.293-6.293a1 1 0 0 0-1.414-1.414l-7 7l-2 2a.996.996 0 0 0-.05 1.36A1 1 0 0 0 4 14h4a1 1 0 0 0 .707-1.708z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowTransferDiagonal1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowTransferDiagonal2Icon],svg[streamline-arrow-transfer-diagonal-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5L3.5.5H8m-7.5 3l10 10H6"></svg:path>`,
})
export class StreamlineArrowTransferDiagonal2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowTransferDiagonal2SolidIcon],svg[streamline-arrow-transfer-diagonal-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 0a1 1 0 0 1 .707 1.707L7.406 3.008l6.3 6.284a1 1 0 0 1-1.412 1.416L3.278 1.716a1 1 0 0 1 .28-1.613A1 1 0 0 1 4 0zM6.586 11L.293 4.707a1 1 0 0 1 1.414-1.414l7 7l2 2a.996.996 0 0 1 .05 1.36A1 1 0 0 1 10 14H6a1 1 0 0 1-.707-1.708z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowTransferDiagonal2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowTransferDiagonal3Icon],svg[streamline-arrow-transfer-diagonal-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.5 8.5l8-8m0 3.5V.5H6m6.5 5l-8 8m0-3.5v3.5H8"></svg:path>`,
})
export class StreamlineArrowTransferDiagonal3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowTransferDiagonal3SolidIcon],svg[streamline-arrow-transfer-diagonal-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 0h3.5a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-.854.354L8.104 3.31L2.207 9.207A1 1 0 0 1 .793 7.793l5.896-5.897L5.646.854A.5.5 0 0 1 6 0m7.207 6.207a1 1 0 0 0-1.414-1.414l-5.897 5.896l-1.042-1.043A.5.5 0 0 0 4 10v3.5a.5.5 0 0 0 .5.5H8a.5.5 0 0 0 .354-.854L7.31 12.104l5.896-5.897Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowTransferDiagonal3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowUp1Icon],svg[streamline-arrow-up-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5V.5M10.5 4L7 .5L3.5 4"></svg:path>`,
})
export class StreamlineArrowUp1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowUp1SolidIcon],svg[streamline-arrow-up-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.646.146a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1-.354.854H8V13a1 1 0 1 1-2 0V4.5H3.5a.5.5 0 0 1-.354-.854z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowUp1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowUpDashedSquareIcon],svg[streamline-arrow-up-dashed-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.705.606a3 3 0 0 0-2.07 2m10.66-2a3 3 0 0 1 2.07 2M6 .5h2m0 13H6M.5 8V6m13 2V6M2.705 13.394a3 3 0 0 1-2.07-2m10.66 2a3 3 0 0 0 2.07-2M7 10V4M5 6l2-2l2 2"></svg:path>`,
})
export class StreamlineArrowUpDashedSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowUpDashedSquareSolidIcon],svg[streamline-arrow-up-dashed-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.961 1.5H6.038a.75.75 0 1 1 0-1.5h1.923a.75.75 0 1 1 0 1.5M5.288 13.25a.75.75 0 0 1 .75-.75h1.923a.75.75 0 0 1 0 1.5H6.038a.75.75 0 0 1-.75-.75m5.643-11.674a.75.75 0 1 1 .397-1.447a3.64 3.64 0 0 1 2.508 2.424a.75.75 0 1 1-1.432.446a2.14 2.14 0 0 0-1.473-1.423m-7.862 0A.75.75 0 0 0 2.672.129A3.64 3.64 0 0 0 .164 2.553a.75.75 0 1 0 1.432.446a2.14 2.14 0 0 1 1.473-1.423m-1.57 4.462a.75.75 0 0 0-1.5 0v1.924a.75.75 0 0 0 1.5 0zm11.751-.75a.75.75 0 0 0-.75.75v1.924a.75.75 0 0 0 1.5 0V6.038a.75.75 0 0 0-.75-.75M1.596 11.001a.75.75 0 0 0-1.432.446a3.64 3.64 0 0 0 2.508 2.424a.75.75 0 1 0 .397-1.447a2.14 2.14 0 0 1-1.473-1.423m11.747-.493a.75.75 0 0 0-.939.493a2.14 2.14 0 0 1-1.473 1.423a.75.75 0 0 0 .397 1.447a3.64 3.64 0 0 0 2.508-2.424a.75.75 0 0 0-.493-.939M7.75 10a.75.75 0 0 1-1.5 0V6.5H5a.5.5 0 0 1-.354-.854l2-2a.5.5 0 0 1 .708 0l2 2A.5.5 0 0 1 9 6.5H7.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowUpDashedSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArtificialIntelligenceSparkIcon],svg[streamline-artificial-intelligence-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 6.433v3.97a2.724 2.724 0 1 1-5.439-.229C.994 9.565.636 8.374.636 7.38c0-1.354.665-2.671 1.617-3.19a2.38 2.38 0 0 1 3.902-2.076"></svg:path><svg:path d="M3.511 5.809c-.35-.08-1.141-.6-1.26-1.612m.039 4.549c-.356.281-.64.917-.731 1.427m5.441.23a2.724 2.724 0 1 0 5.439-.229c.567-.609.924-1.8.924-2.794c0-.434-.068-.864-.192-1.266"></svg:path><svg:path d="M11.71 8.746c.356.281.64.917.731 1.427M7.064 4.307c-.35-.062-.35-.565 0-.626a3.18 3.18 0 0 0 2.559-2.45l.021-.097c.076-.347.57-.35.649-.003l.025.113a3.19 3.19 0 0 0 2.566 2.435c.353.061.353.568 0 .63a3.19 3.19 0 0 0-2.566 2.435l-.025.112c-.08.346-.573.344-.649-.003l-.021-.096a3.18 3.18 0 0 0-2.559-2.45"></svg:path></svg:g>`,
})
export class StreamlineArtificialIntelligenceSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineArtificialIntelligenceSparkSolidIcon],svg[streamline-artificial-intelligence-spark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.739.85c.183-.835 1.374-.84 1.564-.005l.01.04l.017.077c.22.934.975 1.648 1.922 1.812c.872.152.872 1.404 0 1.556a2.4 2.4 0 0 0-1.925 1.827l-.024.103c-.19.834-1.38.83-1.564-.007l-.02-.088a2.38 2.38 0 0 0-1.917-1.836c-.87-.152-.87-1.402 0-1.553A2.38 2.38 0 0 0 9.718.948l.014-.064zM8.658 6.398A1.29 1.29 0 0 0 7.625 5.4v7.215a2.998 2.998 0 0 0 5.204-.85a3 3 0 0 1-.778-.183c-.595-.224-1.242-.665-1.773-1.436a.625.625 0 0 1 1.03-.709c.382.555.82.839 1.183.975c.184.07.348.1.476.11l.023.002C13.61 9.85 14 8.546 14 7.457c0-.734-.177-1.458-.483-2.072l-.079.015c-.52.09-.934.484-1.051.998l-.024.102c-.448 1.967-3.255 1.955-3.686-.016zM6.375 4.615a1.96 1.96 0 0 1 0-2.127v-.52a2.618 2.618 0 0 0-4.612 1.698v.002c.039.39.198.68.382.89c.229.261.47.368.527.38a.625.625 0 1 1-.277 1.22c-.36-.083-.82-.355-1.19-.775a2.8 2.8 0 0 1-.383-.562C.312 5.526 0 6.483 0 7.457c0 .735.178 1.568.483 2.238q.12-.136.26-.244a.625.625 0 1 1 .774.98c-.178.141-.364.444-.478.795a2.997 2.997 0 0 0 5.336 1.389v-3.67a2.7 2.7 0 0 1-1.405.585a.625.625 0 1 1-.139-1.243c.509-.056.879-.349 1.143-.734c.268-.39.384-.818.401-1.023z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArtificialIntelligenceSparkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAscendingNumberOrderIcon],svg[streamline-ascending-number-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.167.5v5M9.5 1.75h.417c.69 0 1.25-.56 1.25-1.25v0m1.667 5H9.5m.922 5.593h.656a1.422 1.422 0 0 0 0-2.843h-.656a1.422 1.422 0 0 0 0 2.843"></svg:path><svg:path d="M12.5 9.562v2.625c0 .725-.588 1.313-1.312 1.313h-.875a1.31 1.31 0 0 1-1.238-.876M6 11l-2.5 2.5L1 11M3.5.5v13"></svg:path></svg:g>`,
})
export class StreamlineAscendingNumberOrderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAscendingNumberOrderSolidIcon],svg[streamline-ascending-number-order-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.75 0a1 1 0 0 1 1 1v9h1.5a.75.75 0 0 1 .53 1.28l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5A.75.75 0 0 1 1.25 10h1.5V1a1 1 0 0 1 1-1m8.167.75a.75.75 0 0 0-1.5 0a.5.5 0 0 1-.5.5H9.5a.75.75 0 0 0 0 1.5h.417q.259 0 .5-.063V5H9.5a.75.75 0 0 0 0 1.5h3.334a.75.75 0 0 0 0-1.5h-.917zm-.839 9.344h-.656a.672.672 0 0 1 0-1.344h.656c.37 0 .67.298.672.667v.01a.67.67 0 0 1-.672.667m0-2.844c1.11 0 2.027.833 2.157 1.909q.015.074.015.153v2.627a2.06 2.06 0 0 1-2.062 2.062h-.875c-.9 0-1.662-.575-1.945-1.375a.75.75 0 1 1 1.414-.5c.078.22.287.375.53.375h.876c.31 0 .562-.252.562-.563v-.45a2.2 2.2 0 0 1-.672.107h-.656a2.172 2.172 0 0 1 0-4.344z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAscendingNumberOrderSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAsterisk1Icon],svg[streamline-asterisk-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5v13m-5.5-10l11 7m-11 0l11-7"></svg:path>`,
})
export class StreamlineAsterisk1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAsterisk1SolidIcon],svg[streamline-asterisk-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 .09a1 1 0 0 1 1 1v4.088l3.463-2.204a1 1 0 0 1 1.074 1.688L8.863 7l3.674 2.338a1 1 0 0 1-1.074 1.688L8 8.822v4.087a1 1 0 1 1-2 0V8.822l-3.463 2.204a1 1 0 1 1-1.074-1.688L5.137 7L1.463 4.662a1 1 0 1 1 1.074-1.688L6 5.178V1.091a1 1 0 0 1 1-1Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAsterisk1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAttributionIcon],svg[streamline-attribution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 7a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0"></svg:path><svg:path d="M5.467 4.073a1.524 1.524 0 1 0 3.048 0a1.524 1.524 0 1 0-3.048 0"></svg:path><svg:path d="m8.301 8.85l-.325 2.602H6.024L5.699 8.85h-.65a.325.325 0 0 1-.326-.326v-.65a2.277 2.277 0 1 1 4.554 0v.65c0 .18-.146.326-.326.326z"></svg:path></svg:g>`,
})
export class StreamlineAttributionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAttributionSolidIcon],svg[streamline-attribution-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M8.5 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-.362 8.16l.307-2.451h.722c.2 0 .36-.162.36-.361v-.723a2.528 2.528 0 0 0-5.055 0v.723c0 .2.162.36.361.36h.722l.307 2.452a.5.5 0 0 0 .496.438h1.284a.5.5 0 0 0 .496-.438" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAttributionSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAutoFlashIcon],svg[streamline-auto-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.115.59v4.115h2.88l-4.526 6.583V7.173h-2.88L6.114.59Zm1.911 12.656l1.842-5.525a.69.69 0 0 1 .658-.475v0c.299 0 .564.191.658.475l1.842 5.525m-4.333-2h3.666"></svg:path>`,
})
export class StreamlineAutoFlashIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineAutoFlashSolidIcon],svg[streamline-auto-flash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.263.113a.5.5 0 0 1 .352.477v3.615h2.38a.5.5 0 0 1 .412.783L4.88 11.571a.5.5 0 0 1-.912-.283V7.673h-2.38a.5.5 0 0 1-.413-.783L5.703.307a.5.5 0 0 1 .56-.194m4.263 6.383c.621 0 1.173.398 1.37.988l1.17 3.51l.01.03l.662 1.985a.75.75 0 0 1-1.423.474l-.496-1.487H9.233l-.495 1.487a.75.75 0 0 1-1.424-.474l.661-1.982l.012-.036l1.17-3.507c.196-.59.748-.988 1.369-.988m0 1.622l.793 2.378H9.733z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAutoFlashSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBackCamera1Icon],svg[streamline-back-camera-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 3.5A.25.25 0 0 1 7 3m0 .5A.25.25 0 0 0 7 3"></svg:path><svg:path d="M10.5.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class StreamlineBackCamera1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBackCamera1SolidIcon],svg[streamline-back-camera-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.684.432C2.954.147 3.326 0 3.731 0h6.538c.406 0 .778.147 1.047.432c.267.283.395.663.395 1.068v11c0 .405-.128.785-.395 1.068a1.4 1.4 0 0 1-1.047.432H3.731c-.405 0-.778-.146-1.047-.432c-.267-.283-.395-.663-.395-1.068v-11c0-.405.128-.785.395-1.068M7 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBackCamera1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBackpackIcon],svg[streamline-backpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 3h4a2 2 0 0 1 2 2v8.5H3V5a2 2 0 0 1 2-2M3 13.5H.5v-4a1 1 0 0 1 1-1H3m8 0h1.5a1 1 0 0 1 1 1v4H11m-8-6h8m-4-1v2M5 3v-.5a2 2 0 1 1 4 0V3"></svg:path>`,
})
export class StreamlineBackpackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBackpackSolidIcon],svg[streamline-backpack-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.116 1.866a1.25 1.25 0 0 1 2.134.884v.202h-2.5V2.75c0-.332.132-.65.366-.884M4.25 3.101V2.75a2.75 2.75 0 1 1 5.5 0v.35c.246.102.473.254.664.45c.375.382.586.9.586 1.44v1.69H7.625v-.322a.625.625 0 1 0-1.25 0v.322H3V4.99c0-.54.21-1.058.586-1.44c.191-.196.418-.348.664-.45ZM6.375 7.93H3v6.022h8V7.93H7.625v.428a.625.625 0 1 1-1.25 0zM1.5 7.952h.25v6H.5a.5.5 0 0 1-.5-.5v-4a1.5 1.5 0 0 1 1.5-1.5m11 0h-.25v6h1.25a.5.5 0 0 0 .5-.5v-4a1.5 1.5 0 0 0-1.5-1.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBackpackSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBacteriaVirusCellsBiologyIcon],svg[streamline-bacteria-virus-cells-biology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.874 11.57c-4.079-2.981-.453-8.944 1.36-9.796c1.45-.681 2.719 0 3.172.426c1.713 1.609-.16 3.36.747 4.638c2.788 3.29-1.338 7.612-5.279 4.732"></svg:path><svg:path d="M6.282 9.257a1.229 1.229 0 1 0 2.458 0a1.229 1.229 0 1 0-2.458 0m.002-4.75a1.005 1.005 0 1 0 2.01 0a1.005 1.005 0 1 0-2.01 0M5.152 7.235a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5M7.53 1.486V.542M5.945 1.944l-.528-.782m-.626 1.943l-.8-.5m-.184 2.103l-.853-.404m.239 2.136l-.926-.182m.747 1.854l-.943.027m1.312 1.636l-.868.369m1.829.988l-.657.677m2.133.316l-.434.838m2.144.495v-.944m1.797.588l-.408-.851m1.958-.239l-.665-.67m1.718-1.35l-.923-.2m.75-2.042l-.881.34m-.043-1.995l-.88.34m1.113-2.029l-.938-.107m.665-1.813l-.874.356M9.41 1.045l-.531.78"></svg:path></svg:g>`,
})
export class StreamlineBacteriaVirusCellsBiologyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBacteriaVirusCellsBiologySolidIcon],svg[streamline-bacteria-virus-cells-biology-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.52.434a.75.75 0 0 0-1.36.632l.299.644c-.23.183-.461.408-.687.663l-.569-.53A.75.75 0 0 0 3.18 2.938l.696.65a10 10 0 0 0-.404.718l-.747-.319a.75.75 0 1 0-.589 1.38l.761.324l-.016.05q-.139.437-.228.893l-.803-.1a.75.75 0 0 0-.186 1.489l.866.107q.014.422.094.838l-.672.3a.75.75 0 0 0-.378.992c.17.378.613.547.991.378l.573-.256c.215.384.492.751.843 1.094l-.48.576a.75.75 0 0 0 1.152.96l.531-.637c.438.248.877.42 1.309.527v.348a.75.75 0 1 0 1.5-.002v-.239a4.1 4.1 0 0 0 1.566-.493l.617.664a.75.75 0 0 0 1.099-1.021l-.562-.605c.237-.288.431-.61.576-.952l.854.115a.75.75 0 0 0 .2-1.487l-.764-.102a3.7 3.7 0 0 0-.18-1.1l.586-.25a.75.75 0 0 0-.588-1.38l-.712.304q-.059-.075-.121-.15c-.13-.193-.174-.412-.157-.705q.011-.16.037-.323h.896a.75.75 0 0 0 0-1.5h-.668a3 3 0 0 0-.058-.718l.723-.482a.75.75 0 0 0-.832-1.248l-.611.408a2.7 2.7 0 0 0-.506-.419l.263-.413A.75.75 0 0 0 8.386.347l-.436.686a3.3 3.3 0 0 0-1.132.042L6.52.435Zm2.233 8.842a1.229 1.229 0 1 1-2.457 0a1.229 1.229 0 0 1 2.457 0M7.303 5.53a1.005 1.005 0 1 0 0-2.01a1.005 1.005 0 0 0 0 2.01M4.415 7.004a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBacteriaVirusCellsBiologySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagIcon],svg[streamline-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5c3.5 0 6-1.24 6-4c0-3-1.5-4.52-4.5-6.02l1.298-2.028a.65.65 0 0 0-.56-.95h-4.24a.65.65 0 0 0-.56 1L5.5 3.48C2.5 5 1 6.52 1 9.52c0 2.74 2.5 3.98 6 3.98"></svg:path><svg:path d="M5.5 3.5a1.803 1.803 0 0 0 3 0v0"></svg:path></svg:g>`,
})
export class StreamlineBagIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagDollarIcon],svg[streamline-bag-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5c3.5 0 6-1.238 6-3.994c0-2.995-1.5-4.992-4.5-6.49l1.18-1.518A.658.658 0 0 0 9.12.5H4.88a.66.66 0 0 0-.56.998L5.5 3.026C2.5 4.534 1 6.531 1 9.526C1 12.262 3.5 13.5 7 13.5"></svg:path><svg:path d="M8.383 6.806a1.08 1.08 0 0 0-1.022-.723h-.838a.967.967 0 0 0-.207 1.912l1.277.28a1.084 1.084 0 0 1-.232 2.142H6.64c-.472 0-.873-.302-1.022-.722M7 6.083V5m0 6.5v-1.083"></svg:path></svg:g>`,
})
export class StreamlineBagDollarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagDollarSolidIcon],svg[streamline-bag-dollar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.463 9.692C13.463 12.664 10.77 14 7 14S.537 12.664.537 9.713c0-3.231 1.616-4.868 4.847-6.505L4.24 1.077A.7.7 0 0 1 4.843 0H9.41a.7.7 0 0 1 .603 1.023L8.616 3.208c3.23 1.615 4.847 3.252 4.847 6.484M7.625 4.887a.625.625 0 1 0-1.25 0v.627a1.74 1.74 0 0 0-.298 3.44l1.473.322a.625.625 0 0 1-.133 1.236h-.834a.625.625 0 0 1-.59-.416a.625.625 0 1 0-1.178.416a1.88 1.88 0 0 0 1.56 1.239v.636a.625.625 0 1 0 1.25 0v-.636a1.876 1.876 0 0 0 .192-3.696l-1.473-.322a.49.49 0 0 1 .105-.97h.968a.62.62 0 0 1 .59.416a.625.625 0 0 0 1.178-.417a1.87 1.87 0 0 0-1.56-1.238z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBagDollarSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagPoundIcon],svg[streamline-bag-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.604 6.22s-1.312-.582-2.041.147c-.967.966.437 3.5-1.313 4.083c0 0 1.944.097 3.5 0m-.583-2.042H5.25"></svg:path><svg:path d="M7 13.5c3.5 0 6-1.238 6-3.994c0-2.995-1.5-4.992-4.5-6.49l1.18-1.518A.658.658 0 0 0 9.12.5H4.88a.66.66 0 0 0-.56.998L5.5 3.026C2.5 4.534 1 6.531 1 9.526C1 12.262 3.5 13.5 7 13.5"></svg:path></svg:g>`,
})
export class StreamlineBagPoundIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagPoundSolidIcon],svg[streamline-bag-pound-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.463 9.692C13.463 12.664 10.77 14 7 14S.537 12.664.537 9.713c0-3.231 1.616-4.868 4.847-6.505L4.24 1.077A.7.7 0 0 1 4.843 0H9.41a.7.7 0 0 1 .603 1.023L8.616 3.208c3.23 1.615 4.847 3.252 4.847 6.484M8.488 5.615c.152.053.326.13.438.223a.5.5 0 0 1-.64.77l-.004-.005l.005.004l.003.003l.007.006s-.003 0-.009-.004a1.8 1.8 0 0 0-.536-.142c-.316-.03-.615.03-.836.25c-.117.117-.194.312-.222.652a5 5 0 0 0-.01.536h1.483a.5.5 0 1 1 0 1h-1.47a3 3 0 0 1-.173.974l-.028.068H8.75a.5.5 0 0 1 0 1h-3.5a.5.5 0 0 1-.158-.974c.29-.097.421-.253.5-.455a2 2 0 0 0 .104-.613H5.25a.5.5 0 0 1 0-1h.433a6 6 0 0 1 .015-.619c.035-.425.144-.91.511-1.276c.509-.508 1.154-.585 1.64-.538c.245.024.466.08.64.14Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBagPoundSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagRupeeIcon],svg[streamline-bag-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.958 6h4.084M4.958 7.604h4.084M6.708 6c.389.097 1.167.438 1.167 1.458c0 1.75-2.334 1.75-2.334 1.75s1.167 1.021 2.917 1.459"></svg:path><svg:path d="M7 13.5c3.5 0 6-1.238 6-3.994c0-2.995-1.5-4.992-4.5-6.49l1.18-1.518A.658.658 0 0 0 9.12.5H4.88a.66.66 0 0 0-.56.998L5.5 3.026C2.5 4.534 1 6.531 1 9.526C1 12.262 3.5 13.5 7 13.5"></svg:path></svg:g>`,
})
export class StreamlineBagRupeeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagRupeeSolidIcon],svg[streamline-bag-rupee-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.463 9.692C13.463 12.664 10.77 14 7 14S.537 12.664.537 9.713c0-3.231 1.616-4.868 4.847-6.505L4.24 1.077A.7.7 0 0 1 4.843 0H9.41a.7.7 0 0 1 .603 1.023L8.616 3.208c3.23 1.615 4.847 3.252 4.847 6.484M4.957 6.5H6.64c.14.042.316.12.457.25a.8.8 0 0 1 .226.354H4.958a.5.5 0 1 0 0 1h2.207a1.5 1.5 0 0 1-.633.417a3.1 3.1 0 0 1-.977.187H5.54a.5.5 0 0 0-.328.877h.001l.001.002l.005.003l.013.012a4 4 0 0 0 .219.173a8.2 8.2 0 0 0 2.886 1.377a.5.5 0 1 0 .242-.97a7.2 7.2 0 0 1-1.75-.704l.054-.02c.338-.127.71-.329 1-.656c.175-.195.312-.428.397-.698h.762a.5.5 0 0 0 0-1h-.694A1.9 1.9 0 0 0 8.15 6.5h.892a.5.5 0 0 0 0-1H4.958a.5.5 0 0 0 0 1Zm.583 2.708l-.329.377z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBagRupeeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagSolidIcon],svg[streamline-bag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.462 9.692C13.462 12.664 10.77 14 7 14S.537 12.664.537 9.713c0-2.825 1.235-4.432 3.705-5.885a4.59 4.59 0 0 0 5.52-.004c2.467 1.438 3.7 3.045 3.7 5.868M8.743 3.008l1.27-1.985A.7.7 0 0 0 9.41 0H4.843a.7.7 0 0 0-.603 1.077l1.047 1.95c1.061.635 2.4.629 3.456-.019" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBagSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagSuitcase1Icon],svg[streamline-bag-suitcase-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 3.5h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1M5 .5h4a1 1 0 0 1 1 1v2H4v-2a1 1 0 0 1 1-1M3.5 7h7m-7 3h7"></svg:path>`,
})
export class StreamlineBagSuitcase1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagSuitcase1SolidIcon],svg[streamline-bag-suitcase-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.823 1.627A.25.25 0 0 1 5 1.553h4a.25.25 0 0 1 .25.25V3h-4.5V1.803a.25.25 0 0 1 .073-.176M3.25 3V1.803A1.75 1.75 0 0 1 5 .053h4a1.75 1.75 0 0 1 1.75 1.75V3h1.75A1.5 1.5 0 0 1 14 4.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5v-8A1.5 1.5 0 0 1 1.5 3zm-.375 3.578c0-.345.28-.625.625-.625h7a.625.625 0 1 1 0 1.25h-7a.625.625 0 0 1-.625-.625M3.5 9.797a.625.625 0 1 0 0 1.25h7a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBagSuitcase1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagSuitcase2Icon],svg[streamline-bag-suitcase-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 3.5h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-2.5 0v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2"></svg:path>`,
})
export class StreamlineBagSuitcase2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagSuitcase2SolidIcon],svg[streamline-bag-suitcase-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 .02a1.75 1.75 0 0 0-1.75 1.75V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 12.5 3h-1.75V1.77A1.75 1.75 0 0 0 9 .02zM9.25 3V1.77A.25.25 0 0 0 9 1.52H5a.25.25 0 0 0-.25.25V3z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBagSuitcase2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagYenIcon],svg[streamline-bag-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.25 6L7 8.333L8.75 6M7 8.333v2.625M5.25 8.333h3.5m-3.5 1.458h3.5"></svg:path><svg:path d="M7 13.5c3.5 0 6-1.238 6-3.994c0-2.995-1.5-4.992-4.5-6.49l1.18-1.518A.658.658 0 0 0 9.12.5H4.88a.66.66 0 0 0-.56.998L5.5 3.026C2.5 4.534 1 6.531 1 9.526C1 12.262 3.5 13.5 7 13.5"></svg:path></svg:g>`,
})
export class StreamlineBagYenIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBagYenSolidIcon],svg[streamline-bag-yen-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.463 9.692C13.463 12.664 10.77 14 7 14S.537 12.664.537 9.713c0-3.231 1.616-4.868 4.847-6.505L4.24 1.077A.7.7 0 0 1 4.843 0H9.41a.7.7 0 0 1 .603 1.023L8.616 3.208c3.23 1.615 4.847 3.252 4.847 6.484M4.95 5.6a.5.5 0 0 1 .7.1L7 7.5l1.35-1.8a.5.5 0 1 1 .8.6L8 7.833h.75a.5.5 0 0 1 0 1H7.5v.459h1.25a.5.5 0 1 1 0 1H7.5v.666a.5.5 0 1 1-1 0v-.666H5.25a.5.5 0 1 1 0-1H6.5v-.459H5.25a.5.5 0 1 1 0-1H6L4.85 6.3a.5.5 0 0 1 .1-.7" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBagYenSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBaggageIcon],svg[streamline-baggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 4h-9a2 2 0 0 0-2 2v5.5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M4 13.5V4m6 9.5V4M4.5 4a2.5 2.5 0 1 1 5 0"></svg:path>`,
})
export class StreamlineBaggageIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBaggageSolidIcon],svg[streamline-baggage-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 2.25A1.75 1.75 0 0 0 5.323 3.5h3.354A1.75 1.75 0 0 0 7 2.25m-2.298-.548a3.25 3.25 0 0 0-.91 1.777l.004.068v10.406q0 .024-.002.047h6.412l-.002-.047V3.547l.004-.068a3.25 3.25 0 0 0-5.506-1.777m6.75 1.798l.002.047v10.406q0 .024-.002.047h.048a2.5 2.5 0 0 0 2.5-2.5V6a2.5 2.5 0 0 0-2.5-2.5zM2.5 3.5h.048l-.002.047v10.406q0 .024.002.047H2.5A2.5 2.5 0 0 1 0 11.5V6a2.5 2.5 0 0 1 2.5-2.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBaggageSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBallIcon],svg[streamline-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0-13v13"></svg:path><svg:path d="M2.1 11.27a5 5 0 0 0 0-8.54m9.8 0a5 5 0 0 0 0 8.54"></svg:path></svg:g>`,
})
export class StreamlineBallIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBallSolidIcon],svg[streamline-ball-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.333 2.89A6.97 6.97 0 0 0 0 7a6.97 6.97 0 0 0 1.333 4.11A4.55 4.55 0 0 0 2.87 9.355A5.2 5.2 0 0 0 3.423 7a5.24 5.24 0 0 0-.553-2.355A4.55 4.55 0 0 0 1.333 2.89m.826-.947a5.8 5.8 0 0 1 1.826 2.138c.453.895.688 1.9.688 2.919a6.5 6.5 0 0 1-.688 2.92a5.8 5.8 0 0 1-1.826 2.137a6.98 6.98 0 0 0 4.216 1.915V.028c-1.63.144-3.1.847-4.216 1.915m5.466 12.03a6.98 6.98 0 0 0 4.216-1.916a5.8 5.8 0 0 1-1.826-2.138A6.5 6.5 0 0 1 9.327 7c0-1.02.235-2.024.688-2.92a5.8 5.8 0 0 1 1.825-2.137A6.98 6.98 0 0 0 7.626.028v13.944ZM14 7a6.97 6.97 0 0 1-1.333 4.11a4.55 4.55 0 0 1-1.537-1.755A5.2 5.2 0 0 1 10.577 7c0-.828.191-1.64.553-2.355a4.55 4.55 0 0 1 1.537-1.755A6.97 6.97 0 0 1 14 7" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBallSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBalloonIcon],svg[streamline-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.021 11.27c.205 2.682 2.541 2.356 3.553 1.706c1.712-1.1 2.846-1.385 4.864-1.226M9.04 4.404c0-1.975-1.8-3.779-4.02-3.779S1.002 2.429 1.002 4.404s1.8 4.152 4.018 4.152c2.22 0 4.019-2.178 4.019-4.152Z"></svg:path><svg:path d="m5.048 8.556l-1.25 1.512a.5.5 0 0 0 .386.819h1.693a.5.5 0 0 0 .39-.813z"></svg:path></svg:g>`,
})
export class StreamlineBalloonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBalloonSolidIcon],svg[streamline-balloon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.404 11.172h-.932a.5.5 0 0 1-.386-.818l1.14-1.38c-.95-.196-1.784-.73-2.414-1.415C1.014 6.69.503 5.535.503 4.404c0-2.27 2.043-4.279 4.518-4.279c2.476 0 4.519 2.009 4.519 4.279c0 1.131-.511 2.286-1.31 3.155c-.623.679-1.448 1.21-2.386 1.41l1.116 1.39a.5.5 0 0 1-.39.813h-.93l.006.051c.042.551.188.884.345 1.085a1 1 0 0 0 .582.362c.5.118 1.128-.053 1.506-.296c.85-.546 1.593-.914 2.4-1.117c.805-.203 1.632-.23 2.633-.151a.625.625 0 1 1-.097 1.246c-.926-.073-1.605-.04-2.232.117c-.627.158-1.242.451-2.028.957c-.59.378-1.561.674-2.467.461a2.25 2.25 0 0 1-1.28-.808c-.347-.442-.553-1.031-.609-1.761a.6.6 0 0 1 .006-.146Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBalloonSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBandageIcon],svg[streamline-bandage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.13 7.87l4.74-4.74m-1.74 7.74l4.74-4.74m-3.08 6.39a3.345 3.345 0 0 0 4.73-4.73L6.21 1.48a3.345 3.345 0 0 0-4.73 4.73z"></svg:path>`,
})
export class StreamlineBandageIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBandageSolidIcon],svg[streamline-bandage-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.11.045a4.064 4.064 0 0 0-2.874 6.938l.363.364a1 1 0 0 0 .076.085l4.893 4.893q.041.041.086.077l.363.362a4.064 4.064 0 1 0 5.747-5.747l-.363-.364a1 1 0 0 0-.076-.085L7.432 1.675a1 1 0 0 0-.086-.076l-.363-.363A4.06 4.06 0 0 0 4.11.046Zm-.235 6.769l2.939-2.939l3.31 3.311l-2.938 2.939z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBandageSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBankIcon],svg[streamline-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.91 5.5H1.09c-.56 0-.8-.61-.36-.9L6.64.73a.71.71 0 0 1 .72 0l5.91 3.87c.44.29.2.9-.36.9M13 11H1a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5M2 5.5V11m3.333-5.5V11m3.334-5.5V11M12 5.5V11"></svg:path>`,
})
export class StreamlineBankIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBankSolidIcon],svg[streamline-bank-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 .066a1.2 1.2 0 0 0-.634.18l-5.91 3.87H.455c-.42.277-.547.754-.385 1.161c.156.392.55.657 1.02.657h11.82c.47 0 .864-.265 1.02-.657c.162-.407.034-.884-.385-1.16l-.001-.001l-5.91-3.87A1.2 1.2 0 0 0 7 .066M0 11.877c0-.6.572-.889 1-.889h.055l-.003-.054V7.723a.5.5 0 0 1 .5-.5h1.664a.5.5 0 0 1 .5.5v3.211l-.003.054h1.958l-.003-.054V7.723a.5.5 0 0 1 .5-.5h1.664a.5.5 0 0 1 .5.5v3.211l-.003.054h1.958l-.003-.054V7.723a.5.5 0 0 1 .5-.5h1.664a.5.5 0 0 1 .5.5v3.211l-.003.054H13c.428 0 1 .289 1 .89v1.167c0 .6-.572.889-1 .889H1c-.428 0-1-.289-1-.89z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBankSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryAlert1Icon],svg[streamline-battery-alert-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 5.5A.5.5 0 0 0 13 5h-.5V3.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h.5a.5.5 0 0 0 .5-.5zm-7-1V7"></svg:path><svg:path d="M6.5 9.125a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineBatteryAlert1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryAlert1SolidIcon],svg[streamline-battery-alert-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 5.5A.5.5 0 0 0 13 5h-.5V3.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h.5a.5.5 0 0 0 .5-.5zm-7-1.625c.345 0 .625.28.625.625V7a.625.625 0 1 1-1.25 0V4.5c0-.345.28-.625.625-.625m.75 5.375a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBatteryAlert1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryChargingIcon],svg[streamline-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 5.5A.5.5 0 0 0 13 5h-.5V3.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h.5a.5.5 0 0 0 .5-.5z"></svg:path><svg:path d="m7.177 4.658l-1.658 2.24h2.168l-1.182 2.13"></svg:path></svg:g>`,
})
export class StreamlineBatteryChargingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryChargingSolidIcon],svg[streamline-battery-charging-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.354 5.146a.5.5 0 0 1 .146.354v3a.5.5 0 0 1-.5.5h-.5v1.5a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1V5h.5a.5.5 0 0 1 .354.146m-5.862.009a.625.625 0 1 0-1.005-.744L4.83 6.651a.625.625 0 0 0 .503.997h1.106L5.771 8.85a.625.625 0 1 0 1.093.607l1.182-2.13a.625.625 0 0 0-.546-.93h-.928z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBatteryChargingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryEmpty1Icon],svg[streamline-battery-empty-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 5.5A.5.5 0 0 0 13 5h-.5V3.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h.5a.5.5 0 0 0 .5-.5z"></svg:path>`,
})
export class StreamlineBatteryEmpty1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryEmpty1SolidIcon],svg[streamline-battery-empty-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12h10a1.5 1.5 0 0 0 1.5-1.5v-1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1v-1A1.5 1.5 0 0 0 11.5 2z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBatteryEmpty1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryEmpty2Icon],svg[streamline-battery-empty-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 2.5h9a1 1 0 0 1 1 1V5h.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-.5v1.5a1 1 0 0 1-1 1M.5.5l13 13m-13-10v7a1 1 0 0 0 1 1h7"></svg:path>`,
})
export class StreamlineBatteryEmpty2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryEmpty2SolidIcon],svg[streamline-battery-empty-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.219.219a.75.75 0 0 0 0 1.06l.178.179q.027.021.051.046l12.328 12.328a.75.75 0 0 0 1.005-1.112l-1.543-1.542a1 1 0 0 0 .262-.675v-1.5h.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-.5v-1.5a1 1 0 0 0-1-1H3.564L1.28.22a.75.75 0 0 0-1.061 0ZM8.68 11.503L.514 3.337a1 1 0 0 0-.014.166v7a1 1 0 0 0 1 1z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBatteryEmpty2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryFull1Icon],svg[streamline-battery-full-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.25 5v4m3-4v4m3-4v4m4.25-3.5A.5.5 0 0 0 13 5h-.5V3.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h.5a.5.5 0 0 0 .5-.5z"></svg:path>`,
})
export class StreamlineBatteryFull1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryFull1SolidIcon],svg[streamline-battery-full-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.44 2.44A1.5 1.5 0 0 1 1.5 2h10A1.5 1.5 0 0 1 13 3.5v1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1v1a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 0 10.5v-7c0-.398.158-.78.44-1.06M3.374 5a.625.625 0 1 0-1.25 0v4a.625.625 0 1 0 1.25 0zm3.5 0a.625.625 0 1 0-1.25 0v4a.625.625 0 1 0 1.25 0zm2.875-.625c.345 0 .625.28.625.625v4a.625.625 0 1 1-1.25 0V5c0-.345.28-.625.625-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBatteryFull1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryLow1Icon],svg[streamline-battery-low-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 5.5A.5.5 0 0 0 13 5h-.5V3.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h.5a.5.5 0 0 0 .5-.5zM3.25 5v4"></svg:path>`,
})
export class StreamlineBatteryLow1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryLow1SolidIcon],svg[streamline-battery-low-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.44 2.44A1.5 1.5 0 0 1 1.5 2h10A1.5 1.5 0 0 1 13 3.5v1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1v1a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 0 10.5v-7c0-.398.158-.78.44-1.06M3.374 5a.625.625 0 1 0-1.25 0v4a.625.625 0 1 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBatteryLow1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryMedium1Icon],svg[streamline-battery-medium-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 5.5A.5.5 0 0 0 13 5h-.5V3.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h.5a.5.5 0 0 0 .5-.5zM3.25 5v4m3-4v4"></svg:path>`,
})
export class StreamlineBatteryMedium1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryMedium1SolidIcon],svg[streamline-battery-medium-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.44 2.44A1.5 1.5 0 0 1 1.5 2h10A1.5 1.5 0 0 1 13 3.5v1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1v1a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 0 10.5v-7c0-.398.158-.78.44-1.06m2.31 1.935c.345 0 .625.28.625.625v4a.625.625 0 1 1-1.25 0V5c0-.345.28-.625.625-.625m3.5 0c.345 0 .625.28.625.625v4a.625.625 0 1 1-1.25 0V5c0-.345.28-.625.625-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBatteryMedium1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBeachIcon],svg[streamline-beach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 13.48H13a2 2 0 0 1-2-2a2 2 0 0 1-4 0a2 2 0 0 1-4 0a2 2 0 0 1-2 2H.5m9.5-4a5.49 5.49 0 0 0-8.48 0"></svg:path><svg:path d="M6.5 7.53c.06-2.26.75-4.32 2.25-5.06M5.76.57a2.58 2.58 0 0 1 3 1.9"></svg:path><svg:path d="M12.41 2.84a2.78 2.78 0 0 0-3.66-.37"></svg:path><svg:path d="M5.08 3.54a3 3 0 0 1 3.67-1.07a2.55 2.55 0 0 1 1.89 3"></svg:path></svg:g>`,
})
export class StreamlineBeachIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBeachSolidIcon],svg[streamline-beach-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.34 3.291a2.24 2.24 0 0 0-1.287.912a.75.75 0 1 1-1.24-.843a3.75 3.75 0 0 1 2.681-1.62a1.83 1.83 0 0 0-1.236-.193a.75.75 0 0 1-.29-1.471a3.33 3.33 0 0 1 3.52 1.588a3.53 3.53 0 0 1 3.825.908a.75.75 0 1 1-1.1 1.02a2.03 2.03 0 0 0-1.285-.641h-.006a3.3 3.3 0 0 1 .805 2.915a.75.75 0 1 1-1.468-.308a1.8 1.8 0 0 0-1.069-2.03c-.427.291-.786.769-1.059 1.43c-.272.658-.44 1.459-.504 2.332a5.6 5.6 0 0 1 1.58.678c.775.48 1.46 1.15 2.024 1.96a1.5 1.5 0 0 0-.908.643q-.13.206-.262.339a1.01 1.01 0 0 1-1.416 0a2 2 0 0 1-.224-.28c-.387-.576-1.056-.701-1.452-.701s-1.065.125-1.452.701a2 2 0 0 1-.224.28a1.01 1.01 0 0 1-1.416 0a2 2 0 0 1-.263-.339c-.37-.587-1.033-.71-1.412-.71c-.206 0-.49.036-.769.16c.576-.853 1.284-1.554 2.087-2.053a5.4 5.4 0 0 1 2.615-.831c.075-.978.269-1.926.61-2.752a5.6 5.6 0 0 1 .595-1.094M2.89 11.49a.75.75 0 0 0-1.382.007a1.5 1.5 0 0 1-.951.857a.75.75 0 1 0 .427 1.438a3 3 0 0 0 1.216-.707q.26.254.576.444c1.047.628 2.571.628 3.618 0a3 3 0 0 0 .575-.443q.26.253.575.443c1.047.628 2.571.628 3.618 0q.316-.19.576-.444l.067.063c.33.297.723.517 1.149.643a.75.75 0 0 0 .427-1.437a1.5 1.5 0 0 1-.951-.857a.75.75 0 0 0-1.382-.007a1.63 1.63 0 0 1-.658.753c-.572.343-1.503.343-2.074 0a1.62 1.62 0 0 1-.658-.753a.75.75 0 0 0-1.378 0a1.62 1.62 0 0 1-.658.753c-.572.343-1.503.343-2.075 0a1.62 1.62 0 0 1-.657-.753" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBeachSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBeanieIcon],svg[streamline-beanie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 10.5h-11a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1m-11 0v-3a5.5 5.5 0 1 1 11 0v3M7 2V.5"></svg:path>`,
})
export class StreamlineBeanieIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBeanieSolidIcon],svg[streamline-beanie-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a1 1 0 0 0-2 0v.566a6 6 0 0 0-5 5.916v2.02h12v-2.02a6 6 0 0 0-5-5.916zm-6.923 9.751h11.846c.595 0 1.077.482 1.077 1.077v1.077c0 .595-.482 1.077-1.077 1.077H1.077A1.077 1.077 0 0 1 0 12.905v-1.077c0-.595.482-1.077 1.077-1.077" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBeanieSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBeerMugIcon],svg[streamline-beer-mug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5.5h8a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-10a1 1 0 0 1 1-1m9 2.5h2a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-2M3.75 4v5.5M7.25 4v5.5"></svg:path>`,
})
export class StreamlineBeerMugIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBeerMugSolidIcon],svg[streamline-beer-mug-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.414.45A1.42 1.42 0 0 1 1.446 0h7.566c.393 0 .764.165 1.032.45c.268.282.414.66.414 1.05v.75h1.777A1.75 1.75 0 0 1 13.986 4v4.5a1.75 1.75 0 0 1-1.75 1.75h-1.777v1.25a2.56 2.56 0 0 1-.69 1.758A2.34 2.34 0 0 1 8.066 14H2.392c-.644 0-1.255-.27-1.701-.742A2.56 2.56 0 0 1 0 11.5v-10C0 1.11.146.732.414.45m10.044 8.3h1.777a.25.25 0 0 0 .25-.25V4a.25.25 0 0 0-.25-.25h-1.777zm-7.28-5.375c.345 0 .624.28.624.625v5.5a.625.625 0 1 1-1.25 0V4c0-.345.28-.625.625-.625ZM7.905 4a.625.625 0 1 0-1.25 0v5.5a.625.625 0 1 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBeerMugSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBeerPitchIcon],svg[streamline-beer-pitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 11h2a1 1 0 0 0 1-1V7.5a1 1 0 0 0-1-1h-1.841M2 6.879v4.62a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6.874"></svg:path><svg:path d="M2 6.872a2.25 2.25 0 1 1 1.526-4.235a2.5 2.5 0 0 1 4.948 0A2.25 2.25 0 1 1 9.25 7H5v2a1.5 1.5 0 1 1-3 0z"></svg:path></svg:g>`,
})
export class StreamlineBeerPitchIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBeerPitchSolidIcon],svg[streamline-beer-pitch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.429.071a3.19 3.19 0 0 0-2.943 1.96a2.944 2.944 0 0 0-1.71 5.48V11.5a2.5 2.5 0 0 0 2.5 2.5h3.802a2.5 2.5 0 0 0 2.48-2.188h1.598a1.75 1.75 0 0 0 1.75-1.75v-2.39a1.75 1.75 0 0 0-1.527-1.735A2.944 2.944 0 0 0 9.371 2.03A3.19 3.19 0 0 0 6.43.071ZM4.758 3.013a1.689 1.689 0 0 1 3.341 0A.75.75 0 0 0 9.1 3.61a1.444 1.444 0 1 1 .498 2.8H5.953a.75.75 0 0 0-.75.75v1.701a.963.963 0 1 1-1.926 0V7.036a.75.75 0 0 0-.5-.708a1.445 1.445 0 1 1 .98-2.718a.75.75 0 0 0 1.001-.597m5.82 4.41h1.578a.25.25 0 0 1 .25.25v2.389a.25.25 0 0 1-.25.25h-1.578v-2.89Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBeerPitchSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBicycleBikeIcon],svg[streamline-bicycle-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 11.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m8.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m-2-.75l-3-5"></svg:path><svg:path d="M4.953 7.088L2.75 11.25L7 10.5l2.85-3.326m1.4 4.076L8.977 4.628h2.64M3 5.5h2.5"></svg:path></svg:g>`,
})
export class StreamlineBicycleBikeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBicycleBikeSolidIcon],svg[streamline-bicycle-bike-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.985 4.146a.63.63 0 0 1 .515-.271H11a.625.625 0 1 1 0 1.25H9.41l1.166 3.031a2.876 2.876 0 1 1-2.2 1.669l-.885 1.062a.62.62 0 0 1-.429.235l-1.2.15A2.875 2.875 0 1 1 3.694 8.21l.547-1.094l-.595-.991H3a.625.625 0 1 1 0-1.25h2.5a.625.625 0 1 1 0 1.25h-.396l.38.635l.009.013l1.59 2.65L8.89 7.257l-.973-2.532a.63.63 0 0 1 .068-.578Zm2.432 7.078l-.539-1.4a1.625 1.625 0 1 0 1.167-.448l.538 1.4a.625.625 0 0 1-1.166.448M9.404 8.591l.005.014l-.038.026zm-4.4-.204l-.44.88l-.483.968l1.074-.134l.815-.102l-.967-1.612Zm-.438 3.047l-1.488.186a.625.625 0 0 1-.637-.9l.67-1.341A1.623 1.623 0 0 0 1.375 11a1.625 1.625 0 0 0 3.19.434Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBicycleBikeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBill1Icon],svg[streamline-bill-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1"></svg:path><svg:path d="M7 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-5.5 5h11m-10 2.5h9M2.775 4.75a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m8.45.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineBill1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBill1SolidIcon],svg[streamline-bill-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0C.699 0 0 .62 0 1.445v5.671c0 .824.699 1.445 1.5 1.445h11c.802 0 1.5-.62 1.5-1.445v-5.67C14 .62 13.302 0 12.5 0zM7 2.477a1.803 1.803 0 1 0 0 3.607a1.803 1.803 0 0 0 0-3.607M3.529 4.502a.752.752 0 1 1-1.504 0a.752.752 0 0 1 1.504 0m7.694.752a.752.752 0 1 0 0-1.504a.752.752 0 0 0 0 1.504M1.086 10.56a.75.75 0 0 1 .75-.75h10.329a.75.75 0 1 1 0 1.5H1.835a.75.75 0 0 1-.75-.75Zm1.689 1.906a.75.75 0 0 0 0 1.5h8.45a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBill1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBill2Icon],svg[streamline-bill-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 2.5h-11a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1"></svg:path><svg:path d="M7 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4M2.775 7.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m8.45.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineBill2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBill2SolidIcon],svg[streamline-bill-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 3.675c0-.824.696-1.45 1.5-1.45h11c.804 0 1.5.626 1.5 1.45v6.65c0 .824-.696 1.45-1.5 1.45h-11c-.804 0-1.5-.626-1.5-1.45zM4.9 7a2.1 2.1 0 1 1 4.2 0a2.1 2.1 0 0 1-4.2 0M3.004 7A.752.752 0 1 1 1.5 7a.752.752 0 0 1 1.504 0m8.744.752a.752.752 0 1 0 0-1.504a.752.752 0 0 0 0 1.504" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBill2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBill4Icon],svg[streamline-bill-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 1.75H1.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1H10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1"></svg:path><svg:path d="M3.5 12.25h9a1 1 0 0 0 1-1v-5M2.525 5.857a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m6.45.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M5.75 7a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"></svg:path></svg:g>`,
})
export class StreamlineBill4Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBill4SolidIcon],svg[streamline-bill-4-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 2.65c0-.815.709-1.4 1.485-1.4h8.376c.777 0 1.486.585 1.486 1.4v5.396c0 .815-.71 1.4-1.486 1.4H1.485C.71 9.445 0 8.86 0 8.045zm4.144 2.698a1.53 1.53 0 1 1 3.059 0a1.53 1.53 0 0 1-3.06 0ZM1.346 5.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M9.25 4.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m4.716.848a.75.75 0 0 0-1.5 0v5a.25.25 0 0 1-.25.25h-9a.75.75 0 1 0 0 1.5h9a1.75 1.75 0 0 0 1.75-1.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBill4SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBillCashlessIcon],svg[streamline-bill-cashless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 2.5h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1m-11-8v7a1 1 0 0 0 1 1H9"></svg:path><svg:path d="M5.586 5.586a2 2 0 1 1 2.828 2.828M5.022 7.296a2 2 0 0 0 1.745 1.69M13.5 13.5L.5.5"></svg:path></svg:g>`,
})
export class StreamlineBillCashlessIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBillCashlessSolidIcon],svg[streamline-bill-cashless-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.219 1.28A.75.75 0 0 1 1.279.219l2.007 2.006H12.5c.804 0 1.5.626 1.5 1.45v6.65c0 .718-.528 1.285-1.195 1.42l.976.975a.75.75 0 1 1-1.06 1.061L.218 1.28Zm8.996 6.875a2.5 2.5 0 0 0-3.373-3.373zM.174 2.995a1.4 1.4 0 0 0-.174.68v6.65c0 .824.696 1.45 1.5 1.45h7.453z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBillCashlessSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBinanceCircleIcon],svg[streamline-binance-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 7.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m-3.2.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m6.4.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M4.5 5L7 3l2.5 2m-5 4L7 11l2.5-2"></svg:path></svg:g>`,
})
export class StreamlineBinanceCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBinanceCircleSolidIcon],svg[streamline-binance-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M9.89 3.963l-2.5-2a.625.625 0 0 0-.78 0l-2.5 2a.625.625 0 0 0 .78.976L7 3.252l2.11 1.687a.625.625 0 1 0 .78-.976m-5 5.097a.625.625 0 1 0-.78.976l2.5 2a.625.625 0 0 0 .78 0l2.5-2a.625.625 0 1 0-.78-.976L7 10.748zM7.75 7a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3.95.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M10.95 7a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBinanceCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBitcoinIcon],svg[streamline-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.79 6.45A2.23 2.23 0 0 0 7.83 2H4.39a.81.81 0 0 0-.81.81v8.09a.81.81 0 0 0 .81.81h3.4a2.63 2.63 0 0 0 0-5.26M5.13 2V.5M7.63 2V.5m-2.5 13v-1.79m2.5 1.79v-1.79m.2-5.26H3.58"></svg:path>`,
})
export class StreamlineBitcoinIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBitcoinSolidIcon],svg[streamline-bitcoin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.744 1.029a1 1 0 1 0-2 0v.604a1.74 1.74 0 0 0-.886 1.518v7.432a1.74 1.74 0 0 0 .886 1.518v.87a1 1 0 1 0 2 0v-.644h1.019v.644a1 1 0 1 0 2 0v-.805A3.416 3.416 0 0 0 9.99 6.353a3.05 3.05 0 0 0-1.227-4.725v-.6a1 1 0 1 0-2 0v.379h-1.02zm-.886 6.466v2.832h2.868a1.416 1.416 0 0 0 .02-2.832H4.859Zm2.832-2H4.858V3.407h2.86a1.049 1.049 0 0 1-.028 2.088" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBitcoinSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBlankCalendarIcon],svg[streamline-blank-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2M.5 5.5h13m-10-5v3m7-3v3M3.5 2h5"></svg:path>`,
})
export class StreamlineBlankCalendarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBlankCalendarSolidIcon],svg[streamline-blank-calendar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 1a1 1 0 0 0-2 0v1h-1A1.5 1.5 0 0 0 0 3.5V5h14V3.5A1.5 1.5 0 0 0 12.5 2h-1V1a1 1 0 1 0-2 0v1h-5zM14 6.25H0v6.25A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBlankCalendarSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBlankNotepadIcon],svg[streamline-blank-notepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 3.5v-3m3 3v-3m3 3v-3M12.5 2h-11a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"></svg:path>`,
})
export class StreamlineBlankNotepadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBlankNotepadSolidIcon],svg[streamline-blank-notepad-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 1a1 1 0 0 0-2 0v1h-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2h-1V1a1 1 0 1 0-2 0v1H8V1a1 1 0 0 0-2 0v1H4.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBlankNotepadSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBlockBellNotificationIcon],svg[streamline-block-bell-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5 13.5h2M4.48 2.3A4 4 0 0 0 2 6v3.5A1.5 1.5 0 0 1 .5 11h11A1.5 1.5 0 0 1 10 9.5"></svg:path><svg:path d="M10.25 7a3.25 3.25 0 1 1 0-6.5a3.25 3.25 0 0 1 0 6.5m2.3-.95l-4.6-4.6"></svg:path></svg:g>`,
})
export class StreamlineBlockBellNotificationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBlockBellNotificationSolidIcon],svg[streamline-block-bell-notification-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3.748c0 1.01-.4 1.928-1.05 2.602a1 1 0 0 1-.097.097a3.748 3.748 0 0 1-5.3-5.3a1 1 0 0 1 .097-.098A3.748 3.748 0 0 1 14 3.748M10.252 1.5a2.248 2.248 0 0 1 2.03 3.217l-3-2.998a2.24 2.24 0 0 1 .97-.219m-2.03 1.28l2.998 2.998A2.248 2.248 0 0 1 8.222 2.78m2.03 5.967q.16 0 .32-.01v.838c0 .234.1.466.289.642c.219.204.391.283.639.283a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1c.248 0 .42-.079.64-.283a.88.88 0 0 0 .288-.642V5.8c0-1.152.49-2.25 1.351-3.052a4.7 4.7 0 0 1 3.005-1.243a4.998 4.998 0 0 0 4.467 7.242ZM4.25 13.25A.75.75 0 0 1 5 12.5h2A.75.75 0 0 1 7 14H5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBlockBellNotificationSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBloodBagDonationIcon],svg[streamline-blood-bag-donation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 7.838V3.5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v4.338a3 3 0 0 1-2.051 2.846L9.5 11v.5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V11l-.949-.316A3 3 0 0 1 1.5 7.838"></svg:path><svg:path d="M1.5 8.039c.667-.444 2.7-1.066 5.5 0c2.8 1.065 4.833.222 5.5-.333M8.118 4.661c0-.63-1.118-2.19-1.118-2.19S5.88 4.032 5.88 4.662c0 .31.118.606.328.825s.494.341.79.341a1.1 1.1 0 0 0 .792-.341a1.2 1.2 0 0 0 .327-.825v0ZM7 12.5v1"></svg:path></svg:g>`,
})
export class StreamlineBloodBagDonationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBloodBagDonationSolidIcon],svg[streamline-blood-bag-donation-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.433 7.806v-.13c.944-.301 2.546-.447 4.568.323c2.001.762 3.595.509 4.545.11a2.16 2.16 0 0 1-1.458 1.75l-.912.303a.72.72 0 0 0-.493.684v.481a.24.24 0 0 1-.24.24H5.556a.24.24 0 0 1-.24-.24v-.48a.72.72 0 0 0-.493-.685l-.912-.304a2.16 2.16 0 0 1-1.48-2.052Zm3.846 5.204h-.721a1.683 1.683 0 0 1-1.683-1.644l-.42-.14A3.61 3.61 0 0 1 .99 7.806V3.635A3.606 3.606 0 0 1 4.596.029h4.808a3.606 3.606 0 0 1 3.606 3.606v4.17c0 1.553-.993 2.93-2.466 3.421l-.42.14a1.683 1.683 0 0 1-1.682 1.644h-.72v.24a.721.721 0 1 1-1.443 0zm.723-10.177l.407-.291a.5.5 0 0 0-.813 0zm0 0l-.406-.291l-.001.001l-.003.004l-.008.011l-.03.043a11 11 0 0 0-.419.648a6 6 0 0 0-.327.617c-.085.19-.18.443-.18.68c0 .368.14.724.395.99c.256.267.608.421.98.421c.37 0 .722-.154.978-.42c.256-.267.396-.623.396-.991c0-.237-.096-.49-.18-.68a6 6 0 0 0-.328-.617A11 11 0 0 0 7.45 2.6l-.03-.043l-.008-.011l-.002-.004h-.001v-.001l-.407.291Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBloodBagDonationSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBloodDonateDropIcon],svg[streamline-blood-donate-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.021 12.75l-1.914-1.914a2 2 0 0 1-.586-1.414V5.25a1 1 0 0 1 1-1v0a1 1 0 0 1 1 1v3m8.458 4.5l1.914-1.914a2 2 0 0 0 .585-1.414V5.25a1 1 0 0 0-1-1v0a1 1 0 0 0-1 1v3"></svg:path><svg:path d="m3.436 10.078l-.707-.707a1 1 0 0 1 1.414-1.414L5.436 9.25a2 2 0 0 1 .585 1.414v2.086m4.543-2.672l.707-.707a1 1 0 0 0-1.414-1.414L8.564 9.25a2 2 0 0 0-.585 1.414v2.086m1.042-7.584c0-1.127-2-3.916-2-3.916s-2 2.79-2 3.916c0 .552.211 1.083.586 1.474c.375.39.884.61 1.414.61s1.04-.22 1.415-.61a2.13 2.13 0 0 0 .585-1.474"></svg:path></svg:g>`,
})
export class StreamlineBloodDonateDropIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBloodDonateDropSolidIcon],svg[streamline-blood-donate-drop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7 .464l.377-.27a.464.464 0 0 0-.754 0zm0 0l-.377-.27l-.002.002l-.005.006L6.6.226a16 16 0 0 0-.276.4a24 24 0 0 0-.652 1.027a12 12 0 0 0-.664 1.25c-.176.395-.33.831-.33 1.198c0 .631.24 1.24.673 1.691s1.027.71 1.649.71s1.215-.258 1.649-.71s.673-1.06.673-1.69c0-.368-.154-.804-.33-1.2a12 12 0 0 0-.664-1.25A23 23 0 0 0 7.4.227L7.384.202L7.379.196L7.378.195L7 .465ZM0 5.112v4.726a2 2 0 0 0 .586 1.414l2.191 2.191V14H6.11v-2.874a2.22 2.22 0 0 0-.65-1.57L4.022 8.118l-.004-.004a.8.8 0 0 0-1.076 1.182l.92.92a.5.5 0 1 1-.707.707l-.92-.92a1.8 1.8 0 0 1-.014-2.53V5.111a1.11 1.11 0 1 0-2.222 0Zm14 4.726V5.112a1.11 1.11 0 0 0-2.222 0v2.361a1.8 1.8 0 0 1-.014 2.532l-.92.919a.5.5 0 0 1-.707-.707l.92-.92A.8.8 0 0 0 9.98 8.115l-.004.004L8.54 9.555a2.22 2.22 0 0 0-.65 1.571V14h3.332v-.556l2.191-2.192A2 2 0 0 0 14 9.838" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBloodDonateDropSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBloodDropDonationIcon],svg[streamline-blood-drop-donation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.092 8.954C2.092 4.308 7 .6 7 .6s4.908 3.708 4.908 8.354c0 3.002-2.486 4.446-4.908 4.446s-4.908-1.444-4.908-4.446"></svg:path><svg:path d="M6.379 6.014a.38.38 0 0 0-.382.382v1.076H4.92a.38.38 0 0 0-.382.382v1.242c0 .212.171.383.382.383h1.076v1.075c0 .211.17.382.382.382H7.62a.38.38 0 0 0 .383-.382V9.479h1.075a.38.38 0 0 0 .382-.383V7.854a.38.38 0 0 0-.382-.382H8.004V6.396a.38.38 0 0 0-.383-.382H6.38Z"></svg:path></svg:g>`,
})
export class StreamlineBloodDropDonationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBloodDropDonationSolidIcon],svg[streamline-blood-drop-donation-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.92.592L6.624.2h-.002l-.004.004l-.012.01a6 6 0 0 0-.21.167a17.4 17.4 0 0 0-2.315 2.338C2.826 4.262 1.514 6.462 1.514 8.956c0 1.655.692 2.91 1.733 3.738c1.028.819 2.37 1.206 3.673 1.206c1.304 0 2.646-.387 3.674-1.206c1.04-.829 1.733-2.083 1.733-3.738c0-2.494-1.312-4.694-2.567-6.237A17.4 17.4 0 0 0 7.445.38l-.21-.168l-.012-.01L7.219.2h-.002a.49.49 0 0 0-.593 0l.037.049zM5.906 5.449c0-.214.173-.387.387-.387h1.256c.214 0 .387.173.387.387v1.537h1.537c.214 0 .387.174.387.387V8.63a.387.387 0 0 1-.387.386H7.936v1.538a.387.387 0 0 1-.387.387H6.292a.387.387 0 0 1-.386-.387V9.016H4.368a.387.387 0 0 1-.386-.386V7.373c0-.213.173-.387.386-.387h1.538V5.45Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBloodDropDonationSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBluetoothIcon],svg[streamline-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.25 9.5l7.5-5.5l-4-3.5v13l4-3.5l-7.5-5.5"></svg:path>`,
})
export class StreamlineBluetoothIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBluetoothDisabledIcon],svg[streamline-bluetooth-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75L10.5 4L6.5.5v5.937M.5.5l13 13M3 9.5l1.875-1.375m3.895 3.389L6.5 13.5V9.31"></svg:path>`,
})
export class StreamlineBluetoothDisabledIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBluetoothDisabledSolidIcon],svg[streamline-bluetooth-disabled-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.219.219a.75.75 0 0 0 0 1.06l.178.179q.027.021.051.046l12.328 12.328a.75.75 0 0 0 1.005-1.112L11.05 9.99a.75.75 0 0 0-.292-.754l-1.731-1.27L7.91 6.851l2.847-2.088a.75.75 0 0 0 .05-1.17L7.02.28a.75.75 0 0 0-1.244.564v3.873L1.28.219a.75.75 0 0 0-1.061 0m8.869 11.692l-1.063-1.063l-.749.655v-1.404l-1.5-1.5v4.557a.75.75 0 0 0 1.244.564zM5.67 8.494L4.597 7.42l-1.83 1.341a.75.75 0 1 0 .888 1.21zm1.605-3.038v-2.96l1.84 1.61z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBluetoothDisabledSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBluetoothSearchingIcon],svg[streamline-bluetooth-searching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 9.5L8.5 4L4.5.5v13l4-3.5L1 4.5m11.033-1c1.9 1.9 1.9 5 0 6.9M10.5 5.305c.859.859.859 2.33 0 3.19"></svg:path>`,
})
export class StreamlineBluetoothSearchingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBluetoothSearchingSolidIcon],svg[streamline-bluetooth-searching-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 .132a.75.75 0 0 1 .803.118L8.61 3.58a.75.75 0 0 1-.05 1.17L5.49 7l3.07 2.25a.75.75 0 0 1 .05 1.17l-3.806 3.33a.75.75 0 0 1-1.244-.565V8.417L1.422 9.984a.75.75 0 1 1-.887-1.21L2.955 7L.535 5.226a.75.75 0 0 1 .887-1.21L3.56 5.583V.815A.75.75 0 0 1 4 .132m1.06 8.412l1.858 1.362l-1.859 1.627zm0-3.087v-2.99l1.858 1.627zm6.075 4.248a3.9 3.9 0 0 0 0-5.505a.75.75 0 0 1 1.06-1.06a5.4 5.4 0 0 1 0 7.626a.75.75 0 1 1-1.06-1.06ZM9.489 5.918c.524.524.524 1.45 0 1.974a.75.75 0 1 0 1.06 1.06c1.11-1.11 1.11-2.985 0-4.095a.75.75 0 0 0-1.06 1.06Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBluetoothSearchingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBluetoothSolidIcon],svg[streamline-bluetooth-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.272.142a1 1 0 0 1 1.042.083l4.404 3.213A1 1 0 0 1 11.65 5.1L8.542 7l3.108 1.9a1 1 0 0 1 .068 1.662l-4.404 3.213a1 1 0 0 1-1.59-.808V8.722l-2.33 1.426A1 1 0 0 1 2.35 8.442L4.708 7L2.35 5.558a1 1 0 1 1 1.043-1.706l2.332 1.426V1.033a1 1 0 0 1 .547-.891m1.453 8.703l1.606.982L7.725 11zm0-3.69V3.001L9.33 4.173z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBluetoothSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBombIcon],svg[streamline-bomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 13.5a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M13.5.5h-.671a3 3 0 0 0-2.814 1.959L10 2.5m-6.5 5a3 3 0 0 1 3-3"></svg:path></svg:g>`,
})
export class StreamlineBombIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBombSolidIcon],svg[streamline-bomb-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.543 2.41a6.5 6.5 0 1 1-1.276-.794A3.75 3.75 0 0 1 12.35 0h.899a.75.75 0 0 1 0 1.5h-.9a2.25 2.25 0 0 0-1.807.91ZM6.5 5.125A2.375 2.375 0 0 0 4.125 7.5a.625.625 0 1 1-1.25 0A3.625 3.625 0 0 1 6.5 3.875a.625.625 0 1 1 0 1.25" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBombSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBoneIcon],svg[streamline-bone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 2.5a2 2 0 1 0-4 0a2 2 0 0 0 .59 1.41L3.91 8.09A2 2 0 0 0 2.5 7.5a2 2 0 1 0 0 4a2 2 0 0 0 4 0a2 2 0 0 0-.59-1.41l4.18-4.18a2 2 0 0 0 1.41.59a2 2 0 0 0 0-4"></svg:path>`,
})
export class StreamlineBoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBoneSolidIcon],svg[streamline-bone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.846 2.154a2.154 2.154 0 0 0-4.308 0c.003.57.231 1.116.636 1.518L3.672 8.174a2.15 2.15 0 0 0-1.518-.636a2.154 2.154 0 1 0 0 4.308a2.154 2.154 0 0 0 4.308 0a2.15 2.15 0 0 0-.636-1.518l4.502-4.502c.402.405.948.633 1.518.636a2.154 2.154 0 0 0 0-4.308"></svg:path>`,
})
export class StreamlineBoneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBookReadingIcon],svg[streamline-book-reading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5V8.25A1.25 1.25 0 0 1 8.25 7v0A1.25 1.25 0 0 1 9.5 8.25V11h2a2 2 0 0 1 2 2v.5M6.257 3.095A8.24 8.24 0 0 0 1.51.51a.886.886 0 0 0-1.01.877v7.13a.886.886 0 0 0 .788.886a8.2 8.2 0 0 1 3.9 1.627m1.07-5.172V3.095m4.968 6.307a.886.886 0 0 0 .789-.886v-7.13a.886.886 0 0 0-1.01-.877a8.24 8.24 0 0 0-4.748 2.586"></svg:path>`,
})
export class StreamlineBookReadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBookReadingSolidIcon],svg[streamline-book-reading-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.998.055A1.4 1.4 0 0 1 1.58.014l.012.001a8.74 8.74 0 0 1 4.04 1.808v9.832c-1.46-1.016-2.781-1.486-4.414-1.758A1.386 1.386 0 0 1 0 8.515v-7.13A1.39 1.39 0 0 1 .998.056ZM6.883 5.89V1.823a8.74 8.74 0 0 1 4.04-1.808l.012-.001a1.385 1.385 0 0 1 1.58 1.372v7.129a1.39 1.39 0 0 1-.521 1.09a3.3 3.3 0 0 0-.6-.056h-.75v-1.5a2.5 2.5 0 0 0-3.761-2.16Zm.01 7.409v-5.25a1.25 1.25 0 0 1 2.5 0v2.75h2a2 2 0 0 1 2 2v.5a.5.5 0 0 1-.5.5h-5.5a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBookReadingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBookmarkIcon],svg[streamline-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11 13.5l-4-4l-4 4v-12a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"></svg:path>`,
})
export class StreamlineBookmarkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBookmarkSolidIcon],svg[streamline-bookmark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0a1.5 1.5 0 0 0-1.5 1.5v12a.5.5 0 0 0 .854.354L7 10.207l3.646 3.647a.5.5 0 0 0 .854-.354v-12A1.5 1.5 0 0 0 10 0z"></svg:path>`,
})
export class StreamlineBookmarkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBowIcon],svg[streamline-bow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 2.82s5.107-.928 8.357 2.322s2.322 8.357 2.322 8.357m-8.822-1.856L13.5.5m-2.786 0H13.5v2.786M2.357 2.698V13.5m8.944-1.857H.5"></svg:path>`,
})
export class StreamlineBowIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBowSolidIcon],svg[streamline-bow-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.464.026a.75.75 0 0 0-.53 1.28l.862.863l-1.653 1.653A9.7 9.7 0 0 0 2.827 1.5a9.8 9.8 0 0 0-2.166.242a.75.75 0 0 0 .332 1.462q.41-.093.834-.144v7.556h-1a.75.75 0 0 0-.693.463v.002a.74.74 0 0 0-.056.312a.75.75 0 0 0 .235.52l1.824 1.824a.75.75 0 0 0 1.297-.513v-.974h7.583a8 8 0 0 1-.144.834a.75.75 0 1 0 1.463.332a9.8 9.8 0 0 0 .241-2.166a9.7 9.7 0 0 0-2.37-6.371l1.65-1.65l.863.863a.75.75 0 0 0 1.28-.53V.776a.747.747 0 0 0-.75-.75zM8.08 4.886a8.2 8.2 0 0 0-4.752-1.871v6.623zm1.065 1.057a8.2 8.2 0 0 1 1.918 4.807H4.337z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBowSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBowTieIcon],svg[streamline-bow-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="m6.5 8.94l-4.75 1.23a1 1 0 0 1-1.25-1V4.79a1 1 0 0 1 1.25-1L6.5 5.06m1 3.88l4.75 1.23a1 1 0 0 0 1.25-1V4.79a1 1 0 0 0-1.25-1L7.5 5.06"></svg:path></svg:g>`,
})
export class StreamlineBowTieIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBowTieSolidIcon],svg[streamline-bow-tie-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.95 9.28l3.703.89c.162.039.332.042.495.01c.164-.033.317-.1.448-.197a1 1 0 0 0 .305-.362A.94.94 0 0 0 14 9.17V4.79a.94.94 0 0 0-.098-.45a1 1 0 0 0-.305-.363a1.1 1.1 0 0 0-.447-.197a1.2 1.2 0 0 0-.496.01l-3.713.922A3 3 0 0 1 10 7c0 .912-.407 1.73-1.05 2.28M7 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-5.653 1.19L5.05 9.3A3 3 0 0 1 4 7.02a2.99 2.99 0 0 1 1.06-2.288L1.347 3.81a1.2 1.2 0 0 0-.495-.01c-.164.033-.317.1-.448.197a1 1 0 0 0-.305.362a.94.94 0 0 0-.098.451v4.38a.94.94 0 0 0 .098.45c.07.142.174.266.305.363c.13.097.284.164.448.197c.163.032.333.029.495-.01" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBowTieSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBoxSignIcon],svg[streamline-box-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-9 10h7"></svg:path><svg:path d="M5.5 8.5v-5l-2 2m5 3v-5l2 2"></svg:path></svg:g>`,
})
export class StreamlineBoxSignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBoxSignSolidIcon],svg[streamline-box-sign-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5zm3.5 8.375a.625.625 0 1 0 0 1.25h7a.625.625 0 1 0 0-1.25zm2.26-6.944a.63.63 0 0 1 .365.569v4.334a.625.625 0 0 1-1.25 0V4.87l-.966.837a.625.625 0 0 1-.818-.945l2-1.733a.63.63 0 0 1 .669-.097Zm3.15.097a.625.625 0 0 0-1.035.472v4.334a.625.625 0 0 0 1.25 0V4.87l.966.837a.625.625 0 0 0 .818-.945l-2-1.733Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBoxSignSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBracesCircleIcon],svg[streamline-braces-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 4.5c-.39 0-1.083.304-1.133 1.148c-.03.497-.198 1.017-.643 1.24L3.5 7l.224.112c.445.223.613.743.643 1.24c.05.844.743 1.148 1.133 1.148m3-5c.39 0 1.083.304 1.133 1.148c.03.497.198 1.017.643 1.24L10.5 7l-.224.112c-.445.223-.613.743-.643 1.24A1.174 1.174 0 0 1 8.5 9.5"></svg:path><svg:path d="M7 13.25A6.25 6.25 0 1 0 7 .75a6.25 6.25 0 0 0 0 12.5"></svg:path></svg:g>`,
})
export class StreamlineBracesCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBracesCircleSolidIcon],svg[streamline-braces-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 .25a6.75 6.75 0 1 0 0 13.5A6.75 6.75 0 0 0 7 .25M3.743 5.61A1.8 1.8 0 0 1 5.5 3.876a.625.625 0 1 1 0 1.25c-.056 0-.19.03-.305.122c-.096.076-.19.201-.204.438c-.024.387-.126.907-.443 1.315c.317.408.42.928.443 1.315c.014.237.108.362.204.438a.56.56 0 0 0 .305.122a.625.625 0 1 1 0 1.25c-.62 0-1.682-.47-1.757-1.736c-.026-.438-.166-.652-.298-.718L3.22 7.56a.625.625 0 0 1 0-1.118l.225-.112c.132-.066.272-.28.298-.718ZM8.5 3.876c.62 0 1.682.47 1.757 1.736c.026.438.166.652.298.718l.225.112a.625.625 0 0 1 0 1.118l-.225.112c-.132.066-.272.28-.298.718A1.8 1.8 0 0 1 8.5 10.125a.625.625 0 1 1 0-1.25c.056 0 .19-.03.305-.122c.096-.076.19-.201.204-.438c.024-.387.126-.907.443-1.315c-.317-.408-.42-.928-.443-1.315c-.014-.237-.108-.362-.204-.438a.56.56 0 0 0-.305-.122a.625.625 0 1 1 0-1.25Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBracesCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBracketIcon],svg[streamline-bracket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 10.5L.5 7L4 3.5m6 7L13.5 7L10 3.5"></svg:path>`,
})
export class StreamlineBracketIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBracketSolidIcon],svg[streamline-bracket-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.476 2.893a1 1 0 1 0-1.46 1.367L11.578 7L9.015 9.74a1 1 0 1 0 1.46 1.367l3.204-3.424a1 1 0 0 0 0-1.366zM4.985 4.26a1 1 0 1 0-1.46-1.367L.32 6.317a1 1 0 0 0 0 1.366l3.203 3.424a1 1 0 0 0 1.46-1.367L2.422 7l2.564-2.74Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBracketSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrailleBlindIcon],svg[streamline-braille-blind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.834 13.45l-.394-.664a1.715 1.715 0 0 1 1.157-2.561l1.036-.195V5.322c0-.765.62-1.385 1.385-1.385v0c.765 0 1.385.62 1.385 1.385v3.212h1.489a2.573 2.573 0 0 1 2.573 2.573v2.343M1.717 1.566a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m4.259.75a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m6.858.75a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m0 4.337a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m-2.898.75a.375.375 0 1 1 0-.75m0 .75a.375.375 0 0 0 0-.75m-8.22.75a.375.375 0 1 1 0-.75m0 .75a.375.375 0 0 0 0-.75m0 4.319a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></svg:path>`,
})
export class StreamlineBrailleBlindIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrailleBlindSolidIcon],svg[streamline-braille-blind-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.834 4.077c-.709 0-1.284.575-1.284 1.284v4.968h-.625a1.715 1.715 0 0 0-1.583 2.374L2.88 14h8.005v-3.086A2.573 2.573 0 0 0 8.313 8.34H7.119V5.36c0-.709-.575-1.284-1.285-1.284ZM5.794.584a.947.947 0 1 1 0 1.893a.947.947 0 0 1 0-1.893M9.469 3.91a.947.947 0 1 1 0 1.893a.947.947 0 0 1 0-1.893m2.687 0a.947.947 0 1 1 0 1.893a.947.947 0 0 1 0-1.893M1.845 5.803a.947.947 0 1 1 0-1.893a.947.947 0 0 1 0 1.893m0 3.31a.947.947 0 1 1 0-1.893a.947.947 0 0 1 0 1.893m0-8.53a.947.947 0 1 1 0 1.894a.947.947 0 0 1 0-1.893Zm10.31 0a.947.947 0 1 1 0 1.894a.947.947 0 0 1 0-1.893Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrailleBlindSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrainIcon],svg[streamline-brain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.62 1.438A2.38 2.38 0 0 1 7 3.818v6.47a2.724 2.724 0 1 1-5.439-.228C.994 9.45.636 8.26.636 7.265c0-1.354.665-2.67 1.617-3.189A2.38 2.38 0 0 1 4.62 1.438"></svg:path><svg:path d="M3.511 5.694c-.35-.08-1.141-.599-1.26-1.611M4.97 8.365C6.398 8.205 6.963 6.699 7 6.086M2.29 8.632c-.356.28-.64.917-.731 1.427M9.38 1.438A2.38 2.38 0 0 0 7 3.818v6.47a2.724 2.724 0 1 0 5.439-.228c.567-.61.924-1.8.924-2.795c0-1.354-.664-2.67-1.617-3.189A2.38 2.38 0 0 0 9.38 1.438"></svg:path><svg:path d="M10.489 5.694c.35-.08 1.141-.599 1.26-1.611M9.03 8.365C7.602 8.205 7.037 6.699 7 6.086m4.71 2.546c.356.28.64.917.731 1.427"></svg:path></svg:g>`,
})
export class StreamlineBrainIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrainCognitiveIcon],svg[streamline-brain-cognitive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 13.5V11h2a1 1 0 0 0 1-1V6a5.5 5.5 0 1 0-8 4.9v2.6"></svg:path><svg:path d="M5.5 3.312a3.25 3.25 0 0 0-1.436 3.9c.12.335.48.503.824.412c1.737-.46 3.505-1.705 4.58-2.675c.285-.257.343-.687.09-.975A3.25 3.25 0 0 0 5.5 3.312"></svg:path></svg:g>`,
})
export class StreamlineBrainCognitiveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrainCognitiveSolidIcon],svg[streamline-brain-cognitive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.883.002A6 6 0 0 1 13 6v4a1.5 1.5 0 0 1-1.5 1.5H10v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2.303A6 6 0 0 1 6.883.002M3.56 7.21a3.768 3.768 0 0 1 6.373-3.757c.294.334.225.832-.105 1.13C8.582 5.71 6.53 7.154 4.515 7.688c-.398.106-.817-.09-.955-.477Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrainCognitiveSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrainSolidIcon],svg[streamline-brain-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.382.824c.798 0 1.513.357 1.993.92v4.563c-.017.205-.133.633-.4 1.023c-.265.385-.635.678-1.144.734a.625.625 0 1 0 .139 1.243a2.7 2.7 0 0 0 1.405-.585v3.67a2.997 2.997 0 0 1-5.336-1.389c.114-.351.3-.654.478-.794a.625.625 0 1 0-.775-.982a2 2 0 0 0-.259.245A5.65 5.65 0 0 1 0 7.234c0-.974.312-1.931.822-2.636c.11.213.242.4.384.562c.369.42.83.692 1.189.774a.625.625 0 0 0 .277-1.219c-.057-.013-.298-.119-.527-.38c-.184-.21-.343-.5-.382-.89v-.003A2.62 2.62 0 0 1 4.382.824m5.615 12.732a3 3 0 0 1-2.372-1.164V6.548c.256.186.528.338.792.45a.625.625 0 1 0 .486-1.153c-.553-.233-1.062-.685-1.24-1.1l-.038-.074V1.744a2.618 2.618 0 0 1 4.596 1.982l.002.001c-.063.41-.23.788-.41.965a.625.625 0 1 0 .878.89a2.5 2.5 0 0 0 .557-.883c.468.693.752 1.606.752 2.535c0 1.09-.39 2.394-1.01 3.066l-.023-.001a1.7 1.7 0 0 1-.476-.11c-.363-.136-.801-.42-1.183-.975a.625.625 0 1 0-1.03.71c.53.77 1.178 1.211 1.773 1.435c.265.1.531.16.778.183a3 3 0 0 1-2.832 2.014" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrainSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBriefcaseDollarIcon],svg[streamline-briefcase-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 3.5h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-2.5 0v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2"></svg:path><svg:path d="M8.276 7.167a1 1 0 0 0-.943-.667H6.56a.893.893 0 0 0-.19 1.765l1.178.257a1 1 0 0 1-.214 1.978h-.666a1 1 0 0 1-.943-.667M7 6.5v-1m0 6v-1"></svg:path></svg:g>`,
})
export class StreamlineBriefcaseDollarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBriefcaseDollarSolidIcon],svg[streamline-briefcase-dollar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.763.587A1.75 1.75 0 0 1 5 .074h4a1.75 1.75 0 0 1 1.75 1.75V3h1.75A1.5 1.5 0 0 1 14 4.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5v-8A1.5 1.5 0 0 1 1.5 3h1.75V1.824c0-.464.184-.91.513-1.237M9.25 1.824V3h-4.5V1.824a.25.25 0 0 1 .25-.25h4a.25.25 0 0 1 .25.25M7.75 4.75a.75.75 0 0 0-1.5 0v.51a1.866 1.866 0 0 0-.2 3.679l1.474.322a.5.5 0 0 1-.107.99h-.834a.5.5 0 0 1-.471-.334a.75.75 0 1 0-1.415.5c.239.674.83 1.184 1.553 1.305v.528a.75.75 0 0 0 1.5 0v-.528a2.001 2.001 0 0 0 .094-3.927l-1.473-.322a.366.366 0 0 1 .078-.723h.968a.5.5 0 0 1 .471.333a.75.75 0 1 0 1.415-.5A2 2 0 0 0 7.75 5.279z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBriefcaseDollarSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrightness1Icon],svg[streamline-brightness-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 8.998a1.998 1.998 0 1 0 0-3.996a1.998 1.998 0 0 0 0 3.996M7 .5v1m0 11v1M13.5 7h-1m-11 0h-1m11.1-4.6l-.71.71m-7.78 7.78l-.71.71m9.2 0l-.71-.71M3.11 3.11L2.4 2.4"></svg:path>`,
})
export class StreamlineBrightness1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrightness1SolidIcon],svg[streamline-brightness-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 7 0m2.25 7a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0m-1.5 5.25a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM11.5 7a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1A.75.75 0 0 1 11.5 7M.75 6.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm1.3-4.2a.75.75 0 0 1 1.06 0l.862.86A.75.75 0 0 1 2.91 3.973l-.86-.861a.75.75 0 0 1 0-1.06Zm9.04 7.978a.75.75 0 1 0-1.062 1.06l.861.862a.75.75 0 0 0 1.06-1.061zm.86-7.978a.75.75 0 0 1 0 1.06l-.86.862a.75.75 0 0 1-1.062-1.061l.861-.86a.75.75 0 0 1 1.06 0Zm-7.978 9.04a.75.75 0 1 0-1.061-1.06l-.86.86a.75.75 0 0 0 1.06 1.06l.86-.86Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrightness1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrightness2Icon],svg[streamline-brightness-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.75 7A3.25 3.25 0 0 0 7 10.25v-6.5A3.25 3.25 0 0 0 3.75 7M7 .5v1m0 11v1M13.5 7h-1m-11 0h-1m11.1-4.6l-.71.71m-7.78 7.78l-.71.71m9.2 0l-.71-.71M3.11 3.11L2.4 2.4"></svg:path>`,
})
export class StreamlineBrightness2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrightness2SolidIcon],svg[streamline-brightness-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 7 0m0 11.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 7 11.5m5.25-5.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM0 7a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1A.75.75 0 0 1 0 7m3.11-4.95a.75.75 0 1 0-1.06 1.06l.86.862A.75.75 0 0 0 3.973 2.91l-.861-.86Zm6.918 7.978a.75.75 0 0 1 1.061 0l.86.86a.75.75 0 0 1-1.06 1.062l-.86-.861a.75.75 0 0 1 0-1.06Zm1.922-6.917a.75.75 0 1 0-1.06-1.06l-.862.86a.75.75 0 0 0 1.061 1.06zm-7.978 6.917a.75.75 0 0 1 0 1.06l-.861.862a.75.75 0 1 1-1.06-1.061l.86-.86a.75.75 0 0 1 1.06 0Zm2.53.184a3.25 3.25 0 0 1 0-6.424c.273-.042.498.186.498.462v5.5c0 .276-.225.504-.498.462" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrightness2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrightness3Icon],svg[streamline-brightness-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5v1m0 11v1M13.5 7h-1m-11 0h-1m11.1-4.6l-.71.71m-7.78 7.78l-.71.71m9.2 0l-.71-.71M3.11 3.11L2.4 2.4M7 7.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class StreamlineBrightness3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrightness3SolidIcon],svg[streamline-brightness-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 7 0m1 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25 5.25a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM11.5 7a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1A.75.75 0 0 1 11.5 7M.75 6.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm1.3-4.2a.75.75 0 0 1 1.06 0l.862.86A.75.75 0 0 1 2.91 3.973l-.86-.861a.75.75 0 0 1 0-1.06Zm9.04 7.978a.75.75 0 1 0-1.062 1.06l.861.862a.75.75 0 0 0 1.06-1.061zm.86-7.978a.75.75 0 0 1 0 1.06l-.86.862a.75.75 0 0 1-1.062-1.061l.861-.86a.75.75 0 0 1 1.06 0Zm-7.978 9.04a.75.75 0 1 0-1.061-1.06l-.86.86a.75.75 0 0 0 1.06 1.06l.86-.86Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrightness3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrokenLink2Icon],svg[streamline-broken-link-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5.5l13 13M6 3l1.464-1.464a3.536 3.536 0 0 1 5 5L11 8m-3 3l-1.464 1.464a3.536 3.536 0 0 1-5-5L3 6m6-1L7 7M5 9l.5-.5"></svg:path>`,
})
export class StreamlineBrokenLink2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrokenLink2SolidIcon],svg[streamline-broken-link-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.627 2.735a2.51 2.51 0 0 1 3.549 3.549L9.258 8.2L8.19 7.134l.96-.96a1 1 0 1 0-1.414-1.415l-.96.961l-1.068-1.067l1.918-1.918Zm-3.332.504L6.213 1.32a4.51 4.51 0 1 1 6.377 6.377l-1.918 1.918l3.014 3.014a.744.744 0 0 1-1.053 1.052L.225 1.274A.744.744 0 0 1 1.278.221L4.295 3.24Zm-1.56 2.974a1 1 0 0 1 0 1.414a2.51 2.51 0 0 0 3.549 3.549a1 1 0 0 1 1.414 1.414A4.51 4.51 0 1 1 1.32 6.213a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrokenLink2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserAddIcon],svg[streamline-browser-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-12 3h13m-4 5h-5M7 6v5"></svg:path>`,
})
export class StreamlineBrowserAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserAddSolidIcon],svg[streamline-browser-add-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.546 2.815v9.434c0 .113.092.205.205.205h10.498a.204.204 0 0 0 .205-.205V2.815zM1.751.046C.809.046.046.81.046 1.751v10.498c0 .942.763 1.705 1.705 1.705h10.498c.942 0 1.705-.763 1.705-1.705V1.751c0-.942-.763-1.705-1.705-1.705zM3.75 7.75A.75.75 0 0 1 4.5 7h1.75V5.25a.75.75 0 0 1 1.5 0V7H9.5a.75.75 0 0 1 0 1.5H7.75v1.75a.75.75 0 1 1-1.5 0V8.5H4.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrowserAddSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserBlockIcon],svg[streamline-browser-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 3.494h13M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M7 11.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m2.123-.877L4.877 6.377"></svg:path></svg:g>`,
})
export class StreamlineBrowserBlockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserBlockSolidIcon],svg[streamline-browser-block-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.546 3.315v8.934c0 .113.092.205.205.205h10.498a.204.204 0 0 0 .205-.205V3.315zM1.751.046C.809.046.046.81.046 1.751v10.498c0 .942.763 1.705 1.705 1.705h10.498c.942 0 1.705-.763 1.705-1.705V1.751c0-.942-.763-1.705-1.705-1.705zM7 4a3.748 3.748 0 1 1-3.75 3.748c0-.986.399-1.954 1.097-2.652A3.78 3.78 0 0 1 7 4m0 1.5a2.248 2.248 0 0 1 2.03 3.217l-3-2.997A2.24 2.24 0 0 1 7 5.5M4.97 6.78l2.998 2.998A2.248 2.248 0 0 1 4.97 6.78" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrowserBlockSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserBuildIcon],svg[streamline-browser-build-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7.5v5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h4v7zm-13-4h13m-3.5 4v-7"></svg:path>`,
})
export class StreamlineBrowserBuildIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserBuildSolidIcon],svg[streamline-browser-build-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.54 12.255V3.334h3.277v4.144c0 .414.336.75.75.75h4.25a.75.75 0 0 0 .365 0h2.278v4.027a.205.205 0 0 1-.206.205H1.745a.205.205 0 0 1-.205-.206Zm9.21-5.527h2.46a.75.75 0 0 1 .75.75v4.777a1.705 1.705 0 0 1-1.706 1.705H1.745A1.705 1.705 0 0 1 .04 12.254V1.745A1.705 1.705 0 0 1 1.745.04h3.822a.75.75 0 0 1 .75.75v1.044H9.25V.79a.75.75 0 0 1 1.5 0v1.044h2.46a.75.75 0 0 1 0 1.5h-2.46zm-1.5 0V3.334H6.317v3.394z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrowserBuildSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserCheckIcon],svg[streamline-browser-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-12 3h13"></svg:path><svg:path d="m4 9l2 1.5l3.5-4"></svg:path></svg:g>`,
})
export class StreamlineBrowserCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserCheckSolidIcon],svg[streamline-browser-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.546 12.25V3.314h10.908v8.934a.204.204 0 0 1-.205.205H1.751a.204.204 0 0 1-.205-.205ZM1.751.045A1.707 1.707 0 0 0 .046 1.751v10.498c0 .942.763 1.705 1.705 1.705h10.498c.942 0 1.705-.763 1.705-1.705V1.751c0-.942-.763-1.705-1.705-1.705zm8.313 6.39a.75.75 0 1 0-1.128-.987L5.894 8.925L4.45 7.843a.75.75 0 1 0-.9 1.2l2 1.5a.75.75 0 0 0 1.014-.106l3.5-4Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrowserCheckSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserDeleteIcon],svg[streamline-browser-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-12 3h13m-4.5 7l-4-4m4 0l-4 4"></svg:path>`,
})
export class StreamlineBrowserDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserDeleteSolidIcon],svg[streamline-browser-delete-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.546 12.25V3.314h10.908v8.934a.204.204 0 0 1-.205.205H1.751a.204.204 0 0 1-.205-.205ZM1.751.045A1.707 1.707 0 0 0 .046 1.751v10.498c0 .942.763 1.705 1.705 1.705h10.498c.942 0 1.705-.763 1.705-1.705V1.751c0-.942-.763-1.705-1.705-1.705zM4.47 5.3a.75.75 0 0 1 1.06 0L7 6.77L8.47 5.3a.75.75 0 0 1 1.06 1.061l-1.47 1.47L9.53 9.3a.75.75 0 1 1-1.06 1.06L7 8.891l-1.47 1.47a.75.75 0 0 1-1.06-1.06l1.47-1.47l-1.47-1.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrowserDeleteSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserHashIcon],svg[streamline-browser-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 3.494h13M6.546 5.689l-1.817 5.302M9.27 5.689l-1.816 5.302m2.726-3.937H4.274m5.451 2.725H3.821M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path>`,
})
export class StreamlineBrowserHashIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserHashSolidIcon],svg[streamline-browser-hash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.546 12.25V3.314h10.908v8.934a.204.204 0 0 1-.205.205H1.751a.204.204 0 0 1-.205-.205ZM1.751.045A1.707 1.707 0 0 0 .046 1.751v10.498c0 .942.763 1.705 1.705 1.705h10.498c.942 0 1.705-.763 1.705-1.705V1.751c0-.942-.763-1.705-1.705-1.705zm5.038 4.51c.392.134.6.56.466.952l-.127.372h1.14l.293-.858a.75.75 0 0 1 1.42.486l-.128.372h.326a.75.75 0 0 1 0 1.5h-.84l-.42 1.225h.806a.75.75 0 0 1 0 1.5h-1.32l-.241.705a.75.75 0 0 1-1.42-.486l.076-.22H5.68l-.241.706a.75.75 0 0 1-1.42-.486l.076-.22H3.82a.75.75 0 1 1 0-1.5h.788l.42-1.224h-.754a.75.75 0 0 1 0-1.5h1.267l.294-.858a.75.75 0 0 1 .953-.466Zm.965 2.824l-.42 1.225h-1.14l.42-1.225z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrowserHashSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserLockIcon],svg[streamline-browser-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M4.75 10.5v-2a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1-.5-.5Z"></svg:path><svg:path stroke-linecap="round" d="M5.5 8V7A1.5 1.5 0 0 1 7 5.5v0A1.5 1.5 0 0 1 8.5 7v1m-8-4.506h13"></svg:path><svg:path stroke-linecap="round" d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class StreamlineBrowserLockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserLockSolidIcon],svg[streamline-browser-lock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.546 3.315v8.934c0 .113.092.205.205.205h10.498a.204.204 0 0 0 .205-.205V3.315zM1.751.046C.809.046.046.81.046 1.751v10.498c0 .942.763 1.705 1.705 1.705h10.498c.942 0 1.705-.763 1.705-1.705V1.751c0-.942-.763-1.705-1.705-1.705zM7 5.75a.875.875 0 0 0-.875.875v.5h1.75v-.5A.875.875 0 0 0 7 5.75m-2.125.875v.72a1 1 0 0 0-.375.78v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-.375-.78v-.72a2.125 2.125 0 0 0-4.25 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrowserLockSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserMultipleWindowIcon],svg[streamline-browser-multiple-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3 5V1.5a1 1 0 0 1 1-1h8.5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H11m-8-7h10.5"></svg:path><svg:path d="M7.5 7.5h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M.5 10h8"></svg:path></svg:g>`,
})
export class StreamlineBrowserMultipleWindowIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserMultipleWindowSolidIcon],svg[streamline-browser-multiple-window-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.442 8.224V3.36H4.39v1.194a.75.75 0 1 1-1.5 0v-2.82C2.89.793 3.652.03 4.594.03h7.644c.941 0 1.704.763 1.704 1.704v6.49c0 .94-.763 1.704-1.704 1.704h-.776a.75.75 0 0 1 0-1.5h.776a.204.204 0 0 0 .204-.204M1.605 9.827v2.406c0 .113.091.204.204.204h6.046a.204.204 0 0 0 .205-.204V9.827zm6.25-3.33H1.81c-.941 0-1.704.763-1.704 1.704v4.032c0 .941.763 1.704 1.704 1.704h6.046c.941 0 1.705-.763 1.705-1.704V8.2c0-.941-.764-1.704-1.705-1.704Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrowserMultipleWindowSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserRemoveIcon],svg[streamline-browser-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-12 3h13m-4 5h-5"></svg:path>`,
})
export class StreamlineBrowserRemoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserRemoveSolidIcon],svg[streamline-browser-remove-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.546 12.25V3.314h10.908v8.934a.204.204 0 0 1-.205.205H1.751a.204.204 0 0 1-.205-.205ZM1.751.045A1.707 1.707 0 0 0 .046 1.751v10.498c0 .942.763 1.705 1.705 1.705h10.498c.942 0 1.705-.763 1.705-1.705V1.751c0-.942-.763-1.705-1.705-1.705zm3.127 7.016a.75.75 0 1 0 0 1.5h4.244a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrowserRemoveSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserWebsite1Icon],svg[streamline-browser-website-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 3.494h13M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path>`,
})
export class StreamlineBrowserWebsite1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserWebsite1SolidIcon],svg[streamline-browser-website-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.546 12.25V3.314h10.908v8.934a.204.204 0 0 1-.205.205H1.751a.204.204 0 0 1-.205-.205Zm-1.5-10.5C.046.81.81.047 1.751.047h10.498c.942 0 1.705.763 1.705 1.705V12.25c0 .942-.763 1.705-1.705 1.705H1.751A1.704 1.704 0 0 1 .046 12.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrowserWebsite1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserWifiIcon],svg[streamline-browser-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 13h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1m-1-9h13"></svg:path><svg:path d="M3.55 7.425c1.9-1.9 5-1.9 6.9 0M5.355 8.958c.859-.859 2.33-.859 3.19 0M6.95 11.297a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineBrowserWifiIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserWifiSolidIcon],svg[streamline-browser-wifi-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.546 3.361v8.934c0 .113.092.205.205.205h10.453a.25.25 0 0 0 .25-.25V3.36H1.546ZM1.751.092C.809.092.046.855.046 1.797v10.498C.046 13.238.81 14 1.751 14h10.453a1.75 1.75 0 0 0 1.75-1.75V1.797c0-.942-.763-1.705-1.705-1.705zm2.688 7.02a3.63 3.63 0 0 1 5.122 0a.75.75 0 0 0 1.06-1.062a5.13 5.13 0 0 0-7.243 0A.75.75 0 0 0 4.44 7.111ZM5.906 8.73c.582-.581 1.606-.581 2.188 0a.75.75 0 1 0 1.06-1.06c-1.167-1.168-3.141-1.168-4.309 0a.75.75 0 0 0 1.061 1.06m1.844 1.342a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrowserWifiSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugIcon],svg[streamline-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 12.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9M2.5 8h-2m0 3.5a3.46 3.46 0 0 0 2.63-1.2"></svg:path><svg:path d="M3.13 5.7A3.46 3.46 0 0 0 .5 4.5m11 3.5h2m0 3.5a3.46 3.46 0 0 1-2.63-1.2m0-4.6a3.46 3.46 0 0 1 2.63-1.2m-5.26-.83A2.5 2.5 0 0 0 9.5 1.5m-5 0a2.5 2.5 0 0 0 1.26 2.17M2.61 7h8.78"></svg:path></svg:g>`,
})
export class StreamlineBugIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugAntivirusDebuggingIcon],svg[streamline-bug-antivirus-debugging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.5 10.5l1.3-1.3M4.5 7H3m7.5-3.5L9.2 4.8M9.5 7H11m-4.5-.5h3M.5 7a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m11.096 4.596L2.404 2.404"></svg:path><svg:path d="M4.804 4.804A2.5 2.5 0 0 1 9.5 6v2a2.5 2.5 0 0 1-.304 1.196M4.5 7v1a2.5 2.5 0 0 0 3.172 2.408"></svg:path></svg:g>`,
})
export class StreamlineBugAntivirusDebuggingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugAntivirusDebuggingSolidIcon],svg[streamline-bug-antivirus-debugging-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.594 7a5.38 5.38 0 0 1 1.09-3.256l1.849 1.85v.001L8.736 9.8l.001-.001l1.519 1.518A5.406 5.406 0 0 1 1.594 7m6.003 3.428L3.442 6.273a.75.75 0 0 0 .183 1.477H4.5V8q0 .207.033.407l-.956.956a.75.75 0 0 0 1.06 1.06l.626-.625a2.49 2.49 0 0 0 2.334.63M5.263 4.202L3.744 2.684a5.406 5.406 0 0 1 7.572 7.572l-1.849-1.85Q9.501 8.208 9.5 8v-.25h.875a.75.75 0 0 0 0-1.5H9.5V6q0-.207-.033-.407l.956-.956a.75.75 0 1 0-1.06-1.06l-.626.625A2.5 2.5 0 0 0 7 3.5a2.5 2.5 0 0 0-1.737.702M13.906 7c0 1.903-.77 3.626-2.014 4.875l-.008.008l-.009.009A6.906 6.906 0 1 1 13.905 7Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBugAntivirusDebuggingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugAntivirusShieldIcon],svg[streamline-bug-antivirus-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.36 13.4a1 1 0 0 1-.72 0v0A9.59 9.59 0 0 1 .5 4.46V1.54a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2.92a9.59 9.59 0 0 1-6.14 8.94"></svg:path><svg:path d="M9 7V5a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0M3.5 6H5m4 0h1.5M5 5.5h4m-.187-1.312L10 3M8.813 7.813L10 9M5.188 7.813L4 9m1.188-4.812L4 3"></svg:path></svg:g>`,
})
export class StreamlineBugAntivirusShieldIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugAntivirusShieldSolidIcon],svg[streamline-bug-antivirus-shield-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.536c0-.82.68-1.5 1.5-1.5h11c.82 0 1.5.68 1.5 1.5v2.92c-.003 4.127-2.61 7.923-6.46 9.407a1.5 1.5 0 0 1-1.08 0C2.61 12.379.003 8.583 0 4.457v-2.92Zm4.828 3.176q-.042.21-.042.43v.054a.6.6 0 0 0-.094.179H4a.625.625 0 1 0 0 1.25h.786v.232q0 .222.042.431l-.841.841a.625.625 0 1 0 .883.884l.578-.577c.4.393.947.635 1.552.635s1.153-.242 1.552-.635l.578.577a.625.625 0 1 0 .883-.883l-.84-.842q.04-.21.041-.43v-.233H10a.625.625 0 0 0 0-1.25h-.692a.6.6 0 0 0-.094-.179v-.053a2 2 0 0 0-.042-.431l.841-.841a.625.625 0 1 0-.883-.884l-.578.577A2.2 2.2 0 0 0 7 2.929c-.605 0-1.153.242-1.552.635l-.578-.577a.625.625 0 1 0-.883.884l.84.84Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBugAntivirusShieldSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugSolidIcon],svg[streamline-bug-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.135 1.71a.75.75 0 0 0-1.5 0a1.63 1.63 0 0 1-.651 1.305a5.1 5.1 0 0 0-1.968 0a1.63 1.63 0 0 1-.65-1.305a.75.75 0 1 0-1.5 0a3.14 3.14 0 0 0 .623 1.875a5.1 5.1 0 0 0-1.27 1.031A4.05 4.05 0 0 0 .8 3.822a.75.75 0 1 0 .003 1.5a2.55 2.55 0 0 1 1.595.554a5 5 0 0 0-.391 1.284H.8a.75.75 0 1 0 0 1.5h1.185c.062.463.187.906.366 1.32a2.55 2.55 0 0 1-1.549.518a.75.75 0 1 0-.004 1.5a4.05 4.05 0 0 0 2.347-.74A5.05 5.05 0 0 0 7 13.04a5.05 5.05 0 0 0 3.855-1.782a4.05 4.05 0 0 0 2.347.74a.75.75 0 0 0-.004-1.5a2.55 2.55 0 0 1-1.549-.518c.179-.414.304-.857.366-1.32H13.2a.75.75 0 0 0 0-1.5h-1.206a5 5 0 0 0-.39-1.284a2.55 2.55 0 0 1 1.594-.554a.75.75 0 0 0 .004-1.5a4.05 4.05 0 0 0-2.421.794a5.1 5.1 0 0 0-1.27-1.03a3.13 3.13 0 0 0 .624-1.875ZM7 4.42a3.56 3.56 0 0 1 3.222 2.043H3.778A3.56 3.56 0 0 1 7 4.419Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBugSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugVirusBrowserIcon],svg[streamline-bug-virus-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 12.5h-2a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1V4m-13-.5h13M6 6.5l1.3 1.3M6 13.5l1.3-1.3M7 10H5.5M13 6.5l-1.3 1.3m1.3 5.7l-1.3-1.3"></svg:path><svg:path d="M7 9a2.5 2.5 0 1 1 5 0v2a2.5 2.5 0 0 1-5 0zm5 1h1.5M7 9.5h5"></svg:path></svg:g>`,
})
export class StreamlineBugVirusBrowserIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugVirusBrowserSolidIcon],svg[streamline-bug-virus-browser-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.546 12.25V3.314h10.908v.856a.75.75 0 0 0 1.5 0V1.75c0-.942-.763-1.705-1.705-1.705H1.751A1.707 1.707 0 0 0 .046 1.751v10.498c0 .942.763 1.705 1.705 1.705h2.245a.75.75 0 0 0 0-1.5H1.751a.204.204 0 0 1-.205-.205Zm4.115-5.462a.75.75 0 0 1 1.06-.05l.781.709a2.83 2.83 0 0 1 3.95 0l.782-.71a.75.75 0 1 1 1.008 1.11l-1.022.93q.086.338.086.695v.032h.898a.75.75 0 0 1 0 1.5h-.898v.032q-.001.356-.086.696l1.022.928a.75.75 0 0 1-1.008 1.11l-.781-.709a2.83 2.83 0 0 1-3.951 0l-.781.71a.75.75 0 1 1-1.009-1.11l1.023-.93a2.8 2.8 0 0 1-.087-.695v-.032h-.897a.75.75 0 0 1 0-1.5h.897v-.032q0-.357.087-.695l-1.023-.93a.75.75 0 0 1-.05-1.059Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBugVirusBrowserSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugVirusDocumentIcon],svg[streamline-bug-virus-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 11.5h-2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h6l3 3V4M6 6.5l1.3 1.3M6 13.5l1.3-1.3M7 10H5.5M13 6.5l-1.3 1.3m1.3 5.7l-1.3-1.3"></svg:path><svg:path d="M7 9a2.5 2.5 0 1 1 5 0v2a2.5 2.5 0 0 1-5 0zm5 1h1.5M7 9.5h5"></svg:path></svg:g>`,
})
export class StreamlineBugVirusDocumentIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugVirusDocumentSolidIcon],svg[streamline-bug-virus-document-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v9A1.5 1.5 0 0 0 1.5 12h3.164l.048-.06a1.998 1.998 0 0 1 0-3.373a2 2 0 0 1 2.72-2.89A4.33 4.33 0 0 1 11 5.406V3.5a.5.5 0 0 0-.146-.354l-3-3A.5.5 0 0 0 7.5 0zm4.198 6.788a.75.75 0 0 1 1.059-.05l.781.709a2.83 2.83 0 0 1 3.95 0l.782-.71a.75.75 0 0 1 1.008 1.11l-1.022.93q.086.338.086.695v.032h.898a.75.75 0 0 1 0 1.5h-.898v.032q-.001.356-.086.696l1.022.929a.75.75 0 1 1-1.008 1.11l-.781-.71a2.83 2.83 0 0 1-3.95 0l-.782.71a.75.75 0 0 1-1.009-1.11l1.023-.93a2.8 2.8 0 0 1-.087-.695v-.032h-.897a.75.75 0 0 1 0-1.5h.897v-.032q0-.357.087-.695l-1.023-.93a.75.75 0 0 1-.05-1.059" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBugVirusDocumentSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugVirusFolderIcon],svg[streamline-bug-virus-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m6 6.5l1.3 1.3M6 13.5l1.3-1.3M7 10H5.5M13 6.5l-1.3 1.3m1.3 5.7l-1.3-1.3M7 9a2.5 2.5 0 1 1 5 0v2a2.5 2.5 0 0 1-5 0zm5 1h1.5M7 9.5h5"></svg:path><svg:path d="M3.5 12h-2a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.28 1.24h6a1 1 0 0 1 1 1V4"></svg:path></svg:g>`,
})
export class StreamlineBugVirusFolderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBugVirusFolderSolidIcon],svg[streamline-bug-virus-folder-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.198 0A1.5 1.5 0 0 1 6.69 1.14l.003.01l.192.85h5.6a1.5 1.5 0 0 1 1.5 1.5v2.188a2 2 0 0 0-2.378-.016a4.33 4.33 0 0 0-4.164 0a2 2 0 0 0-2.72 2.891a1.998 1.998 0 0 0 0 3.374a2 2 0 0 0-.329.563H1.515a1.5 1.5 0 0 1-1.5-1.5V1.5a1.5 1.5 0 0 1 1.5-1.5zm.51 6.784a.75.75 0 0 1 1.06-.05l.781.709a2.83 2.83 0 0 1 3.95 0l.782-.71a.75.75 0 1 1 1.008 1.11l-1.022.93q.086.338.087.695V9.5h.897a.75.75 0 0 1 0 1.5h-.897v.032q0 .356-.087.696l1.023.928a.75.75 0 1 1-1.009 1.11l-.781-.709a2.83 2.83 0 0 1-3.95 0l-.782.71a.75.75 0 0 1-1.008-1.11l1.022-.93a2.8 2.8 0 0 1-.086-.695V11h-.898a.75.75 0 0 1 0-1.5h.898v-.032q.001-.357.086-.695l-1.022-.93a.75.75 0 0 1-.051-1.059Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBugVirusFolderSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBuilding2Icon],svg[streamline-building-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 13.5h-8V4l4-3.5l4 3.5zm0 0h5v-7h-5m-4 7v-2M3 8.5h3m-3-3h3"></svg:path>`,
})
export class StreamlineBuilding2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBuilding2SolidIcon],svg[streamline-building-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.521.138a.5.5 0 0 0-.69 0l-3.676 3.5A.5.5 0 0 0 0 4v9.5a.5.5 0 0 0 .5.5h2.676v-2a1 1 0 1 1 2 0v2h2.677a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.156-.362zM9.77 6.5a.5.5 0 0 1 .5-.5h3.23a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-3.231a.5.5 0 0 1-.5-.5zM2.173 7.763c0-.345.28-.625.625-.625h2.757a.625.625 0 1 1 0 1.25H2.798a.625.625 0 0 1-.625-.625m.625-3.232a.625.625 0 1 0 0 1.25h2.757a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBuilding2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBulletListIcon],svg[streamline-bullet-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 3a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m3.5-.5h9M1 7.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M4.5 7h9M1 12a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m3.5-.5h9"></svg:path>`,
})
export class StreamlineBulletListIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBulletListSolidIcon],svg[streamline-bullet-list-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M1 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2M4.75 1.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM4 7a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 4 7m.75 3.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBulletListSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBurgerIcon],svg[streamline-burger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.5h13M4 .5h6A3.5 3.5 0 0 1 13.5 4a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1A3.5 3.5 0 0 1 4 .5m9 9.5H7l-1.5 1.5l-3-1.5H1a.5.5 0 0 0-.5.5v0a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class StreamlineBurgerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBurgerSolidIcon],svg[streamline-burger-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.184 1.094A4.13 4.13 0 0 1 4 0h6c1.05 0 2.064.39 2.816 1.094A3.67 3.67 0 0 1 14 3.774c0 .391-.167.76-.451 1.026a1.54 1.54 0 0 1-1.049.409h-11A1.54 1.54 0 0 1 .451 4.8A1.4 1.4 0 0 1 0 3.773a3.67 3.67 0 0 1 1.184-2.68ZM.77 6.75a.75.75 0 0 0 0 1.5h12.46a.75.75 0 0 0 0-1.5zm-.464 3.267c.19-.176.44-.27.694-.27h1.5a.5.5 0 0 1 .21.047l2.696 1.252L6.66 9.881A.5.5 0 0 1 7 9.748h6c.254 0 .504.093.694.27a.95.95 0 0 1 .306.694a3.2 3.2 0 0 1-1.038 2.338A3.62 3.62 0 0 1 10.5 14h-7a3.62 3.62 0 0 1-2.462-.95A3.2 3.2 0 0 1 0 10.712a.95.95 0 0 1 .306-.695" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBurgerSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBurritoFastfoodIcon],svg[streamline-burrito-fastfood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m.865 10.397l2.6 2.601a1 1 0 0 0 1.415 0l5.294-5.293l-4.016-4.016L.865 8.983a1 1 0 0 0 0 1.414"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m.6 9.562l5.378 1.409a1 1 0 0 0 1.22-1.221L5.724 4.129"></svg:path><svg:path stroke-linecap="round" d="M6.648 4.18c.122-.191.36-.502.547-.651a2.11 2.11 0 0 1 2.97.33c.73.911.583 2.24-.329 2.97l-.297.237"></svg:path><svg:path stroke-linejoin="round" d="M6.46 4.003a1.784 1.784 0 0 1 0-2.523a1.79 1.79 0 0 1 2.083-.326l.055-.058a1.78 1.78 0 0 1 2.524 0c.315.316.488.72.518 1.134c.41.032.814.199 1.127.512a1.784 1.784 0 0 1 0 2.523l-.06.058A1.785 1.785 0 0 1 9.86 7.404"></svg:path></svg:g>`,
})
export class StreamlineBurritoFastfoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBurritoFastfoodSolidIcon],svg[streamline-burrito-fastfood-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.323 1.99a2 2 0 0 0-.872-.512A2 2 0 0 0 10.589.02h-.002a2 2 0 0 0-1.273.407a2 2 0 0 0-2.002.5a2 2 0 0 0 0 2.829l2.86 2.859a2 2 0 0 0 2.828 0a2 2 0 0 0 .5-2.002a2 2 0 0 0 .408-1.273a2 2 0 0 0-.585-1.35M10.91 5.94l-.032-.031l-2.86-2.86l-.029-.03a2.06 2.06 0 0 1 1.452-.784a2.05 2.05 0 0 1 1.644.623c.456.438.652 1.036.604 1.634a2.04 2.04 0 0 1-.779 1.448M.903 9.087L4.73 5.261l1.85 5.037a.5.5 0 0 1-.642.642zm-.52 1.934A1 1 0 0 1 .187 9.89l5.406 1.99q.301.107.588.093l-1.715 1.716a1 1 0 0 1-1.415 0L.384 11.02Zm9.553-2.805l-2.324 2.325a1.5 1.5 0 0 0-.094-.588l-2.01-5.47l.348-.348z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBurritoFastfoodSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusIcon],svg[streamline-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h-9a1 1 0 0 0-1 1V11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1M3.5 12v1.5m7-1.5v1.5M1.5 7h11"></svg:path><svg:path d="M4 9.75a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m6 .5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineBusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusSolidIcon],svg[streamline-bus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.496 1.746c0-.113.092-.205.205-.205H11.3c.113 0 .205.092.205.205V6H2.496zm10.508 9.075c0 .802-.553 1.474-1.299 1.657v.513a1 1 0 0 1-2 0v-.465h-5.41v.465a1 1 0 0 1-2 0v-.513A1.706 1.706 0 0 1 .996 10.82V1.746C.996.804 1.76.041 2.701.041H11.3c.942 0 1.705.763 1.705 1.705v9.075ZM4 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBusSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessCardIcon],svg[streamline-business-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 2.5h-11a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1"></svg:path><svg:path d="M4.5 8.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m4-3H11m-2.5 3H11"></svg:path></svg:g>`,
})
export class StreamlineBusinessCardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessCardSolidIcon],svg[streamline-business-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 2zm2.774 2.875a2.125 2.125 0 1 0 0 4.25a2.125 2.125 0 0 0 0-4.25m3.827.625c0-.345.28-.625.625-.625h2.5a.625.625 0 1 1 0 1.25h-2.5A.625.625 0 0 1 8.1 5.5Zm.625 2.375a.625.625 0 1 0 0 1.25h2.5a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBusinessCardSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessHandshakeIcon],svg[streamline-business-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m.548 3.085l2.194 1.18l1.96-.338a2.23 2.23 0 0 1 1.844.515v0m4.736 4.84L8.18 11.486a2 2 0 0 1-2.285.022L.548 7.863"></svg:path><svg:path d="m13.402 7.84l-2.195 1.5l-3.406-2.75l-1.253.911a1.17 1.17 0 0 1-1.609-.226v0a1.17 1.17 0 0 1 .169-1.613l1.305-1.097a3 3 0 0 1 2.25-.688l2.033.218l2.706-1.463"></svg:path><svg:path d="M7.801 6.597c.82.73 1.982.357 2.414-.239"></svg:path></svg:g>`,
})
export class StreamlineBusinessHandshakeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessHandshakeSolidIcon],svg[streamline-business-handshake-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.385 5.242l1.404-1.27a3 3 0 0 1 2.406-.747l1.858.246l2.578-1.393a.25.25 0 0 1 .369.22v4.738a1 1 0 0 1-.418.813L11.846 9.09l-1.88-1.576a2.5 2.5 0 0 0 .966-.63a.625.625 0 1 0-.9-.869q-.276.291-.652.366c-.219.043-.498.036-.849-.072l-.446-.375L6.84 6.943a1.12 1.12 0 0 1-1.455-1.701m-.838-.928l1.008-.911a3.1 3.1 0 0 0-1.33-.063l-1.835.318L.376 2.574A.255.255 0 0 0 0 2.799v4.236c0 .338.167.654.446.844l5.455 3.719a2.04 2.04 0 0 0 2.334-.023l2.506-1.779l-2.67-2.24l-.445.358a2.37 2.37 0 0 1-3.08-3.6Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBusinessHandshakeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessIdeaMoneyIcon],svg[streamline-business-idea-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.276 3.979a1 1 0 0 0-.943-.667H6.56a.893.893 0 0 0-.19 1.765l1.178.257a1 1 0 0 1-.214 1.978h-.666a1 1 0 0 1-.943-.667M7 3.312v-1m0 6v-1"></svg:path><svg:path d="M11.5 5.031a4.5 4.5 0 1 0-6.5 4v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1.5a4.48 4.48 0 0 0 2.5-4M5 13.5h4"></svg:path></svg:g>`,
})
export class StreamlineBusinessIdeaMoneyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessIdeaMoneySolidIcon],svg[streamline-business-idea-money-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.454.644A5 5 0 0 0 4.5 9.33v1.201a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1.2A4.98 4.98 0 0 0 12 5.034A5 5 0 0 0 9.454.644M7 1.726c.345 0 .625.28.625.625v.384A1.61 1.61 0 0 1 8.843 3.78a.625.625 0 1 1-1.178.416a.36.36 0 0 0-.337-.238h-.76a.252.252 0 0 0-.055.498l1.158.253a1.608 1.608 0 0 1-.046 3.15v.386a.625.625 0 1 1-1.25 0V7.86a1.61 1.61 0 0 1-1.218-1.044a.625.625 0 0 1 1.178-.417c.05.14.183.238.338.238h.655a.358.358 0 0 0 .076-.707l-1.158-.253a1.502 1.502 0 0 1 .13-2.957v-.37c0-.345.279-.624.624-.624M5 12.49a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBusinessIdeaMoneySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessProfessionHomeOfficeIcon],svg[streamline-business-profession-home-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.272 6.346h3.455s1 0 1 1v2.456s0 1-1 1H5.272s-1 0-1-1V7.346s0-1 1-1m.474 0v-.572a1 1 0 0 1 1-1h.51a1 1 0 0 1 1 1v.572"></svg:path><svg:path d="M13.5 6.94a1 1 0 0 0-.32-.74L7 .5L.82 6.2a1 1 0 0 0-.32.74v5.56a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1z"></svg:path></svg:g>`,
})
export class StreamlineBusinessProfessionHomeOfficeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessProfessionHomeOfficeSolidIcon],svg[streamline-business-profession-home-office-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.322.445a1 1 0 0 1 1.356 0l5.842 5.388c.308.286.48.692.48 1.107v5.56a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5V6.94c0-.454.178-.827.48-1.107h.001L6.322.444Zm.243 4.985a.5.5 0 0 0-.5.5v.405h1.87V5.93a.5.5 0 0 0-.5-.5zm-1.5.5v.405H4.88a1 1 0 0 0-1 1v3.095a1 1 0 0 0 1 1h4.238a1 1 0 0 0 1-1V7.335a1 1 0 0 0-1-1h-.182V5.93a1.5 1.5 0 0 0-1.5-1.5h-.87a1.5 1.5 0 0 0-1.5 1.5Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBusinessProfessionHomeOfficeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessProgressBar2Icon],svg[streamline-business-progress-bar-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 12.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M.5 11H4m3 0h6.5m-2-2l2 2l-2 2m-6-3.5V1m0 0L10 3.5L5.5 6z"></svg:path>`,
})
export class StreamlineBusinessProgressBar2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessProgressBar2SolidIcon],svg[streamline-business-progress-bar-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.75 1.218a.75.75 0 0 1 1.126-.65l4.488 2.494a.75.75 0 0 1 0 1.311L6.25 6.66v2.704c.502.203.902.603 1.105 1.105h3.495v-.815a.75.75 0 0 1 1.28-.53l1.565 1.564a.75.75 0 0 1-.004 1.065l-1.561 1.56a.75.75 0 0 1-1.28-.53v-.814H7.355a2 2 0 0 1-3.71 0H.836a.75.75 0 0 1 0-1.5h2.81A2 2 0 0 1 4.75 9.363z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBusinessProgressBar2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessUserCurriculumIcon],svg[streamline-business-user-curriculum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" d="M4.098 3.65a1.15 1.15 0 1 0 2.3 0a1.15 1.15 0 0 0-2.3 0"></svg:path><svg:path stroke-linejoin="round" d="M3.5 5.94a2.2 2.2 0 0 1 .746-.834c.306-.2.652-.304 1.003-.304s.697.104 1.003.304c.307.199.563.486.746.834"></svg:path><svg:path stroke-linejoin="round" d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4z"></svg:path><svg:path d="M3.5 8.5h7m-7 2.5h4"></svg:path></svg:g>`,
})
export class StreamlineBusinessUserCurriculumIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessUserCurriculumSolidIcon],svg[streamline-business-user-curriculum-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.44.44A1.5 1.5 0 0 1 2.5 0h6a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 13 4.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 12.5v-11c0-.398.158-.78.44-1.06m3.515 3.51a1.024 1.024 0 1 0 0-2.048a1.024 1.024 0 0 0 0 2.048M2.876 8.5c0-.345.279-.625.624-.625h7a.626.626 0 0 1 .002 1.25h-7a.626.626 0 0 1-.626-.625m0 3c0-.345.279-.625.624-.625h4a.626.626 0 0 1 .002 1.25h-4a.626.626 0 0 1-.626-.625m2.08-6.866c-.7 0-1.339.263-1.822.696c-.287.257-.063.67.322.67h2.998c.386 0 .61-.413.323-.67a2.72 2.72 0 0 0-1.822-.696Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBusinessUserCurriculumSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonFastForward1Icon],svg[streamline-button-fast-forward-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 10.28a.7.7 0 0 0 .37.62a.71.71 0 0 0 .73 0l5.08-3.3a.7.7 0 0 0 0-1.18L1.6 3.1a.71.71 0 0 0-.73 0a.7.7 0 0 0-.37.62z"></svg:path><svg:path d="M6.997 10.28a.7.7 0 0 0 .37.62a.71.71 0 0 0 .73 0l5.08-3.3a.7.7 0 0 0 0-1.18L8.097 3.1a.71.71 0 0 0-.73 0a.7.7 0 0 0-.37.6z"></svg:path></svg:g>`,
})
export class StreamlineButtonFastForward1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonFastForward1SolidIcon],svg[streamline-button-fast-forward-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.497 5.894L1.27 2.424a.83.83 0 0 0-.92.056a.82.82 0 0 0-.35.648v7.723c0 .638.735 1.05 1.27.724l5.227-3.449v2.724c0 .639.734 1.052 1.27.725l5.867-3.872c.488-.316.488-1.067 0-1.384L7.767 2.424a.83.83 0 0 0-.92.056a.82.82 0 0 0-.35.648z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineButtonFastForward1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonFastForward2Icon],svg[streamline-button-fast-forward-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 10.29a.7.7 0 0 0 .37.62a.71.71 0 0 0 .73 0l5.08-3.3a.7.7 0 0 0 0-1.18L1.6 3.11a.71.71 0 0 0-.73 0a.7.7 0 0 0-.37.62z"></svg:path><svg:path d="M6.997 10.29a.7.7 0 0 0 .37.62a.71.71 0 0 0 .73 0l5.08-3.3a.7.7 0 0 0 0-1.18l-5.08-3.32a.71.71 0 0 0-.73 0a.7.7 0 0 0-.37.6zM13.5 2.5v9"></svg:path></svg:g>`,
})
export class StreamlineButtonFastForward2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonFastForward2SolidIcon],svg[streamline-button-fast-forward-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 2.234a1 1 0 0 1 1 1v7.532a1 1 0 1 1-2 0V8.782l-4.233 2.793c-.536.327-1.27-.086-1.27-.724V8.126l-5.227 3.45C.735 11.901 0 11.488 0 10.85V3.128a.82.82 0 0 1 .35-.648c.262-.189.624-.237.92-.056l5.227 3.47V3.128a.82.82 0 0 1 .35-.648a.83.83 0 0 1 .92-.056L12 5.234v-2a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineButtonFastForward2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonNextIcon],svg[streamline-button-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5.5v13M.52 11.66a1 1 0 0 0 .52.88a1 1 0 0 0 1 0l7.19-4.7a1 1 0 0 0 0-1.68L2.02 1.5a1 1 0 0 0-1 0a1 1 0 0 0-.52.88z"></svg:path>`,
})
export class StreamlineButtonNextIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonNextSolidIcon],svg[streamline-button-next-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.512 6.056L1.693.656C1.297.407.815.474.467.737A1.14 1.14 0 0 0 0 1.632v10.705c0 .884.979 1.456 1.693 1.004l7.82-5.367c.65-.439.65-1.48 0-1.919Zm4.238-4.314a1 1 0 1 0-2 0v10.516a1 1 0 0 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineButtonNextSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonPause2Icon],svg[streamline-button-pause-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 .5H1.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1H4a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m8.5 0H10a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path>`,
})
export class StreamlineButtonPause2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonPause2SolidIcon],svg[streamline-button-pause-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0H4a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 4 14H1.5A1.5 1.5 0 0 1 0 12.5zM10 0a1.5 1.5 0 0 0-1.5 1.5v11A1.5 1.5 0 0 0 10 14h2.5a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineButtonPause2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonPlayIcon],svg[streamline-button-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.436 12.33a1.14 1.14 0 0 0 .63 1a1.24 1.24 0 0 0 1.22 0l8.65-5.35a1.11 1.11 0 0 0 0-2L3.286.67a1.24 1.24 0 0 0-1.22 0a1.14 1.14 0 0 0-.63 1z"></svg:path>`,
})
export class StreamlineButtonPlayIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonPlaySolidIcon],svg[streamline-button-play-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.676.02a1.74 1.74 0 0 0-.845.218a1.64 1.64 0 0 0-.895 1.433v10.677a1.64 1.64 0 0 0 .895 1.433a1.74 1.74 0 0 0 1.718-.016l8.63-5.338a1.61 1.61 0 0 0-.001-2.876L3.548.253A1.74 1.74 0 0 0 2.676.02" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineButtonPlaySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonPower1Icon],svg[streamline-button-power-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5V6m4-4.124a6.5 6.5 0 1 1-8 0"></svg:path>`,
})
export class StreamlineButtonPower1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonPower1SolidIcon],svg[streamline-button-power-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a1 1 0 0 0-2 0v5.077a1 1 0 1 0 2 0zM3.923 3.059a1 1 0 0 0-1.23-1.577a7 7 0 1 0 8.615 0a1 1 0 0 0-1.231 1.577a5 5 0 1 1-6.154 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineButtonPower1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonPreviousIcon],svg[streamline-button-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5.5v13m12.98-1.84a1 1 0 0 1-.52.88a1 1 0 0 1-1 0l-7.19-4.7a1 1 0 0 1 0-1.68l7.21-4.66a1 1 0 0 1 1 0a1 1 0 0 1 .52.88z"></svg:path>`,
})
export class StreamlineButtonPreviousIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonPreviousSolidIcon],svg[streamline-button-previous-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.238 6.056l7.819-5.4c.396-.25.878-.183 1.226.08c.269.201.458.519.467.897v10.705c0 .884-.979 1.456-1.693 1.004l-7.82-5.367c-.65-.439-.65-1.48 0-1.919ZM0 1.742a1 1 0 1 1 2 0v10.516a1 1 0 1 1-2 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineButtonPreviousSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonRecord3Icon],svg[streamline-button-record-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path>`,
})
export class StreamlineButtonRecord3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonRecord3SolidIcon],svg[streamline-button-record-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14"></svg:path>`,
})
export class StreamlineButtonRecord3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonRewind1Icon],svg[streamline-button-rewind-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 10.28a.7.7 0 0 1-.37.62a.71.71 0 0 1-.73 0L7.32 7.58a.7.7 0 0 1 0-1.18l5.08-3.3a.71.71 0 0 1 .73 0a.7.7 0 0 1 .37.62z"></svg:path><svg:path d="M7.003 10.28a.7.7 0 0 1-.37.62a.71.71 0 0 1-.73 0L.823 7.58a.7.7 0 0 1 0-1.18l5.08-3.3a.71.71 0 0 1 .73 0a.7.7 0 0 1 .37.6z"></svg:path></svg:g>`,
})
export class StreamlineButtonRewind1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonRewind1SolidIcon],svg[streamline-button-rewind-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.503 5.894l5.227-3.47c.296-.181.658-.133.92.056a.82.82 0 0 1 .35.648v7.723c0 .638-.735 1.05-1.27.724L7.503 8.126v2.724c0 .639-.734 1.052-1.27.725L.366 7.703c-.488-.316-.488-1.067 0-1.384l5.867-3.895a.83.83 0 0 1 .92.056a.82.82 0 0 1 .35.648z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineButtonRewind1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonRewind2Icon],svg[streamline-button-rewind-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 10.29a.7.7 0 0 1-.37.62a.71.71 0 0 1-.73 0L7.32 7.59a.7.7 0 0 1 0-1.18l5.08-3.3a.71.71 0 0 1 .73 0a.7.7 0 0 1 .37.62z"></svg:path><svg:path d="M7.003 10.29a.7.7 0 0 1-.37.62a.71.71 0 0 1-.73 0L.823 7.59a.7.7 0 0 1 0-1.18l5.08-3.3a.71.71 0 0 1 .73 0a.7.7 0 0 1 .37.6zM.5 2.5v9"></svg:path></svg:g>`,
})
export class StreamlineButtonRewind2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonRewind2SolidIcon],svg[streamline-button-rewind-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 2.234a1 1 0 0 0-1 1v7.532a1 1 0 1 0 2 0V8.782l4.233 2.793c.536.327 1.27-.086 1.27-.724V8.126l5.227 3.45c.535.326 1.27-.087 1.27-.725V3.128a.82.82 0 0 0-.35-.648c-.262-.189-.623-.237-.92-.056l-5.227 3.47V3.128a.82.82 0 0 0-.35-.648a.83.83 0 0 0-.92-.056L2 5.234v-2a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineButtonRewind2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonStopIcon],svg[streamline-button-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path>`,
})
export class StreamlineButtonStopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonStopSolidIcon],svg[streamline-button-stop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v11A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineButtonStopSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCakeSliceIcon],svg[streamline-cake-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 6.5h-11a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m-9 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-3 3h13m-10-7s0-2 1.5-2"></svg:path>`,
})
export class StreamlineCakeSliceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCakeSliceSolidIcon],svg[streamline-cake-slice-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.47 3.817c0-.937.635-1.726 1.498-1.96a3 3 0 0 1 .152-.624c.09-.24.24-.521.494-.747C3.881.248 4.234.1 4.659.1a.625.625 0 1 1 0 1.25c-.118 0-.175.034-.215.069a.6.6 0 0 0-.153.252a1.4 1.4 0 0 0-.067.248A2.031 2.031 0 1 1 1.47 3.817M0 7.473a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.402H0zm0 2.652V13.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-3.375z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCakeSliceSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalculator1Icon],svg[streamline-calculator-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-10 5h11"></svg:path><svg:path d="M4.25 8.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M7 8.5A.25.25 0 0 1 7 8m0 .5A.25.25 0 0 0 7 8m2.75.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m-5.5 3a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5M7 11a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m2.75.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5M10 3H9"></svg:path></svg:g>`,
})
export class StreamlineCalculator1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalculator1SolidIcon],svg[streamline-calculator-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.569 1.748c0-.122.095-.204.192-.204h8.478c.097 0 .192.082.192.204v3.416H2.57V1.748ZM2.76.044c-.944 0-1.692.772-1.692 1.704v10.504c0 .931.748 1.704 1.692 1.704h8.478c.944 0 1.692-.772 1.692-1.704V1.748c0-.932-.748-1.704-1.692-1.704zm1.068 8.675a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M7 8.72a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m3.92-.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-7.09 3.974a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m3.921-.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m2.42.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M8.465 2.802a.625.625 0 1 0 0 1.25h1.419a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCalculator1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalculator2Icon],svg[streamline-calculator-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2M7 .5v13M.5 7h13m-11-3.25H5m4.25 0h2m-2 5.5h2m-2 2h2M3.75 2.5V5M2.69 9.19l2.12 2.12m0-2.12l-2.12 2.12"></svg:path>`,
})
export class StreamlineCalculator2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalculator2SolidIcon],svg[streamline-calculator-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.375 0H2.5A2.5 2.5 0 0 0 0 2.5v3.875h6.375zM0 11.5V7.625h6.375V14H2.5A2.5 2.5 0 0 1 0 11.5M7.625 14V7.625H14V11.5a2.5 2.5 0 0 1-2.5 2.5zM14 2.5v3.875H7.625V0H11.5A2.5 2.5 0 0 1 14 2.5m-11.967.225a.625.625 0 0 0 0 1.25h.625V4.6a.625.625 0 1 0 1.25 0v-.625h.625a.625.625 0 0 0 0-1.25h-.625V2.1a.625.625 0 0 0-1.25 0v.625zm6.992.625c0-.346.28-.625.625-.625h2a.625.625 0 0 1 0 1.25h-2a.625.625 0 0 1-.625-.625m.625 5.682a.625.625 0 1 0 0 1.25h2a.625.625 0 1 0 0-1.25zm-.625 2.625c0-.345.28-.625.625-.625h2a.625.625 0 1 1 0 1.25h-2a.625.625 0 0 1-.625-.625M1.781 9.215a.625.625 0 0 1 .884 0l.618.618l.618-.618a.625.625 0 1 1 .884.884l-.618.618l.618.618a.625.625 0 0 1-.884.884l-.618-.618l-.618.618a.625.625 0 0 1-.884-.884l.618-.618l-.618-.618a.625.625 0 0 1 0-.884" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCalculator2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalendarAddIcon],svg[streamline-calendar-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2M3.5.5v3m7-3v3M3.5 2h5m1 6h-5M7 5.5v5"></svg:path>`,
})
export class StreamlineCalendarAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalendarAddSolidIcon],svg[streamline-calendar-add-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 0a1 1 0 0 1 1 1v1h5V1a1 1 0 0 1 2 0v1h1A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h1V1a1 1 0 0 1 1-1m.25 8a.75.75 0 0 1 .75-.75h1.75V5.5a.75.75 0 0 1 1.5 0v1.75H9.5a.75.75 0 0 1 0 1.5H7.75v1.75a.75.75 0 0 1-1.5 0V8.75H4.5A.75.75 0 0 1 3.75 8" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCalendarAddSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalendarEditIcon],svg[streamline-calendar-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2M3.5.5v3m7-3v3M3.5 2h5"></svg:path><svg:path d="m10 6.864l-4.132 4.132L4 11.25l.263-1.868L8.386 5.25z"></svg:path></svg:g>`,
})
export class StreamlineCalendarEditIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalendarEditSolidIcon],svg[streamline-calendar-edit-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 0a1 1 0 0 1 1 1v1h5V1a1 1 0 1 1 2 0v1h1A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h1V1a1 1 0 0 1 1-1m5.063 5.073a.25.25 0 0 0-.354 0L4.086 9.205a.25.25 0 0 0-.07.142l-.264 1.868a.25.25 0 0 0 .282.283l1.868-.255a.25.25 0 0 0 .143-.07l4.132-4.132a.25.25 0 0 0 0-.354z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCalendarEditSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalendarJumpToDateIcon],svg[streamline-calendar-jump-to-date-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2M3.5.5v3m7-3v3M3.5 2h5M4.419 8.224H9.58"></svg:path><svg:path d="m7.642 10.164l1.94-1.94l-1.94-1.94"></svg:path></svg:g>`,
})
export class StreamlineCalendarJumpToDateIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalendarJumpToDateSolidIcon],svg[streamline-calendar-jump-to-date-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 0a1 1 0 0 1 1 1v1h5V1a1 1 0 0 1 2 0v1h1A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h1V1a1 1 0 0 1 1-1m-.214 8.181a.75.75 0 0 1 .75-.75H7.43V6.272a.625.625 0 0 1 1.066-.442l1.91 1.91a.625.625 0 0 1 0 .883l-1.91 1.91a.625.625 0 0 1-1.066-.442V8.93H4.036a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCalendarJumpToDateSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalendarStarIcon],svg[streamline-calendar-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2M3.5.5v3m7-3v3M3.5 2h5"></svg:path><svg:path d="m7.249 4.652l.836 1.683a.26.26 0 0 0 .214.156l1.858.282a.282.282 0 0 1 .156.487L8.941 8.563a.27.27 0 0 0 0 .253l.263 1.848a.282.282 0 0 1-.418.302l-1.654-.876a.33.33 0 0 0-.272 0l-1.654.876a.283.283 0 0 1-.418-.302l.31-1.848a.27.27 0 0 0-.048-.253L3.68 7.25a.282.282 0 0 1 .155-.477l1.858-.272a.26.26 0 0 0 .214-.156l.837-1.683a.282.282 0 0 1 .506-.01Z"></svg:path></svg:g>`,
})
export class StreamlineCalendarStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCalendarStarSolidIcon],svg[streamline-calendar-star-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 1a1 1 0 0 0-2 0v1h-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2h-1V1a1 1 0 1 0-2 0v1h-5zm2.489 4.125a.5.5 0 0 1 .454.27l.002.004l.744 1.498h.003l1.65.25a.5.5 0 0 1 .274.862L8.955 9.112a.3.3 0 0 1 .018.063l.232 1.636a.5.5 0 0 1-.739.529l-1.456-.77a.04.04 0 0 0-.028 0l-1.456.77a.5.5 0 0 1-.738-.533l.276-1.638l.006-.026l-1.195-1.144l-.005-.005a.5.5 0 0 1 .277-.846h.003l1.653-.243l.001-.002l.743-1.493a.5.5 0 0 1 .442-.285" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCalendarStarSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCallCenterSupportServiceIcon],svg[streamline-call-center-support-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.506 13.065a2.7 2.7 0 0 0 3.37-.36l.38-.38a.91.91 0 0 0 0-1.28l-1.6-1.59a.9.9 0 0 0-1.27 0v0a.91.91 0 0 1-1.28 0l-2.55-2.55a.91.91 0 0 1 0-1.28v0a.9.9 0 0 0 0-1.27l-1.54-1.6a.91.91 0 0 0-1.28 0l-.38.38a2.7 2.7 0 0 0-.41 3.37a24.2 24.2 0 0 0 6.56 6.56m5.959-9.893h-2.748a.215.215 0 0 1-.215-.216v0a.22.22 0 0 1 .053-.142l1.96-2.24a.2.2 0 0 1 .154-.07v0c.112 0 .203.092.203.204v3.353M8.85 4.06H6.48v-.505a.89.89 0 0 1 .533-.814l1.32-.577a.866.866 0 0 0-.348-1.66h-.616a.89.89 0 0 0-.838.593"></svg:path>`,
})
export class StreamlineCallCenterSupportServiceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCallCenterSupportServiceSolidIcon],svg[streamline-call-center-support-service-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.656 1.195A1.51 1.51 0 0 1 7.084.186H7.7a1.49 1.49 0 0 1 .597 2.857l-1.319.577a.26.26 0 0 0-.13.122h1.718a.625.625 0 1 1 0 1.25h-2.37a.625.625 0 0 1-.626-.625v-.505c0-.602.356-1.146.907-1.387l1.32-.577a.24.24 0 0 0-.097-.462h-.616a.26.26 0 0 0-.249.176a.625.625 0 0 1-1.179-.417M11.76.47a.829.829 0 0 1 1.452.546v1.839a.625.625 0 0 1 0 1.248v.265a.625.625 0 0 1-1.25 0v-.264h-1.53A.84.84 0 0 1 9.8 2.709zm-.425 2.384l.627-.717v.717zM8.915 13.8a2.7 2.7 0 0 1-1.75-.415a24.2 24.2 0 0 1-6.56-6.56a2.7 2.7 0 0 1 .41-3.37l.38-.38a.91.91 0 0 1 1.28 0l1.54 1.6a.9.9 0 0 1 0 1.27a.91.91 0 0 0 0 1.28l2.55 2.55a.91.91 0 0 0 1.28 0a.9.9 0 0 1 1.27 0l1.6 1.59a.91.91 0 0 1 0 1.28l-.38.38a2.7 2.7 0 0 1-1.62.775" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCallCenterSupportServiceSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCallHangUpIcon],svg[streamline-call-hang-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.761 8.69a1.06 1.06 0 0 1-1.484 0a1.05 1.05 0 0 0-1.474 0L.926 10.549a1.06 1.06 0 0 0 0 1.484l.442.433a3.135 3.135 0 0 0 3.931.432a28 28 0 0 0 2.647-2.021M.5.5l13 13M9.467 9.467a28.4 28.4 0 0 0 3.46-4.177a3.135 3.135 0 0 0-.433-3.931L12.06.916a1.06 1.06 0 0 0-1.484 0L8.71 2.784a1.05 1.05 0 0 0 0 1.474a1.04 1.04 0 0 1 0 1.484L7.226 7.226"></svg:path>`,
})
export class StreamlineCallHangUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCallHangUpSolidIcon],svg[streamline-call-hang-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.22 1.28A.75.75 0 0 1 1.28.22l6.123 6.122l.953-.954l.003-.002a.54.54 0 0 0 0-.772l-.006-.006a1.55 1.55 0 0 1 0-2.175l1.87-1.87l.004-.004a1.56 1.56 0 0 1 2.184 0l.437.447a3.635 3.635 0 0 1 .498 4.555l-.006.01a29 29 0 0 1-2.995 3.713l3.435 3.436a.75.75 0 1 1-1.06 1.06zm5.242 7.002l2.895 2.895l-.071.066a29 29 0 0 1-2.707 2.069l-.009.005a3.635 3.635 0 0 1-4.555-.498l-.44-.43l-.007-.007a1.56 1.56 0 0 1 0-2.184L2.45 8.335l.001-.001a1.55 1.55 0 0 1 2.175 0v-.001l-.35.357l.35-.356a.56.56 0 0 0 .783 0l.052-.052Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCallHangUpSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCamera1Icon],svg[streamline-camera-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 5a1 1 0 0 0-1-1h-2L9 2H5L3.5 4h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1z"></svg:path><svg:path d="M7 9.75a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"></svg:path></svg:g>`,
})
export class StreamlineCamera1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCamera1SolidIcon],svg[streamline-camera-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.6 1.7a.5.5 0 0 1 .4-.2h4a.5.5 0 0 1 .4.2l1.35 1.8h1.75A1.5 1.5 0 0 1 14 5v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 11V5a1.5 1.5 0 0 1 1.5-1.5h1.75zm4.861 6.011a2.461 2.461 0 1 1-4.922 0a2.461 2.461 0 0 1 4.922 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCamera1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraDisabledIcon],svg[streamline-camera-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8.219m-4.04-6.321a2.25 2.25 0 0 1 3.143 3.143"></svg:path><svg:path d="M3.714 3.714L5 2h4l1.5 2h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H12M4.778 7.145a2.25 2.25 0 0 0 2.577 2.577M13.5 13.5L.5.5"></svg:path></svg:g>`,
})
export class StreamlineCameraDisabledIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraDisabledSolidIcon],svg[streamline-camera-disabled-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.219.219a.75.75 0 0 0 0 1.06l.178.179q.027.021.051.046l12.328 12.328a.75.75 0 0 0 1.005-1.112l-.83-.829A1 1 0 0 0 13.5 11V5a1 1 0 0 0-1-1h-2L9 2H5l-.832 1.109L1.28.219a.75.75 0 0 0-1.061 0m8.957 11.78L1.217 4.04A1 1 0 0 0 .5 5v6a1 1 0 0 0 1 1zm.09-4.515q-.002.33-.09.632L6.368 5.307a2.267 2.267 0 0 1 2.898 2.177" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCameraDisabledSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraLoadingIcon],svg[streamline-camera-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 5a1 1 0 0 0-1-1h-2L9 2H5L3.5 4h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1z"></svg:path><svg:path d="M4.292 8a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m2.596.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M9.75 8a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineCameraLoadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraLoadingSolidIcon],svg[streamline-camera-loading-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.6 1.7a.5.5 0 0 1 .4-.2h4a.5.5 0 0 1 .4.2l1.35 1.8h1.75A1.5 1.5 0 0 1 14 5v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 11V5a1.5 1.5 0 0 1 1.5-1.5h1.75zm-.308 6.808a.758.758 0 1 0 0-1.516a.758.758 0 0 0 0 1.516m3.354-.758a.758.758 0 1 1-1.516 0a.758.758 0 0 1 1.516 0m2.104.758a.758.758 0 1 0 0-1.516a.758.758 0 0 0 0 1.516" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCameraLoadingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraSquareIcon],svg[streamline-camera-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M10.5 6a1 1 0 0 0-1-1H9L8 3.5H6L5 5h-.5a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1z"></svg:path><svg:path d="M7 7.375a.375.375 0 1 1 0-.75m0 .75a.375.375 0 1 0 0-.75"></svg:path></svg:g>`,
})
export class StreamlineCameraSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraSquareSolidIcon],svg[streamline-camera-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5zm10.824 4.732a1.093 1.093 0 0 0-1.092-1.093h-.547L8.093 3.5H5.907L4.815 5.139h-.547a1.093 1.093 0 0 0-1.092 1.093v2.731a1.093 1.093 0 0 0 1.092 1.093h5.464a1.093 1.093 0 0 0 1.092-1.093zM5.81 7.469a1.191 1.191 0 1 1 2.382 0a1.191 1.191 0 0 1-2.382 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCameraSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraVideoIcon],svg[streamline-camera-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 6.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m7 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4M10 9H4.5a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1H10a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1m3.5 1v2.5"></svg:path>`,
})
export class StreamlineCameraVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraVideoSolidIcon],svg[streamline-camera-video-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 3.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M10.5 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M1.912 9.609c0-.89.721-1.612 1.612-1.612h6.114c.89 0 1.612.722 1.612 1.612v2.78c0 .89-.722 1.611-1.612 1.611H3.524c-.89 0-1.612-.722-1.612-1.612zm11.966.14a.75.75 0 1 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCameraVideoSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCampingTentIcon],svg[streamline-camping-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 10.5v3m2-13l-8.5 13h13L5 .5"></svg:path>`,
})
export class StreamlineCampingTentIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCampingTentSolidIcon],svg[streamline-camping-tent-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.67.13a.75.75 0 0 1 1.037.218L7 2.325L8.293.348a.75.75 0 1 1 1.255.82L7.896 3.697l5.973 9.135a.75.75 0 0 1-.627 1.16H8v-3.019a1 1 0 1 0-2 0v3.02H.758a.75.75 0 0 1-.627-1.16l5.973-9.136L4.452 1.17A.75.75 0 0 1 4.669.13Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCampingTentSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCandyCaneIcon],svg[streamline-candy-cane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 0 3 0V5a4.5 4.5 0 1 0-9 0v1a1.5 1.5 0 0 0 3 0zm3 5l3-3M8.42 4.51L9.95 1.6M5.86 4.02L3.03 2.88"></svg:path>`,
})
export class StreamlineCandyCaneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCandyCaneSolidIcon],svg[streamline-candy-cane-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.98 0C8 0 8.986.32 9.804.907L8.046 3.632a1.615 1.615 0 0 0-2.217.081L2.845 2.511a1 1 0 0 0-.094-.03A4.84 4.84 0 0 1 6.98 0M2.29 3.627a5 5 0 0 0-.156 1.22v1.076a1.615 1.615 0 0 0 3.231 0v-1.05L2.378 3.67a1 1 0 0 1-.088-.043m6.306 1.458l2.134-3.31a4.85 4.85 0 0 1 1.097 3.071v1.27l-3.231 3.23v-4.26Zm0 6.03v1.27a1.616 1.616 0 0 0 3.23 0V7.884z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCandyCaneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCaneIcon],svg[streamline-cane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m8.799 9.979l-.057-.641a1.183 1.183 0 0 1 1.075-1.282v0a1.18 1.18 0 0 1 1.211.764l1.411 3.772M3.57 2.822a1.715 1.715 0 1 0 3.43 0a1.715 1.715 0 1 0-3.43 0"></svg:path><svg:path d="m2.099 12.592l2.573-8.148c.278.706 1.565 2.557 3.194 2.386"></svg:path><svg:path d="m3.57 7.963l2.087 1.503a1 1 0 0 1 .388.577l.615 2.549"></svg:path></svg:g>`,
})
export class StreamlineCaneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCaneAltIcon],svg[streamline-cane-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 3a1 1 0 0 0-1 1v.25a1.25 1.25 0 1 1-2.5 0V4a3.5 3.5 0 1 1 7 0v8.25a1.25 1.25 0 1 1-2.5 0V4a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCaneAltIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCaneAltSolidIcon],svg[streamline-cane-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.469 2.5a1 1 0 0 0-1 1v.25a1.25 1.25 0 1 1-2.5 0V3.5a3.5 3.5 0 1 1 7 0v9.25a1.25 1.25 0 1 1-2.5 0V3.5a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCaneAltSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCaneSolidIcon],svg[streamline-cane-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.512 3.917a1.959 1.959 0 1 0 0-3.917a1.959 1.959 0 0 0 0 3.917M9.62 9.271a.433.433 0 0 1 .836-.19l1.411 3.774a.75.75 0 0 0 1.405-.526L11.86 8.556a1.933 1.933 0 0 0-3.735.847l.056.641a.75.75 0 0 0 1.494-.131L9.62 9.27Zm-5.452-4.72a1 1 0 0 1 .936.252c.684.661 1.443 1.16 2.658 1.032a1 1 0 1 1 .21 1.99c-1.276.133-2.269-.179-3.053-.644l-.166.509l1.52 1.094a2 2 0 0 1 .776 1.154l.584 2.419a1 1 0 1 1-1.944.47l-.584-2.42L4.1 9.685l-1.05 3.217a1 1 0 1 1-1.902-.62l2.31-7.071a1 1 0 0 1 .71-.66" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCaneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCapitolIcon],svg[streamline-capitol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.262 8.831H.857l6.202-3.544zM.857 13.261h12.405M1.743 8.831v4.43M4.4 8.831v4.43m2.66-4.43v4.43m2.657-4.43v4.43m2.659-4.43v4.43"></svg:path><svg:path d="M3.515 7.296V5.73a3.544 3.544 0 1 1 7.088 0v1.566M7.06 2.185V.856"></svg:path></svg:g>`,
})
export class StreamlineCapitolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCapitolSolidIcon],svg[streamline-capitol-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.06.016a.75.75 0 0 1 .75.75v.702a4.25 4.25 0 0 1 3.5 4.185v.077L7.616 3.62a1.13 1.13 0 0 0-1.116 0L2.809 5.73v-.077c0-2.092 1.51-3.83 3.5-4.185V.766a.75.75 0 0 1 .75-.75ZM.856 9.33h.346v3.148h-.101a.75.75 0 0 0 0 1.5h11.914a.75.75 0 0 0 0-1.5h-.1V9.33h.346a.5.5 0 0 0 .248-.934L7.307 4.853a.5.5 0 0 0-.496 0L.608 8.397a.5.5 0 0 0 .249.934Zm1.846 3.148V9.33h1.053v3.148zm2.553 0V9.33h1.053v3.148H5.256Zm2.553 0V9.33h1.053v3.148H7.81Zm2.553 0V9.33h1.053v3.148z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCapitolSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCarBatteryChargingIcon],svg[streamline-car-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 5v7.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1M2 4V2h3v2m4 0V2h3v2"></svg:path><svg:path d="m7.5 6l-2 2.5h3l-2 3"></svg:path></svg:g>`,
})
export class StreamlineCarBatteryChargingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCarBatteryChargingSolidIcon],svg[streamline-car-battery-charging-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1.5h3V2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1.5A1.5 1.5 0 0 1 14 5v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5V5a1.5 1.5 0 0 1 1.5-1.5zm6.446 4.62a.625.625 0 0 0-.976-.781L5.137 8.13a.625.625 0 0 0 .488 1.016h1.582l-1.185 1.778a.625.625 0 1 0 1.04.694l1.833-2.75a.625.625 0 0 0-.52-.972h-1.45z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCarBatteryChargingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCarTaxi1Icon],svg[streamline-car-taxi-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2 11h-.5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1H3l.77-2.32a1 1 0 0 1 1-.68h4.01a1 1 0 0 1 1 .68L10.5 7h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H12"></svg:path><svg:path d="M10.499 12.5a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002m-7 0a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002M8.998 11H5m2-7V2"></svg:path></svg:g>`,
})
export class StreamlineCarTaxi1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCarTaxi1SolidIcon],svg[streamline-car-taxi-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.499 13.252a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002m-7 0a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002"></svg:path><svg:path fill-rule="evenodd" d="M7 1.25a.75.75 0 0 0-.75.75v1.5H4.782a1.5 1.5 0 0 0-1.486 1.02v.003L2.638 6.5H1.5A1.5 1.5 0 0 0 0 8v2a1.5 1.5 0 0 0 1.02 1.421a2.502 2.502 0 0 1 4.968.079H8.01a2.501 2.501 0 0 1 4.968-.078A1.5 1.5 0 0 0 14 10V8a1.5 1.5 0 0 0-1.5-1.5h-1.632l-.61-1.968l-.004-.011A1.5 1.5 0 0 0 8.768 3.5H7.75V2A.75.75 0 0 0 7 1.25" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class StreamlineCarTaxi1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCardsIcon],svg[streamline-cards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.546.857a.475.475 0 0 1 .581-.335l6.02 1.612a.475.475 0 0 1 .337.581l-2.31 8.618a.475.475 0 0 1-.582.335l-6.02-1.612a.475.475 0 0 1-.336-.581z"></svg:path><svg:path d="M6.108 2.535L.852 3.944a.475.475 0 0 0-.336.581l2.308 8.618a.475.475 0 0 0 .582.335l3.01-.806"></svg:path></svg:g>`,
})
export class StreamlineCardsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCardsSolidIcon],svg[streamline-cards-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.56.33a.48.48 0 0 0-.587.339L4.64 9.377a.48.48 0 0 0 .34.587l6.083 1.63a.48.48 0 0 0 .587-.34l2.335-8.707a.48.48 0 0 0-.34-.588L7.561.33ZM3.433 9.053l1.596-5.955L.356 4.349a.48.48 0 0 0-.34.588l2.335 8.707a.48.48 0 0 0 .587.34l6.084-1.63l.023-.007l-4.39-1.175a1.73 1.73 0 0 1-1.223-2.12Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCardsSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCat1Icon],svg[streamline-cat-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5 7.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4 .5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m-4.5 6.46a4 4 0 0 0 1.5.29h2a4 4 0 0 0 1.5-.29M2 7.5v-7l4.153 3.056M12 7.5v-7L7.86 3.556"></svg:path><svg:path d="M4.019 4.5c.732-.614 1.796-1 2.981-1s2.25.386 2.982 1M.5 9.5H4m0 2L1 13m9-3.5h3.5m-3.5 2l3 1.5M7.75 9.5h-1.5L7 10z"></svg:path></svg:g>`,
})
export class StreamlineCat1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCat1SolidIcon],svg[streamline-cat-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.777.053A.5.5 0 0 1 2.3.1l3.917 2.947a6.6 6.6 0 0 1 1.564 0L11.7.1a.5.5 0 0 1 .801.4v8.25h.748a.75.75 0 0 1 0 1.5h-.81a4.5 4.5 0 0 1-.479 1.391l1.376.688a.75.75 0 1 1-.67 1.342l-1.654-.827A4.48 4.48 0 0 1 8 14H6a4.48 4.48 0 0 1-3.011-1.156l-1.654.827a.75.75 0 1 1-.67-1.342l1.376-.688a4.5 4.5 0 0 1-.479-1.391h-.81a.75.75 0 0 1 0-1.5H1.5V.5a.5.5 0 0 1 .277-.447M9.124 7.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m-4.25 0a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.897 1.605A.5.5 0 0 1 6.25 9h1.5a.5.5 0 0 1 .277.916l-.75.5a.5.5 0 0 1-.554 0l-.75-.5a.5.5 0 0 1-.202-.56Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCat1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCellularNetwork4gIcon],svg[streamline-cellular-network-4g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.527 4.846c-.773-.547-1.633-.853-2.511-.892c-.877.042-1.734.348-2.505.895M2.098 2.828A7.9 7.9 0 0 1 7.003.953a7.9 7.9 0 0 1 4.9 1.875m-1.689 8.324h1.306v.87c0 .722-.584 1.307-1.306 1.307h-.87a1.306 1.306 0 0 1-1.306-1.306V9.41c0-.72.585-1.306 1.306-1.306h.87c.569 0 1.053.364 1.232.871M6.45 12.023H2.414a.316.316 0 0 1-.316-.317v0c0-.076.027-.15.078-.208l2.879-3.29a.3.3 0 0 1 .225-.103v0a.3.3 0 0 1 .3.3v4.924"></svg:path>`,
})
export class StreamlineCellularNetwork4gIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCellularNetwork4gSolidIcon],svg[streamline-cellular-network-4g-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.695 2.236a.625.625 0 0 0 .806.956a7.33 7.33 0 0 1 4.503-1.717a7.3 7.3 0 0 1 4.495 1.717a.625.625 0 1 0 .806-.955A8.56 8.56 0 0 0 6.987.226a8.58 8.58 0 0 0-5.291 2.01Zm2.456 1.976a.625.625 0 1 0 .72 1.021c.673-.474 1.406-.733 2.146-.774c.74.039 1.477.297 2.15.771a.625.625 0 0 0 .72-1.022c-.863-.607-1.836-.954-2.843-1h-.058c-1.004.049-1.975.397-2.835 1.004M9.66 8.584c-.38 0-.68.305-.68.673v2.595c0 .368.3.673.68.673h.87c.38 0 .681-.305.681-.673v-.24h-.68a.625.625 0 0 1 0-1.25h1.305c.345 0 .625.28.625.625v.865a1.927 1.927 0 0 1-1.93 1.923H9.66a1.927 1.927 0 0 1-1.93-1.923V9.257c0-1.066.867-1.923 1.93-1.923h.87c.84 0 1.555.533 1.82 1.28a.625.625 0 1 1-1.177.42a.68.68 0 0 0-.642-.45zm-4.314-1.25a.93.93 0 0 0-.694.314l-2.879 3.27a.939.939 0 0 0 .705 1.56H5.02v.672a.625.625 0 1 0 1.25 0v-.673h.245a.625.625 0 1 0 0-1.25H6.27V8.26a.925.925 0 0 0-.925-.925ZM5.021 9.12v2.107H3.166L5.02 9.12Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCellularNetwork4gSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCellularNetwork5gIcon],svg[streamline-cellular-network-5g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.59 4.846c-.773-.547-1.633-.853-2.512-.892c-.877.042-1.734.348-2.504.895M2.16 2.828A7.9 7.9 0 0 1 7.066.953a7.9 7.9 0 0 1 4.899 1.875m-1.821 8.449h1.306v.87c0 .722-.585 1.307-1.306 1.307h-.87a1.306 1.306 0 0 1-1.306-1.306V9.536c0-.72.584-1.306 1.306-1.306h.87c.569 0 1.052.364 1.232.871m-5.4-.867H3.148l-.435 2.61l.32-.16A2.6 2.6 0 0 1 4.2 10.41h.688c.721 0 1.305.584 1.305 1.305v.435c0 .72-.584 1.305-1.305 1.305h-.87a1.305 1.305 0 0 1-1.23-.87"></svg:path>`,
})
export class StreamlineCellularNetwork5gIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCellularNetwork5gSolidIcon],svg[streamline-cellular-network-5g-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.772 2.219a.625.625 0 1 0 .81.953a7.16 7.16 0 0 1 4.421-1.697a7.15 7.15 0 0 1 4.416 1.697a.625.625 0 0 0 .809-.953A8.4 8.4 0 0 0 6.987.225A8.4 8.4 0 0 0 1.772 2.22ZM4.19 4.174a.625.625 0 0 0 .723 1.02c.66-.468 1.379-.725 2.103-.765c.726.038 1.448.294 2.109.762a.625.625 0 0 0 .722-1.02c-.85-.602-1.81-.947-2.804-.992h-.058c-.99.047-1.948.394-2.795.995M9.3 8.636a.66.66 0 0 0-.66.66v2.57a.66.66 0 0 0 .66.659h.857a.66.66 0 0 0 .66-.66v-.231h-.66a.625.625 0 1 1 0-1.25h1.285c.345 0 .625.28.625.625v.856a1.91 1.91 0 0 1-1.91 1.91H9.3a1.91 1.91 0 0 1-1.91-1.91v-2.57a1.91 1.91 0 0 1 1.91-1.91h.857a1.91 1.91 0 0 1 1.8 1.274a.625.625 0 1 1-1.178.417a.66.66 0 0 0-.622-.44zm-3.495.003H3.553l-.16.96q.327-.07.664-.07h.678a1.91 1.91 0 0 1 1.91 1.909v.428a1.91 1.91 0 0 1-1.91 1.909H3.88a1.91 1.91 0 0 1-1.8-1.273a.625.625 0 1 1 1.179-.416a.66.66 0 0 0 .621.439h.856a.66.66 0 0 0 .66-.659v-.428a.66.66 0 0 0-.66-.659h-.678c-.301 0-.599.07-.868.205l-.314.157a.625.625 0 0 1-.896-.662l.428-2.568a.625.625 0 0 1 .616-.522h2.782a.625.625 0 1 1 0 1.25Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCellularNetwork5gSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCellularNetworkLteIcon],svg[streamline-cellular-network-lte-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.03 8.027v5.223M4.287 8.027H7.77m4.988 0H9.276v5.223h3.482m-3.482-2.83h3.047M1.242 8.027v5.223h3.047m5.238-8.404c-.773-.547-1.632-.853-2.511-.892c-.877.042-1.734.348-2.505.895M2.098 2.828A7.9 7.9 0 0 1 7.003.953a7.9 7.9 0 0 1 4.9 1.875"></svg:path>`,
})
export class StreamlineCellularNetworkLteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCellularNetworkLteSolidIcon],svg[streamline-cellular-network-lte-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.693 2.25a.625.625 0 0 0 .809.954a7.3 7.3 0 0 1 4.501-1.728a7.28 7.28 0 0 1 4.495 1.727a.625.625 0 1 0 .809-.952A8.53 8.53 0 0 0 6.987.226A8.54 8.54 0 0 0 1.692 2.25Zm2.31 2.86a.625.625 0 0 1 .147-.872c.86-.61 1.83-.961 2.836-1.01h.058c1.008.046 1.982.396 2.844 1.006a.625.625 0 0 1-.722 1.02c-.674-.476-1.409-.736-2.149-.776c-.739.042-1.472.303-2.143.78a.625.625 0 0 1-.872-.148ZM1.635 7.926a.625.625 0 1 0-1.25 0v5.223c0 .345.28.625.625.625h3.047a.625.625 0 1 0 0-1.25H1.636V7.926Zm6.779 0c0 .345-.28.625-.625.625H6.674v4.598a.625.625 0 1 1-1.25 0V8.55H4.308a.625.625 0 1 1 0-1.25H7.79c.345 0 .625.28.625.625Zm.689-.442a.63.63 0 0 1 .442-.183h3.482a.625.625 0 1 1 0 1.25H10.17v1.144h2.422a.625.625 0 1 1 0 1.25H10.17v1.579h2.857a.625.625 0 0 1 0 1.25H9.546a.625.625 0 0 1-.625-.625V7.926c0-.166.066-.325.183-.442Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCellularNetworkLteSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCelsiusIcon],svg[streamline-celsius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 3.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m10.5 0c-.412-1.165-1.694-2-3-2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3c1.306 0 2.588-.835 3-2"></svg:path>`,
})
export class StreamlineCelsiusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCelsiusSolidIcon],svg[streamline-celsius-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M2.25 0a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8 4a2 2 0 0 1 2-2c.934 0 1.803.614 2.057 1.333a1 1 0 0 0 1.886-.666C13.373 1.056 11.679 0 10 0a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4c1.678 0 3.373-1.056 3.943-2.667a1 1 0 1 0-1.886-.666C11.803 11.387 10.934 12 10 12a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCelsiusSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChairIcon],svg[streamline-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 8h11m-10 0V.5m9 0V8m-9-6.5h9m-9 3h9M2.5 8l8 5.5m1-5.5l-8 5.5"></svg:path>`,
})
export class StreamlineChairIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChairSolidIcon],svg[streamline-chair-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.532.907a.75.75 0 1 0-1.5 0v6.28h-.187a.75.75 0 1 0 0 1.5h.704l3.127 2.15l-2.382 1.637a.75.75 0 0 0 .85 1.236L7 11.747l2.856 1.963a.75.75 0 0 0 .85-1.236l-2.382-1.637l3.127-2.15h.704a.75.75 0 0 0 0-1.5h-.187V.907a.75.75 0 0 0-1.5 0zm5.271 7.78H5.197L7 9.927zM3.532 5.144v2.043h6.936V5.144z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChairSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChampagnePartyAlcoholIcon],svg[streamline-champagne-party-alcohol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.179 6.011L4.114.881l3.653 1.04l-1.062 5.38a2.362 2.362 0 1 1-4.526-1.29m1.563 3.104l-1.074 3.766m-1.484-.424l2.967.846"></svg:path><svg:path d="m3.148 3.438l4.086 1.175"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.567 8.963a2.362 2.362 0 0 0 3.255-2.952L9.885.881l-.576.163m.949 8.071l1.074 3.766m1.484-.424l-2.967.846m1.003-9.853l-1.669.48"></svg:path></svg:g>`,
})
export class StreamlineChampagnePartyAlcoholIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChampagnePartyAlcoholSolidIcon],svg[streamline-champagne-party-alcohol-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.208.574a.75.75 0 0 1 .907-.456l3.601 1.026a.75.75 0 0 1 .53.867L7.2 7.315a3.08 3.08 0 0 1-3.117 2.482l-.672 2.357l.74.211a.75.75 0 0 1-.411 1.443L2.313 13.4l-.07-.02l-1.429-.407a.75.75 0 1 1 .412-1.443l.742.212l.672-2.357A3.08 3.08 0 0 1 1.3 5.633L3.207.574Zm.481 2.974l2.574.766l.378-1.917l-2.273-.648zm6.313 6.321a3.08 3.08 0 0 1-2.144-.868a4.3 4.3 0 0 0 .567-1.444l.698-3.539l1.479-.353l-.631-1.849l-.462.116A2 2 0 0 0 8.987.517l1.288-.323a.75.75 0 0 1 .893.485l1.746 5.117a3.08 3.08 0 0 1-1.457 3.707l.596 2.377l.745-.187a.75.75 0 0 1 .365 1.455l-1.443.362l-.059.015l-1.449.364a.75.75 0 0 1-.365-1.455l.751-.189z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChampagnePartyAlcoholSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleOvalIcon],svg[streamline-chat-bubble-oval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.145 12.84a6.5 6.5 0 1 0-2.556-2.238m2.556 2.239L.5 13.5l1.089-2.897m2.556 2.238l.005-.001m-2.561-2.237l.001-.003"></svg:path>`,
})
export class StreamlineChatBubbleOvalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleOvalNotificationIcon],svg[streamline-chat-bubble-oval-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.114.585a6.474 6.474 0 0 0-4.503 9.96L.526 13.474l3.635-.658a6.464 6.464 0 0 0 9.274-5.14"></svg:path><svg:path d="M10.984 5.505a2.49 2.49 0 1 0 0-4.98a2.49 2.49 0 0 0 0 4.98"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleOvalNotificationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleOvalNotificationSolidIcon],svg[streamline-chat-bubble-oval-notification-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.998.046c.523 0 1.044.059 1.55.175a3.723 3.723 0 0 0 5.232 5.23l.004.014a6.954 6.954 0 0 1-9.685 7.854l-3.466.627a.5.5 0 0 1-.556-.668l.994-2.646A6.954 6.954 0 0 1 6.998.046m6.952 2.486a2.482 2.482 0 1 1-4.964 0a2.482 2.482 0 0 1 4.964 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChatBubbleOvalNotificationSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleOvalSmiley1Icon],svg[streamline-chat-bubble-oval-smiley-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.998.56a6.44 6.44 0 0 0-5.36 10.007L.558 13.44l3.617-.654A6.44 6.44 0 1 0 6.998.56"></svg:path><svg:path d="M3.7 8c.5 1.8 2.5 2.9 4.3 2.4c1.1-.4 2-1.3 2.3-2.4M4.75 5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleOvalSmiley1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleOvalSmiley1SolidIcon],svg[streamline-chat-bubble-oval-smiley-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.998.06a6.94 6.94 0 1 1-2.892 13.246l-3.458.626a.5.5 0 0 1-.557-.668l.991-2.64A6.94 6.94 0 0 1 6.998.06M4.302 7.833a.625.625 0 0 0-1.204.334c.594 2.141 2.945 3.425 5.07 2.835l.046-.015c1.267-.46 2.33-1.504 2.689-2.823a.625.625 0 1 0-1.206-.328c-.238.874-.966 1.625-1.888 1.968c-1.47.394-3.104-.52-3.507-1.971m1.136-2.864a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m3.875.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChatBubbleOvalSmiley1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleOvalSmiley2Icon],svg[streamline-chat-bubble-oval-smiley-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.998.56a6.44 6.44 0 0 0-5.36 10.007L.558 13.44l3.617-.654A6.44 6.44 0 1 0 6.998.56"></svg:path><svg:path d="M4.75 5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M7 11a3.5 3.5 0 0 0 3.5-3.5h-7A3.5 3.5 0 0 0 7 11"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleOvalSmiley2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleOvalSmiley2SolidIcon],svg[streamline-chat-bubble-oval-smiley-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.998.06a6.94 6.94 0 1 1-2.892 13.246l-3.458.626a.5.5 0 0 1-.557-.668l.991-2.64A6.94 6.94 0 0 1 6.998.06M4.75 5.313a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m5.219-.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M10.5 7.5a3.5 3.5 0 1 1-7 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChatBubbleOvalSmiley2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleOvalSolidIcon],svg[streamline-chat-bubble-oval-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.02.736a6.954 6.954 0 0 0-8.95 9.897l-.993 2.645a.5.5 0 0 0 .556.668l3.466-.627A6.953 6.953 0 0 0 10.02.736" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChatBubbleOvalSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleSquareBlockIcon],svg[streamline-chat-bubble-square-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.578 9.751a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5m2.3-.951l-4.6-4.6"></svg:path><svg:path d="m4.5 12.5l-4 1l1-3v-9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1z"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleSquareBlockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleSquareBlockSolidIcon],svg[streamline-chat-bubble-square-block-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 0A1.5 1.5 0 0 0 1 1.5v8.919l-.974 2.923a.5.5 0 0 0 .595.643L4.561 13H12.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 12.5 0zm2.833 5.14A2.625 2.625 0 0 0 8.94 8.746zm-.54-1.334a3.875 3.875 0 0 0 5.48 5.48a1 1 0 0 0 .09-.09a3.875 3.875 0 0 0-5.48-5.48a.6.6 0 0 0-.09.09m1.424.45l3.606 3.606a2.625 2.625 0 0 0-3.606-3.606" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChatBubbleSquareBlockSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleSquareQuestionIcon],svg[streamline-chat-bubble-square-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4.5 12.5l-4 1l1-3v-9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1z"></svg:path><svg:path d="M6 5a1.5 1.5 0 1 1 1.5 1.5v1m0 2.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleSquareQuestionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleSquareQuestionSolidIcon],svg[streamline-chat-bubble-square-question-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.44.44A1.5 1.5 0 0 1 2.5 0h10A1.5 1.5 0 0 1 14 1.5v10a1.5 1.5 0 0 1-1.5 1.5H4.562l-3.94.985a.5.5 0 0 1-.596-.643L1 10.419V1.5c0-.398.158-.78.44-1.06m5.692 3.19a1.007 1.007 0 1 1 .385 1.936a.625.625 0 0 0-.625.625V7.28a.625.625 0 1 0 1.25 0v-.551A2.256 2.256 0 1 0 5.261 4.56a.625.625 0 1 0 1.25 0a1.01 1.01 0 0 1 .621-.93m.385 6.994a.897.897 0 1 1 .002 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChatBubbleSquareQuestionSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleSquareWarningIcon],svg[streamline-chat-bubble-square-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4.5 12.5l-4 1l1-3v-9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zm3-9.5v3.5"></svg:path><svg:path d="M7.5 9.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleSquareWarningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleSquareWarningSolidIcon],svg[streamline-chat-bubble-square-warning-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.44.44A1.5 1.5 0 0 1 2.5 0h10A1.5 1.5 0 0 1 14 1.5v10a1.5 1.5 0 0 1-1.5 1.5H4.562l-3.94.985a.5.5 0 0 1-.596-.643L1 10.419V1.5c0-.398.158-.78.44-1.06m6.753 2.355a.625.625 0 1 0-1.25 0v3.659a.625.625 0 1 0 1.25 0zM6.571 9.581a.998.998 0 1 1 1.995 0a.998.998 0 0 1-1.995 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChatBubbleSquareWarningSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleSquareWriteIcon],svg[streamline-chat-bubble-square-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.5.5h-5a1 1 0 0 0-1 1v9l-1 3l4-1h8a1 1 0 0 0 1-1v-5"></svg:path><svg:path d="m8.363 8.137l-3 .54l.5-3.04l4.73-4.71a1 1 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42z"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleSquareWriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleSquareWriteSolidIcon],svg[streamline-chat-bubble-square-write-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.88 8.388a1.25 1.25 0 0 1-.664.348l-3 .54A1.25 1.25 0 0 1 4.76 7.843l.5-3.04a1.25 1.25 0 0 1 .351-.683L9.75 0H2.5A1.5 1.5 0 0 0 1 1.5v8.919l-.974 2.923a.5.5 0 0 0 .595.643L4.561 13H12.5a1.5 1.5 0 0 0 1.5-1.5V4.25zM12.319.077a1 1 0 0 0-1.095.219l-4.73 4.71l-.5 3.04l3-.54l4.71-4.73a1 1 0 0 0 0-1.42l-1.06-1.06a1 1 0 0 0-.325-.22Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChatBubbleSquareWriteSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleTextSquareIcon],svg[streamline-chat-bubble-text-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.5l-4 1l1-3v-9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zm0-7.5h6m-6 3h4"></svg:path>`,
})
export class StreamlineChatBubbleTextSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleTextSquareSolidIcon],svg[streamline-chat-bubble-text-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 0A1.5 1.5 0 0 0 1 1.5v8.919l-.974 2.923a.5.5 0 0 0 .595.643L4.561 13H12.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 12.5 0zm1.375 4.846c0-.346.28-.625.625-.625h6a.625.625 0 1 1 0 1.25h-6a.625.625 0 0 1-.625-.625M4.5 7.529a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChatBubbleTextSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleTypingOvalIcon],svg[streamline-chat-bubble-typing-oval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.002 7.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m-2.75.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m5.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path><svg:path d="M6.998.56a6.44 6.44 0 0 0-5.36 10.007L.558 13.44l3.617-.654A6.44 6.44 0 1 0 6.998.56"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleTypingOvalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleTypingOvalSolidIcon],svg[streamline-chat-bubble-typing-oval-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.998.046A6.954 6.954 0 1 1 4.099 13.32l-3.466.627a.5.5 0 0 1-.556-.668l.994-2.646A6.954 6.954 0 0 1 6.998.046M5 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChatBubbleTypingOvalSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatTwoBubblesOvalIcon],svg[streamline-chat-two-bubbles-oval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.25 5a4.25 4.25 0 0 1 3.54 6.6l.71 1.9l-2.39-.43A4.25 4.25 0 1 1 9.25 5"></svg:path><svg:path d="M9.86 2.51A5.24 5.24 0 0 0 .5 5.75a5.2 5.2 0 0 0 .88 2.91L.5 11l2.12-.38"></svg:path></svg:g>`,
})
export class StreamlineChatTwoBubblesOvalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChatTwoBubblesOvalSolidIcon],svg[streamline-chat-two-bubbles-oval-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.515 0A5.515 5.515 0 0 0 .921 8.565l-.737 1.972a.3.3 0 0 0 .335.4l2.583-.465q.385.188.792.314a5.75 5.75 0 0 1 6.897-6.89A5.51 5.51 0 0 0 5.515 0m7.167 6.318a4.5 4.5 0 0 0-6.705.379a4.5 4.5 0 0 0 5.493 6.848l2.012.362a.3.3 0 0 0 .334-.4l-.568-1.519a4.5 4.5 0 0 0-.566-5.67" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChatTwoBubblesOvalSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCheckIcon],svg[streamline-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 8.55l2.73 3.51a1 1 0 0 0 1.56.03L13.5 1.55"></svg:path>`,
})
export class StreamlineCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCheckSolidIcon],svg[streamline-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.637 1.198a1 1 0 0 1 .134 1.408l-8.04 9.73l-.003.002a1.92 1.92 0 0 1-1.5.693a1.92 1.92 0 0 1-1.499-.748l-.001-.002L.21 9.045a1 1 0 1 1 1.578-1.228l2.464 3.167l7.976-9.652a1 1 0 0 1 1.408-.134Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCheckSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCheckSquareIcon],svg[streamline-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5.5h-7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3"></svg:path><svg:path d="m9.917 4.75l-4 5l-2-1.5"></svg:path></svg:g>`,
})
export class StreamlineCheckSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCheckSquareSolidIcon],svg[streamline-check-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 0A3.5 3.5 0 0 0 0 3.5v7A3.5 3.5 0 0 0 3.5 14h7a3.5 3.5 0 0 0 3.5-3.5v-7A3.5 3.5 0 0 0 10.5 0zm7.003 5.219A.75.75 0 0 0 9.33 4.28L5.786 8.714L4.367 7.65a.75.75 0 1 0-.9 1.2l2 1.5a.75.75 0 0 0 1.036-.131z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCheckSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCheckupMedicalReportClipboardIcon],svg[streamline-checkup-medical-report-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:path d="M8.5.5h-3a1 1 0 0 0-1 1V2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1M6.303 5.21a.43.43 0 0 0-.43.43v1.207H4.666a.43.43 0 0 0-.43.43v1.395c0 .237.193.43.43.43h1.207v1.207c0 .237.193.43.43.43h1.395a.43.43 0 0 0 .43-.43V9.1h1.207a.43.43 0 0 0 .43-.43V7.277a.43.43 0 0 0-.43-.429H8.128V5.639a.43.43 0 0 0-.43-.429z"></svg:path></svg:g>`,
})
export class StreamlineCheckupMedicalReportClipboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCheckupMedicalReportClipboardSolidIcon],svg[streamline-checkup-medical-report-clipboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zm6.25 0h.5a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5h-8.5a1.5 1.5 0 0 1-1.5-1.5v-10A1.5 1.5 0 0 1 2.75 1h.5v.5A2.25 2.25 0 0 0 5.5 3.75h3a2.25 2.25 0 0 0 2.25-2.25zM5.97 5.948c0-.217.176-.392.393-.392h1.275c.216 0 .392.175.392.392v1.56h1.56c.217 0 .392.176.392.393v1.275a.39.39 0 0 1-.392.392H8.03v1.56a.39.39 0 0 1-.392.393H6.362a.39.39 0 0 1-.392-.393v-1.56H4.41a.39.39 0 0 1-.392-.392V7.9c0-.217.175-.393.392-.393h1.56z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCheckupMedicalReportClipboardSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCheeseIcon],svg[streamline-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.09.77L9 .75L.75 5.61A.47.47 0 0 0 .5 6v6.71a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-7A5.88 5.88 0 0 0 9.09.77M.59 5.75H13"></svg:path><svg:path d="m.5 10.38l.08-.07A2 2 0 0 1 2 9.71a2 2 0 0 1 2 2a2 2 0 0 1-.59 1.41M9 10.75a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path></svg:g>`,
})
export class StreamlineCheeseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCheeseSolidIcon],svg[streamline-cheese-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5.66A6.55 6.55 0 0 0 9 .05a.79.79 0 0 0-.67.06L.62 5A1.32 1.32 0 0 0 0 6v4.4a.74.74 0 0 0 .49.7a.73.73 0 0 0 .82-.21a1.25 1.25 0 1 1 1.76 1.76a.73.73 0 0 0-.21.82a.74.74 0 0 0 .7.49h9.19A1.25 1.25 0 0 0 14 12.75zM8.75 11a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5m-4.5-6A.24.24 0 0 1 4 4.82a.25.25 0 0 1 .1-.28l4.57-2.86a.52.52 0 0 1 .44-.05a5.2 5.2 0 0 1 3.1 3a.24.24 0 0 1 0 .23A.23.23 0 0 1 12 5z"></svg:path>`,
})
export class StreamlineCheeseSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCherriesIcon],svg[streamline-cherries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.36 13.5a2.6 2.6 0 1 0 0-5.2a2.6 2.6 0 0 0 0 5.2m7.28-1.04a2.6 2.6 0 1 0 0-5.2a2.6 2.6 0 0 0 0 5.2"></svg:path><svg:path d="M9.41 7.57A10.36 10.36 0 0 1 6 .5a13.8 13.8 0 0 0-2.6 7.8M3.36.5h5.2"></svg:path></svg:g>`,
})
export class StreamlineCherriesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCherriesSolidIcon],svg[streamline-cherries-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.642 1.546A14 14 0 0 0 2.785 7.85a3.082 3.082 0 1 0 1.498.074a12.5 12.5 0 0 1 1.322-5.006a10.7 10.7 0 0 0 2.758 4.818a3.081 3.081 0 1 0 1.3-.828a9.2 9.2 0 0 1-2.812-5.363H8.48a.75.75 0 1 0 0-1.5H3.482a.75.75 0 1 0 0 1.5h1.16Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCherriesSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChessBishopIcon],svg[streamline-chess-bishop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.761 7.377c.433-.317.692-.807.692-1.505c0-1.97-2.454-3.095-2.454-3.095S4.546 3.902 4.546 5.872c0 .698.259 1.188.691 1.505c-.45 1.287-1.104 3.19-1.125 3.46h5.774c-.02-.27-.674-2.173-1.125-3.46"></svg:path><svg:path d="M5.861 1.639a1.139 1.139 0 1 0 2.277 0a1.139 1.139 0 0 0-2.277 0M7.389 5.47L8.732 4.1m-5.929 7.344a.89.89 0 0 1 .842-.607h6.71c.382 0 .721.244.842.607l.685 2.056H2.118z"></svg:path></svg:g>`,
})
export class StreamlineChessBishopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChessBishopSolidIcon],svg[streamline-chess-bishop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.911 1.194A1.09 1.09 0 1 1 7.734 2a6 6 0 0 1 .852.654L7.484 3.79a.625.625 0 0 0 .897.87l.98-1.009c.193.367.321.79.321 1.265c0 .554-.153 1.029-.459 1.402a2 2 0 0 1-.559.47l.01.03c.162.53.403 1.323.606 2.018c.073.248.141.485.199.694H4.521c.058-.209.126-.446.199-.694a170 170 0 0 1 .616-2.049c-.21-.12-.4-.275-.56-.47c-.305-.372-.458-.847-.458-1.401c0-1.093.678-1.908 1.265-2.413c.242-.208.483-.376.684-.503a1.1 1.1 0 0 1-.356-.805Zm-2.006 9.585c-.469.035-.927.304-1.111.77l-.611 1.548a.5.5 0 0 0 .465.683h8.706a.5.5 0 0 0 .465-.683l-.61-1.548c-.185-.466-.643-.735-1.112-.77z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChessBishopSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChessKingIcon],svg[streamline-chess-king-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.998 5.81l1.027 2.955l-.768 2.1h5.486l-.768-2.1l1.028-2.955c.142-.408-.176-.83-.625-.83H4.622c-.45 0-.766.422-.624.83M7 3.017V.5m-.755.755h1.51M8.963 4.98a1.963 1.963 0 0 0-3.926 0m-2.189 6.486c.12-.359.455-.6.833-.6h6.638c.378 0 .714.241.833.6l.678 2.034H2.17z"></svg:path>`,
})
export class StreamlineChessKingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChessKingSolidIcon],svg[streamline-chess-king-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.3.542a.5.5 0 1 0-1 0V.78h-.237a.5.5 0 0 0 0 1h.238v.567c-.78.168-1.433.722-1.637 1.471h-.185c-.361 0-.692.154-.906.411a.99.99 0 0 0-.17 1.001l1.003 2.605a.5.5 0 0 0 .076.134l-.217 1.56h4.97L9.03 8.055a.5.5 0 0 0 .166-.22L10.2 5.23a.99.99 0 0 0-.171-1a1.17 1.17 0 0 0-.906-.412h-.185C8.734 3.07 8.08 2.515 7.3 2.347V1.78h.237a.5.5 0 0 0 0-1H7.3zM9.898 10.78H3.705c-.469.035-.928.304-1.111.77l-.612 1.548a.5.5 0 0 0 .466.683h8.706a.5.5 0 0 0 .465-.683l-.611-1.548c-.184-.466-.643-.735-1.111-.77Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChessKingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChessKnightIcon],svg[streamline-chess-knight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.42 11.256a.97.97 0 0 1 .919-.662h7.322c.417 0 .787.267.92.662l.747 2.244H1.672zm1.152-.662c.158-.83 1.306-1.783 2.117-2.418c1.945-1.522 1.765-2.824 1.447-3.177L5.193 6.11a1.23 1.23 0 0 1-1.437-.154v0a1.23 1.23 0 0 1-.237-1.543L4.983 1.93L4.42.658c.93-.33 3.501-.155 4.518.635c1.27.989 2.894 2.489 1.553 9.3"></svg:path><svg:path d="M7.773 3.971a1.9 1.9 0 0 1-.631 1.03"></svg:path></svg:g>`,
})
export class StreamlineChessKnightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChessKnightSolidIcon],svg[streamline-chess-knight-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.088 4.16A1.733 1.733 0 0 0 5.11 6.69c.893-.63 1.795-1.58 2.185-2.864a.5.5 0 0 1 .957.29c-.455 1.5-1.468 2.586-2.443 3.303a7 7 0 0 1-.428.363c-.482.378-1.118.894-1.595 1.444a.5.5 0 0 0 .378.827h6.515a.5.5 0 0 0 .493-.418c.497-3.003.373-4.927-.072-6.244c-.454-1.345-1.226-2.002-1.856-2.492C8.622.415 7.608.162 6.702.059c-.91-.104-1.877-.076-2.45.128a.5.5 0 0 0-.29.674l.46 1.035zM1.72 12.093a1.47 1.47 0 0 1 1.387-.985h7.849c.63 0 1.188.401 1.39.996l.451 1.222a.5.5 0 0 1-.469.673H1.672a.5.5 0 0 1-.46-.694z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChessKnightSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChessPawnIcon],svg[streamline-chess-pawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.61 11.35a.93.93 0 0 1 .88-.636h7.02c.399 0 .754.256.88.635l.717 2.151H1.893zm2.069-8.529a2.321 2.321 0 1 0 4.642 0a2.321 2.321 0 1 0-4.642 0"></svg:path><svg:path d="M3.75 10.714c.996-.995 1.658-4.124 1.857-5.571m4.643 5.571C9.254 9.72 8.592 6.59 8.393 5.143m-4.179 0h5.572"></svg:path></svg:g>`,
})
export class StreamlineChessPawnIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChessPawnSolidIcon],svg[streamline-chess-pawn-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.356 3.14a2.644 2.644 0 1 1 4.891 1.395h.326a.75.75 0 0 1 0 1.5h-.687c.107.748.265 1.662.47 2.541c.075.328.157.65.245.953H4.399c.087-.304.17-.625.246-.953c.204-.88.362-1.793.469-2.541h-.687a.75.75 0 0 1 0-1.5h.326a2.63 2.63 0 0 1-.397-1.394Zm-.452 7.64c-.469.034-.927.303-1.111.769l-.611 1.548a.5.5 0 0 0 .465.683h8.706a.5.5 0 0 0 .465-.683l-.61-1.548c-.185-.466-.643-.735-1.112-.77z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChessPawnSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChickenGrilledStreamIcon],svg[streamline-chicken-grilled-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" d="M2.243 2.246v1.562m4.563-1.562v1.562M4.525 1.083v1.562"></svg:path><svg:path d="M11.509 4.602a.955.955 0 1 0 1.91 0a.955.955 0 1 0-1.91 0"></svg:path><svg:path stroke-linejoin="round" d="m10.841 8.677l.212.093c1.48.7 1.889 1.606 1.889 2.85v.298a1 1 0 0 1-1 1H1.64c-.327 0-.634-.161-.76-.463c-.277-.669-.599-2.013.238-3.685c1.21-2.416 4.187-2.947 6.094-1.947l.09.046"></svg:path><svg:path d="M10.158 10.006c.928-1.018.976-2.485.108-3.275s-2.323-.605-3.25.413c-.843.925-.96 2.219-.325 3.04q.096.127.217.235"></svg:path><svg:path stroke-linejoin="round" d="M11.806 5.296L10.32 6.781"></svg:path></svg:g>`,
})
export class StreamlineChickenGrilledStreamIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChickenGrilledStreamSolidIcon],svg[streamline-chicken-grilled-stream-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.15 1.145a.625.625 0 1 0-1.25 0v1.563a.625.625 0 1 0 1.25 0zm-2.907.538c.346 0 .625.28.625.625v1.563a.625.625 0 0 1-1.25 0V2.308c0-.345.28-.625.625-.625m4.563 0c.345 0 .625.28.625.625v1.563a.625.625 0 0 1-1.25 0V2.308c0-.345.28-.625.625-.625m5.658 1.526a1.455 1.455 0 0 0-1.362 1.97l-1.077.994c-.61-.268-1.348-.225-2.012.103a2.8 2.8 0 0 0-.666.543c-.846.929-.901 2.15-.349 2.866q.085.11.191.207a.5.5 0 1 1-.673.74a2.6 2.6 0 0 1-.309-.336c-.912-1.18-.697-2.944.4-4.15l.028-.03C4.562 5.501 1.862 6.23.67 8.608c-.918 1.834-.57 3.335-.252 4.101c.22.532.743.771 1.22.771h10.303a1.5 1.5 0 0 0 1.5-1.5v-.297c0-.676-.111-1.315-.463-1.89c-.268-.439-.657-.809-1.18-1.127a3.8 3.8 0 0 1-.826 1.455a.5.5 0 1 1-.74-.673c.666-.731.841-1.633.62-2.337l1.115-1.031l.034-.034a1.455 1.455 0 1 0 .462-2.836Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChickenGrilledStreamSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChristianCross1Icon],svg[streamline-christian-cross-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 3.5H9v-3H5v3H2v4h3v6h4v-6h3z"></svg:path>`,
})
export class StreamlineChristianCross1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChristianCross1SolidIcon],svg[streamline-christian-cross-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 0a.5.5 0 0 0-.5.5V3H2a.5.5 0 0 0-.5.5v4A.5.5 0 0 0 2 8h2.5v5.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V8H12a.5.5 0 0 0 .5-.5v-4A.5.5 0 0 0 12 3H9.5V.5A.5.5 0 0 0 9 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChristianCross1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChristianCross2Icon],svg[streamline-christian-cross-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5v13m-4-9h8"></svg:path>`,
})
export class StreamlineChristianCross2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChristianCross2SolidIcon],svg[streamline-christian-cross-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1.124a1 1 0 1 0-2 0V3.74H3.384a1 1 0 1 0 0 2H6v7.188a1 1 0 1 0 2 0V5.74h2.616a1 1 0 1 0 0-2H8z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChristianCross2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChristianityIcon],svg[streamline-christianity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 4s-3.67 6-8 6a5.6 5.6 0 0 1-5-3a5.6 5.6 0 0 1 5-3c4.33 0 8 6 8 6"></svg:path>`,
})
export class StreamlineChristianityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChristianitySolidIcon],svg[streamline-christianity-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.574 4.968A20 20 0 0 1 12.07 7a20 20 0 0 1 1.504 2.032q.087.134.17.272a1 1 0 0 1-.353 1.37c-.511.302-1.106.081-1.399-.401a15 15 0 0 0-.506-.762a18 18 0 0 0-.804-1.053c-1.308 1.206-3.056 2.353-5.036 2.355a5.94 5.94 0 0 1-3.175-.9A6.2 6.2 0 0 1 .225 7.452a1 1 0 0 1 0-.902a6.2 6.2 0 0 1 2.246-2.463a5.94 5.94 0 0 1 3.175-.899c1.98.002 3.728 1.149 5.036 2.355A18 18 0 0 0 11.89 3.89q.068-.105.132-.212a1 1 0 0 1 1.369-.352c.471.278.63.902.351 1.372a8 8 0 0 1-.168.27"></svg:path>`,
})
export class StreamlineChristianitySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChromeIcon],svg[streamline-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.86 7.047a6.187 6.187 0 1 0 12.374 0a6.187 6.187 0 1 0-12.374 0m6.187-2.432h5.691"></svg:path><svg:path d="M4.615 7.046a2.431 2.431 0 1 0 4.862 0a2.431 2.431 0 1 0-4.862 0m.318 1.218L2.087 3.335m7.061 4.924l-2.846 4.929"></svg:path></svg:g>`,
})
export class StreamlineChromeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineChromeSolidIcon],svg[streamline-chrome-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.75 7a6.75 6.75 0 0 1-6.725 6.75l2.824-4.892a3.4 3.4 0 0 0 .552-1.859c0-.643-.178-1.244-.488-1.757h3.269a.8.8 0 0 0 .32-.065c.162.58.248 1.191.248 1.823m-.914-3.394A6.75 6.75 0 0 0 7 .25c-1.941 0-3.691.82-4.923 2.131a.8.8 0 0 1 .162.195l1.698 2.94a3.4 3.4 0 0 1 3.3-1.91zM.25 7a6.75 6.75 0 0 0 5.199 6.571a.8.8 0 0 1 .09-.246l1.692-2.931A3.4 3.4 0 0 1 4.119 8.81a1 1 0 0 1-.075-.107L1.133 3.66A6.7 6.7 0 0 0 .25 7m8.393.947l.04-.061a1.902 1.902 0 1 0-.108.18z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChromeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCircleIcon],svg[streamline-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path>`,
})
export class StreamlineCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCircleClockIcon],svg[streamline-circle-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M7 4.5V7l2.54 2.96"></svg:path></svg:g>`,
})
export class StreamlineCircleClockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCircleClockSolidIcon],svg[streamline-circle-clock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14m.625-9.5a.625.625 0 1 0-1.25 0V7c0 .146.051.288.145.4l2.5 3a.625.625 0 1 0 .96-.8L7.625 6.774z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCircleClockSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCircleFlaskIcon],svg[streamline-circle-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.494 4.767V.523H5.505v4.244a4.483 4.483 0 1 0 2.99 0ZM4 .523h6"></svg:path>`,
})
export class StreamlineCircleFlaskIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCircleFlaskSolidIcon],svg[streamline-circle-flask-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.456.005a.75.75 0 0 0 0 1.5H5v2.907a5 5 0 1 0 4 0V1.505h.544a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCircleFlaskSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCircleSolidIcon],svg[streamline-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7a7 7 0 1 0 14 0A7 7 0 1 0 0 7"></svg:path>`,
})
export class StreamlineCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCityHallIcon],svg[streamline-city-hall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.707 13.438h12.75M3.86 5.687l3.222-2.53l3.222 2.53M4.35 7.813h5.464v5.625H4.35V7.811ZM3.238 5.688h7.688v2.121H3.238zM1.618 7.81v5.628M12.546 7.81v5.625M.707 7.81h12.75M7.082 3.156V.674m0 0h1.25"></svg:path><svg:path d="M6.095 11.203a.93.93 0 0 1 .931-.93v0a.93.93 0 0 1 .931.93v2.235H6.095z"></svg:path></svg:g>`,
})
export class StreamlineCityHallIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCityHallSolidIcon],svg[streamline-city-hall-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 .05a.75.75 0 0 0-.75.75v2.305L2.963 5.27a.5.5 0 0 0-.204.561l.001.002h8.644v-.002a.5.5 0 0 0-.203-.561L7.75 2.997V1.551h.621a.75.75 0 0 0 0-1.5zm6.242 8.51h-.196v3.934h.196a.75.75 0 0 1 0 1.5H.922a.75.75 0 0 1 0-1.5h.196V8.559H.922a.75.75 0 1 1 0-1.5h12.32a.75.75 0 0 1 0 1.5Zm-2.106 0h-1.25v3.934h1.25V8.559Zm-7.022 0h-1.25v3.934h1.25V8.559Zm3.843 3.934v-2.11a.93.93 0 1 0-1.862 0v2.11z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCityHallSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineClassLessonIcon],svg[streamline-class-lesson-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.35.5h6.302c.469 0 .849.38.849.849v6.778c0 .47-.38.85-.849.85H7.5M3.149 4.001a1.75 1.75 0 1 0 0-3.501a1.75 1.75 0 0 0 0 3.501"></svg:path><svg:path d="M9 5.527C9 4.96 8.54 4.5 7.973 4.5H3.149v0A2.65 2.65 0 0 0 .5 7.149V9.5h1.135l.379 4h2.27l.872-6.945h2.817C8.54 6.555 9 6.095 9 5.527"></svg:path></svg:g>`,
})
export class StreamlineClassLessonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineClassLessonSolidIcon],svg[streamline-class-lesson-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.402 8.976H7.259a2.278 2.278 0 0 0-.193-4.547h-1.68A3.095 3.095 0 0 0 4.609 0h7.793a1.35 1.35 0 0 1 1.348 1.35v6.279c0 .744-.604 1.348-1.348 1.348ZM2.898 4.431a1.848 1.848 0 1 0 0-3.695a1.848 1.848 0 0 0 0 3.695m5.195 2.276c0-.568-.46-1.028-1.027-1.028H2.899a2.65 2.65 0 0 0-2.65 2.65v1.205c0 .532.432.963.964.963h.172l.282 2.61A1 1 0 0 0 2.66 14h.502a1 1 0 0 0 .99-.862l.753-5.404h2.16c.567 0 1.027-.46 1.027-1.027Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineClassLessonSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCleanWaterAndSanitationIcon],svg[streamline-clean-water-and-sanitation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.942 1.812A1.015 1.015 0 0 1 3.95.671h5.823c.61 0 1.083.535 1.007 1.141l-.761 6.093c-.064.508-.496.89-1.008.89h-4.3c-.512 0-.944-.382-1.007-.89zm3.806 6.977v4.39m-1.463-1.464l1.463 1.463l1.463-1.463"></svg:path><svg:path d="M3.307 4.714c3.628.518 3.628-1.555 7.255-1.036"></svg:path></svg:g>`,
})
export class StreamlineCleanWaterAndSanitationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCleanWaterAndSanitationSolidIcon],svg[streamline-clean-water-and-sanitation-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.198 2.022A1.765 1.765 0 0 1 3.95.038h5.823c1.062 0 1.883.93 1.752 1.984l-.762 6.092A1.765 1.765 0 0 1 9.01 9.661H7.498v1.304h.713a.75.75 0 0 1 .53 1.28l-1.46 1.461a.75.75 0 0 1-1.066-.002l-1.46-1.459a.75.75 0 0 1 .53-1.28h.713V9.661H4.712c-.89 0-1.642-.663-1.752-1.547zM5.351 5.22c-.342.07-.739.11-1.23.089l-.434-3.473a.265.265 0 0 1 .263-.298h5.823c.16 0 .283.14.263.298l-.289 2.31a6 6 0 0 0-1.54.097c-.607.12-1.091.329-1.53.516l-.013.006c-.437.188-.83.354-1.313.455" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCleanWaterAndSanitationSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineClipboardAddIcon],svg[streamline-clipboard-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5.5h-3a1 1 0 0 0-1 1V2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1M7 6v5m2.5-2.5h-5"></svg:path><svg:path d="M9.75 1.5h1.5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path></svg:g>`,
})
export class StreamlineClipboardAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineClipboardAddSolidIcon],svg[streamline-clipboard-add-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 0a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM2.75 1h.5v.5A2.25 2.25 0 0 0 5.5 3.75h3a2.25 2.25 0 0 0 2.25-2.25V1h.5a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5h-8.5a1.5 1.5 0 0 1-1.5-1.5v-10A1.5 1.5 0 0 1 2.75 1m5 5.001a.75.75 0 1 0-1.5 0v1.75H4.5a.75.75 0 1 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0v-1.75H9.5a.75.75 0 0 0 0-1.5H7.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineClipboardAddSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineClipboardCheckIcon],svg[streamline-clipboard-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5.5h-3a1 1 0 0 0-1 1V2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1"></svg:path><svg:path d="M9.75 1.5h1.5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:path d="m5 9l1.5 1l3-4"></svg:path></svg:g>`,
})
export class StreamlineClipboardCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineClipboardCheckSolidIcon],svg[streamline-clipboard-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 0a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM3.25 1h-.5a1.5 1.5 0 0 0-1.5 1.5v10a1.5 1.5 0 0 0 1.5 1.5h8.5a1.5 1.5 0 0 0 1.5-1.5v-10a1.5 1.5 0 0 0-1.5-1.5h-.5v.5A2.25 2.25 0 0 1 8.5 3.75h-3A2.25 2.25 0 0 1 3.25 1.5zm6.7 4.9a.75.75 0 0 1 .15 1.05l-3 4a.75.75 0 0 1-1.016.174l-1.5-1a.75.75 0 1 1 .832-1.248l.91.606L8.9 6.05a.75.75 0 0 1 1.05-.15" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineClipboardCheckSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineClipboardRemoveIcon],svg[streamline-clipboard-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5.5h-3a1 1 0 0 0-1 1V2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1m1 8h-5"></svg:path><svg:path d="M9.75 1.5h1.5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path></svg:g>`,
})
export class StreamlineClipboardRemoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineClipboardRemoveSolidIcon],svg[streamline-clipboard-remove-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 0a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM3.25 1h-.5a1.5 1.5 0 0 0-1.5 1.5v10a1.5 1.5 0 0 0 1.5 1.5h8.5a1.5 1.5 0 0 0 1.5-1.5v-10a1.5 1.5 0 0 0-1.5-1.5h-.5v.5A2.25 2.25 0 0 1 8.5 3.75h-3A2.25 2.25 0 0 1 3.25 1.5zm.5 7.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineClipboardRemoveSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineClosetIcon],svg[streamline-closet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M7 .5v13m2.5-7v1m-5-1v1"></svg:path>`,
})
export class StreamlineClosetIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineClosetSolidIcon],svg[streamline-closet-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.375 0H2.5A1.5 1.5 0 0 0 1 1.5v11A1.5 1.5 0 0 0 2.5 14h3.875zm1.25 14H11.5a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 11.5 0H7.625zM9.5 5.837c.345 0 .625.28.625.625v1.076a.625.625 0 1 1-1.25 0V6.462c0-.346.28-.625.625-.625m-4.375.625a.625.625 0 1 0-1.25 0v1.076a.625.625 0 1 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineClosetSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudIcon],svg[streamline-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 6.5a2.5 2.5 0 0 0-1.5.5A4.5 4.5 0 1 0 5 11.5h6a2.5 2.5 0 0 0 0-5"></svg:path>`,
})
export class StreamlineCloudIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudAddIcon],svg[streamline-cloud-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.392 9.283H4.608M7 6.891v4.784m-3.08-.682a3.193 3.193 0 0 1-.428-6.371a.23.23 0 0 0 .21-.127a3.868 3.868 0 0 1 7.508.91a.25.25 0 0 0 .173.2a2.73 2.73 0 0 1-.61 5.388"></svg:path>`,
})
export class StreamlineCloudAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudAddSolidIcon],svg[streamline-cloud-add-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.883.06a4.37 4.37 0 0 0-4.582 2.718a3.693 3.693 0 0 0-.743 7.18A2 2 0 0 1 4.5 8.438H5v-.5a2 2 0 1 1 4 0v.5h.5a2 2 0 0 1 1.963 1.617a3.231 3.231 0 0 0 .223-6.246A4.37 4.37 0 0 0 7.883.061ZM3.75 10.439a.75.75 0 0 1 .75-.75h1.75v-1.75a.75.75 0 1 1 1.5 0v1.75H9.5a.75.75 0 0 1 0 1.5H7.75v1.75a.75.75 0 0 1-1.5 0v-1.75H4.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCloudAddSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudBlockIcon],svg[streamline-cloud-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 12.044a2.8 2.8 0 1 1 0-5.6a2.8 2.8 0 0 1 0 5.6m1.982-.818L5.018 7.263"></svg:path><svg:path d="M2.819 10.874a3.193 3.193 0 0 1 .673-6.252a.23.23 0 0 0 .21-.127a3.868 3.868 0 0 1 7.508.91a.25.25 0 0 0 .173.2a2.73 2.73 0 0 1-.116 5.34"></svg:path></svg:g>`,
})
export class StreamlineCloudBlockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudBlockSolidIcon],svg[streamline-cloud-block-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.041.748a4.368 4.368 0 0 1 6.645 3.115a3.23 3.23 0 0 1 .208 6.118a4.906 4.906 0 0 0-9.776-.145a3.692 3.692 0 0 1 1.183-7.004A4.37 4.37 0 0 1 5.04.748ZM7 8.198a2.127 2.127 0 0 1 1.938 3.004L6.123 8.386A2.1 2.1 0 0 1 7 8.198m-2.517-.485a1 1 0 0 0-.095.095a3.627 3.627 0 1 0 .095-.095m3.395 4.55a2.127 2.127 0 0 1-2.816-2.816z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCloudBlockSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudCheckIcon],svg[streamline-cloud-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m9.803 8.55l-3.206 3.606l-1.603-1.202"></svg:path><svg:path d="M10.773 10.993a2.73 2.73 0 0 0 .61-5.388a.25.25 0 0 1-.173-.2a3.868 3.868 0 0 0-7.509-.91a.23.23 0 0 1-.21.127a3.192 3.192 0 0 0-.255 6.343"></svg:path></svg:g>`,
})
export class StreamlineCloudCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudCheckSolidIcon],svg[streamline-cloud-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.883.115a4.37 4.37 0 0 0-4.582 2.717a3.693 3.693 0 0 0-.972 7.097a2 2 0 0 1 2.87-.5l.529.395L8.505 6.7a2 2 0 1 1 2.99 2.658l-.738.83h.019a3.23 3.23 0 0 0 .91-6.324A4.37 4.37 0 0 0 7.883.115m2.678 8.412a.75.75 0 0 0-1.122-.997l-3.541 3.984l-1.448-1.086a.75.75 0 0 0-.9 1.2l2 1.5a.75.75 0 0 0 1.01-.101l4-4.5Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCloudCheckSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudDataTransferIcon],svg[streamline-cloud-data-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.984 8.848l1.968-1.74v5.218m4.065-1.739l-1.969 1.739V7.108"></svg:path><svg:path d="M3.92 10.842a3.193 3.193 0 0 1-.428-6.37a.23.23 0 0 0 .21-.128a3.868 3.868 0 0 1 7.508.91a.25.25 0 0 0 .173.2a2.73 2.73 0 0 1 .502 5.144"></svg:path></svg:g>`,
})
export class StreamlineCloudDataTransferIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudDataTransferSolidIcon],svg[streamline-cloud-data-transfer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.883.115a4.37 4.37 0 0 0-4.582 2.717a3.693 3.693 0 0 0-1.706 6.7a2 2 0 0 1 .557-1.753l2-2A2 2 0 0 1 7 5.799a2 2 0 0 1 3.434 1.394v2a2 2 0 0 1 1.56.748a3.229 3.229 0 0 0-.308-6.078A4.37 4.37 0 0 0 7.883.115M5.853 6.5a.75.75 0 0 1 .463.693v6a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 .817-.163m3.331.693a.75.75 0 1 0-1.5 0v6a.75.75 0 0 0 1.28.53l2-2a.75.75 0 0 0-1.06-1.06l-.72.72z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCloudDataTransferSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudGaming1Icon],svg[streamline-cloud-gaming-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.579 6.126v2.786M3.186 7.519h2.786M.5 7a4.643 4.643 0 0 0 4.643 4.643h4.643a3.714 3.714 0 1 0-.856-7.33A4.643 4.643 0 0 0 .5 7"></svg:path><svg:path d="M9.131 7.853a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m2.139.25a.125.125 0 1 1 0-.25m0 .25a.125.125 0 0 0 0-.25m-1.045-.797a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m0 2.388a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25"></svg:path></svg:g>`,
})
export class StreamlineCloudGaming1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
