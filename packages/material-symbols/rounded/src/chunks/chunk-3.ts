import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDragClickRoundedIcon],svg[material-symbols-drag-click-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18q-1.775 0-3.262-.937T6.525 14.5q-.15-.35 0-.7t.525-.5q.375-.175.788-.012t.612.587q.525.975 1.475 1.55T12 16q1.65 0 2.825-1.175T16 12q0-1.125-.587-2.062T13.85 8.474q-.4-.2-.55-.612t.025-.788t.513-.525t.687 0q1.575.725 2.525 2.212T18 12q0 2.5-1.75 4.25T12 18m0 4q-3.95 0-6.85-2.675T1.975 12.75q-.025-.4.238-.7t.687-.325t.763.263t.387.737q.4 3.1 2.688 5.188T12 20q3.35 0 5.675-2.325T20 12q0-3.125-2.075-5.387T12.7 4.05q-.45-.05-.737-.375t-.263-.75t.325-.7t.7-.25q1.95.125 3.638.975T19.3 5.163t1.975 3.125T22 12q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22M9.55 11.5l-3.3-3.275L5.5 10.5q-.125.35-.475.338t-.475-.363L2.275 2.9q-.1-.3.113-.512t.512-.113l7.575 2.275q.35.125.363.475T10.5 5.5l-2.275.75l3.3 3.3q.425.425.425.975t-.425.975t-.987.425t-.988-.425"></svg:path>`,
})
export class MaterialSymbolsDragClickRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDragHandleRoundedIcon],svg[material-symbols-drag-handle-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15q-.425 0-.712-.288T4 14t.288-.712T5 13h14q.425 0 .713.288T20 14t-.288.713T19 15zm0-4q-.425 0-.712-.288T4 10t.288-.712T5 9h14q.425 0 .713.288T20 10t-.288.713T19 11z"></svg:path>`,
})
export class MaterialSymbolsDragHandleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDragPanRoundedIcon],svg[material-symbols-drag-pan-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13H5.875l1.1 1.075q.3.3.3.725t-.3.725t-.725.3t-.725-.3L2.7 12.7q-.15-.15-.213-.325T2.426 12t.063-.375t.212-.325l2.825-2.825q.3-.3.713-.3t.712.3t.3.713t-.3.712L5.85 11H11V5.85L9.875 6.975q-.3.3-.7.288t-.7-.313t-.3-.712t.3-.713L11.3 2.7q.15-.15.325-.213T12 2.425t.375.062t.325.213l2.85 2.85q.3.3.3.7t-.3.7t-.713.3t-.712-.3L13 5.85V11h5.125l-1.1-1.075q-.3-.3-.3-.725t.3-.725t.725-.3t.725.3L21.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-2.85 2.85q-.3.3-.7.288t-.7-.313t-.3-.712t.3-.713l1.1-1.1H13v5.125l1.075-1.1q.3-.3.725-.3t.725.3t.3.725t-.3.725L12.7 21.3q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213l-2.85-2.85q-.3-.3-.287-.712t.312-.713t.713-.3t.712.3L11 18.15z"></svg:path>`,
})
export class MaterialSymbolsDragPanRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDrawCollageOutlineRoundedIcon],svg[material-symbols-draw-collage-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.075 20h1.4v-2.075l2.55-.6q.525-.125 1.088-.288t.562-.512q0-.2-.2-.362t-.675-.313q-.95-.275-1.45-.85t-.45-1.225q.05-.525.488-.937t1.237-.688q.7-.25 1.038-.562T21 10.85q0-.5-.425-.762T19.65 10q-.15.05-.312.075t-.313.025q-.65 0-1.088-.5T17.5 8.375q0-.65.338-1.187T18.175 6q0-.425-.363-.712T16.926 5q-.725 0-1.012.313T15.625 6.5q0 .425.038.825t.037.825q0 1.125-.4 1.65t-1.25.525q-.275 0-.575-.075t-.575-.075q-.15 0-.238.063t-.087.187q0 .25.3.5t.575.475q.65.575.95 1.1t.3 1.05q0 .675-.487 1.15t-1.188.475q-.275 0-.525-.05t-.525-.075q-.7-.05-1.075.125t-.375.525t.325.575t.95.325l3.275.525zm-12.15.6q-.375-.175-.525-.575t.025-.775L6.6 10.075q.175-.375.55-.525t.75.025t.525.575t-.025.775L4.225 20.1q-.175.375-.55.525t-.75-.025m11.15 1.4q-.425 0-.712-.288T13.075 21v-2.2l-1.425-.2q-1.375-.2-2.238-.987t-.862-1.838q0-1.2.988-2.013t2.362-.737q.125 0 .213.013t.187.037q-.2-.2-.375-.363t-.325-.337q-.5-.55-.725-1.012t-.225-.938q0-.95.538-1.562T12.6 8.25q.175 0 .475.013t.65.062q.05-.5 0-1.025t-.05-1.025q0-1.575.85-2.425T16.95 3q1.4 0 2.338.8t.912 1.95q0 .575-.2 1.125t-.45 1.075q.125-.025.263-.038t.262-.012q1.2 0 2.063.862T23 10.875q0 1.075-.763 1.938T20.45 13.95q.175.05.325.1t.3.125q.725.35 1.175.988t.45 1.387q0 .95-.837 1.663T19.475 19.3l-1 .25V21q0 .425-.288.713t-.712.287zm-9.9-12.15q-.3.3-.738.275t-.662-.375q-.4-.6-.587-1.3T2 7.025q0-2.1 1.45-3.562T7 2q.725 0 1.425.213t1.325.612q.35.225.375.638t-.275.712t-.725.313T8.3 4.3q-.3-.15-.625-.225T7 4q-1.25 0-2.125.875T4 7q0 .35.075.675t.2.625q.2.4.2.825t-.3.725m11.6 3.925"></svg:path>`,
})
export class MaterialSymbolsDrawCollageOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDrawCollageRoundedIcon],svg[material-symbols-draw-collage-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.925 20.6q-.375-.175-.525-.575t.025-.775L6.6 10.075q.175-.375.55-.525t.75.025t.525.575t-.025.775L4.225 20.1q-.175.375-.55.525t-.75-.025m11.15 1.4q-.425 0-.712-.288T13.075 21v-2.2l-1.425-.2q-1.375-.2-2.238-.987t-.862-1.838q0-1.2.988-2.013t2.362-.737q.125 0 .213.013t.187.037q-.2-.2-.375-.363t-.325-.337q-.5-.55-.725-1.012t-.225-.938q0-.95.538-1.562T12.6 8.25q.175 0 .475.013t.65.062q.05-.5 0-1.025t-.05-1.025q0-1.575.85-2.425T16.95 3q1.4 0 2.338.8t.912 1.95q0 .575-.2 1.125t-.45 1.075q.125-.025.263-.038t.262-.012q1.2 0 2.063.862T23 10.875q0 1.075-.763 1.938T20.45 13.95q.175.05.325.1t.3.125q.725.35 1.175.988t.45 1.387q0 .95-.837 1.663T19.475 19.3l-1 .25V21q0 .425-.288.713t-.712.287zm-9.9-12.15q-.3.3-.738.275t-.662-.375q-.4-.6-.587-1.3T2 7.025q0-2.1 1.45-3.562T7 2q.725 0 1.425.213t1.325.612q.35.225.375.638t-.275.712t-.725.313T8.3 4.3q-.3-.15-.625-.225T7 4q-1.25 0-2.125.875T4 7q0 .35.075.675t.2.625q.2.4.2.825t-.3.725"></svg:path>`,
})
export class MaterialSymbolsDrawCollageRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDrawOutlineRoundedIcon],svg[material-symbols-draw-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.425 0-.712-.288T4 20v-2.425q0-.4.15-.763t.425-.637L17.175 3.6q.3-.3.675-.45T18.6 3q.4 0 .763.15T20 3.6L21.4 5q.3.275.45.638T22 6.4q0 .375-.15.75t-.45.675l-12.575 12.6q-.275.275-.637.425t-.763.15zm1-2h1.4l9.825-9.8l-.7-.725l-.725-.7L6 17.6zM20 6.425L18.575 5zm-3.475 2.05l-.725-.7L17.225 9.2zM14 21q1.85 0 3.425-.925T19 17.5q0-.8-.4-1.388t-1.05-1.087q-.35-.25-.75-.25t-.675.3t-.275.738t.35.687q.35.275.575.5t.225.5q0 .575-.913 1.038T14 19q-.425 0-.712.288T13 20t.288.713T14 21M9 6q0 .35-.437.638T6.55 7.65q-2 .875-2.775 1.588T3 11q0 .65.3 1.15t.775.875q.325.275.725.238t.675-.363t.25-.725t-.35-.675q-.175-.125-.275-.25T5 11q0-.3.45-.6t1.9-.925q2.2-.95 2.925-1.725T11 6q0-1.375-1.1-2.187T7 3q-1.125 0-2.013.4t-1.362.975Q3.35 4.7 3.4 5.1t.375.65q.325.275.725.225t.675-.325q.35-.35.775-.5T7 5q1.025 0 1.513.3T9 6"></svg:path>`,
})
export class MaterialSymbolsDrawOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDrawRoundedIcon],svg[material-symbols-draw-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.425 0-.712-.288T4 20v-2.425q0-.4.15-.763t.425-.637L17.175 3.6q.3-.3.675-.45T18.6 3q.4 0 .763.15T20 3.6L21.4 5q.3.275.45.638T22 6.4q0 .375-.15.75t-.45.675l-12.575 12.6q-.275.275-.637.425t-.763.15zM18.65 7.775L20 6.425L18.575 5l-1.35 1.35zM14 21q1.85 0 3.425-.925T19 17.5q0-.8-.4-1.388t-1.05-1.087q-.35-.25-.75-.25t-.675.3t-.275.738t.35.687q.35.275.575.5t.225.5q0 .575-.913 1.038T14 19q-.425 0-.712.288T13 20t.288.713T14 21M9 6q0 .35-.437.638T6.55 7.65q-2 .875-2.775 1.588T3 11q0 .65.3 1.15t.775.875q.325.275.725.238t.675-.363t.25-.725t-.35-.675q-.175-.125-.275-.25T5 11q0-.3.45-.6t1.9-.925q2.2-.95 2.925-1.725T11 6q0-1.375-1.1-2.187T7 3q-1.125 0-2.013.4t-1.362.975Q3.35 4.7 3.4 5.1t.375.65q.325.275.725.225t.675-.325q.35-.35.775-.5T7 5q1.025 0 1.513.3T9 6"></svg:path>`,
})
export class MaterialSymbolsDrawRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDriveExportRoundedIcon],svg[material-symbols-drive-export-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 17.4l-2.375 2.4q-.3.3-.712.3t-.713-.3t-.3-.712t.3-.713L18.575 16H17q-.425 0-.712-.287T16 15t.288-.712T17 14h4q.425 0 .713.288T22 15v4q0 .425-.288.713T21 20t-.712-.288T20 19zM5.5 21.5q-.425 0-.862-.262T4 20.625L1.5 16.25q-.2-.35-.2-.862t.2-.863L8 3.375q.2-.35.638-.613T9.5 2.5h5q.425 0 .863.263t.637.612l3.6 6.175q.3.525-.012 1.038t-.913.462q-.25-.025-.462-.137t-.338-.338L14.35 4.5h-4.7L3.3 15.4l2.35 4.1h7.4q.25 0 .45.1t.35.3q.35.5.088 1.05t-.888.55zM7.825 17q-.275 0-.513-.125T6.95 16.5l-.15-.275q-.125-.225-.125-.5t.125-.5l4-6.975q.125-.225.363-.363t.512-.137h.65q.275 0 .513.138t.362.362l1.85 3.25q.175.275.138.613t-.263.587q-.35.375-.85.3t-.75-.5L12 10.2L9.25 15h2.925q.475 0 .763.35t.212.825q-.05.35-.35.588t-.65.237z"></svg:path>`,
})
export class MaterialSymbolsDriveExportRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDriveFileMoveOutlineRoundedIcon],svg[material-symbols-drive-file-move-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6zm8.2-4l-.925.925q-.275.275-.275.7t.275.7t.7.275t.7-.275L15.3 13.7q.3-.3.3-.7t-.3-.7l-2.625-2.625q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L12.2 12H9q-.425 0-.712.288T8 13t.288.713T9 14z"></svg:path>`,
})
export class MaterialSymbolsDriveFileMoveOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDriveFileMoveRoundedIcon],svg[material-symbols-drive-file-move-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm8.2-6l-.925.925q-.275.275-.275.7t.275.7t.7.275t.7-.275L15.3 13.7q.3-.3.3-.7t-.3-.7l-2.625-2.625q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L12.2 12H9q-.425 0-.712.288T8 13t.288.713T9 14z"></svg:path>`,
})
export class MaterialSymbolsDriveFileMoveRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDriveFileMoveRtlOutlineRoundedIcon],svg[material-symbols-drive-file-move-rtl-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.725 16.325q.275-.275.275-.7t-.275-.7L11.8 14H15q.425 0 .713-.288T16 13q0-.425-.288-.713T15 12h-3.2l.925-.925q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L8.7 12.3q-.3.3-.3.7t.3.7l2.625 2.625q.275.275.7.275t.7-.275ZM4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.588 1.413T20 20H4ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12V6Z"></svg:path>`,
})
export class MaterialSymbolsDriveFileMoveRtlOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDriveFileMoveRtlRoundedIcon],svg[material-symbols-drive-file-move-rtl-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.725 16.325q.275-.275.275-.7t-.275-.7L11.8 14H15q.425 0 .713-.288T16 13q0-.425-.288-.713T15 12h-3.2l.925-.925q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L8.7 12.3q-.275.275-.275.7t.275.7l2.625 2.625q.275.275.7.275t.7-.275ZM4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.588 1.413T20 20H4Z"></svg:path>`,
})
export class MaterialSymbolsDriveFileMoveRtlRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDriveFileRenameOutlineOutlineRoundedIcon],svg[material-symbols-drive-file-rename-outline-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 21l4-4h6q.825 0 1.413.588T22 19q0 .825-.588 1.413T20 21H10Zm-6-2h1.4l8.625-8.625l-1.4-1.4L4 17.6V19ZM18.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L18.3 8.925ZM3 21q-.425 0-.713-.288T2 20v-2.825q0-.2.075-.388t.225-.337l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225T5.825 21H3ZM13.325 9.675l-.7-.7l1.4 1.4l-.7-.7Z"></svg:path>`,
})
export class MaterialSymbolsDriveFileRenameOutlineOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDriveFileRenameOutlineRoundedIcon],svg[material-symbols-drive-file-rename-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 21l4-4h6q.825 0 1.413.588T22 19q0 .825-.588 1.413T20 21H10Zm8.3-12.075l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L18.3 8.925ZM3 21q-.425 0-.713-.288T2 20v-2.825q0-.2.075-.388t.225-.337l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225T5.825 21H3Z"></svg:path>`,
})
export class MaterialSymbolsDriveFileRenameOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDriveFolderUploadOutlineRoundedIcon],svg[material-symbols-drive-folder-upload-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6zm8-1q.425 0 .713-.288T13 16v-3.2l.9.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7l-2.6-2.6q-.3-.3-.7-.3t-.7.3l-2.6 2.6q-.275.275-.275.7t.275.7t.7.275t.7-.275l.9-.9V16q0 .425.288.713T12 17"></svg:path>`,
})
export class MaterialSymbolsDriveFolderUploadOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDriveFolderUploadRoundedIcon],svg[material-symbols-drive-folder-upload-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm8-3q.425 0 .713-.288T13 16v-3.2l.9.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7l-2.6-2.6q-.3-.3-.7-.3t-.7.3l-2.6 2.6q-.275.275-.275.7t.275.7t.7.275t.7-.275l.9-.9V16q0 .425.288.713T12 17"></svg:path>`,
})
export class MaterialSymbolsDriveFolderUploadRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDropdownOutlineRoundedIcon],svg[material-symbols-dropdown-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13h5q.425 0 .713-.288T18 12V7q0-.425-.288-.712T17 6h-5q-.425 0-.712.288T11 7v5q0 .425.288.713T12 13m-7 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsDropdownOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDropdownRoundedIcon],svg[material-symbols-dropdown-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13h5q.425 0 .713-.288T18 12V7q0-.425-.288-.712T17 6h-5q-.425 0-.712.288T11 7v5q0 .425.288.713T12 13m-7 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsDropdownRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDropperEyeOutlineRoundedIcon],svg[material-symbols-dropper-eye-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.1 8.675l2.5-2.35l-.925-.925l-2.4 2.4zm0 0l-.825-.875zM15 21q1.425 0 2.688-.65t2.062-1.85q-.8-1.2-2.062-1.85T15 16t-2.687.65t-2.063 1.85q.8 1.2 2.063 1.85T15 21m0-1q-.625 0-1.062-.437T13.5 18.5t.438-1.062T15 17t1.063.438t.437 1.062t-.437 1.063T15 20m0 3q-1.975 0-3.687-.9T8.55 19.55q-.15-.225-.225-.488t-.075-.537t.075-.55t.225-.525q1.05-1.65 2.763-2.55T15 14t3.688.9t2.762 2.55q.15.25.225.513t.075.537t-.075.538t-.225.512q-1.05 1.65-2.762 2.55T15 23M4 21q-.425 0-.712-.288T3 20v-2.925q0-.4.15-.775t.425-.65l8.35-8.325l-.7-.725q-.3-.3-.3-.7t.3-.7t.7-.288t.7.288l1.225 1.2l3.1-3.1q.125-.125.313-.2t.387-.075t.375.075t.325.2l2.35 2.35q.125.15.2.325t.075.375t-.075.388t-.2.312l-3.1 3.1l.7.725q.275.3.288.713t-.288.712t-.712.3t-.713-.3L13.35 8.75L5 17.075V19h1.2q.425 0 .713.288T7.2 20t-.288.713T6.2 21z"></svg:path>`,
})
export class MaterialSymbolsDropperEyeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDropperEyeRoundedIcon],svg[material-symbols-dropper-eye-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.425 0-.712-.288T3 20v-2.925q0-.4.15-.775t.425-.65l8.35-8.325l-.7-.725q-.3-.3-.3-.7t.3-.7t.7-.288t.7.288l1.225 1.2l3.1-3.1q.125-.125.313-.2t.387-.075t.375.075t.325.2l2.35 2.35q.125.15.2.325t.075.375t-.075.388t-.2.312l-3.1 3.1l.7.725q.275.3.288.713t-.288.712t-.712.3t-.713-.3L13.35 8.75L5 17.075V19h1.2q.425 0 .713.288T7.2 20t-.288.713T6.2 21zm11 0q1.05 0 1.775-.725T17.5 18.5t-.725-1.775T15 16t-1.775.725T12.5 18.5t.725 1.775T15 21m0-1q-.625 0-1.063-.437T13.5 18.5t.438-1.062T15 17t1.063.438t.437 1.062t-.437 1.063T15 20m0 3q-1.975 0-3.687-.9T8.55 19.55q-.15-.225-.225-.488t-.075-.537t.075-.55t.225-.525q1.05-1.65 2.763-2.55T15 14t3.688.9t2.762 2.55q.15.25.225.513t.075.537t-.075.538t-.225.512q-1.05 1.65-2.762 2.55T15 23"></svg:path>`,
})
export class MaterialSymbolsDropperEyeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDryCleaningOutlineRoundedIcon],svg[material-symbols-dry-cleaning-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22q-.825 0-1.412-.587T7 20v-4H5.4q-1 0-1.7-.7T3 13.6q0-.725.4-1.337t1.05-.913L11 8.45V7.8q-.9-.325-1.45-1.087T9 5q0-1.25.875-2.125T12 2q.9 0 1.65.5t1.1 1.3l.1.425q0 .425-.288.713t-.712.287q-.325 0-.562-.175t-.363-.45t-.375-.437T12 4q-.425 0-.712.288T11 5t.288.713T12 6t.713.288T13 7v1.45l6.55 2.9q.65.3 1.05.913T21 13.6q0 1-.7 1.7t-1.7.7H17v4q0 .825-.587 1.413T15 22zm-3.6-8h1.875q.275-.45.725-.725T9 13h6q.55 0 1 .275t.725.725H18.6q.175 0 .288-.125T19 13.55q0-.125-.062-.213t-.188-.137l-6.75-3l-6.75 3q-.125.05-.187.138T5 13.55q0 .2.113.325T5.4 14M9 20h6v-5H9zm0-5h6z"></svg:path>`,
})
export class MaterialSymbolsDryCleaningOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDryCleaningRoundedIcon],svg[material-symbols-dry-cleaning-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22q-.825 0-1.412-.587T7 20v-4H5.4q-1 0-1.7-.7T3 13.6q0-.725.4-1.337t1.05-.913L11 8.45V7.8q-.9-.325-1.45-1.087T9 5q0-1.25.875-2.125T12 2q.9 0 1.65.5t1.1 1.3l.1.425q0 .425-.288.713t-.712.287q-.325 0-.562-.175t-.363-.45t-.375-.437T12 4q-.425 0-.712.288T11 5t.288.713T12 6t.713.288T13 7v1.45l6.55 2.9q.65.3 1.05.913T21 13.6q0 1-.7 1.7t-1.7.7H17v4q0 .825-.587 1.413T15 22zm-3.6-8h1.875q.275-.45.725-.725T9 13h6q.55 0 1 .275t.725.725H18.6q.175 0 .288-.125T19 13.55q0-.125-.062-.213t-.188-.137l-6.75-3l-6.75 3q-.125.05-.187.138T5 13.55q0 .2.113.325T5.4 14"></svg:path>`,
})
export class MaterialSymbolsDryCleaningRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDryOutlineRoundedIcon],svg[material-symbols-dry-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-1.65 0-2.825-1.175T2 18v-5.4q0-.775.363-1.437t1.012-1.088l7.65-4.975q.275-.175.575-.137t.525.262q.5.5.588 1.188T12.425 7.7L11.3 9.5H19q.425 0 .713.288T20 10.5t-.288.713T19 11.5H9.5q-.575 0-.875-.513t.025-1.012L9.625 8.4L4.45 11.75q-.225.125-.338.35T4 12.6V18q0 .825.587 1.413T6 20h12q.425 0 .713.288T19 21t-.288.713T18 22zm15-7h-8q-.425 0-.712-.288T12 14t.288-.712T13 13h8q.425 0 .713.288T22 14t-.288.713T21 15m-1 3.5h-7q-.425 0-.712-.288T12 17.5t.288-.712T13 16.5h7q.425 0 .713.288T21 17.5t-.288.713T20 18.5M14.225 5.05q-.6-.8-.9-1.525t-.3-1.575q0-.4.275-.675T13.975 1t.663.275t.287.675q.05.725.35 1.2t.75 1.125q.5.675.725 1.325t.225 1.425q0 .425-.275.7T16 8q-.4 0-.675-.288t-.275-.687q-.025-.55-.213-.987t-.612-.988m4 0q-.6-.8-.888-1.525T17.05 1.95q0-.4.275-.675T18 1q.375 0 .638.275t.287.675q.05.725.35 1.2t.75 1.125q.5.675.725 1.325t.225 1.425q0 .4-.275.688T20.025 8t-.675-.275t-.275-.675q-.025-.575-.225-1.012t-.625-.988"></svg:path>`,
})
export class MaterialSymbolsDryOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDryRoundedIcon],svg[material-symbols-dry-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-1.65 0-2.825-1.175T2 18v-5.4q0-.775.363-1.437t1.012-1.088l7.65-4.975q.275-.175.575-.137t.525.262q.5.5.588 1.188T12.425 7.7L11.3 9.5H19q.425 0 .713.288T20 10.5t-.288.713T19 11.5h-7V13h9q.425 0 .713.288T22 14t-.288.713T21 15h-9v1.5h8q.425 0 .713.288T21 17.5t-.288.713T20 18.5h-8V20h6q.425 0 .713.288T19 21t-.288.713T18 22zm8.225-16.95q-.6-.8-.9-1.525t-.3-1.575q0-.4.275-.675T13.975 1t.663.275t.287.675q.05.725.35 1.2t.75 1.125q.5.675.725 1.325t.225 1.425q0 .425-.275.7T16 8q-.4 0-.675-.288t-.275-.687q-.025-.55-.213-.987t-.612-.988m4 0q-.6-.8-.888-1.525T17.05 1.95q0-.4.275-.675T18 1q.375 0 .638.275t.287.675q.05.725.35 1.2t.75 1.125q.5.675.725 1.325t.225 1.425q0 .4-.275.688T20.025 8t-.675-.275t-.275-.675q-.025-.575-.225-1.012t-.625-.988"></svg:path>`,
})
export class MaterialSymbolsDryRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDvrOutlineRoundedIcon],svg[material-symbols-dvr-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14q.425 0 .713-.288T8 13t-.288-.712T7 12t-.712.288T6 13t.288.713T7 14m0-4q.425 0 .713-.288T8 9t-.288-.712T7 8t-.712.288T6 9t.288.713T7 10m3 4h7q.425 0 .713-.288T18 13t-.288-.712T17 12h-7q-.425 0-.712.288T9 13t.288.713T10 14m0-4h7q.425 0 .713-.288T18 9t-.288-.712T17 8h-7q-.425 0-.712.288T9 9t.288.713T10 10m-6 9q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-4v1q0 .425-.288.713T15 21H9q-.425 0-.712-.288T8 20v-1zm0-2h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsDvrOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDvrRoundedIcon],svg[material-symbols-dvr-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14q.425 0 .713-.288T8 13t-.288-.712T7 12t-.712.288T6 13t.288.713T7 14m0-4q.425 0 .713-.288T8 9t-.288-.712T7 8t-.712.288T6 9t.288.713T7 10m3 4h7q.425 0 .713-.288T18 13t-.288-.712T17 12h-7q-.425 0-.712.288T9 13t.288.713T10 14m0-4h7q.425 0 .713-.288T18 9t-.288-.712T17 8h-7q-.425 0-.712.288T9 9t.288.713T10 10m-6 9q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-4v1q0 .425-.288.713T15 21H9q-.425 0-.712-.288T8 20v-1z"></svg:path>`,
})
export class MaterialSymbolsDvrRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDynamicFeedRoundedIcon],svg[material-symbols-dynamic-feed-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19v-6q0-.425.288-.712T3 12t.713.288T4 13v6h8q.425 0 .713.288T13 20t-.288.713T12 21zm4-4q-.825 0-1.412-.587T6 15V9q0-.425.288-.712T7 8t.713.288T8 9v6h8q.425 0 .713.288T17 16t-.288.713T16 17zm4-4q-.825 0-1.412-.587T10 11V5q0-.825.588-1.412T12 3h8q.825 0 1.413.588T22 5v6q0 .825-.587 1.413T20 13zm0-2h8V7h-8z"></svg:path>`,
})
export class MaterialSymbolsDynamicFeedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDynamicFormOutlineRoundedIcon],svg[material-symbols-dynamic-form-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11q-.825 0-1.412-.587T2 9V6q0-.825.588-1.412T4 4h8q.425 0 .713.288T13 5v5q0 .425-.288.713T12 11zm0-2h7V6H4zm0 11q-.825 0-1.412-.587T2 18v-3q0-.825.588-1.412T4 13h10q.425 0 .713.288T15 14v5q0 .425-.288.713T14 20zm0-2h9v-3H4zm13-7h-1q-.425 0-.712-.288T15 10V5q0-.425.288-.712T16 4h4.525q.525 0 .825.438t.1.937L20 9h.45q.55 0 .825.463t.075.962l-3.4 9.225q-.075.2-.225.275t-.325.025t-.288-.175T17 19.45zM4 9V6zm0 9v-3zM6.25 7.5q0-.325-.213-.537T5.5 6.75t-.537.213t-.213.537t.213.538t.537.212t.538-.213t.212-.537m-.75 9.75q.325 0 .538-.213t.212-.537t-.213-.537t-.537-.213t-.537.213t-.213.537t.213.538t.537.212"></svg:path>`,
})
export class MaterialSymbolsDynamicFormOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDynamicFormRoundedIcon],svg[material-symbols-dynamic-form-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11q-.825 0-1.412-.587T2 9V6q0-.825.588-1.412T4 4h8q.425 0 .713.288T13 5v5q0 .425-.288.713T12 11zm0 9q-.825 0-1.412-.587T2 18v-3q0-.825.588-1.412T4 13h10q.425 0 .713.288T15 14v5q0 .425-.288.713T14 20zm13-9h-1q-.425 0-.712-.288T15 10V5q0-.425.288-.712T16 4h4.525q.525 0 .825.438t.1.937L20 9h.45q.55 0 .838.463t.062.962l-3.4 9.25q-.075.2-.238.263t-.312.012t-.275-.162t-.125-.313zM6.25 7.5q0-.325-.213-.537T5.5 6.75t-.537.213t-.213.537t.213.538t.537.212t.538-.213t.212-.537m-.75 9.75q.325 0 .538-.213t.212-.537t-.213-.537t-.537-.213t-.537.213t-.213.537t.213.538t.537.212"></svg:path>`,
})
export class MaterialSymbolsDynamicFormRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEMobiledataBadgeOutlineRoundedIcon],svg[material-symbols-e-mobiledata-badge-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14zm10 12q.425 0 .713-.288T16 16t-.288-.712T15 15h-5v-2h4q.425 0 .713-.288T15 12t-.288-.712T14 11h-4V9h5q.425 0 .713-.288T16 8t-.288-.712T15 7H9q-.425 0-.712.288T8 8v8q0 .425.288.713T9 17z"></svg:path>`,
})
export class MaterialSymbolsEMobiledataBadgeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEMobiledataBadgeRoundedIcon],svg[material-symbols-e-mobiledata-badge-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm10-4q.425 0 .713-.288T16 16t-.288-.712T15 15h-5v-2h4q.425 0 .713-.288T15 12t-.288-.712T14 11h-4V9h5q.425 0 .713-.288T16 8t-.288-.712T15 7H9q-.425 0-.712.288T8 8v8q0 .425.288.713T9 17z"></svg:path>`,
})
export class MaterialSymbolsEMobiledataBadgeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEMobiledataRoundedIcon],svg[material-symbols-e-mobiledata-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17q-.425 0-.712-.288T8 16V8q0-.425.288-.712T9 7h6q.425 0 .713.288T16 8t-.288.713T15 9h-5v2h5q.425 0 .713.288T16 12t-.288.713T15 13h-5v2h5q.425 0 .713.288T16 16t-.288.713T15 17z"></svg:path>`,
})
export class MaterialSymbolsEMobiledataRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsE911AvatarOutlineRoundedIcon],svg[material-symbols-e911-avatar-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7q-.425 0-.712-.288T16 6V3q0-.425.288-.712T17 2t.713.288T18 3v3q0 .425-.288.713T17 7m0 4q-.425 0-.712-.288T16 10t.288-.712T17 9t.713.288T18 10t-.288.713T17 11m2.95 10q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0"></svg:path>`,
})
export class MaterialSymbolsE911AvatarOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsE911AvatarRoundedIcon],svg[material-symbols-e911-avatar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7q-.425 0-.712-.288T16 6V3q0-.425.288-.712T17 2t.713.288T18 3v3q0 .425-.288.713T17 7m0 4q-.425 0-.712-.288T16 10t.288-.712T17 9t.713.288T18 10t-.288.713T17 11m2.95 10q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></svg:path>`,
})
export class MaterialSymbolsE911AvatarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsE911EmergencyOutlineRoundedIcon],svg[material-symbols-e911-emergency-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20q-.425 0-.712-.288T5 19t.288-.712T6 18h.6l1.975-6.575q.2-.65.738-1.037T10.5 10h3q.65 0 1.188.388t.737 1.037L17.4 18h.6q.425 0 .713.288T19 19t-.288.713T18 20zm2.7-2h6.6l-1.8-6h-3zM11 7V4q0-.425.288-.712T12 3t.713.288T13 4v3q0 .425-.288.713T12 8t-.712-.288T11 7m5.25 1.35l2.125-2.125q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-2.125 2.15q-.3.3-.7.3t-.7-.3t-.3-.712t.3-.713M19 13h3q.425 0 .713.288T23 14t-.288.713T22 15h-3q-.425 0-.712-.288T18 14t.288-.712T19 13M6.35 9.75L4.225 7.625q-.275-.275-.287-.687t.287-.713q.275-.275.7-.275t.7.275l2.15 2.125q.3.3.3.7t-.3.7t-.712.3t-.713-.3M2 15q-.425 0-.712-.288T1 14t.288-.712T2 13h3q.425 0 .713.288T6 14t-.288.713T5 15zm10 3"></svg:path>`,
})
export class MaterialSymbolsE911EmergencyOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsE911EmergencyRoundedIcon],svg[material-symbols-e911-emergency-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20q-.425 0-.712-.288T5 19t.288-.712T6 18h.6l1.975-6.575q.2-.65.738-1.037T10.5 10h3q.65 0 1.188.388t.737 1.037L17.4 18h.6q.425 0 .713.288T19 19t-.288.713T18 20zm5-13V4q0-.425.288-.712T12 3t.713.288T13 4v3q0 .425-.288.713T12 8t-.712-.288T11 7m5.25 1.35l2.125-2.125q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-2.125 2.15q-.3.3-.7.3t-.7-.3t-.3-.712t.3-.713M19 13h3q.425 0 .713.288T23 14t-.288.713T22 15h-3q-.425 0-.712-.288T18 14t.288-.712T19 13M6.35 9.75L4.225 7.625q-.275-.275-.287-.687t.287-.713q.275-.275.7-.275t.7.275l2.15 2.125q.3.3.3.7t-.3.7t-.712.3t-.713-.3M2 15q-.425 0-.712-.288T1 14t.288-.712T2 13h3q.425 0 .713.288T6 14t-.288.713T5 15z"></svg:path>`,
})
export class MaterialSymbolsE911EmergencyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarSoundRoundedIcon],svg[material-symbols-ear-sound-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11.5q1.05 0 1.775-.737T11.5 9q0-1.05-.725-1.775T9 6.5t-1.775.725T6.5 9q0 1.025.725 1.763T9 11.5m8.8 2.325q-.375-.15-.537-.513t-.013-.712q.375-.85.563-1.762T18 9t-.187-1.825t-.563-1.75q-.15-.35.025-.687t.55-.488q.425-.15.813.038t.562.612q.425.975.613 2.013T20 9q0 1.075-.2 2.113t-.625 2.037q-.175.425-.562.625t-.813.05m2.9 2.9q-.35-.175-.5-.537t.05-.688q.875-1.475 1.313-3.1T22 9.05t-.45-3.363t-1.325-3.137q-.2-.325-.038-.687t.513-.538q.425-.2.863-.012t.662.612q.875 1.65 1.325 3.425T24 9t-.462 3.688T22.2 16.15q-.225.425-.65.6t-.85-.025M4 18q0-.425-.287-.712T3 17t-.712.288T2 18q0 1.65 1.175 2.825T6 22q1.55 0 2.538-.775t1.512-2.275q.425-1.25.813-1.75t1.787-1.6q1.55-1.25 2.45-2.825T16 9q0-2.975-2.013-4.987T9 2T4.012 4.013T2 9q0 .425.288.713T3 10t.713-.288T4 9q0-2.125 1.438-3.562T9 4t3.563 1.438T14 9q0 1.7-.675 2.9T11.4 14.05q-1.3.95-2.025 1.85T8.3 17.85q-.35 1.1-.838 1.625T6 20q-.825 0-1.412-.587T4 18"></svg:path>`,
})
export class MaterialSymbolsEarSoundRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarbudLeftOutlineRoundedIcon],svg[material-symbols-earbud-left-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 22q-.825 0-1.412-.587T6 20v-8H5q-.825 0-1.412-.587T3 10V6q0-.825.588-1.412T5 4h9v2H5v4h2q.425 0 .713.288T8 11v9h2v-9q0-.425.288-.712T11 10h3v2h-2v8q0 .825-.587 1.413T10 22zM21 8q0 2.5-1.75 4.25T15 14q-.425 0-.712-.288T14 13V3q0-.425.288-.712T15 2q2.5 0 4.25 1.75T21 8m-2 0q0-1.375-.825-2.45T16 4.125v7.75q1.35-.35 2.175-1.425T19 8m-3 0"></svg:path>`,
})
export class MaterialSymbolsEarbudLeftOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarbudLeftRoundedIcon],svg[material-symbols-earbud-left-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 22q-.825 0-1.412-.587T6 20v-8H5q-.825 0-1.412-.587T3 10V6q0-.825.588-1.412T5 4h6q.425 0 .713.288T12 5v15q0 .825-.587 1.413T10 22zM21 8q0 2.5-1.75 4.25T15 14q-.425 0-.712-.288T14 13V3q0-.425.288-.712T15 2q2.5 0 4.25 1.75T21 8"></svg:path>`,
})
export class MaterialSymbolsEarbudLeftRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarbudRightOutlineRoundedIcon],svg[material-symbols-earbud-right-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12h-2v-2h3q.425 0 .713.288T14 11v9h2v-9q0-.425.288-.712T17 10h2V6h-9V4h9q.825 0 1.413.588T21 6v4q0 .825-.587 1.413T19 12h-1v8q0 .825-.587 1.413T16 22h-2q-.825 0-1.412-.587T12 20zM3 8q0-2.5 1.75-4.25T9 2q.425 0 .713.288T10 3v10q0 .425-.288.713T9 14q-2.5 0-4.25-1.75T3 8m2 0q0 1.375.825 2.45T8 11.875v-7.75q-1.35.35-2.175 1.425T5 8m3 0"></svg:path>`,
})
export class MaterialSymbolsEarbudRightOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarbudRightRoundedIcon],svg[material-symbols-earbud-right-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20V5q0-.425.288-.712T13 4h6q.825 0 1.413.588T21 6v4q0 .825-.587 1.413T19 12h-1v8q0 .825-.587 1.413T16 22h-2q-.825 0-1.412-.587T12 20M3 8q0-2.5 1.75-4.25T9 2q.425 0 .713.288T10 3v10q0 .425-.288.713T9 14q-2.5 0-4.25-1.75T3 8"></svg:path>`,
})
export class MaterialSymbolsEarbudRightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarbuds2OutlineRoundedIcon],svg[material-symbols-earbuds-2-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 23h-2q-.625 0-1.062-.425T16 21.5V18h-1.5v-2H17q.425 0 .713.288T18 17v4h1v-4q0-.425.288-.712T20 16h1v-2h-6.5v-2h7q.65 0 1.075.438T23 13.5v3q0 .65-.425 1.075T21.5 18H21v3.5q0 .65-.425 1.075T19.5 23M8.4 15q0-1.675 1.213-2.838T12.5 11h1q.425 0 .713.288T14.5 12v6q0 .425-.288.713T13.5 19h-1q-1.675 0-2.887-1.15T8.4 15m2 0q0 .875.613 1.5t1.487.625V12.9q-.875 0-1.487.613T10.4 15m-5.9-2q-.65 0-1.075-.425T3 11.5V8h-.5q-.65 0-1.075-.425T1 6.5v-3q0-.625.425-1.062T2.5 2h7v2H3v2h1q.425 0 .713.288T5 7v4h1V7q0-.425.288-.712T7 6h2.5v2H8v3.5q0 .65-.437 1.075T6.5 13zm5-5V2q0-.425.288-.712T10.5 1h1q1.675 0 2.888 1.163T15.6 5q0 1.7-1.212 2.85T11.5 9h-1q-.425 0-.712-.288T9.5 8m2-.875q.875 0 1.488-.625T13.6 5t-.612-1.487T11.5 2.9zM5.5 5"></svg:path>`,
})
export class MaterialSymbolsEarbuds2OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarbuds2RoundedIcon],svg[material-symbols-earbuds-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 23q-.625 0-1.062-.425T16 21.5V13q0-.425.288-.712T17 12h4.5q.65 0 1.075.438T23 13.5v3q0 .65-.425 1.075T21.5 18H21v3.5q0 .65-.425 1.075T19.5 23zm-5-4q-1.675 0-2.887-1.15T8.4 15q0-1.675 1.213-2.838T12.5 11h1q.425 0 .713.288T14.5 12v6q0 .425-.288.713T13.5 19zm-8-6q-.65 0-1.075-.425T3 11.5V8h-.5q-.65 0-1.075-.425T1 6.5v-3q0-.625.425-1.062T2.5 2H7q.425 0 .713.288T8 3v8.5q0 .65-.437 1.075T6.5 13zm6-4q-.425 0-.712-.288T9.5 8V2q0-.425.288-.712T10.5 1h1q1.675 0 2.888 1.163T15.6 5q0 1.7-1.212 2.85T11.5 9z"></svg:path>`,
})
export class MaterialSymbolsEarbuds2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarbudsBatteryOutlineRoundedIcon],svg[material-symbols-earbuds-battery-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7v-.5q0-.2.15-.35T18.5 6h1q.2 0 .35.15t.15.35V7h1q.425 0 .713.288T22 8v9q0 .425-.288.713T21 18h-4q-.425 0-.712-.288T16 17V8q0-.425.288-.712T17 7zm0 9h2zM5.375 18q-1.425 0-2.4-.975T2 14.625V8q0-.825.588-1.412T4 6t1.413.588T6 8t-.587 1.413T4 10q-.125 0-.25-.025T3.5 9.9v4.725q0 .8.538 1.338t1.337.537t1.338-.537t.537-1.338v-5.25q0-1.425.975-2.4t2.4-.975t2.4.975t.975 2.4V16q0 .825-.587 1.413T12 18t-1.412-.587T10 16t.588-1.412T12 14q.125 0 .25.025t.25.075V9.375q0-.8-.537-1.338T10.625 7.5t-1.338.538t-.537 1.337v5.25q0 1.425-.975 2.4t-2.4.975M18 16h2V9h-2z"></svg:path>`,
})
export class MaterialSymbolsEarbudsBatteryOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarbudsBatteryRoundedIcon],svg[material-symbols-earbuds-battery-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7v-.5q0-.2.15-.35T18.5 6h1q.2 0 .35.15t.15.35V7h1q.425 0 .713.288T22 8v9q0 .425-.288.713T21 18h-4q-.425 0-.712-.288T16 17V8q0-.425.288-.712T17 7zM5.375 18q-1.425 0-2.4-.975T2 14.625V8q0-.825.588-1.412T4 6t1.413.588T6 8t-.587 1.413T4 10q-.125 0-.25-.025T3.5 9.9v4.725q0 .8.538 1.338t1.337.537t1.338-.537t.537-1.338v-5.25q0-1.425.975-2.4t2.4-.975t2.4.975t.975 2.4V16q0 .825-.587 1.413T12 18t-1.412-.587T10 16t.588-1.412T12 14q.125 0 .25.025t.25.075V9.375q0-.8-.537-1.338T10.625 7.5t-1.338.538t-.537 1.337v5.25q0 1.425-.975 2.4t-2.4.975"></svg:path>`,
})
export class MaterialSymbolsEarbudsBatteryRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarlyOnOutlineRoundedIcon],svg[material-symbols-early-on-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21q-1.25 0-2.125-.875T14 18t.875-2.125T17 15t2.125.875T20 18t-.875 2.125T17 21m0-7q-.325 0-.537-.213t-.213-.537v-.5q0-.325.213-.537T17 12t.538.213t.212.537v.5q0 .325-.213.538T17 14m0 8q.325 0 .538.213t.212.537v.5q0 .325-.213.538T17 24t-.537-.213t-.213-.537v-.5q0-.325.213-.537T17 22m2.85-6.85q-.225-.225-.225-.538t.225-.537l.35-.35q.225-.225.525-.213t.525.238t.225.525t-.225.525l-.35.35q-.225.225-.525.225t-.525-.225m-5.675 5.675q.225.225.225.525t-.225.525l-.375.375q-.225.225-.525.225t-.525-.225t-.225-.525t.225-.525l.375-.375q.225-.225.525-.225t.525.225M21 18q0-.325.213-.537t.537-.213h.5q.325 0 .538.213T23 18t-.213.538t-.537.212h-.5q-.325 0-.537-.213T21 18m-8 0q0 .325-.213.538t-.537.212h-.5q-.325 0-.537-.213T11 18t.213-.537t.537-.213h.5q.325 0 .538.213T13 18m6.85 2.825q.225-.225.525-.213t.525.213l.375.35q.225.225.225.525t-.225.525t-.537.225t-.538-.225l-.35-.35q-.2-.225-.213-.525t.213-.525m-5.675-5.675q-.225.225-.537.225t-.538-.225l-.35-.35q-.2-.225-.212-.525t.212-.525t.525-.213t.525.213l.375.35q.225.225.225.525t-.225.525M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v3q0 .425-.288.713T20 10H5v10h3q.425 0 .713.288T9 21t-.288.713T8 22zM5 8h14V6H5zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsEarlyOnOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarlyOnRoundedIcon],svg[material-symbols-early-on-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21q-1.25 0-2.125-.875T14 18t.875-2.125T17 15t2.125.875T20 18t-.875 2.125T17 21m0-7q-.325 0-.537-.213t-.213-.537v-.5q0-.325.213-.537T17 12t.538.213t.212.537v.5q0 .325-.213.538T17 14m0 8q.325 0 .538.213t.212.537v.5q0 .325-.213.538T17 24t-.537-.213t-.213-.537v-.5q0-.325.213-.537T17 22m2.85-6.85q-.225-.225-.225-.538t.225-.537l.35-.35q.225-.225.525-.213t.525.238t.225.525t-.225.525l-.35.35q-.225.225-.525.225t-.525-.225m-5.675 5.675q.225.225.225.525t-.225.525l-.375.375q-.225.225-.525.225t-.525-.225t-.225-.525t.225-.525l.375-.375q.225-.225.525-.225t.525.225M21 18q0-.325.213-.537t.537-.213h.5q.325 0 .538.213T23 18t-.213.538t-.537.212h-.5q-.325 0-.537-.213T21 18m-8 0q0 .325-.213.538t-.537.212h-.5q-.325 0-.537-.213T11 18t.213-.537t.537-.213h.5q.325 0 .538.213T13 18m6.85 2.825q.225-.225.525-.213t.525.213l.375.35q.225.225.225.525t-.225.525t-.537.225t-.538-.225l-.35-.35q-.2-.225-.213-.525t.213-.525m-5.675-5.675q-.225.225-.537.225t-.538-.225l-.35-.35q-.2-.225-.212-.525t.212-.525t.525-.213t.525.213l.375.35q.225.225.225.525t-.225.525M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v3q0 .425-.288.713T20 10H5v10h3q.425 0 .713.288T9 21t-.288.713T8 22z"></svg:path>`,
})
export class MaterialSymbolsEarlyOnRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarthquakeRoundedIcon],svg[material-symbols-earthquake-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.025 22q-.35 0-.612-.187T8.05 21.3L5.5 13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h3.25q.325 0 .588.188t.362.512l1.65 5.375L12.025 2.8q.075-.35.35-.575T13 2t.625.213t.35.562l2.175 9.4l1.4-4.475q.1-.325.362-.512T18.5 7t.575.175t.375.475L20.7 11h.3q.425 0 .713.288T22 12t-.288.713T21 13h-1q-.325 0-.575-.175t-.375-.475l-.475-1.275L16.95 16.3q-.1.325-.375.525T15.95 17t-.6-.238t-.325-.537L13 7.525l-3.025 13.7q-.075.35-.337.55T9.025 22"></svg:path>`,
})
export class MaterialSymbolsEarthquakeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEastRoundedIcon],svg[material-symbols-east-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.175 13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h15.175L14.3 7.1q-.275-.275-.288-.687T14.3 5.7q.275-.275.7-.275t.7.275l5.6 5.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-5.6 5.6q-.275.275-.687.275T14.3 18.3q-.3-.3-.3-.712t.3-.713z"></svg:path>`,
})
export class MaterialSymbolsEastRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEcgOutlineRoundedIcon],svg[material-symbols-ecg-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h16q.825 0 1.413.588T22 6v5q0 .425-.288.713T21 12t-.712-.288T20 11V6H4v2q0 .425-.288.713T3 9t-.712-.288T2 8V6q0-.825.588-1.412T4 4m0 16q-.825 0-1.412-.587T2 18v-2q0-.425.288-.712T3 15t.713.288T4 16v2h6q.425 0 .713.288T11 19t-.288.713T10 20zm9-3.25q0-1.125.8-1.937T15.75 14q.65 0 1.238.3t1.012.875q.4-.575.988-.875t1.262-.3q1.125 0 1.938.813T23 16.75q0 .9-.65 1.738T19.5 21.2l-.85.725q-.125.125-.3.188t-.35.062t-.338-.05t-.312-.175l-.875-.75q-2.2-1.875-2.838-2.712T13 16.75m5 3.1l.7-.575q1.4-1.2 1.85-1.687t.45-.838q0-.3-.225-.525T20.25 16q-.2 0-.363.088t-.387.287L18 17.8l-1.525-1.425q-.225-.2-.387-.288T15.75 16q-.325 0-.537.225T15 16.75q0 .35.438.838t1.837 1.687zM7 17q-.3 0-.537-.137T6.1 16.45L4.375 13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h2q.275 0 .513.15t.362.4L7 13.775l3.1-6.225q.125-.25.375-.375T11 7.05t.525.125t.375.375L13.6 11H16q.425 0 .713.288T17 12t-.288.713T16 13h-3q-.3 0-.537-.137t-.363-.413l-1.1-2.2l-3.125 6.2q-.125.275-.362.413T7 17m11 .925"></svg:path>`,
})
export class MaterialSymbolsEcgOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEcgRoundedIcon],svg[material-symbols-ecg-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v5.125q0 .45-.363.725t-.812.175q-.15-.025-.288-.025h-.287q-.575 0-1.15.15t-1.1.425q-.225-.125-.475-.225T17 12.175V12q0-.425-.288-.712T16 11h-2.375L11.9 7.55q-.125-.25-.375-.375T11 7.05t-.525.125t-.375.375L7 13.75l-1.1-2.2q-.125-.275-.375-.413T5 11zm2 9q-.825 0-1.412-.587T2 18v-5h2.375L6.1 16.45q.125.275.375.413T7 17t.525-.137t.375-.413l3.1-6.2l1.1 2.2q.125.225.313.363t.437.187q-.85.65-1.35 1.625T11 16.75q0 .625.113 1.113t.337.937q.225.425.013.813t-.638.387zm11.75-6q.675 0 1.25.3t1 .875q.425-.575 1-.875t1.25-.3q1.15 0 1.95.8t.8 1.95q0 .9-.65 1.738T19.5 21.2l-.85.75q-.275.25-.65.25t-.65-.25l-.85-.75q-2.2-1.875-2.85-2.712T13 16.75q0-1.15.8-1.95t1.95-.8"></svg:path>`,
})
export class MaterialSymbolsEcgRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEcoOutlineRoundedIcon],svg[material-symbols-eco-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.4 19.6Q4.275 18.475 3.637 17T3 13.95t.6-3.112T5.55 7.95q1.5-1.5 4.238-2.275t7.087-.65q.65.025 1.2.275t.975.675t.675.988T20 8.175q.05 2.05-.112 3.788t-.526 3.137t-.924 2.488T17.1 19.45q-1.325 1.325-2.812 1.938T11.25 22q-1.625 0-3.175-.638T5.4 19.6m2.8-.4q.725.425 1.488.613T11.25 20q1.15 0 2.275-.462t2.15-1.488q.45-.45.913-1.263t.8-2.124t.512-3.175t.05-4.438q-1.225-.05-2.762-.037t-3.063.237t-2.9.725t-2.25 1.375q-1.125 1.125-1.55 2.225T5 13.7q0 1.475.563 2.588t.987 1.562q1.05-2 2.775-3.838T13.35 11q-1.8 1.575-3.137 3.563T8.2 19.2m0 0"></svg:path>`,
})
export class MaterialSymbolsEcoOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEcoRoundedIcon],svg[material-symbols-eco-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 22q-.825 0-1.662-.187t-1.713-.538q.3-3.025 1.75-5.65T13.35 11q-2.75 1.4-4.762 3.7t-2.813 5.25q-.1-.075-.187-.162L5.4 19.6q-1.175-1.175-1.787-2.625T3 13.95q0-1.7.675-3.25T5.55 7.95Q7.3 6.2 9.888 5.5t6.987-.5q.65.025 1.2.288t.975.687t.675.988t.3 1.212q.15 4.5-.525 7.025t-2.4 4.25q-1.225 1.225-2.738 1.888T11.25 22"></svg:path>`,
})
export class MaterialSymbolsEcoRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEdaOutlineRoundedIcon],svg[material-symbols-eda-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2q.425 0 .713.288T9 3v8q0 .425-.288.713T8 12t-.712-.288T7 11V3q0-.425.288-.712T8 2m4-1q.425 0 .713.288T13 2v9q0 .425-.288.713T12 12t-.712-.288T11 11V2q0-.425.288-.712T12 1m3 15.075V4q0-.425.288-.712T16 3t.713.288T17 4v10.9zM5 16v3q0 .825.588 1.413T7 21h6.675q.2 0 .375-.088t.325-.212l4.55-4.55l-5.65 3.275q-.65.375-1.4.225t-1.2-.75L8.5 16zm2 7q-1.65 0-2.825-1.175T3 19v-5h5.5q.475 0 .9.213t.7.587l2.15 2.875L17 14.9l2.25-1.3q.525-.3 1.113-.262t1.087.387q.625.475.675 1.25t-.5 1.325L15.8 22.125q-.425.425-.975.65t-1.15.225zm-2-9H3V5q0-.425.288-.712T4 4t.713.288T5 5zm0-2h10zm2 9h7.375z"></svg:path>`,
})
export class MaterialSymbolsEdaOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEdaRoundedIcon],svg[material-symbols-eda-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 23q-1.65 0-2.825-1.175T3 19v-3h5.45l2.025 2.675q.55.725 1.45.8t1.55-.575l4.55-4.55l1.225-.75q.5-.325 1.1-.275t1.1.4q.625.475.675 1.25t-.5 1.325L15.8 22.125q-.425.425-.975.65t-1.15.225zm-4-9V5q0-.425.288-.712T4 4t.713.288T5 5v7h2V3q0-.425.288-.712T8 2t.713.288T9 3v9h2V2q0-.425.288-.712T12 1t.713.288T13 2v10h2V4q0-.425.288-.712T16 3t.713.288T17 4v8.575l-4.95 4.9l-2-2.675q-.275-.375-.7-.587T8.45 14z"></svg:path>`,
})
export class MaterialSymbolsEdaRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEdgesensorHighOutlineRoundedIcon],svg[material-symbols-edgesensor-high-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 17q-.425 0-.712-.288T0 16v-5q0-.425.288-.712T1 10t.713.288T2 11v5q0 .425-.288.713T1 17m3-3q-.425 0-.712-.288T3 13V8q0-.425.288-.712T4 7t.713.288T5 8v5q0 .425-.288.713T4 14m4 8q-.825 0-1.412-.587T6 20V4q0-.825.588-1.412T8 2h8q.825 0 1.413.588T18 4v16q0 .825-.587 1.413T16 22zm8-3H8v1h8zM8 5h8V4H8zm12 12q-.425 0-.712-.288T19 16v-5q0-.425.288-.712T20 10t.713.288T21 11v5q0 .425-.288.713T20 17m3-3q-.425 0-.712-.288T22 13V8q0-.425.288-.712T23 7t.713.288T24 8v5q0 .425-.288.713T23 14M8 5V4zm0 14v1zm0-2h8V7H8z"></svg:path>`,
})
export class MaterialSymbolsEdgesensorHighOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEdgesensorHighRoundedIcon],svg[material-symbols-edgesensor-high-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 17q-.425 0-.712-.288T0 16v-5q0-.425.288-.712T1 10t.713.288T2 11v5q0 .425-.288.713T1 17m3-3q-.425 0-.712-.288T3 13V8q0-.425.288-.712T4 7t.713.288T5 8v5q0 .425-.288.713T4 14m4 8q-.825 0-1.412-.587T6 20V4q0-.825.588-1.412T8 2h8q.825 0 1.413.588T18 4v16q0 .825-.587 1.413T16 22zm12-5q-.425 0-.712-.288T19 16v-5q0-.425.288-.712T20 10t.713.288T21 11v5q0 .425-.288.713T20 17m3-3q-.425 0-.712-.288T22 13V8q0-.425.288-.712T23 7t.713.288T24 8v5q0 .425-.288.713T23 14M8 17h8V7H8z"></svg:path>`,
})
export class MaterialSymbolsEdgesensorHighRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEdgesensorLowOutlineRoundedIcon],svg[material-symbols-edgesensor-low-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14q-.425 0-.712-.288T2 13V8q0-.425.288-.712T3 7t.713.288T4 8v5q0 .425-.288.713T3 14m18 3q-.425 0-.712-.288T20 16v-5q0-.425.288-.712T21 10t.713.288T22 11v5q0 .425-.288.713T21 17M8 22q-.825 0-1.412-.587T6 20V4q0-.825.588-1.412T8 2h8q.825 0 1.413.588T18 4v16q0 .825-.587 1.413T16 22zm8-3H8v1h8zM8 5h8V4H8zm0 0V4zm0 14v1zm0-2h8V7H8z"></svg:path>`,
})
export class MaterialSymbolsEdgesensorLowOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEdgesensorLowRoundedIcon],svg[material-symbols-edgesensor-low-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14q-.425 0-.712-.288T2 13V8q0-.425.288-.712T3 7t.713.288T4 8v5q0 .425-.288.713T3 14m18 3q-.425 0-.712-.288T20 16v-5q0-.425.288-.712T21 10t.713.288T22 11v5q0 .425-.288.713T21 17M8 22q-.825 0-1.412-.587T6 20V4q0-.825.588-1.412T8 2h8q.825 0 1.413.588T18 4v16q0 .825-.587 1.413T16 22zm0-5h8V7H8z"></svg:path>`,
})
export class MaterialSymbolsEdgesensorLowRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditArrowDownOutlineRoundedIcon],svg[material-symbols-edit-arrow-down-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17v-2.25q0-.4.163-.763t.437-.637l6.775-6.775q.6-.6 1.438-.575t1.412.625l1.2 1.25q.575.575.563 1.4t-.588 1.4l-6.75 6.75q-.275.275-.638.425T6.25 18zm1-2h1.25l4.05-4.05l-.625-.625l-.625-.625L5 14.75zm6.725-5.475l-1.25-1.25zM18.8 19.3L16.5 17q-.275-.3-.275-.713t.3-.687t.713-.288t.687.288l.575.575V5q0-.425.288-.712T19.5 4t.713.288T20.5 5v11.2l.6-.6q.275-.275.7-.275t.7.275t.275.7t-.275.7l-2.3 2.3q-.3.3-.7.3t-.7-.3"></svg:path>`,
})
export class MaterialSymbolsEditArrowDownOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditArrowDownRoundedIcon],svg[material-symbols-edit-arrow-down-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17v-2.25q0-.4.163-.763t.437-.637l6.775-6.775q.6-.6 1.438-.575t1.412.625l1.2 1.25q.575.575.563 1.4t-.588 1.4l-6.75 6.75q-.275.275-.638.425T6.25 18zm7.725-7.475l1.25-1.275l-1.225-1.225l-1.275 1.25zM18.8 19.3L16.5 17q-.275-.3-.275-.713t.3-.687t.713-.288t.687.288l.575.575V5q0-.425.288-.712T19.5 4t.713.288T20.5 5v11.2l.6-.6q.275-.275.7-.275t.7.275t.275.7t-.275.7l-2.3 2.3q-.3.3-.7.3t-.7-.3"></svg:path>`,
})
export class MaterialSymbolsEditArrowDownRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditArrowUpOutlineRoundedIcon],svg[material-symbols-edit-arrow-up-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17v-2.25q0-.4.163-.763t.437-.637l6.775-6.775q.6-.6 1.438-.575t1.412.625l1.2 1.25q.575.575.563 1.4t-.588 1.4l-6.75 6.75q-.275.275-.638.425T6.25 18zm1-2h1.25l4.05-4.05l-.625-.625l-.625-.625L5 14.75zm6.725-5.475l-1.25-1.25zM18.5 7.8l-.6.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.3-2.3q.3-.3.7-.3t.7.3L22.5 7q.275.3.275.712t-.3.688t-.712.288t-.688-.288l-.575-.575V19q0 .425-.287.713T19.5 20t-.712-.288T18.5 19z"></svg:path>`,
})
export class MaterialSymbolsEditArrowUpOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditArrowUpRoundedIcon],svg[material-symbols-edit-arrow-up-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17v-2.25q0-.4.163-.763t.437-.637l6.775-6.775q.6-.6 1.438-.575t1.412.625l1.2 1.25q.575.575.563 1.4t-.588 1.4l-6.75 6.75q-.275.275-.638.425T6.25 18zm7.725-7.475l1.25-1.275l-1.225-1.225l-1.275 1.25zM18.5 7.8l-.6.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.3-2.3q.3-.3.7-.3t.7.3L22.5 7q.275.3.275.712t-.3.688t-.712.288t-.688-.288l-.575-.575V19q0 .425-.287.713T19.5 20t-.712-.288T18.5 19z"></svg:path>`,
})
export class MaterialSymbolsEditArrowUpRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditAttributesOutlineRoundedIcon],svg[material-symbols-edit-attributes-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h10q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17zm0-2h10q1.25 0 2.125-.875T20 12t-.875-2.125T17 9H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15m1.75-1.4l2.325-2.325q.225-.225.225-.525t-.225-.525T10.55 10t-.525.225L8.05 12.2l-.475-.475Q7.35 11.5 7.05 11.5t-.525.225t-.225.525t.225.525l.825.825q.3.3.7.3t.7-.3M12 12"></svg:path>`,
})
export class MaterialSymbolsEditAttributesOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditAttributesRoundedIcon],svg[material-symbols-edit-attributes-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h10q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17zm1.75-3.4l2.325-2.325q.225-.225.225-.525t-.225-.525T10.55 10t-.525.225L8.05 12.2l-.475-.475Q7.35 11.5 7.05 11.5t-.525.225t-.225.525t.225.525l.825.825q.3.3.7.3t.7-.3"></svg:path>`,
})
export class MaterialSymbolsEditAttributesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditAudioRoundedIcon],svg[material-symbols-edit-audio-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.825 19l.875.9q.275.275.288.688T6.7 21.3q-.275.275-.7.275t-.7-.275l-2.6-2.6q-.15-.15-.213-.325T2.426 18t.063-.375t.212-.325l2.6-2.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L5.825 17h12.35l-.875-.9q-.275-.275-.288-.687t.288-.713q.275-.275.7-.275t.7.275l2.6 2.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-2.6 2.6q-.275.275-.687.275T17.3 21.3q-.3-.3-.3-.712t.3-.713l.875-.875zM11 12V2q0-.425.288-.712T12 1t.713.288T13 2v10q0 .425-.288.713T12 13t-.712-.288T11 12m-4-2V4q0-.425.288-.712T8 3t.713.288T9 4v6q0 .425-.288.713T8 11t-.712-.288T7 10m8 0V4q0-.425.288-.712T16 3t.713.288T17 4v6q0 .425-.288.713T16 11t-.712-.288T15 10M3 7.5v-1q0-.425.288-.712T4 5.5t.713.288T5 6.5v1q0 .425-.288.713T4 8.5t-.712-.288T3 7.5m16 0v-1q0-.425.288-.712T20 5.5t.713.288T21 6.5v1q0 .425-.288.713T20 8.5t-.712-.288T19 7.5"></svg:path>`,
})
export class MaterialSymbolsEditAudioRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditCalendarOutlineRoundedIcon],svg[material-symbols-edit-calendar-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v4.025q0 .425-.288.713t-.712.287t-.712-.288t-.288-.712V10H5v10h6q.425 0 .713.288T12 21t-.288.713T11 22zM5 8h14V6H5zm0 0V6zm9 13v-1.65q0-.2.075-.387t.225-.338l5.225-5.2q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.2 5.2q-.15.15-.337.225T16.65 22H15q-.425 0-.712-.287T14 21m7.5-5.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45l-3.05 3.025zm3.525-3.525l-.475-.45l.925.925z"></svg:path>`,
})
export class MaterialSymbolsEditCalendarOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditCalendarRoundedIcon],svg[material-symbols-edit-calendar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v4.025q0 .425-.288.713t-.712.287t-.712-.288t-.288-.712V10H5v10h6q.425 0 .713.288T12 21t-.288.713T11 22zm9-1v-1.65q0-.2.075-.387t.225-.338l5.225-5.2q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.2 5.2q-.15.15-.337.225T16.65 22H15q-.425 0-.712-.287T14 21m6.575-4.6l.925-.975l-.925-.925l-.95.95z"></svg:path>`,
})
export class MaterialSymbolsEditCalendarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditDocumentOutlineRoundedIcon],svg[material-symbols-edit-document-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21v-1.65q0-.2.075-.387t.225-.338l5.225-5.2q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.2 5.2q-.15.15-.337.225T16.65 22H15q-.425 0-.712-.287T14 21m7.5-5.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.925-.925l-3.05 3.025zM6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762v1.425q0 .425-.288.713T19 11.25t-.712-.288T18 10.25V9h-4q-.425 0-.712-.288T13 8V4H6v16h5q.425 0 .713.288T12 21t-.288.713T11 22zm0-2V4zm13.025-3.025l-.475-.45l.925.925z"></svg:path>`,
})
export class MaterialSymbolsEditDocumentOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditDocumentRoundedIcon],svg[material-symbols-edit-document-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V10.4q0 .275-.162.475t-.413.3q-.4.15-.763.388T18 12.1l-5.4 5.4q-.275.275-.437.638T12 18.9V21q0 .425-.288.713T11 22zm8-1v-1.65q0-.2.075-.387t.225-.338l5.225-5.2q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.2 5.2q-.15.15-.337.225T16.65 22H15q-.425 0-.712-.287T14 21m6.575-4.6l.925-.975l-.925-.925l-.95.95zM14 9h4l-5-5l5 5l-5-5v4q0 .425.288.713T14 9"></svg:path>`,
})
export class MaterialSymbolsEditDocumentRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditLocationAltOutlineRoundedIcon],svg[material-symbols-edit-location-alt-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.2q0-3.75 2.413-5.975T12 2h.25q.425 0 .713.288T13.25 3t-.288.713T12.25 4H12Q9.475 4 7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35q3.05-2.8 4.525-5.087T18 10.2q0-.425.288-.712T19 9.2t.713.288t.287.712q0 2.35-1.7 5.038t-4.975 5.587q-.275.25-.625.375t-.7.125t-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2m9.4.5l5.55-5.55q.15-.15.15-.35t-.15-.35l-1.4-1.4q-.15-.15-.35-.15t-.35.15L11.3 8.6q-.15.15-.225.338T11 9.325v.925q0 .325.213.538t.537.212h.925q.2 0 .388-.075t.337-.225m6.25-6.95q.15.15.35.15t.35-.15l.35-.35q.275-.275.275-.7T20.7 2l-.7-.7q-.275-.275-.7-.275t-.7.275l-.35.35q-.15.15-.15.35t.15.35z"></svg:path>`,
})
export class MaterialSymbolsEditLocationAltOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditLocationAltRoundedIcon],svg[material-symbols-edit-location-alt-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2h.375q.175 0 .35.025q.625.05.825.663t-.3 1.112L9.575 7.5q-.275.275-.425.638T9 8.9V11q0 .825.588 1.412T11 13h2.1q.4 0 .763-.15t.637-.425l3.675-3.675q.475-.475 1.075-.275t.7.825q.025.225.037.45t.013.45q0 2.35-1.7 5.037t-4.975 5.588q-.275.25-.625.375t-.7.125M13.4 10.7l5.55-5.55q.15-.15.15-.35t-.15-.35l-1.4-1.4q-.15-.15-.35-.15t-.35.15L11.3 8.6q-.15.15-.225.338T11 9.325v.925q0 .325.213.538t.537.212h.925q.2 0 .388-.075t.337-.225m6.25-6.95q.15.15.35.15t.35-.15l.35-.35q.275-.275.275-.7T20.7 2l-.7-.7q-.275-.275-.7-.275t-.7.275l-.35.35q-.15.15-.15.35t.15.35z"></svg:path>`,
})
export class MaterialSymbolsEditLocationAltRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditLocationOutlineRoundedIcon],svg[material-symbols-edit-location-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.85 9.575L12.425 8.15L8.8 11.75q-.15.15-.225.338t-.075.387V13q0 .2.15.35t.35.15h.525q.2 0 .388-.075t.337-.225zm.725-.725l.7-.7q.125-.125.125-.262t-.125-.263l-.9-.9q-.125-.125-.262-.125t-.263.125l-.7.7zM12 19.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35m0 1.975q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 10"></svg:path>`,
})
export class MaterialSymbolsEditLocationOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditLocationRoundedIcon],svg[material-symbols-edit-location-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.85 9.575L12.425 8.15L8.8 11.75q-.15.15-.225.338t-.075.387V13q0 .2.15.35t.35.15h.525q.2 0 .388-.075t.337-.225zm.725-.725l.7-.7q.125-.125.125-.262t-.125-.263l-.9-.9q-.125-.125-.262-.125t-.263.125l-.7.7zM12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125"></svg:path>`,
})
export class MaterialSymbolsEditLocationRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditNoteOutlineRoundedIcon],svg[material-symbols-edit-note-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14q-.425 0-.712-.288T4 13t.288-.712T5 12h5q.425 0 .713.288T11 13t-.288.713T10 14zm0-4q-.425 0-.712-.288T4 9t.288-.712T5 8h9q.425 0 .713.288T15 9t-.288.713T14 10zm0-4q-.425 0-.712-.288T4 5t.288-.712T5 4h9q.425 0 .713.288T15 5t-.288.713T14 6zm8 13v-1.65q0-.2.075-.387t.225-.338l5.225-5.2q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.2 5.2q-.15.15-.337.225T15.65 20H14q-.425 0-.712-.287T13 19m7.5-5.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45l-3.05 3.025zm3.525-3.525l-.475-.45l.925.925z"></svg:path>`,
})
export class MaterialSymbolsEditNoteOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditNoteRoundedIcon],svg[material-symbols-edit-note-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14q-.425 0-.712-.288T4 13t.288-.712T5 12h5q.425 0 .713.288T11 13t-.288.713T10 14zm0-4q-.425 0-.712-.288T4 9t.288-.712T5 8h9q.425 0 .713.288T15 9t-.288.713T14 10zm0-4q-.425 0-.712-.288T4 5t.288-.712T5 4h9q.425 0 .713.288T15 5t-.288.713T14 6zm8 13v-1.65q0-.2.075-.387t.225-.338l5.225-5.2q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.2 5.2q-.15.15-.337.225T15.65 20H14q-.425 0-.712-.287T13 19m6.575-4.6l.925-.975l-.925-.925l-.95.95zM14.5 18.5h.95l3.025-3.05l-.45-.475l-.475-.45l-3.05 3.025zm0 0v-.95l3.05-3.025l.925.925l-3.025 3.05z"></svg:path>`,
})
export class MaterialSymbolsEditNoteRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditNotificationsOutlineRoundedIcon],svg[material-symbols-edit-notifications-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m7-3H5q-.425 0-.712-.288T4 18t.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q.25.05.475.113t.425.187q.35.2.525.563t0 .737t-.537.538t-.738.012q-.55-.225-.9-.288T12 6q-1.65 0-2.825 1.175T8 10v7h8v-2q0-.5.313-.75T17 14t.688.25T18 15v2h1q.425 0 .713.288T20 18t-.288.713T19 19m-7-7v-1.65q0-.2.075-.387t.225-.338l5.225-5.2q.225-.225.5-.325t.55-.1q.3 0 .575.112t.5.338l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.2 5.2q-.15.15-.337.225T14.65 13H13q-.425 0-.712-.288T12 12m7.5-5.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45l-3.05 3.025zm3.525-3.525l-.475-.45l.925.925z"></svg:path>`,
})
export class MaterialSymbolsEditNotificationsOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditNotificationsRoundedIcon],svg[material-symbols-edit-notifications-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m7-3H5q-.425 0-.712-.288T4 18t.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q.375.125.413.55t-.288.75l-3.025 3q-.275.275-.437.65T10 9.925V13q0 .825.588 1.413T12 15h3.075q.4 0 .775-.15t.65-.425l.225-.225q.35-.35.813-.162t.462.687V17h1q.425 0 .713.288T20 18t-.288.713T19 19m-7-7v-1.65q0-.2.075-.4t.225-.325l5.225-5.2q.2-.2.475-.312T18.575 4t.588.125t.487.325l.925.925q.2.225.313.488t.112.562t-.112.588t-.313.487l-5.2 5.2q-.15.15-.337.225T14.65 13H13q-.425 0-.712-.288T12 12m6.575-4.6l.925-.975l-.925-.925l-.95.95z"></svg:path>`,
})
export class MaterialSymbolsEditNotificationsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditOffOutlineRoundedIcon],svg[material-symbols-edit-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.425 7.825l-4.175 4.15q-.275.275-.687.288t-.713-.288q-.275-.275-.275-.7t.275-.7l1.35-1.35L14.775 7.8l-1.35 1.35q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L16.2 3.575q.3-.3.663-.437T17.625 3t.775.15t.65.45L20.425 5q.3.275.437.65T21 6.4q0 .4-.138.763t-.437.662M5 19h1.425l4.875-4.875l-.7-.725l-.725-.7L5 17.575zm14.1 2.9l-6.375-6.35l-4.9 4.875q-.275.275-.638.425t-.762.15H4q-.425 0-.713-.288T3 20v-2.4q0-.4.15-.763t.425-.637l4.9-4.9L2.1 4.9q-.3-.3-.288-.7t.313-.7t.713-.3t.712.3l16.975 16.975q.3.3.288.713t-.313.712t-.7.3t-.7-.3M19 6.4L17.6 5zm-4.225 1.4L16.2 9.225zM10.6 13.4l-.725-.7l1.425 1.425z"></svg:path>`,
})
export class MaterialSymbolsEditOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditOffRoundedIcon],svg[material-symbols-edit-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6.4q0 .4-.137.763t-.438.662l-4.175 4.15q-.3.3-.7.3t-.7-.3L12.025 9.15q-.3-.3-.3-.7t.3-.7L16.2 3.575q.3-.3.663-.437T17.625 3t.775.15t.65.45L20.425 5q.3.275.437.65T21 6.4m-1.9 15.5l-6.375-6.35l-4.9 4.875q-.275.275-.638.425t-.762.15H4q-.425 0-.713-.288T3 20v-2.4q0-.4.15-.763t.425-.637l4.9-4.9L2.1 4.9q-.3-.3-.288-.7t.313-.7t.713-.3t.712.3l16.975 16.975q.3.3.288.713t-.313.712t-.7.3t-.7-.3M17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsEditOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditOutlineRoundedIcon],svg[material-symbols-edit-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-1 2q-.425 0-.712-.288T3 20v-2.425q0-.4.15-.763t.425-.637L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.437.65T21 6.4q0 .4-.138.763t-.437.662l-12.6 12.6q-.275.275-.638.425t-.762.15zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"></svg:path>`,
})
export class MaterialSymbolsEditOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditRoadOutlineRoundedIcon],svg[material-symbols-edit-road-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11q-.375 0-.687-.25T16 10V5q0-.425.288-.712T17 4t.713.288T18 5v5q0 .5-.312.75T17 11M4 19V5q0-.425.288-.712T5 4t.713.288T6 5v14q0 .425-.288.713T5 20t-.712-.288T4 19m6-12V5q0-.425.288-.712T11 4t.713.288T12 5v2q0 .425-.288.713T11 8t-.712-.288T10 7m0 6v-2q0-.425.288-.712T11 10t.713.288T12 11v2q0 .425-.288.713T11 14t-.712-.288T10 13m0 6v-2q0-.425.288-.712T11 16t.713.288T12 17v2q0 .425-.288.713T11 20t-.712-.288T10 19m5 1q-.425 0-.712-.288T14 19v-1.65q0-.2.075-.387t.225-.338l5.225-5.2q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.2 5.2q-.15.15-.337.225T16.65 20zm6.5-6.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45l-3.05 3.025zm3.525-3.525l-.475-.45l.925.925z"></svg:path>`,
})
export class MaterialSymbolsEditRoadOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditRoadRoundedIcon],svg[material-symbols-edit-road-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19V5q0-.425.288-.712T5 4t.713.288T6 5v14q0 .425-.288.713T5 20t-.712-.288T4 19m6-12V5q0-.425.288-.712T11 4t.713.288T12 5v2q0 .425-.288.713T11 8t-.712-.288T10 7m0 6v-2q0-.425.288-.712T11 10t.713.288T12 11v2q0 .425-.288.713T11 14t-.712-.288T10 13m0 6v-2q0-.425.288-.712T11 16t.713.288T12 17v2q0 .425-.288.713T11 20t-.712-.288T10 19m5 1q-.425 0-.712-.288T14 19v-1.65q0-.2.075-.387t.225-.338l5.225-5.2q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.2 5.2q-.15.15-.337.225T16.65 20zm5.575-5.6l.925-.975l-.925-.925l-.95.95zM17 11q-.375 0-.687-.25T16 10V5q0-.425.288-.712T17 4t.713.288T18 5v5q0 .5-.312.75T17 11"></svg:path>`,
})
export class MaterialSymbolsEditRoadRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditRoundedIcon],svg[material-symbols-edit-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.425 0-.712-.288T3 20v-2.425q0-.4.15-.763t.425-.637L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.437.65T21 6.4q0 .4-.138.763t-.437.662l-12.6 12.6q-.275.275-.638.425t-.762.15zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsEditRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditSquareOutlineRoundedIcon],svg[material-symbols-edit-square-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6.525q.5 0 .75.313t.25.687t-.262.688T11.5 5H5v14h14v-6.525q0-.5.313-.75t.687-.25t.688.25t.312.75V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"></svg:path>`,
})
export class MaterialSymbolsEditSquareOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditSquareRoundedIcon],svg[material-symbols-edit-square-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15q-.425 0-.712-.288T9 14v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162zm9.6-9.2l1.425-1.4l-1.4-1.4L18.2 4.4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6.5q.35 0 .575.175t.35.45t.087.55t-.287.525l-4.65 4.65q-.275.275-.425.638T7 10.75V15q0 .825.588 1.412T9 17h4.225q.4 0 .763-.15t.637-.425L19.3 11.75q.25-.25.525-.288t.55.088t.45.35t.175.575V19q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsEditSquareRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditorChoiceOutlineRoundedIcon],svg[material-symbols-editor-choice-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21l-3.375 1.125q-.175.05-.325.075t-.3.025q-.8 0-1.4-.563T6 20.225v-5.45L3.4 10.55q-.15-.25-.225-.513T3.1 9.5t.075-.537t.225-.513l3.4-5.5q.275-.45.725-.7T8.5 2h7q.525 0 .975.25t.725.7l3.4 5.5q.15.25.225.513t.075.537t-.075.538t-.225.512L18 14.775v5.45q0 .875-.6 1.438t-1.4.562q-.15 0-.3-.025t-.325-.075zm0-2.1l4 1.325V17H8v3.225zM8.5 15h7l3.4-5.5L15.5 4h-7L5.1 9.5zm2.45-4.25l3.525-3.55q.275-.3.688-.288t.712.288q.3.3.313.713t-.288.712l-4.25 4.25q-.3.3-.7.3t-.7-.3L8.125 10.75q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3zM12 17H8h8z"></svg:path>`,
})
export class MaterialSymbolsEditorChoiceOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditorChoiceRoundedIcon],svg[material-symbols-editor-choice-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21l-3.375 1.125q-.175.05-.325.075t-.3.025q-.8 0-1.4-.563T6 20.225v-5.45L3.4 10.55q-.15-.25-.225-.513T3.1 9.5t.075-.537t.225-.513l3.4-5.5q.275-.45.725-.7T8.5 2h7q.525 0 .975.25t.725.7l3.4 5.5q.15.25.225.513t.075.537t-.075.538t-.225.512L18 14.775v5.45q0 .875-.6 1.438t-1.4.562q-.15 0-.3-.025t-.325-.075zm-3.5-6h7l3.4-5.5L15.5 4h-7L5.1 9.5zm2.45-4.25l3.525-3.55q.275-.3.688-.288t.712.288q.3.3.313.713t-.288.712l-4.25 4.25q-.3.3-.7.3t-.7-.3L8.125 10.75q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3z"></svg:path>`,
})
export class MaterialSymbolsEditorChoiceRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEjectOutlineRoundedIcon],svg[material-symbols-eject-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17h12q.425 0 .713.288T19 18t-.288.713T18 19H6q-.425 0-.712-.288T5 18t.288-.712T6 17m.375-3.55l4.8-7.2q.15-.225.363-.338T12 5.8t.463.113t.362.337l4.8 7.2q.35.5.05 1.025t-.9.525h-9.55q-.6 0-.9-.525t.05-1.025M9.05 13h5.9L12 8.6z"></svg:path>`,
})
export class MaterialSymbolsEjectOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEjectRoundedIcon],svg[material-symbols-eject-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17h12q.425 0 .713.288T19 18t-.288.713T18 19H6q-.425 0-.712-.288T5 18t.288-.712T6 17m.375-3.55l4.8-7.2q.15-.225.363-.338T12 5.8t.463.113t.362.337l4.8 7.2q.35.5.05 1.025t-.9.525h-9.55q-.6 0-.9-.525t.05-1.025"></svg:path>`,
})
export class MaterialSymbolsEjectRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElderlyRoundedIcon],svg[material-symbols-elderly-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 5.5q-.825 0-1.412-.587T11.5 3.5t.588-1.412T13.5 1.5t1.413.588T15.5 3.5t-.587 1.413T13.5 5.5m4 8.75q-.2 0-.35-.15t-.15-.35v-.475q-1.35-.575-2.1-1.287t-1.325-1.913q-.275.7-.437 1.713t-.113 1.912l1.8 2.55q.1.125.138.275t.037.3V22q0 .425-.288.713T14 23t-.712-.288T13 22v-4l-1.775-2.55l-.2 3.25q0 .1-.2.55L8.6 22.2q-.25.35-.65.4t-.75-.2t-.4-.65T7 21l2-2.675V13q0-.775.125-1.687T9.5 9.625L8 10.45V13q0 .425-.288.713T7 14t-.712-.288T6 13V9.875q0-.275.125-.513T6.5 9l3.9-2.2q.625-.35 1.088-.537t.862-.188q.625 0 1.138.538T14.675 8.3q.8 1.35 1.45 2.025t1.4 1.025q.275-.2.475-.275t.475-.075q.625 0 1.075.45T20 12.5v10q0 .2-.15.35t-.35.15t-.35-.15t-.15-.35v-10q0-.2-.15-.35T18.5 12t-.35.15t-.15.35v1.25q0 .2-.15.35t-.35.15"></svg:path>`,
})
export class MaterialSymbolsElderlyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElderlyWomanRoundedIcon],svg[material-symbols-elderly-woman-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 5.5q-.825 0-1.412-.587T11.5 3.5q0-.2.1-.6q-.275-.125-.437-.363T11 2q0-.425.288-.712T12 1q.3 0 .538.163t.362.437q.15-.05.3-.075t.3-.025q.825 0 1.413.588T15.5 3.5t-.587 1.413T13.5 5.5m4 8.75q-.2 0-.35-.15t-.15-.35v-.475q-.95-.525-1.95-1.362t-1.475-1.838L13 13l2 5.975V23h-2v-4h-2l-2.4 3.2q-.25.35-.65.4t-.75-.2t-.4-.65T7 21l1.5-2H7.275q-.45 0-.712-.375T6.3 17.75q0-.875.338-2.387t1.187-3.738q.85-2.25 2.013-3.937T12.35 6q.925 0 1.288.575T14.675 8.3q.8 1.35 1.45 2.025t1.4 1.025q.275-.2.475-.275t.475-.075q.625 0 1.075.45T20 12.5v10q0 .2-.15.35t-.35.15t-.35-.15t-.15-.35v-10q0-.2-.15-.35T18.5 12t-.35.15t-.15.35v1.25q0 .2-.15.35t-.35.15"></svg:path>`,
})
export class MaterialSymbolsElderlyWomanRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElectricBikeOutlineRoundedIcon],svg[material-symbols-electric-bike-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17q-2.125 0-3.562-1.437T0 12t1.463-3.562T5 7q1.925 0 3.238 1.15T9.9 11h.65l-1.8-5H8q-.425 0-.712-.288T7 5t.288-.712T8 4h3q.425 0 .713.288T12 5t-.288.713T11 6h-.1l.35 1h4.8L14.6 3H13q-.425 0-.712-.288T12 2t.288-.712T13 1h1.6q.65 0 1.163.35t.737.95l1.7 4.65h.8q2.075 0 3.538 1.463T24 11.95q0 2.1-1.45 3.575T19 17q-1.8 0-3.162-1.125T14.1 13H9.9q-.35 1.725-1.7 2.863T5 17m0-2q1.025 0 1.763-.562T7.8 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h1.8q-.3-.9-1.037-1.45T5 9q-1.275 0-2.137.863T2 12q0 1.25.863 2.125T5 15m7.7-4h1.4q.125-.575.338-1.075T15 9h-3.05zm6.3 4q1.275 0 2.138-.875T22 12q0-1.275-.862-2.137T19 9h-.1l.65 1.725q.15.4-.025.763T18.95 12t-.775-.025t-.525-.575l-.6-1.7q-.5.425-.775 1T16 12q0 1.25.863 2.125T19 15m-6 6v1.2q0 .275-.238.425t-.487.025L7.95 20.475q-.175-.1-.138-.288T8.05 20H11v-1.2q0-.275.238-.425t.487-.025l4.325 2.175q.175.1.138.288T15.95 21zm6-9"></svg:path>`,
})
export class MaterialSymbolsElectricBikeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElectricBikeRoundedIcon],svg[material-symbols-electric-bike-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17q-2.125 0-3.562-1.437T0 12t1.463-3.562T5 7q1.925 0 3.238 1.15T9.9 11h.65l-1.8-5H8q-.425 0-.712-.288T7 5t.288-.712T8 4h3q.425 0 .713.288T12 5t-.288.713T11 6h-.1l.35 1h4.8L14.6 3H13q-.425 0-.712-.288T12 2t.288-.712T13 1h1.6q.65 0 1.163.35t.737.95l1.7 4.65h.8q2.075 0 3.538 1.463T24 11.95q0 2.1-1.45 3.575T19 17q-1.8 0-3.162-1.125T14.1 13H9.9q-.35 1.725-1.7 2.863T5 17m2.8-4v-2H6q-.425 0-.712.288T5 12t.288.713T6 13zm4.9-2h1.4q.125-.575.338-1.075T15 9h-3.05zm4.35-1.3l.6 1.7q.125.4.513.575t.787.025t.575-.525t.025-.775L18.9 9zM13 21v1.2q0 .275-.238.425t-.487.025L7.95 20.475q-.175-.1-.138-.288T8.05 20H11v-1.2q0-.275.238-.425t.487-.025l4.325 2.175q.175.1.138.288T15.95 21z"></svg:path>`,
})
export class MaterialSymbolsElectricBikeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElectricBoltOutlineRoundedIcon],svg[material-symbols-electric-bolt-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 14.5l-5.925-.75q-.625-.075-.813-.675t.263-1.025l10.225-9.8q.125-.125.3-.187T15.525 2q.5 0 .763.425t.012.875L13 9.5l5.925.75q.625.075.813.675t-.263 1.025L9.25 21.75q-.125.125-.3.188T8.475 22q-.5 0-.763-.425T7.7 20.7zm1.55 1.325l4.025-3.85l-6.725-.85L11.425 8.2l-4 3.85l6.7.825zM12 12"></svg:path>`,
})
export class MaterialSymbolsElectricBoltOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElectricBoltRoundedIcon],svg[material-symbols-electric-bolt-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 14.5l-5.925-.75q-.625-.075-.813-.675t.263-1.025l10.225-9.8q.125-.125.3-.187T15.525 2q.5 0 .763.425t.012.875L13 9.5l5.925.75q.625.075.813.675t-.263 1.025L9.25 21.75q-.125.125-.3.188T8.475 22q-.5 0-.763-.425T7.7 20.7z"></svg:path>`,
})
export class MaterialSymbolsElectricBoltRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElectricCarOutlineRoundedIcon],svg[material-symbols-electric-car-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15v.5q0 .625-.437 1.063T4.5 17t-1.062-.437T3 15.5V8.35q0-.175.025-.35t.075-.325L4.975 2.35q.2-.6.725-.975T6.875 1h10.25q.65 0 1.175.375t.725.975L20.9 7.675q.05.15.075.325t.025.35v7.15q0 .625-.437 1.063T19.5 17t-1.062-.437T18 15.5V15zm-.2-9h12.4l-1.05-3H6.85zM5 8v5zm2.5 4q.625 0 1.063-.437T9 10.5t-.437-1.062T7.5 9t-1.062.438T6 10.5t.438 1.063T7.5 12m9 0q.625 0 1.063-.437T18 10.5t-.437-1.062T16.5 9t-1.062.438T15 10.5t.438 1.063T16.5 12M13 21v1.2q0 .275-.238.425t-.487.025L7.95 20.475q-.175-.1-.138-.288T8.05 20H11v-1.2q0-.275.238-.425t.487-.025l4.325 2.175q.175.1.138.288T15.95 21zm-8-8h14V8H5z"></svg:path>`,
})
export class MaterialSymbolsElectricCarOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElectricCarRoundedIcon],svg[material-symbols-electric-car-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15v.5q0 .625-.437 1.063T4.5 17t-1.062-.437T3 15.5V8.35q0-.175.025-.35t.075-.325L4.975 2.35q.2-.6.725-.975T6.875 1h10.25q.65 0 1.175.375t.725.975L20.9 7.675q.05.15.075.325t.025.35v7.15q0 .625-.437 1.063T19.5 17t-1.062-.437T18 15.5V15zm-.2-9h12.4l-1.05-3H6.85zm1.7 6q.625 0 1.063-.437T9 10.5t-.437-1.062T7.5 9t-1.062.438T6 10.5t.438 1.063T7.5 12m9 0q.625 0 1.063-.437T18 10.5t-.437-1.062T16.5 9t-1.062.438T15 10.5t.438 1.063T16.5 12M13 21v1.2q0 .275-.238.425t-.487.025L7.95 20.475q-.175-.1-.138-.288T8.05 20H11v-1.2q0-.275.238-.425t.487-.025l4.325 2.175q.175.1.138.288T15.95 21z"></svg:path>`,
})
export class MaterialSymbolsElectricCarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElectricMeterOutlineRoundedIcon],svg[material-symbols-electric-meter-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20.95v-1.5q-2.65-.925-4.325-3.237T3 10.95q0-1.875.713-3.512t1.924-2.85t2.85-1.925t3.488-.713t3.5.713t2.875 1.925t1.938 2.85T21 10.95q0 2.95-1.687 5.238T15 19.425v1.525q0 .425-.288.713T14 21.95t-.712-.287T13 20.95V19.9q-.25.05-.5.05h-.525q-.25 0-.488-.012T11 19.9v1.05q0 .425-.288.713T10 21.95t-.712-.287T9 20.95M12 18q2.9 0 4.95-2.05T19 11t-2.05-4.95T12 4T7.05 6.05T5 11t2.05 4.95T12 18M9 9h6q.425 0 .713-.288T16 8t-.288-.712T15 7H9q-.425 0-.712.288T8 8t.288.713T9 9m2 5.25l-.5.5q-.325.325-.325.75t.325.75t.75.325t.75-.325l1.55-1.55q.3-.3.3-.7t-.3-.7l-.55-.55l.5-.5q.325-.325.325-.75t-.325-.75t-.75-.325t-.75.325l-1.55 1.55q-.3.3-.3.7t.3.7zM12 11"></svg:path>`,
})
export class MaterialSymbolsElectricMeterOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElectricMeterRoundedIcon],svg[material-symbols-electric-meter-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20.95v-1.5q-2.65-.925-4.325-3.237T3 10.95q0-1.875.713-3.512t1.924-2.85t2.85-1.925t3.488-.713t3.5.713t2.875 1.925t1.938 2.85T21 10.95q0 2.95-1.687 5.238T15 19.425v1.525q0 .425-.288.713T14 21.95t-.712-.287T13 20.95V19.9q-.25.05-.5.05h-.525q-.25 0-.488-.012T11 19.9v1.05q0 .425-.288.713T10 21.95t-.712-.287T9 20.95M9 9h6q.425 0 .713-.287T16 8t-.288-.712T15 7H9q-.425 0-.712.288T8 8t.288.713T9 9m2 5.25l-.5.5q-.325.325-.325.75t.325.75t.75.325t.75-.325l1.55-1.55q.3-.3.3-.7t-.3-.7l-.55-.55l.5-.5q.325-.325.325-.75t-.325-.75t-.75-.325t-.75.325l-1.55 1.55q-.3.3-.3.7t.3.7z"></svg:path>`,
})
export class MaterialSymbolsElectricMeterRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElectricMopedOutlineRoundedIcon],svg[material-symbols-electric-moped-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21v1.2q0 .275-.238.425t-.487.025L7.95 20.475q-.175-.1-.138-.288T8.05 20H11v-1.2q0-.275.238-.425t.487-.025l4.325 2.175q.175.1.138.288T15.95 21zm-6-4q-1.25 0-2.125-.875T4 14H3q-.425 0-.712-.288T2 13v-2q0-1.65 1.175-2.825T6 7h2q.825 0 1.413.588T10 9v3h3.5L17 7.65V5h-2q-.425 0-.712-.288T14 4t.288-.712T15 3h2q.825 0 1.413.588T19 5v2.65q0 .35-.112.663t-.313.587L15.1 13.25q-.275.35-.7.55t-.875.2H10q0 1.25-.875 2.125T7 17m0-2q.425 0 .713-.288T8 14H6q0 .425.288.713T7 15m2-9H6q-.425 0-.712-.288T5 5t.288-.712T6 4h3q.425 0 .713.288T10 5t-.288.713T9 6m10 11q-1.25 0-2.125-.875T16 14t.875-2.125T19 11t2.125.875T22 14t-.875 2.125T19 17m0-2q.425 0 .713-.288T20 14t-.288-.712T19 13t-.712.288T18 14t.288.713T19 15M4 12h4V9H6q-.825 0-1.412.588T4 11z"></svg:path>`,
})
export class MaterialSymbolsElectricMopedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElectricMopedRoundedIcon],svg[material-symbols-electric-moped-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21v1.2q0 .275-.238.425t-.487.025L7.95 20.475q-.175-.1-.138-.288T8.05 20H11v-1.2q0-.275.238-.425t.487-.025l4.325 2.175q.175.1.138.288T15.95 21zm-6-4q-1.25 0-2.125-.875T4 14H3q-.425 0-.712-.288T2 13v-2q0-1.65 1.175-2.825T6 7h2q.825 0 1.413.588T10 9v3h3.5L17 7.65V5h-2q-.425 0-.712-.288T14 4t.288-.712T15 3h2q.825 0 1.413.588T19 5v2.65q0 .35-.112.663t-.313.587L15.1 13.25q-.275.35-.7.55t-.875.2H10q0 1.25-.875 2.125T7 17m0-2q.425 0 .713-.288T8 14H6q0 .425.288.713T7 15m2-9H6q-.425 0-.712-.288T5 5t.288-.712T6 4h3q.425 0 .713.288T10 5t-.288.713T9 6m10 11q-1.25 0-2.125-.875T16 14t.875-2.125T19 11t2.125.875T22 14t-.875 2.125T19 17m0-2q.425 0 .713-.288T20 14t-.288-.712T19 13t-.712.288T18 14t.288.713T19 15"></svg:path>`,
})
export class MaterialSymbolsElectricMopedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElectricRickshawOutlineRoundedIcon],svg[material-symbols-electric-rickshaw-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17q-.975 0-1.737-.562T3.2 15H3q-.825 0-1.412-.587T1 13V5q0-.825.588-1.412T3 3h12.05q.45 0 .85.175t.7.525l3.95 4.75q.225.275.338.588T21 9.7v1.45q.875.3 1.438 1.088T23 14q0 1.25-.875 2.125T20 17q-.975 0-1.763-.562T17.15 15h-8.3q-.35.875-1.112 1.438T6 17M3 8h4V5H3zm6 5h5V5H9v3h2q.425 0 .713.288T12 9t-.288.713T11 10H9zm7-4h2.4L16 6.1zM6 15q.425 0 .713-.288T7 14t-.288-.712T6 13t-.712.288T5 14t.288.713T6 15m14 0q.425 0 .713-.288T21 14t-.288-.712T20 13t-.712.288T19 14t.288.713T20 15m-7.725 7.65L7.95 20.475q-.175-.1-.137-.288T8.05 20H11v-1.2q0-.275.238-.425t.487-.025l4.325 2.175q.175.1.138.288T15.95 21H13v1.2q0 .275-.238.425t-.487.025M3 10v3h.15q.35-.875 1.113-1.437T6 11q.275 0 .525.038T7 11.15V10zm13 3h1.15q.225-.65.713-1.137T19 11.15V11h-3zM3 10h4zm13 1h3z"></svg:path>`,
})
export class MaterialSymbolsElectricRickshawOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElectricRickshawRoundedIcon],svg[material-symbols-electric-rickshaw-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17q-.975 0-1.737-.562T3.2 15H3q-.825 0-1.412-.587T1 13V5q0-.825.588-1.412T3 3h12.05q.45 0 .85.175t.7.525l3.95 4.75q.225.275.338.588T21 9.7v1.45q.875.3 1.438 1.088T23 14q0 1.25-.875 2.125T20 17q-.975 0-1.763-.562T17.15 15h-8.3q-.35.875-1.112 1.438T6 17M3 8h4V5H3zm6 5h5V5H9v3h2q.425 0 .713.288T12 9t-.288.713T11 10H9zm7-4h2.4L16 6.1zM6 15q.425 0 .713-.288T7 14t-.288-.712T6 13t-.712.288T5 14t.288.713T6 15m14 0q.425 0 .713-.288T21 14t-.288-.712T20 13t-.712.288T19 14t.288.713T20 15m-7.725 7.65L7.95 20.475q-.175-.1-.137-.288T8.05 20H11v-1.2q0-.275.238-.425t.487-.025l4.325 2.175q.175.1.138.288T15.95 21H13v1.2q0 .275-.238.425t-.487.025"></svg:path>`,
})
export class MaterialSymbolsElectricRickshawRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElectricScooterOutlineRoundedIcon],svg[material-symbols-electric-scooter-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18q-1.25 0-2.125-.875T2 15t.875-2.125T5 12q.975 0 1.738.563T7.8 14h5.3q.275-1.7 1.413-2.975T17.3 9.25L15.9 3H13q-.425 0-.712-.288T12 2t.288-.712T13 1h2.9q.7 0 1.25.425t.7 1.125l1.725 7.725q.05.275-.125.5T19 11q-1.575 0-2.713 1.063t-1.262 2.612q-.05.575-.45.95T13.6 16H7.8q-.3.875-1.062 1.438T5 18m0-2q.425 0 .713-.288T6 15t-.288-.712T5 14t-.712.288T4 15t.288.713T5 16m14 2q-1.25 0-2.125-.875T16 15t.875-2.125T19 12t2.125.875T22 15t-.875 2.125T19 18m0-2q.425 0 .713-.288T20 15t-.288-.712T19 14t-.712.288T18 15t.288.713T19 16m-6 5v1.2q0 .275-.238.425t-.487.025L7.95 20.475q-.175-.1-.138-.288T8.05 20H11v-1.2q0-.275.238-.425t.487-.025l4.325 2.175q.175.1.138.288T15.95 21zm6-6"></svg:path>`,
})
export class MaterialSymbolsElectricScooterOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElectricScooterRoundedIcon],svg[material-symbols-electric-scooter-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18q-1.25 0-2.125-.875T2 15t.875-2.125T5 12q.975 0 1.738.563T7.8 14h5.3q.275-1.7 1.413-2.975T17.3 9.25L15.9 3H13q-.425 0-.712-.288T12 2t.288-.712T13 1h2.9q.7 0 1.25.425t.7 1.125l1.725 7.725q.05.275-.125.5T19 11q-1.575 0-2.713 1.063t-1.262 2.612q-.05.575-.45.95T13.6 16H7.8q-.3.875-1.062 1.438T5 18m14 0q-1.25 0-2.125-.875T16 15t.875-2.125T19 12t2.125.875T22 15t-.875 2.125T19 18m-6 3v1.2q0 .275-.238.425t-.487.025L7.95 20.475q-.175-.1-.138-.288T8.05 20H11v-1.2q0-.275.238-.425t.487-.025l4.325 2.175q.175.1.138.288T15.95 21z"></svg:path>`,
})
export class MaterialSymbolsElectricScooterRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElectricalServicesRoundedIcon],svg[material-symbols-electrical-services-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15q-.425 0-.712-.288T18 14t.288-.712T19 13h1q.425 0 .713.288T21 14t-.288.713T20 15zm0 4q-.425 0-.712-.288T18 18t.288-.712T19 17h1q.425 0 .713.288T21 18t-.288.713T20 19zm-5 1q-.825 0-1.412-.587T12 18h-1q-.425 0-.712-.288T10 17v-2q0-.425.288-.712T11 14h1q0-.825.588-1.412T14 12h2q.425 0 .713.288T17 13v6q0 .425-.288.713T16 20zm-7-3q-1.65 0-2.825-1.175T3 13t1.175-2.825T7 9h1.5q.625 0 1.063-.437T10 7.5t-.437-1.062T8.5 6H5q-.425 0-.712-.288T4 5t.288-.712T5 4h3.5q1.45 0 2.475 1.025T12 7.5t-1.025 2.475T8.5 11H7q-.825 0-1.412.588T5 13t.588 1.413T7 15h1q.425 0 .713.288T9 16t-.288.713T8 17z"></svg:path>`,
})
export class MaterialSymbolsElectricalServicesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElevationOutlineRoundedIcon],svg[material-symbols-elevation-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H4q-.625 0-.888-.537t.088-1.038l4.7-6.6q.275-.4.7-.612T9.525 12h4.025l5.7-6.65q.45-.525 1.1-.288T21 6v13q0 .825-.587 1.413T19 21M7.5 10l-3.1 4.375q-.25.35-.65.413T3 14.6t-.412-.65t.187-.75L5.9 8.85q.275-.4.7-.625T7.525 8h4.025l4.05-4.725q.275-.325.675-.35t.725.25t.35.675t-.25.725L13.05 9.3q-.275.35-.675.525T11.55 10zm-1.55 9H19V8.7l-3.95 4.6q-.275.35-.675.525T13.55 14H9.5zM19 19"></svg:path>`,
})
export class MaterialSymbolsElevationOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElevationRoundedIcon],svg[material-symbols-elevation-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H4q-.625 0-.888-.537t.088-1.038l4.7-6.6q.275-.4.7-.612T9.525 12h4.025l5.7-6.65q.45-.525 1.1-.288T21 6v13q0 .825-.587 1.413T19 21M7.5 10l-3.1 4.375q-.25.35-.65.413T3 14.6t-.412-.65t.187-.75L5.9 8.85q.275-.4.7-.625T7.525 8h4.025l4.05-4.725q.275-.325.675-.35t.725.25t.35.675t-.25.725L13.05 9.3q-.275.35-.675.525T11.55 10z"></svg:path>`,
})
export class MaterialSymbolsElevationRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElevatorOutlineRoundedIcon],svg[material-symbols-elevator-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14v3q0 .425.288.713T8 18h1q.425 0 .713-.288T10 17v-3q.275-.275.638-.437T11 13v-1.5q0-.825-.587-1.412T9 9.5H8q-.825 0-1.412.588T6 11.5V13q0 .4.363.563T7 14m1.5-5.5q.525 0 .888-.363t.362-.887t-.363-.888T8.5 6t-.888.363t-.362.887t.363.888t.887.362m5.4 2.5h3.2q.3 0 .438-.262t-.013-.513l-1.6-2.55q-.15-.25-.425-.25t-.425.25l-1.6 2.55q-.15.25-.012.513T13.9 11m2.025 5.325l1.6-2.55q.15-.25.013-.513T17.1 13h-3.2q-.3 0-.437.263t.012.512l1.6 2.55q.15.25.425.25t.425-.25M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsElevatorOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElevatorRoundedIcon],svg[material-symbols-elevator-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14v3q0 .425.288.713T8 18h1q.425 0 .713-.288T10 17v-3q.275-.275.638-.437T11 13v-1.5q0-.825-.587-1.412T9 9.5H8q-.825 0-1.412.588T6 11.5V13q0 .4.363.563T7 14m1.5-5.5q.525 0 .888-.363t.362-.887t-.363-.888T8.5 6t-.888.363t-.362.887t.363.888t.887.362m5.4 2.5h3.2q.3 0 .438-.262t-.013-.513l-1.6-2.55q-.15-.25-.425-.25t-.425.25l-1.6 2.55q-.15.25-.012.513T13.9 11m2.025 5.325l1.6-2.55q.15-.25.013-.513T17.1 13h-3.2q-.3 0-.437.263t.012.512l1.6 2.55q.15.25.425.25t.425-.25M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsElevatorRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmergencyHeatOutlineRoundedIcon],svg[material-symbols-emergency-heat-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22q-3.35 0-5.675-2.325T3 14q0-2.825 1.675-5.425t4.6-4.55q.55-.375 1.137-.038T11 5v1.3q0 .85.588 1.425t1.437.575q.425 0 .813-.188t.687-.537q.2-.25.513-.312t.587.137Q17.2 8.525 18.1 10.275T19 14q0 3.35-2.325 5.675T11 22m-6-8q0 1.3.525 2.463t1.5 2.037Q7 18.375 7 18.275v-.225q0-.8.3-1.5t.875-1.275L11 12.5l2.825 2.775q.575.575.875 1.275t.3 1.5v.225q0 .1-.025.225q.975-.875 1.5-2.037T17 14q0-1.25-.462-2.363T15.2 9.65q-.5.325-1.05.488t-1.125.162q-1.55 0-2.687-1.025T9.025 6.75q-1.95 1.65-2.988 3.513T5 14m6 1.3l-1.425 1.4q-.275.275-.425.625T9 18.05q0 .8.587 1.375T11 20t1.412-.575T13 18.05q0-.4-.15-.737t-.425-.613zM21 11q-.425 0-.712-.288T20 10t.288-.712T21 9t.713.288T22 10t-.288.713T21 11m0-3q-.425 0-.712-.288T20 7V4q0-.425.288-.712T21 3t.713.288T22 4v3q0 .425-.288.713T21 8"></svg:path>`,
})
export class MaterialSymbolsEmergencyHeatOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmergencyHeatRoundedIcon],svg[material-symbols-emergency-heat-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14q0-2.825 1.675-5.425t4.6-4.55q.55-.375 1.138-.038T11 5v1.3q0 .85.588 1.425t1.437.575q.425 0 .813-.188t.687-.537q.2-.25.513-.312t.587.137Q17.2 8.525 18.1 10.275T19 14q0 2.2-1.075 4.013T15.1 20.874q.425-.6.663-1.312T16 18.05q0-1-.375-1.888t-1.075-1.587L11 11.1l-3.525 3.475q-.725.725-1.1 1.6T6 18.05q0 .8.238 1.513t.662 1.312q-1.75-1.05-2.825-2.863T3 14m8-.1l2.125 2.075q.425.425.65.95T14 18.05q0 1.225-.875 2.088T11 21t-2.125-.862T8 18.05q0-.575.225-1.112t.65-.963zM21 11q-.425 0-.712-.288T20 10t.288-.712T21 9t.713.288T22 10t-.288.713T21 11m0-3q-.425 0-.712-.288T20 7V4q0-.425.288-.712T21 3t.713.288T22 4v3q0 .425-.288.713T21 8"></svg:path>`,
})
export class MaterialSymbolsEmergencyHeatRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmergencyHomeOutlineRoundedIcon],svg[material-symbols-emergency-home-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22.025q-.4 0-.763-.15t-.662-.425L2.55 13.425q-.275-.3-.425-.663T1.975 12t.15-.775t.425-.65l8.025-8.025q.3-.3.663-.438T12 1.975t.775.138t.65.437l8.025 8.025q.3.275.438.65t.137.775t-.137.763t-.438.662l-8.025 8.025q-.275.275-.65.425t-.775.15m0-2L20.025 12L12 3.975L3.975 12zM12 13q.425 0 .713-.287T13 12V8q0-.425-.288-.712T12 7t-.712.288T11 8v4q0 .425.288.713T12 13m0 3q.425 0 .713-.288T13 15t-.288-.712T12 14t-.712.288T11 15t.288.713T12 16m0-4"></svg:path>`,
})
export class MaterialSymbolsEmergencyHomeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmergencyHomeRoundedIcon],svg[material-symbols-emergency-home-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22.025q-.4 0-.763-.15t-.662-.425L2.55 13.425q-.275-.3-.425-.663T1.975 12t.15-.775t.425-.65l8.025-8.025q.3-.3.663-.438T12 1.975t.775.138t.65.437l8.025 8.025q.3.275.438.65t.137.775t-.137.763t-.438.662l-8.025 8.025q-.275.275-.65.425t-.775.15M12 13q.425 0 .713-.287T13 12V8q0-.425-.288-.712T12 7t-.712.288T11 8v4q0 .425.288.713T12 13m0 3q.425 0 .713-.288T13 15t-.288-.712T12 14t-.712.288T11 15t.288.713T12 16"></svg:path>`,
})
export class MaterialSymbolsEmergencyHomeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmergencyOutlineRoundedIcon],svg[material-symbols-emergency-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22q-.425 0-.712-.288Q9 21.425 9 21v-3.8l-3.275 1.9q-.35.2-.762.088q-.413-.113-.613-.463l-2-3.45q-.2-.35-.1-.763q.1-.412.45-.612L6 12l-3.3-1.9q-.35-.2-.45-.613q-.1-.412.1-.762l2-3.45q.2-.35.613-.463q.412-.112.762.088L9 6.8V3q0-.425.288-.713Q9.575 2 10 2h4q.425 0 .713.287Q15 2.575 15 3v3.8l3.275-1.9q.35-.2.763-.088q.412.113.612.463l2 3.45q.2.35.1.762q-.1.413-.45.613L18 12l3.3 1.9q.35.2.45.612q.1.413-.1.763l-2 3.45q-.2.35-.612.463q-.413.112-.763-.088L15 17.2V21q0 .425-.287.712Q14.425 22 14 22Zm1-2h2v-5.4q0-.3.25-.438q.25-.137.5.013l4.675 2.7l1-1.75l-4.675-2.7q-.25-.15-.25-.438q0-.287.25-.437l4.675-2.7l-1-1.725l-4.675 2.7q-.25.15-.5.012Q13 9.7 13 9.4V4h-2v5.4q0 .275-.238.425q-.237.15-.512.025l-4.675-2.7l-1 1.725l4.675 2.7q.25.15.25.437q0 .288-.25.438l-4.675 2.7l1 1.725l4.675-2.7q.25-.15.5-.013q.25.138.25.438Zm1-8Z"></svg:path>`,
})
export class MaterialSymbolsEmergencyOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmergencyRecordingOutlineRoundedIcon],svg[material-symbols-emergency-recording-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13.725V16q0 .425.288.713T10 17t.713-.288T11 16v-2.275l2.15 1.225q.35.2.75.1t.6-.45t.088-.763t-.463-.612L12 12l2.125-1.225q.35-.2.463-.612T14.5 9.4t-.6-.45t-.75.1L11 10.275V8q0-.425-.288-.712T10 7t-.712.288T9 8v2.275L6.85 9.05q-.35-.2-.75-.1t-.6.45t-.088.763t.463.612L8 12l-2.125 1.225q-.35.2-.462.613t.087.762t.6.45t.75-.1zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l3.15-3.15q.25-.25.55-.125t.3.475v8.6q0 .35-.3.475t-.55-.125L18 13.5V18q0 .825-.587 1.413T16 20zm0-2h12V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsEmergencyRecordingOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmergencyRecordingRoundedIcon],svg[material-symbols-emergency-recording-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13.725V16q0 .425.288.713T10 17t.713-.288T11 16v-2.275l2.15 1.225q.35.2.75.1t.6-.45t.088-.763t-.463-.612L12 12l2.125-1.225q.35-.2.463-.612T14.5 9.4t-.6-.45t-.75.1L11 10.275V8q0-.425-.288-.712T10 7t-.712.288T9 8v2.275L6.85 9.05q-.35-.2-.75-.1t-.6.45t-.088.763t.463.612L8 12l-2.125 1.225q-.35.2-.462.613t.087.762t.6.45t.75-.1zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l3.15-3.15q.25-.25.55-.125t.3.475v8.6q0 .35-.3.475t-.55-.125L18 13.5V18q0 .825-.587 1.413T16 20z"></svg:path>`,
})
export class MaterialSymbolsEmergencyRecordingRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmergencyRoundedIcon],svg[material-symbols-emergency-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 19.25v-4.2l-3.65 2.1q-.625.35-1.325.175t-1.05-.825q-.35-.625-.175-1.325t.8-1.05L8.5 12L4.85 9.9q-.625-.35-.8-1.062T4.225 7.5t1.05-.8t1.325.175l3.65 2.1V4.75q0-.725.513-1.237T12 3t1.238.513t.512 1.237v4.225l3.65-2.1q.625-.35 1.325-.175t1.05.8t.163 1.338t-.813 1.062L15.5 12l3.65 2.125q.625.35.8 1.05t-.175 1.35q-.35.625-1.05.8T17.4 17.15l-3.65-2.1v4.2q0 .725-.513 1.238T12 21t-1.237-.513t-.513-1.237"></svg:path>`,
})
export class MaterialSymbolsEmergencyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmergencyShareOffOutlineRoundedIcon],svg[material-symbols-emergency-share-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2q-1.475 0-2.838.45T6.626 3.775L5.2 2.35Q6.65 1.2 8.388.6T12 0q1.95 0 3.738.65T19 2.525q.325.275.35.7t-.275.725q-.275.3-.7.3t-.75-.275q-1.2-.95-2.637-1.462T12 2m0 4q-.65 0-1.287.163T9.5 6.65L8.05 5.225q.875-.575 1.875-.9T12 4q1.15 0 2.225.363T16.2 5.4q.325.25.338.65t-.288.7q-.275.275-.7.288t-.775-.213Q14.15 6.4 13.45 6.2T12 6m6 9.2L11.825 9H12q2.525 0 4.263 1.8T18 15.15zm-3 2.6l-5.7-5.7q-.6.575-.95 1.363T8 15.15q0 1.125 1.063 2.763T12 21.325q.975-.925 1.725-1.812T15 17.8m-3 5.85q-.2 0-.363-.062t-.312-.188q-.825-.725-1.75-1.662t-1.725-2t-1.325-2.225T6 15.15q0-1.325.5-2.475t1.375-2L2.1 4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-2.625-2.625q-.8 1.2-1.775 2.188T12.675 23.4q-.15.125-.312.188T12 23.65m0-7.15q-.625 0-1.062-.437T10.5 15t.438-1.062T12 13.5q.3 0 .575.113t.488.325t.324.487t.113.575q0 .625-.437 1.063T12 16.5m-.5.2"></svg:path>`,
})
export class MaterialSymbolsEmergencyShareOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmergencyShareOffRoundedIcon],svg[material-symbols-emergency-share-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15.2L11.825 9H12q2.525 0 4.263 1.8T18 15.15zm2.5 6.7q-.275.275-.7.275t-.7-.275l-2.625-2.625q-.8 1.2-1.775 2.188T12.675 23.4q-.15.125-.312.188T12 23.65t-.363-.062t-.312-.188q-.825-.725-1.75-1.662t-1.725-2t-1.325-2.225T6 15.15q0-1.4.575-2.613T8.1 10.475h2.375L16.5 16.5h-2.8L2.1 4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7M12 16.5q.625 0 1.063-.437T13.5 15q0-.3-.112-.575t-.326-.488t-.487-.324T12 13.5q-.625 0-1.062.438T10.5 15t.438 1.063T12 16.5M12 2q-1.475 0-2.838.45T6.626 3.775L5.2 2.35Q6.65 1.2 8.388.6T12 0q1.95 0 3.738.65T19 2.525q.325.275.35.7t-.275.725q-.275.3-.7.3t-.75-.275q-1.2-.95-2.637-1.462T12 2m0 4q-.65 0-1.287.163T9.5 6.65L8.05 5.225q.875-.575 1.875-.9T12 4q1.15 0 2.225.363T16.2 5.4q.325.25.338.65t-.288.7q-.275.275-.7.288t-.775-.213Q14.15 6.4 13.45 6.2T12 6"></svg:path>`,
})
export class MaterialSymbolsEmergencyShareOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmergencyShareOutlineRoundedIcon],svg[material-symbols-emergency-share-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.325q1.875-1.775 2.938-3.412T16 15.15q0-1.725-1.162-2.937T12 11t-2.838 1.213T8 15.15q0 1.125 1.063 2.763T12 21.325M12 9q2.525 0 4.263 1.8T18 15.15q0 .85-.325 1.775t-.962 1.938t-1.563 2.075T13 23.125q-.2.2-.462.288T12 23.5t-.537-.088t-.463-.287Q9.775 22 8.85 20.938t-1.562-2.075t-.963-1.938T6 15.15q0-2.55 1.738-4.35T12 9m0 7.5q.625 0 1.063-.437T13.5 15t-.437-1.062T12 13.5t-1.062.438T10.5 15t.438 1.063T12 16.5M12 6q-.75 0-1.45.2t-1.325.625q-.35.225-.775.213t-.7-.288q-.3-.3-.288-.7T7.8 5.4q.9-.675 1.975-1.038T12 4t2.225.362T16.2 5.4q.325.25.338.65t-.288.7q-.275.275-.7.288t-.775-.213Q14.15 6.4 13.45 6.2T12 6m0-4q-1.55 0-2.975.5T6.4 3.95q-.325.275-.75.262t-.725-.287q-.3-.3-.275-.712T5 2.525Q6.475 1.3 8.263.65T12 0t3.738.65T19 2.525q.325.275.35.7t-.275.725q-.275.3-.7.3t-.75-.275q-1.2-.95-2.637-1.462T12 2m0 13"></svg:path>`,
})
export class MaterialSymbolsEmergencyShareOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmergencyShareRoundedIcon],svg[material-symbols-emergency-share-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9q2.525 0 4.263 1.8T18 15.15q0 .85-.325 1.775t-.962 1.938t-1.563 2.075T13 23.125q-.2.2-.462.288T12 23.5t-.537-.088t-.463-.287Q9.775 22 8.85 20.938t-1.562-2.075t-.963-1.938T6 15.15q0-2.55 1.738-4.35T12 9m0 7.5q.625 0 1.063-.437T13.5 15t-.437-1.062T12 13.5t-1.062.438T10.5 15t.438 1.063T12 16.5M12 6q-.75 0-1.45.2t-1.325.625q-.35.225-.775.213t-.7-.288q-.3-.3-.288-.7T7.8 5.4q.9-.675 1.975-1.038T12 4t2.225.362T16.2 5.4q.325.25.338.65t-.288.7q-.275.275-.7.288t-.775-.213Q14.15 6.4 13.45 6.2T12 6m0-4q-1.55 0-2.975.5T6.4 3.95q-.325.275-.75.262t-.725-.287q-.3-.3-.275-.712T5 2.525Q6.475 1.3 8.263.65T12 0t3.738.65T19 2.525q.325.275.35.7t-.275.725q-.275.3-.7.3t-.75-.275q-1.2-.95-2.637-1.462T12 2"></svg:path>`,
})
export class MaterialSymbolsEmergencyShareRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmojiFoodBeverageOutlineRoundedIcon],svg[material-symbols-emoji-food-beverage-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.425 0-.712-.288T4 20t.288-.712T5 19h14q.425 0 .713.288T20 20t-.288.713T19 21zm3-4q-1.65 0-2.825-1.175T4 13V5.225q0-.925.65-1.575T6.225 3H20q.825 0 1.413.588T22 5v3q0 .825-.587 1.413T20 10h-2v3q0 1.65-1.175 2.825T14 17zM8 5h8H6zm10 3h2V5h-2zm-4 7q.825 0 1.413-.587T16 13V5h-6v.4l1.8 1.45q.05.05.2.4v4.25q0 .2-.15.35t-.35.15h-4q-.2 0-.35-.15T7 11.5V7.25q0-.05.2-.4L9 5.4V5H6v8q0 .825.588 1.413T8 15zM9 5h1z"></svg:path>`,
})
export class MaterialSymbolsEmojiFoodBeverageOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmojiFoodBeverageRoundedIcon],svg[material-symbols-emoji-food-beverage-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.425 0-.712-.288T4 20t.288-.712T5 19h14q.425 0 .713.288T20 20t-.288.713T19 21zM18 8h2V5h-2zM8 17q-1.65 0-2.825-1.175T4 13V5.225q0-.925.65-1.575T6.225 3H9v2.4L7.2 6.85q-.05.05-.2.4v4.25q0 .2.15.35t.35.15h4q.2 0 .35-.15t.15-.35V7.25q0-.05-.2-.4L10 5.4V3h10q.825 0 1.413.587T22 5v3q0 .825-.587 1.413T20 10h-2v3q0 1.65-1.175 2.825T14 17z"></svg:path>`,
})
export class MaterialSymbolsEmojiFoodBeverageRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmojiLanguageOutlineRoundedIcon],svg[material-symbols-emoji-language-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 23q-2.075 0-3.863-1.075T8.9 19.05q-.2-.425-.2-.862t.25-.838t.65-.625t.875-.225H16.7q.025-.275.038-.537t.012-.538q0-.225-.012-.462T16.7 14.5h-.475q-.425 0-.713-.288t-.287-.712t.288-.712t.712-.288H20.1q-.35-.55-.825-.987t-1.05-.763q-.425-.225-.575-.65t.025-.8t.525-.525t.675.025q1.9.95 3.013 2.762T23 15.5q0 3.125-2.187 5.313T15.5 23m-2.375-2.55q-.175-.5-.312-.975t-.238-.975H10.9q.425.625.987 1.125t1.238.825m2.375.35q.3-.55.513-1.125t.362-1.175h-1.75q.15.6.375 1.175t.5 1.125m2.375-.35q.675-.325 1.238-.825T20.1 18.5h-1.675q-.125.5-.25.975t-.3.975m.825-3.95h2.2q.05-.25.075-.488T21 15.5t-.025-.513t-.075-.487h-2.2q.025.225.038.463t.012.462q0 .275-.012.538t-.038.537M8.5 16q-3.125 0-5.313-2.187T1 8.5t2.188-5.312T8.5 1t5.313 2.188T16 8.5t-2.187 5.313T8.5 16m0-2q2.275 0 3.888-1.612T14 8.5t-1.612-3.887T8.5 3T4.613 4.613T3 8.5t1.613 3.888T8.5 14M6 8q.425 0 .713-.288T7 7t-.288-.712T6 6t-.712.288T5 7t.288.713T6 8m2.5 4.4q1.2 0 2.138-.675T12 10H5q.425 1.05 1.363 1.725T8.5 12.4M11 8q.425 0 .713-.288T12 7t-.288-.712T11 6t-.712.288T10 7t.288.713T11 8m-2.5.5"></svg:path>`,
})
export class MaterialSymbolsEmojiLanguageOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmojiLanguageRoundedIcon],svg[material-symbols-emoji-language-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 23q-2.075 0-3.863-1.075T8.9 19.05q-.2-.425-.2-.862t.25-.838t.65-.625t.875-.225H16.7q.025-.275.038-.537t.012-.538q0-.225-.012-.462T16.7 14.5h-.475q-.425 0-.713-.288t-.287-.712t.288-.712t.712-.288H20.1q-.35-.55-.825-.987t-1.05-.763q-.425-.225-.575-.65t.025-.8t.525-.525t.675.025q1.9.95 3.013 2.762T23 15.5q0 3.125-2.187 5.313T15.5 23m-2.375-2.55q-.175-.5-.312-.975t-.238-.975H10.9q.425.625.987 1.125t1.238.825m2.375.35q.3-.55.513-1.125t.362-1.175h-1.75q.15.6.375 1.175t.5 1.125m2.375-.35q.675-.325 1.238-.825T20.1 18.5h-1.675q-.125.5-.25.975t-.3.975m.825-3.95h2.2q.05-.25.075-.488T21 15.5t-.025-.513t-.075-.487h-2.2q.025.225.038.463t.012.462q0 .275-.012.538t-.038.537M8.5 16q-3.125 0-5.313-2.187T1 8.5t2.188-5.312T8.5 1t5.313 2.188T16 8.5t-2.187 5.313T8.5 16M6 8q.425 0 .713-.288T7 7t-.288-.712T6 6t-.712.288T5 7t.288.713T6 8m2.5 4.4q1.2 0 2.138-.675T12 10H5q.425 1.05 1.363 1.725T8.5 12.4M11 8q.425 0 .713-.288T12 7t-.288-.712T11 6t-.712.288T10 7t.288.713T11 8"></svg:path>`,
})
export class MaterialSymbolsEmojiLanguageRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmojiNatureOutlineRoundedIcon],svg[material-symbols-emoji-nature-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 9l-.8.7q-.35.325-.825.325t-.825-.275t-.475-.7t.025-.9l.4-1.25l-.85-.5q-.4-.225-.562-.65t-.038-.85t.5-.663T15.4 4h1l.3-.95q.15-.475.513-.763T18 2t.788.288t.512.762l.3.95h1q.475 0 .838.238t.512.662q.175.45 0 .875t-.55.625l-.9.5l.4 1.25q.15.475.025.913t-.475.687q-.375.275-.837.275T18.8 9.7zm0-2q.425 0 .713-.288T19 6t-.288-.712T18 5t-.712.288T17 6t.288.713T18 7m-4.2 10.9q.575 1.5-.375 2.8T10.75 22q-.825 0-1.562-.425T8.1 20.45q-2.075.3-3.437-1.062T3.55 15.9q-.75-.425-1.15-1.162T2 13.05q0-1.525 1.388-2.463T6.1 10.2l1.55.65q.5-.775 1.325-1.262t1.775-.538v-1.3q0-.325.213-.537T11.5 7t.538.213t.212.537v1.5q.925.275 1.525.863T14.8 11.75h1.45q.325 0 .538.213T17 12.5t-.213.538t-.537.212h-1.3q-.05.95-.513 1.775T13.2 16.35zm-6.2.6q0-.675.113-1.312t.337-1.238q-.575.275-1.237.388T5.5 16.4q0 .975.563 1.538T7.6 18.5m-1.85-4.1q.8 0 1.413-.2t1.587-.8l-3-1.25q-.725-.3-1.237.012T4 13.15q0 .65.425.95t1.325.3m5 5.6q.625 0 1.013-.437t.187-.913l-1.35-3.4q-.475.8-.737 1.6T9.6 18.3q0 .825.288 1.263t.862.437m1.65-5.55q.25-.25.4-.663t.15-.862q0-.8-.525-1.35t-1.3-.55q-.45 0-.85.15T9.6 11.6l1.95.9zm-4.35 1.5"></svg:path>`,
})
export class MaterialSymbolsEmojiNatureOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmojiNatureRoundedIcon],svg[material-symbols-emoji-nature-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 9l-.8.7q-.35.325-.825.325t-.825-.275t-.475-.7t.025-.9l.4-1.25l-.85-.5q-.4-.225-.562-.65t-.038-.85t.5-.663T15.4 4h1l.3-.95q.15-.475.513-.763T18 2t.788.288t.512.762l.3.95h1q.475 0 .838.238t.512.662q.175.45 0 .875t-.55.625l-.9.5l.4 1.25q.15.475.025.913t-.475.687q-.375.275-.837.275T18.8 9.7zm0-2q.425 0 .713-.288T19 6t-.288-.712T18 5t-.712.288T17 6t.288.713T18 7m-4.2 10.9q.575 1.5-.375 2.8T10.75 22q-.825 0-1.562-.425T8.1 20.45q-2.075.3-3.437-1.062T3.55 15.9q-.75-.425-1.15-1.162T2 13.05q0-1.525 1.388-2.463T6.1 10.2l1.55.65q.5-.775 1.325-1.262t1.775-.538v-1.3q0-.325.213-.537T11.5 7t.538.213t.212.537v1.5q.925.275 1.525.863T14.8 11.75h1.45q.325 0 .538.213T17 12.5t-.213.538t-.537.212h-1.3q-.05.95-.513 1.775T13.2 16.35zm-8.05-3.5q.8 0 1.413-.2t1.587-.8l-3-1.25q-.725-.3-1.237.013T4 13.15q0 .65.425.95t1.325.3m5 5.6q.625 0 1.013-.437t.187-.913l-1.35-3.4q-.475.8-.737 1.6T9.6 18.3q0 .825.288 1.263t.862.437m1.65-5.55q.25-.25.4-.663t.15-.862q0-.8-.525-1.35t-1.3-.55q-.45 0-.85.15T9.6 11.6l1.95.9z"></svg:path>`,
})
export class MaterialSymbolsEmojiNatureRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmojiObjectsOutlineRoundedIcon],svg[material-symbols-emoji-objects-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.65 0-1.175-.312T10 20.85q-.825 0-1.412-.587T8 18.85V15.3q-1.475-.975-2.363-2.575T4.75 9.25q0-3.025 2.113-5.137T12 2t5.138 2.113T19.25 9.25q0 1.925-.888 3.5T16 15.3v3.55q0 .825-.587 1.413T14 20.85q-.3.525-.825.838T12 22m-2-3.15h4v-.9h-4zm0-1.9h4V16h-4zM9.8 14h1.45v-2.7L9.575 9.625Q9.35 9.4 9.35 9.1t.225-.525t.525-.225t.525.225L12 9.95l1.375-1.375q.225-.225.525-.225t.525.225t.225.525t-.225.525L12.75 11.3V14h1.45q1.35-.65 2.2-1.912t.85-2.838q0-2.2-1.525-3.725T12 4T8.275 5.525T6.75 9.25q0 1.575.85 2.838T9.8 14M12 9"></svg:path>`,
})
export class MaterialSymbolsEmojiObjectsOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmojiObjectsRoundedIcon],svg[material-symbols-emoji-objects-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.65 0-1.175-.312T10 20.85q-.825 0-1.412-.587T8 18.85V15.3q-1.475-.975-2.363-2.575T4.75 9.25q0-3.025 2.113-5.137T12 2t5.138 2.113T19.25 9.25q0 1.925-.888 3.5T16 15.3v3.55q0 .825-.587 1.413T14 20.85q-.3.525-.825.838T12 22m-2-3.15h4v-.9h-4zm0-1.9h4V16h-4zM12.75 14v-2.7l1.675-1.675q.225-.225.225-.525t-.225-.525t-.525-.225t-.525.225L12 9.95l-1.375-1.375Q10.4 8.35 10.1 8.35t-.525.225t-.225.525t.225.525L11.25 11.3V14z"></svg:path>`,
})
export class MaterialSymbolsEmojiObjectsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmojiPeopleRoundedIcon],svg[material-symbols-emoji-people-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21V8.775q-2.075-.55-3.387-2.2T4.05 2.825q-.05-.35.25-.587T5 2t.7.213t.35.587q.275 1.8 1.55 3T10.75 7h2.5q.75 0 1.4.275t1.175.8L19.65 11.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275L15 10.05V21q0 .425-.288.713T14 22t-.712-.288T13 21v-5h-2v5q0 .425-.288.713T10 22t-.712-.288T9 21m3-15q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6"></svg:path>`,
})
export class MaterialSymbolsEmojiPeopleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmojiSymbolsRoundedIcon],svg[material-symbols-emoji-symbols-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4H4q-.425 0-.712-.288T3 3t.288-.712T4 2h6q.425 0 .713.288T11 3t-.288.713T10 4M6 7H4q-.425 0-.712-.288T3 6t.288-.712T4 5h6q.425 0 .713.288T11 6t-.288.713T10 7H8v3q0 .425-.288.713T7 11t-.712-.288T6 10zm8.4 13.9q-.275.275-.7.275T13 20.9t-.275-.7t.275-.7l6.4-6.4q.275-.275.7-.275t.7.275t.275.7t-.275.7zm.1-4.9q-.65 0-1.075-.425T13 14.5t.425-1.075T14.5 13t1.075.425T16 14.5t-.425 1.075T14.5 16m5 5q-.65 0-1.075-.425T18 19.5t.425-1.075T19.5 18t1.075.425T21 19.5t-.425 1.075T19.5 21m-4-10q-1.025 0-1.763-.737T13 8.5t.738-1.787T15.5 5.95q.3 0 .538.038t.462.112V3q0-.425.288-.712T17.5 2H20q.425 0 .713.288T21 3t-.288.713T20 4h-2v4.5q0 1.025-.737 1.763T15.5 11m-10 11q-1.025 0-1.763-.763T3 19.45q0-.45.188-.912t.562-.838l1.05-1.05l-.35-.35q-.375-.375-.562-.813T3.7 14.55q0-1.025.738-1.763T6.2 12.05t1.763.738t.737 1.762q0 .5-.162.938T8 16.3l-.35.35l.7.7l.675-.675q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-.7.7l.7.7q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-.7-.7l-1.05 1.05q-.375.375-.837.563T5.5 22m.7-6.75l.35-.35q.075-.075.113-.15t.037-.2q0-.225-.15-.363t-.35-.137t-.35.138t-.15.362q0 .075.037.175t.113.175zM5.45 20q.075 0 .2-.038t.2-.112l1.1-1.05l-.7-.7l-1.1 1.05q-.075.075-.112.175T5 19.55q0 .2.125.325T5.45 20"></svg:path>`,
})
export class MaterialSymbolsEmojiSymbolsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmojiTransportationOutlineRoundedIcon],svg[material-symbols-emoji-transportation-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22q-.425 0-.712-.288T10 21v-5q0-.175.025-.35t.075-.325l1.05-2.975q.2-.6.725-.975T13.05 11h5.9q.65 0 1.175.375t.725.975l1.05 2.975q.05.15.075.325T22 16v5q0 .425-.287.713T21 22t-.712-.288T20 21v-.5h-8v.5q0 .425-.288.713T11 22m1-7.5h8l-.7-2h-6.6zm-.5 1.5v3zm1.5 2.5q.425 0 .713-.288T14 17.5t-.288-.712T13 16.5t-.712.288T12 17.5t.288.713t.712.287m6 0q.425 0 .713-.288T20 17.5t-.288-.712T19 16.5t-.712.288T18 17.5t.288.713t.712.287M6 14v-2h2v2zm5-6V6h2v2zM6 18v-2h2v2zm0 4v-2h2v2zm-4 0V10q0-.825.588-1.412T4 8h3V4q0-.825.588-1.412T9 2h6q.825 0 1.413.588T17 4v5h-2V4H9v6H4v12zm9.5-3h9v-3h-9z"></svg:path>`,
})
export class MaterialSymbolsEmojiTransportationOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmojiTransportationRoundedIcon],svg[material-symbols-emoji-transportation-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22q-.425 0-.712-.288T10 21v-5q0-.175.025-.35t.075-.325l1.05-2.975q.2-.6.725-.975T13.05 11h5.9q.65 0 1.175.375t.725.975l1.05 2.975q.05.15.075.325T22 16v5q0 .425-.287.713T21 22t-.712-.288T20 21v-.5h-8v.5q0 .425-.288.713T11 22m1-7.5h8l-.7-2h-6.6zm1 4q.425 0 .713-.288T14 17.5t-.288-.712T13 16.5t-.712.288T12 17.5t.288.713t.712.287m6 0q.425 0 .713-.288T20 17.5t-.288-.712T19 16.5t-.712.288T18 17.5t.288.713t.712.287M6 14v-2h2v2zm5-6V6h2v2zM6 18v-2h2v2zm0 4v-2h2v2zm-4 0V10q0-.825.588-1.412T4 8h3V4q0-.825.588-1.412T9 2h6q.825 0 1.413.588T17 4v5h-2V4H9v6H4v12z"></svg:path>`,
})
export class MaterialSymbolsEmojiTransportationRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmoticonRoundedIcon],svg[material-symbols-emoticon-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 17q-.65 0-1.075-.425T5 15.5q0-.625.425-1.062T6.5 14q.625 0 1.063.438T8 15.5q0 .65-.437 1.075T6.5 17m0-7q-.65 0-1.075-.425T5 8.5q0-.625.425-1.062T6.5 7q.625 0 1.063.438T8 8.5q0 .65-.437 1.075T6.5 10m4.5 3q-.425 0-.712-.288T10 12t.288-.712T11 11h2q.425 0 .713.288T14 12t-.288.713T13 13zm6-1q0-1.35-.363-2.6t-1.062-2.3q-.225-.35-.2-.775t.35-.7t.725-.213t.65.413q.9 1.325 1.4 2.887T19 12q0 1.4-.337 2.675t-.938 2.425q-.2.375-.6.475t-.75-.125t-.437-.637t.112-.788q.45-.925.7-1.925T17 12"></svg:path>`,
})
export class MaterialSymbolsEmoticonRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmptyDashboardOutlineRoundedIcon],svg[material-symbols-empty-dashboard-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18h3.5q.425 0 .713-.288T11.5 17v-2q0-.425-.288-.712T10.5 14H7q-.425 0-.712.288T6 15v2q0 .425.288.713T7 18m0-5h3.5q.425 0 .713-.288T11.5 12V7q0-.425-.288-.712T10.5 6H7q-.425 0-.712.288T6 7v5q0 .425.288.713T7 13m6.5 5H17q.425 0 .713-.288T18 17v-5q0-.425-.288-.712T17 11h-3.5q-.425 0-.712.288T12.5 12v5q0 .425.288.713T13.5 18m0-8H17q.425 0 .713-.288T18 9V7q0-.425-.288-.712T17 6h-3.5q-.425 0-.712.288T12.5 7v2q0 .425.288.713T13.5 10M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v2h1q.425 0 .713.288T23 8t-.288.713T22 9h-1v2h1q.425 0 .713.288T23 12t-.288.713T22 13h-1v2h1q.425 0 .713.288T23 16t-.288.713T22 17h-1v2q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsEmptyDashboardOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEmptyDashboardRoundedIcon],svg[material-symbols-empty-dashboard-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18h3.5q.425 0 .713-.288T11.5 17v-2q0-.425-.288-.712T10.5 14H7q-.425 0-.712.288T6 15v2q0 .425.288.713T7 18m0-5h3.5q.425 0 .713-.288T11.5 12V7q0-.425-.288-.712T10.5 6H7q-.425 0-.712.288T6 7v5q0 .425.288.713T7 13m6.5 5H17q.425 0 .713-.288T18 17v-5q0-.425-.288-.712T17 11h-3.5q-.425 0-.712.288T12.5 12v5q0 .425.288.713T13.5 18m0-8H17q.425 0 .713-.288T18 9V7q0-.425-.288-.712T17 6h-3.5q-.425 0-.712.288T12.5 7v2q0 .425.288.713T13.5 10M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v2h1q.425 0 .713.288T23 8t-.288.713T22 9h-1v2h1q.425 0 .713.288T23 12t-.288.713T22 13h-1v2h1q.425 0 .713.288T23 16t-.288.713T22 17h-1v2q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsEmptyDashboardRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEnableRoundedIcon],svg[material-symbols-enable-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-2.8 1.413-5.163T7.25 3.175q.375-.2.788-.05t.587.55q.15.375 0 .763t-.5.587q-1.875 1.05-3 2.913T4 12q0 3.35 2.325 5.675T12 20t5.675-2.325T20 12q0-2.2-1.125-4.062t-3-2.913q-.35-.2-.5-.587t0-.763q.15-.4.538-.575t.737.025q2.45 1.275 3.9 3.65T22 12q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-1-9.825V3q0-.425.288-.712T12 2t.713.288T13 3v9.175l1.9-1.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-3.6 3.6q-.3.3-.7.3t-.7-.3l-3.6-3.6q-.275-.275-.288-.687T7.7 10.3q.275-.275.7-.275t.7.275z"></svg:path>`,
})
export class MaterialSymbolsEnableRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEncryptedAddCircleOutlineRoundedIcon],svg[material-symbols-encrypted-add-circle-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V9q0 .425-.288.713T19 10t-.712-.288T18 9V6.4l-6-2.25L6 6.4v4.7q0 1.125.288 2.25t.812 2.163t1.263 1.912T10 18.95q.35.25.425.638t-.175.737t-.638.413t-.737-.163Q6.6 19 5.3 16.438T4 11.1m12.5 6.4v2q0 .2.15.35T17 20t.35-.15t.15-.35v-2h2q.2 0 .35-.15T20 17t-.15-.35t-.35-.15h-2v-2q0-.2-.15-.35T17 14t-.35.15t-.15.35v2h-2q-.2 0-.35.15T14 17t.15.35t.35.15zM17 22q-2.075 0-3.537-1.463T12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22m-5-10q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12"></svg:path>`,
})
export class MaterialSymbolsEncryptedAddCircleOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEncryptedAddCircleRoundedIcon],svg[material-symbols-encrypted-add-circle-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 17.5v2q0 .2.15.35T17 20t.35-.15t.15-.35v-2h2q.2 0 .35-.15T20 17t-.15-.35t-.35-.15h-2v-2q0-.2-.15-.35T17 14t-.35.15t-.15.35v2h-2q-.2 0-.35.15T14 17t.15.35t.35.15zM17 22q-2.075 0-3.537-1.463T12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22M4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375v3.05q0 .425-.375.688t-.8.137q-.45-.125-.9-.187T17 10q-2.9 0-4.95 2.05T10 17q0 .8.188 1.563t.537 1.537q.225.475-.137.85t-.838.15q-1.05-.55-1.925-1.35T6.275 18Q5.2 16.525 4.6 14.762T4 11.1M12 8q-.825 0-1.412.588T10 10t.588 1.413T12 12h.1q.4-.375.825-.687t.925-.563q.075-.175.113-.363T14 10q0-.825-.587-1.412T12 8"></svg:path>`,
})
export class MaterialSymbolsEncryptedAddCircleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEncryptedAddOutlineRoundedIcon],svg[material-symbols-encrypted-add-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.375 21.825q-3.35-1.1-5.363-4.162T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375v4.65q0 .425-.288.713t-.712.287t-.712-.288t-.288-.712v-4.65l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3q.4.125.588.5t.062.775t-.5.588t-.775.062M17 19h-2q-.425 0-.712-.288T14 18t.288-.712T15 17h2v-2q0-.425.288-.712T18 14t.713.288T19 15v2h2q.425 0 .713.288T22 18t-.288.713T21 19h-2v2q0 .425-.288.713T18 22t-.712-.288T17 21zm-5.9-4h1.8q.225 0 .388-.187t.112-.413l-.475-2.625q.5-.25.788-.725T14 10q0-.825-.587-1.412T12 8t-1.412.588T10 10q0 .575.288 1.05t.787.725L10.6 14.4q-.05.225.113.413T11.1 15"></svg:path>`,
})
export class MaterialSymbolsEncryptedAddOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEncryptedAddRoundedIcon],svg[material-symbols-encrypted-add-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22q-.425 0-.712-.288T17 21v-2h-2q-.425 0-.712-.288T14 18t.288-.712T15 17h2v-2q0-.425.288-.712T18 14t.713.288T19 15v2h2q.425 0 .713.288T22 18t-.288.713T21 19h-2v2q0 .425-.288.713T18 22m-6.175-.05q-3.375-.825-5.6-3.937T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375v4.775q0 .45-.35.725t-.8.2q-.225-.05-.45-.062T17.95 12q-1.4.025-2.575.613t-2 1.587l-.45-2.425q.5-.25.788-.725T14 10q0-.825-.587-1.412T12 8t-1.412.588T10 10q0 .575.288 1.05t.787.725L10.6 14.4q-.05.225.113.413T11.1 15h1.7q-.375.65-.587 1.413T12 18q0 .7.163 1.388t.487 1.312q.325.55-.012 1t-.813.25"></svg:path>`,
})
export class MaterialSymbolsEncryptedAddRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEncryptedMinusCircleOutlineRoundedIcon],svg[material-symbols-encrypted-minus-circle-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V9q0 .425-.288.713T19 10t-.712-.288T18 9V6.4l-6-2.25L6 6.4v4.7q0 1.125.288 2.25t.812 2.163t1.263 1.912T10 18.95q.35.25.425.638t-.175.737t-.638.413t-.737-.163Q6.6 19 5.3 16.438T4 11.1m10.5 6.4h5q.2 0 .35-.15T20 17t-.15-.35t-.35-.15h-5q-.2 0-.35.15T14 17t.15.35t.35.15M17 22q-2.075 0-3.537-1.463T12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22m-5-10q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12"></svg:path>`,
})
export class MaterialSymbolsEncryptedMinusCircleOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEncryptedMinusCircleRoundedIcon],svg[material-symbols-encrypted-minus-circle-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 17.5h5q.2 0 .35-.15T20 17t-.15-.35t-.35-.15h-5q-.2 0-.35.15T14 17t.15.35t.35.15M17 22q-2.075 0-3.537-1.463T12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22M4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375v3.05q0 .425-.375.688t-.8.137q-.45-.125-.9-.187T17 10q-2.9 0-4.95 2.05T10 17q0 .8.188 1.563t.537 1.537q.225.475-.137.85t-.838.15q-1.05-.55-1.925-1.35T6.275 18Q5.2 16.525 4.6 14.762T4 11.1M12 8q-.825 0-1.412.588T10 10t.588 1.413T12 12h.1q.4-.375.825-.687t.925-.563q.075-.175.113-.363T14 10q0-.825-.587-1.412T12 8"></svg:path>`,
})
export class MaterialSymbolsEncryptedMinusCircleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEncryptedOffOutlineRoundedIcon],svg[material-symbols-encrypted-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6.375V11.1q0 .875-.137 1.738t-.413 1.712q-.175.525-.55.688t-.725.037t-.587-.437t-.088-.763q.25-.7.375-1.462T18 11.1V6.375l-6-2.25l-3.05 1.15q-.275.1-.562.038T7.9 5.05q-.4-.4-.275-.925T8.25 3.4l3.05-1.125q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375M12 21.9q-.1 0-.625-.1Q8 20.675 6 17.637T4 11.1V6.8L2.1 4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-2.55-2.55q-.825.875-1.812 1.475t-2.113.975q-.15.05-.3.075T12 21.9m1.775-10.975q.125-.2.175-.438T14 10q0-.825-.587-1.413T12 8q-.25 0-.488.05t-.437.175zM12 19.9q.875-.275 1.675-.775t1.475-1.175L12.2 15h-1.1q-.225 0-.387-.187T10.6 14.4l.15-.85L6 8.8v2.3q0 3.025 1.7 5.5t4.3 3.3"></svg:path>`,
})
export class MaterialSymbolsEncryptedOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEncryptedOffRoundedIcon],svg[material-symbols-encrypted-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.1 15h1.1l-1.45-1.45l-.15.85q-.05.225.113.413T11.1 15m5.45 4.35q-.825.875-1.812 1.475t-2.113.975q-.15.05-.3.075T12 21.9q-.1 0-.625-.1Q8 20.675 6 17.637T4 11.1V6.8L2.1 4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275zM20 6.375V11.1q0 .825-.125 1.638T19.5 14.35q-.1.3-.325.5t-.5.25t-.562-.012t-.538-.313l-3.8-3.825q.125-.2.175-.437T14 10q0-.825-.587-1.412T12 8q-.275 0-.5.05t-.425.175L7.9 5.05q-.15-.15-.225-.325T7.6 4.35q0-.3.163-.562T8.25 3.4l3.05-1.125q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375"></svg:path>`,
})
export class MaterialSymbolsEncryptedOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEncryptedOutlineRoundedIcon],svg[material-symbols-encrypted-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.1 15h1.8q.225 0 .388-.187t.112-.413l-.475-2.625q.5-.25.788-.725T14 10q0-.825-.587-1.412T12 8t-1.412.588T10 10q0 .575.288 1.05t.787.725L10.6 14.4q-.05.225.113.413T11.1 15m.9 6.9q-.175 0-.325-.025t-.3-.075Q8 20.675 6 17.637T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.5-2 6.538T12.625 21.8q-.15.05-.3.075T12 21.9m0-2q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9"></svg:path>`,
})
export class MaterialSymbolsEncryptedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEncryptedRoundedIcon],svg[material-symbols-encrypted-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.1 15h1.8q.225 0 .388-.187t.112-.413l-.475-2.625q.5-.25.788-.725T14 10q0-.825-.587-1.412T12 8t-1.412.588T10 10q0 .575.288 1.05t.787.725L10.6 14.4q-.05.225.113.413T11.1 15m.9 6.9q-.175 0-.325-.025t-.3-.075Q8 20.675 6 17.637T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.5-2 6.538T12.625 21.8q-.15.05-.3.075T12 21.9"></svg:path>`,
})
export class MaterialSymbolsEncryptedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEndocrinologyOutlineRoundedIcon],svg[material-symbols-endocrinology-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17q.425 0 .713-.288T11 16q0-1.125-.537-2.062T9 12.45V16q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16v-3.55q-.925.55-1.463 1.488T13 16q0 .425.288.713T14 17M4 15.85V5.4q-.45-.5-.837-1.05T2.45 3.175q-.175-.35 0-.687T3 2t.75-.025t.575.475Q5.5 4.55 7.538 5.775T12 7q2.375 0 4.363-1.175T19.55 2.65q.25-.4.638-.612T21 2q.4.175.525.575t-.075.775q-.3.575-.663 1.075T20 5.4v10.45q0 .875.413 1.613t1.137 1.212q.325.2.45.575t0 .75q-.125.4-.462.588t-.688.012q-1.325-.7-2.087-1.963T18 15.85v-8.7q-1.325.875-2.838 1.363T12 9t-3.175-.488T6 7.15v8.7q0 1.525-.775 2.788t-2.1 1.962q-.35.175-.675-.012T2 20q-.125-.375 0-.75t.45-.575q.725-.45 1.138-1.2T4 15.85M10 19q-1.25 0-2.125-.875T7 16v-5.325q0-.375.288-.6t.637-.125l.425.1q1.15.275 2.088.963T12 12.65q.625-.95 1.563-1.638t2.087-.962l.425-.1q.35-.1.638.125t.287.6V16q0 1.25-.875 2.125T14 19q-.575 0-1.088-.213T12 18.226q-.4.35-.913.563T10 19m0-3"></svg:path>`,
})
export class MaterialSymbolsEndocrinologyOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEndocrinologyRoundedIcon],svg[material-symbols-endocrinology-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15.85V5.4q-.45-.5-.837-1.05T2.45 3.175q-.175-.35 0-.687T3 2t.75-.025t.575.475Q5.5 4.55 7.538 5.775T12 7q2.375 0 4.363-1.175T19.55 2.65q.25-.4.638-.612T21 2q.4.175.525.575t-.075.775q-.3.575-.663 1.075T20 5.4v10.45q0 .875.413 1.613t1.137 1.212q.325.2.45.575t0 .75q-.125.4-.462.588t-.688.012q-1.325-.7-2.087-1.963T18 15.85v-8.7q-1.325.875-2.838 1.363T12 9t-3.175-.488T6 7.15v8.7q0 1.525-.775 2.788t-2.1 1.962q-.35.175-.675-.012T2 20q-.125-.375 0-.75t.45-.575q.725-.45 1.138-1.2T4 15.85M10 19q-1.25 0-2.125-.875T7 16v-5.325q0-.375.288-.6t.637-.125l.425.1q1.15.275 2.088.963T12 12.65q.625-.95 1.563-1.638t2.087-.962l.425-.1q.35-.1.638.125t.287.6V16q0 1.25-.875 2.125T14 19q-.575 0-1.088-.213T12 18.226q-.4.35-.913.563T10 19"></svg:path>`,
})
export class MaterialSymbolsEndocrinologyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEnergyProgramTimeUsedOutlineRoundedIcon],svg[material-symbols-energy-program-time-used-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22q-.825 0-1.412-.587T1 20V6q0-.825.588-1.412T3 4h7q.425 0 .713.288T11 5t-.288.713T10 6H3v14h14v-5q0-.425.288-.712T18 14t.713.288T19 15v5q0 .825-.587 1.413T17 22zm3-11q-.425 0-.712.288T5 12v5q0 .425.288.713T6 18t.713-.288T7 17v-5q0-.425-.288-.712T6 11m4-3q-.425 0-.712.288T9 9v8q0 .425.288.713T10 18t.713-.288T11 17V9q0-.425-.288-.712T10 8m4 6q-.425 0-.712.288T13 15v2q0 .425.288.713T14 18t.713-.288T15 17v-2q0-.425-.288-.712T14 14m4-2q-.75 0-1.475-.225t-1.35-.65l-.375.35q-.3.275-.713.275t-.687-.275t-.275-.7t.275-.7l.4-.4q-.4-.6-.6-1.275T13 7q0-2.075 1.463-3.537T18 2h4q.425 0 .713.288T23 3v4q0 2.075-1.463 3.538T18 12m0-2q1.25 0 2.125-.875T21 7V4h-3q-1.25 0-2.125.875T15 7q0 .325.063.625t.187.6l2.6-2.6q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.712l-2.6 2.6q.325.15.663.25T18 10m-.15-2.975"></svg:path>`,
})
export class MaterialSymbolsEnergyProgramTimeUsedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEnergyProgramTimeUsedRoundedIcon],svg[material-symbols-energy-program-time-used-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11q-.425 0-.712.288T5 12v5q0 .425.288.713T6 18t.713-.288T7 17v-5q0-.425-.288-.712T6 11m4-3q-.425 0-.712.288T9 9v8q0 .425.288.713T10 18t.713-.288T11 17V9q0-.425-.288-.712T10 8m4 6q-.425 0-.712.288T13 15v2q0 .425.288.713T14 18t.713-.288T15 17v-2q0-.425-.288-.712T14 14m4-2q-.75 0-1.475-.225t-1.35-.65l-.375.35q-.3.275-.713.275t-.687-.275t-.275-.7t.275-.7l.4-.4q-.4-.6-.6-1.275T13 7q0-2.075 1.463-3.537T18 2h4q.425 0 .713.288T23 3v4q0 2.075-1.463 3.538T18 12m1.25-6.375q-.275-.275-.7-.275t-.7.275l-1.4 1.4q-.3.3-.287.7t.287.7q.3.3.7.313t.7-.288l1.4-1.4q.3-.3.3-.712t-.3-.713M3 22q-.825 0-1.412-.587T1 20V6q0-.825.588-1.412T3 4h7q.425 0 .713.288T11 5v7q0 .825.588 1.413T13 14h5q.425 0 .713.288T19 15v5q0 .825-.587 1.413T17 22z"></svg:path>`,
})
export class MaterialSymbolsEnergyProgramTimeUsedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEnergySavingsLeafOutlineRoundedIcon],svg[material-symbols-energy-savings-leaf-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18q2.5 0 4.225-1.75T18 12V6h-6q-2.5.05-4.25 1.775T6 12t1.75 4.25T12 18m-1.175-1.675l4.6-4.1q.225-.2.125-.475t-.4-.325l-3.6-.35L13.7 8.1q.075-.125.088-.238T13.7 7.65q-.1-.125-.25-.112t-.275.112L8.6 11.75q-.225.2-.125.475t.4.325l3.6.35l-2.175 2.975q-.075.125-.075.237t.1.213t.238.1t.262-.1M12 20q-1.4 0-2.637-.438T7.1 18.325L5.725 19.7q-.15.15-.337.225T5 20q-.425 0-.712-.288T4 19q0-.2.075-.387t.225-.338L5.675 16.9q-.8-1.025-1.237-2.262T4 12q0-3.35 2.325-5.675T12 4h6q.825 0 1.413.587T20 6v6q0 3.35-2.325 5.675T12 20m0-8"></svg:path>`,
})
export class MaterialSymbolsEnergySavingsLeafOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEnergySavingsLeafRoundedIcon],svg[material-symbols-energy-savings-leaf-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.825 16.325l4.6-4.1q.225-.2.125-.475t-.4-.325l-3.6-.35L13.7 8.1q.075-.125.088-.238T13.7 7.65q-.1-.125-.25-.112t-.275.112L8.6 11.75q-.225.2-.125.475t.4.325l3.6.35l-2.175 2.975q-.075.125-.075.237t.1.213t.238.1t.262-.1M12 20q-1.4 0-2.637-.438T7.1 18.325L5.725 19.7q-.15.15-.337.225T5 20q-.425 0-.712-.288T4 19q0-.2.075-.387t.225-.338L5.675 16.9q-.8-1.025-1.237-2.262T4 12q0-3.35 2.325-5.675T12 4h6q.825 0 1.413.587T20 6v6q0 3.35-2.325 5.675T12 20"></svg:path>`,
})
export class MaterialSymbolsEnergySavingsLeafRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEngineeringOutlineRoundedIcon],svg[material-symbols-engineering-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.05 20v-1.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T9.05 14t3.525.45t2.875 1.1q.75.375 1.175 1.1t.425 1.55V20q0 .425-.288.713T16.05 21h-14q-.425 0-.712-.288T1.05 20m2-1h12v-.8q0-.275-.137-.5t-.363-.35q-.9-.45-2.312-.9T9.05 16t-3.187.45t-2.313.9q-.225.125-.362.35t-.138.5zm6-6q-1.65 0-2.825-1.175T5.05 9H4.8q-.225 0-.362-.137T4.3 8.5t.138-.363T4.8 8h.25q0-1.125.55-2.025T7.05 4.55v.95q0 .225.138.363T7.55 6t.363-.137t.137-.363V4.15q.225-.075.475-.112T9.05 4t.525.038t.475.112V5.5q0 .225.138.363T10.55 6t.363-.137t.137-.363v-.95q.9.525 1.45 1.425T13.05 8h.25q.225 0 .363.138t.137.362t-.137.363T13.3 9h-.25q0 1.65-1.175 2.825T9.05 13m0-2q.825 0 1.413-.587T11.05 9h-4q0 .825.588 1.413T9.05 11m7.425 3.6l-.075-.35q-.15-.05-.287-.112t-.263-.188l-.3.1q-.175.05-.337 0t-.263-.225l-.1-.175q-.1-.15-.062-.325t.162-.3l.25-.225v-.6l-.25-.225q-.125-.125-.162-.3t.062-.325l.1-.175q.1-.175.263-.225t.337 0l.3.1q.1-.1.25-.175t.3-.125l.075-.35q.05-.175.175-.288t.3-.112h.2q.175 0 .3.113t.175.287l.075.35q.15.05.3.125t.25.175l.3-.1q.175-.05.338 0t.262.225l.1.175q.1.15.063.325t-.163.3l-.25.225v.6l.25.225q.125.125.163.3t-.063.325l-.1.175q-.1.175-.262.225t-.338 0l-.3-.1q-.125.125-.262.188t-.288.112l-.075.35q-.05.175-.175.288t-.3.112h-.2q-.175 0-.3-.112t-.175-.288m.575-1.35q.3 0 .525-.225t.225-.525t-.225-.525t-.525-.225t-.525.225t-.225.525t.225.525t.525.225m1.7-3.8l-.1-.5q-.225-.075-.413-.187T17.9 8.5l-.525.175q-.225.075-.45-.012t-.35-.288l-.15-.25q-.125-.2-.088-.437t.238-.413L17 6.9q-.05-.125-.05-.2v-.4q0-.075.05-.2l-.425-.375q-.2-.175-.238-.413t.088-.437l.15-.25q.125-.2.35-.288t.45-.012l.525.175q.15-.15.338-.262t.412-.188l.1-.5q.05-.25.238-.4t.437-.15h.25q.25 0 .438.15t.237.4l.1.5q.225.075.413.188t.337.262l.525-.175q.225-.075.45.013t.35.287l.15.25q.125.2.088.438t-.238.412L22.1 6.1q.05.125.05.2v.4q0 .075-.05.2l.425.375q.2.175.238.413t-.088.437l-.15.25q-.125.2-.35.288t-.45.012L21.2 8.5q-.15.15-.337.262t-.413.188l-.1.5q-.05.25-.238.4t-.437.15h-.25q-.25 0-.437-.15t-.238-.4m.8-1.7q.525 0 .888-.362T20.8 6.5t-.363-.888t-.887-.362t-.888.363t-.362.887t.363.888t.887.362M9.05 19"></svg:path>`,
})
export class MaterialSymbolsEngineeringOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEngineeringRoundedIcon],svg[material-symbols-engineering-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.05 20v-1.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T9.05 14t3.525.45t2.875 1.1q.75.375 1.175 1.1t.425 1.55V20q0 .425-.288.713T16.05 21h-14q-.425 0-.712-.288T1.05 20m8-7q-1.65 0-2.825-1.175T5.05 9H4.8q-.225 0-.362-.137T4.3 8.5t.138-.363T4.8 8h.25q0-1.125.55-2.025T7.05 4.55v.95q0 .225.138.363T7.55 6t.363-.137t.137-.363V4.15q.225-.075.475-.112T9.05 4t.525.038t.475.112V5.5q0 .225.138.363T10.55 6t.363-.137t.137-.363v-.95q.9.525 1.45 1.425T13.05 8h.25q.225 0 .363.138t.137.362t-.137.363T13.3 9h-.25q0 1.65-1.175 2.825T9.05 13m0-2q.825 0 1.413-.587T11.05 9h-4q0 .825.588 1.413T9.05 11m7.425 3.6l-.075-.35q-.15-.05-.287-.112t-.263-.188l-.3.1q-.175.05-.337 0t-.263-.225l-.1-.175q-.1-.15-.062-.325t.162-.3l.25-.225v-.6l-.25-.225q-.125-.125-.162-.3t.062-.325l.1-.175q.1-.175.263-.225t.337 0l.3.1q.1-.1.25-.175t.3-.125l.075-.35q.05-.175.175-.288t.3-.112h.2q.175 0 .3.113t.175.287l.075.35q.15.05.3.125t.25.175l.3-.1q.175-.05.338 0t.262.225l.1.175q.1.15.063.325t-.163.3l-.25.225v.6l.25.225q.125.125.163.3t-.063.325l-.1.175q-.1.175-.262.225t-.338 0l-.3-.1q-.125.125-.262.188t-.288.112l-.075.35q-.05.175-.175.288t-.3.112h-.2q-.175 0-.3-.112t-.175-.288m.575-1.35q.3 0 .525-.225t.225-.525t-.225-.525t-.525-.225t-.525.225t-.225.525t.225.525t.525.225m1.7-3.8l-.1-.5q-.225-.075-.413-.187T17.9 8.5l-.525.175q-.225.075-.45-.012t-.35-.288l-.15-.25q-.125-.2-.088-.437t.238-.413L17 6.9q-.05-.125-.05-.2v-.4q0-.075.05-.2l-.425-.375q-.2-.175-.238-.413t.088-.437l.15-.25q.125-.2.35-.288t.45-.012l.525.175q.15-.15.338-.262t.412-.188l.1-.5q.05-.25.238-.4t.437-.15h.25q.25 0 .438.15t.237.4l.1.5q.225.075.413.188t.337.262l.525-.175q.225-.075.45.013t.35.287l.15.25q.125.2.088.438t-.238.412L22.1 6.1q.05.125.05.2v.4q0 .075-.05.2l.425.375q.2.175.238.413t-.088.437l-.15.25q-.125.2-.35.288t-.45.012L21.2 8.5q-.15.15-.337.262t-.413.188l-.1.5q-.05.25-.238.4t-.437.15h-.25q-.25 0-.437-.15t-.238-.4m.8-1.7q.525 0 .888-.362T20.8 6.5t-.363-.888t-.887-.362t-.888.363t-.362.887t.363.888t.887.362"></svg:path>`,
})
export class MaterialSymbolsEngineeringRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEnhancedEncryptionOutlineRoundedIcon],svg[material-symbols-enhanced-encryption-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16v2q0 .425.288.713T12 19t.713-.288T13 18v-2h2q.425 0 .713-.288T16 15t-.288-.712T15 14h-2v-2q0-.425-.288-.712T12 11t-.712.288T11 12v2H9q-.425 0-.712.288T8 15t.288.713T9 16zm-5 6q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm0-2h12V10H6zM9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6zM6 20V10z"></svg:path>`,
})
export class MaterialSymbolsEnhancedEncryptionOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEnhancedEncryptionRoundedIcon],svg[material-symbols-enhanced-encryption-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16v2q0 .425.288.713T12 19t.713-.288T13 18v-2h2q.425 0 .713-.288T16 15t-.288-.712T15 14h-2v-2q0-.425-.288-.712T12 11t-.712.288T11 12v2H9q-.425 0-.712.288T8 15t.288.713T9 16zm-5 6q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zM9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z"></svg:path>`,
})
export class MaterialSymbolsEnhancedEncryptionRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEntOutlineRoundedIcon],svg[material-symbols-ent-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.725 16H14q.425 0 .713-.288T15 15t-.288-.712T14 14h-2.075l.125-1.1q.05-.375.325-.638t.65-.262H16q.425 0 .713-.287T17 11t-.288-.712T16 10h-2.95q-1.175 0-2.025.775T10.05 12.7l-.85 8.2q-.05.425.25.763t.75.337q.375 0 .663-.262t.337-.638zM6 17.7q-1.425-1.3-2.212-3.037T3 11q0-3.75 2.625-6.375T12 2q3.125 0 5.538 1.838t3.137 4.787l1.3 5.125q.125.475-.175.863T21 15h-2v3q0 .825-.587 1.413T17 20h-2v1q0 .425-.288.713T14 22t-.712-.288T13 21v-2q0-.425.288-.712T14 18h3v-4q0-.425.288-.712T18 13h1.7l-.95-3.875q-.575-2.275-2.45-3.7T12 4Q9.1 4 7.05 6.025T5 10.95q0 1.5.613 2.85t1.737 2.4l.65.6V21q0 .425-.288.713T7 22t-.712-.288T6 21zm6.35-4.7"></svg:path>`,
})
export class MaterialSymbolsEntOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEntRoundedIcon],svg[material-symbols-ent-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22q-.425 0-.712-.288T6 21v-3.3q-1.425-1.3-2.212-3.037T3 11q0-3.75 2.625-6.375T12 2q3.125 0 5.538 1.838t3.137 4.787l1.3 5.125q.125.475-.175.863T21 15h-2v3q0 .825-.587 1.413T17 20h-2v1q0 .425-.288.713T14 22h-2.9l.625-6H14q.425 0 .713-.288T15 15t-.288-.712T14 14h-2.075l.125-1.1q.05-.375.325-.638t.65-.262H16q.425 0 .713-.287T17 11t-.288-.712T16 10h-2.95q-1.175 0-2.025.775T10.05 12.7L9.1 22z"></svg:path>`,
})
export class MaterialSymbolsEntRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEnterpriseOffOutlineRoundedIcon],svg[material-symbols-enterprise-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.8 22.6L18.2 21H4q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h2l2 2H4v11h12.175L1.4 4.2q-.275-.275-.287-.688T1.4 2.8q.275-.275.7-.275t.7.275l18.4 18.4q.275.275.275.7t-.275.7t-.7.275t-.7-.275M22 8v8.75q0 .5-.312.75t-.688.25t-.687-.262t-.313-.763V8h-8.325q-.4 0-.763-.15t-.637-.425l-1.7-1.7Q8.3 5.45 8.15 5.088T8 4.325V4q0-.825.587-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8M10 6h4V4h-4zm.7 7.5"></svg:path>`,
})
export class MaterialSymbolsEnterpriseOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEnterpriseOffRoundedIcon],svg[material-symbols-enterprise-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h2v2.8L1.4 4.2q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l18.4 18.4q.275.275.275.7t-.275.7t-.7.275t-.7-.275L18.2 21zM22 8v8.725q0 .45-.3.738t-.7.287q-.2 0-.375-.075t-.325-.225L8.575 5.725Q8.3 5.45 8.15 5.088T8 4.325V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8M10 6h4V4h-4z"></svg:path>`,
})
export class MaterialSymbolsEnterpriseOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEqualRoundedIcon],svg[material-symbols-equal-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 17q-.625 0-1.062-.437T4 15.5t.438-1.062T5.5 14h13q.625 0 1.063.438T20 15.5t-.437 1.063T18.5 17zm0-7q-.625 0-1.062-.437T4 8.5t.438-1.062T5.5 7h13q.625 0 1.063.438T20 8.5t-.437 1.063T18.5 10z"></svg:path>`,
})
export class MaterialSymbolsEqualRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEqualizerRoundedIcon],svg[material-symbols-equalizer-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20q-.825 0-1.412-.587T4 18v-4q0-.825.588-1.412T6 12t1.413.588T8 14v4q0 .825-.587 1.413T6 20m6 0q-.825 0-1.412-.587T10 18V6q0-.825.588-1.412T12 4t1.413.588T14 6v12q0 .825-.587 1.413T12 20m6 0q-.825 0-1.412-.587T16 18v-7q0-.825.588-1.412T18 9t1.413.588T20 11v7q0 .825-.587 1.413T18 20"></svg:path>`,
})
export class MaterialSymbolsEqualizerRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsErrorCircleRoundedIcon],svg[material-symbols-error-circle-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16q0-.425-.288-.713T12 15q-.425 0-.713.288T11 16q0 .425.288.713T12 17Zm0 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-9q.425 0 .713-.288T13 12V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v4q0 .425.288.713T12 13Z"></svg:path>`,
})
export class MaterialSymbolsErrorCircleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsErrorMedOutlineRoundedIcon],svg[material-symbols-error-med-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.225 12.425l1.45 1.975q.15.2.4.2t.4-.2l1.45-1.975L14.35 14.4q.15.2.413.2t.412-.2l2.25-3.075q.25-.35.188-.75t-.413-.65t-.75-.187t-.65.412l-1.05 1.425L13.325 9.6q-.15-.2-.413-.2t-.412.2l-1.425 1.975L9.625 9.6q-.15-.2-.4-.2t-.4.2l-2.25 3.075q-.25.35-.188.75t.413.65t.75.188t.65-.413zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></svg:path>`,
})
export class MaterialSymbolsErrorMedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsErrorMedRoundedIcon],svg[material-symbols-error-med-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.225 12.425l1.45 1.975q.15.2.4.2t.4-.2l1.45-1.975L14.35 14.4q.15.2.413.2t.412-.2l2.25-3.075q.25-.35.188-.75t-.413-.65t-.75-.187t-.65.412l-1.05 1.425L13.325 9.6q-.15-.2-.413-.2t-.412.2l-1.425 1.975L9.625 9.6q-.15-.2-.4-.2t-.4.2l-2.25 3.075q-.25.35-.188.75t.413.65t.75.188t.65-.413zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsErrorMedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsErrorOutlineRoundedIcon],svg[material-symbols-error-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m0-4q.425 0 .713-.288T13 12V8q0-.425-.288-.712T12 7t-.712.288T11 8v4q0 .425.288.713T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></svg:path>`,
})
export class MaterialSymbolsErrorOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsErrorRoundedIcon],svg[material-symbols-error-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m0-4q.425 0 .713-.288T13 12V8q0-.425-.288-.712T12 7t-.712.288T11 8v4q0 .425.288.713T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsErrorRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEscalatorWarningRoundedIcon],svg[material-symbols-escalator-warning-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 6q-.825 0-1.412-.587T4.5 4t.588-1.412T6.5 2t1.413.588T8.5 4t-.587 1.413T6.5 6M17 11q-.625 0-1.062-.437T15.5 9.5t.438-1.062T17 8t1.063.438T18.5 9.5t-.437 1.063T17 11M4.5 21v-6H4q-.425 0-.712-.288T3 14V9q0-.825.588-1.412T5 7h3q.55 0 1 .263T9.725 8l3.575 6.175l1.025-1.525q.2-.3.538-.475t.712-.175H18.5q.625 0 1.063.438T20 13.5V16q0 .4-.363.563T19 17v4q0 .425-.288.713T18 22h-2q-.425 0-.712-.288T15 21v-6.1l-.5.7q-.125.2-.337.3t-.438.1h-1.15q-.275 0-.488-.125t-.337-.35L9.5 11.6V21q0 .425-.288.713T8.5 22h-3q-.425 0-.712-.288T4.5 21"></svg:path>`,
})
export class MaterialSymbolsEscalatorWarningRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEuroRoundedIcon],svg[material-symbols-euro-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21q-2.95 0-5.25-1.675T6.5 15H4q-.425 0-.712-.288T3 14t.288-.712T4 13h2.05q-.075-.6-.062-1.112T6.05 11H4q-.425 0-.712-.288T3 10t.288-.712T4 9h2.5q.95-2.65 3.25-4.325T15 3q1.45 0 2.763.425T20.2 4.65q.35.25.375.663T20.3 6q-.3.3-.725.313T18.8 6.1q-.825-.525-1.787-.812T15 5q-2.125 0-3.8 1.113T8.675 9H14q.425 0 .713.288T15 10t-.288.713T14 11H8.075q-.1.675-.075 1.188t.075.812H14q.425 0 .713.288T15 14t-.288.713T14 15H8.675q.85 1.775 2.525 2.888T15 19q1.05 0 2.013-.3t1.787-.825q.35-.225.775-.2T20.3 18q.3.275.275.688t-.375.662q-1.125.8-2.437 1.225T15 21"></svg:path>`,
})
export class MaterialSymbolsEuroRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEuroSymbolRoundedIcon],svg[material-symbols-euro-symbol-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21q-2.95 0-5.25-1.675T6.5 15H4q-.425 0-.712-.288T3 14t.288-.712T4 13h2.05Q6 12.725 6 12.5v-1q0-.225.05-.5H4q-.425 0-.712-.288T3 10t.288-.712T4 9h2.5q.95-2.65 3.25-4.325T15 3q1.425 0 2.675.413t2.35 1.137q.425.275.438.775t-.338.85t-.875.413t-.975-.213q-.725-.425-1.562-.65T15 5.5q-1.875 0-3.413.963T9.25 9H14q.425 0 .713.288T15 10t-.288.713T14 11H8.6q-.05.275-.075.5T8.5 12t.025.5t.075.5H14q.425 0 .713.288T15 14t-.288.713T14 15H9.25q.8 1.575 2.338 2.538T15 18.5q.875 0 1.713-.213t1.562-.637q.45-.275.975-.225t.875.4t.338.85t-.438.775q-1.1.725-2.35 1.138T15 21"></svg:path>`,
})
export class MaterialSymbolsEuroSymbolRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEvMobiledataBadgeOutlineRoundedIcon],svg[material-symbols-ev-mobiledata-badge-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h18q.825 0 1.413.588T23 5v14q0 .825-.587 1.413T21 21zm0-2h18V5H3zm0 0V5zm7-2q.425 0 .713-.288T11 16t-.288-.712T10 15H7v-2h2q.425 0 .713-.288T10 12t-.288-.712T9 11H7V9h3q.425 0 .713-.288T11 8t-.288-.712T10 7H6q-.425 0-.712.288T5 8v8q0 .425.288.713T6 17zm5.5-4l-1.325-5.275Q14.1 7.4 13.85 7.2t-.6-.2q-.475 0-.775.375T12.3 8.2l2.025 8.075q.075.325.325.525t.6.2h.5q.35 0 .6-.2t.325-.525L18.7 8.2q.125-.45-.175-.825T17.75 7q-.35 0-.6.2t-.325.525z"></svg:path>`,
})
export class MaterialSymbolsEvMobiledataBadgeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEvMobiledataBadgeRoundedIcon],svg[material-symbols-ev-mobiledata-badge-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h18q.825 0 1.413.588T23 5v14q0 .825-.587 1.413T21 21zm7-4q.425 0 .713-.288T11 16t-.288-.712T10 15H7v-2h2q.425 0 .713-.288T10 12t-.288-.712T9 11H7V9h3q.425 0 .713-.288T11 8t-.288-.712T10 7H6q-.425 0-.712.288T5 8v8q0 .425.288.713T6 17zm5.5-4l-1.325-5.275Q14.1 7.4 13.85 7.2t-.6-.2q-.475 0-.775.375T12.3 8.2l2.025 8.075q.075.325.325.525t.6.2h.5q.35 0 .6-.2t.325-.525L18.7 8.2q.125-.45-.175-.825T17.75 7q-.35 0-.6.2t-.325.525z"></svg:path>`,
})
export class MaterialSymbolsEvMobiledataBadgeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEvShadowAddOutlineRoundedIcon],svg[material-symbols-ev-shadow-add-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22q-.425 0-.712-.288T17 21v-2h-2q-.425 0-.712-.288T14 18t.288-.712T15 17h2v-2q0-.425.288-.712T18 14t.713.288T19 15v2h2q.425 0 .713.288T22 18t-.288.713T21 19h-2v2q0 .425-.288.713T18 22m-6.875 0q-1.525 0-3.3-.9t-2.9-2.025Q3.5 17.65 2.75 15.825T2 12q0-2.075.788-3.9t2.137-3.175T8.1 2.788T12 2q1.95 0 3.663.675t3.024 1.863T20.85 7.35t1.075 3.525q.05.45-.238.788T20.95 12q-.375 0-.662-.238t-.338-.612q-.125-.725-.237-1.263t-.463-1.262L10.8 17.05q.325.4.688.763t.787.687q.5.4.675 1t-.05 1.2q-.2.575-.7.938T11.125 22m-1.4-6.675L18.15 6.9q-.275-.3-.55-.588t-.6-.537l-7.825 7.85q.1.45.225.863t.325.837m-.65-4.45L15.25 4.7q-.2-.075-.363-.163t-.362-.137q-2.15.7-3.637 2.438t-1.813 4.037M4 12q0 3.025 1.963 5.3t4.937 2.675Q9.1 18.6 8.05 16.512T7 12t1.05-4.487t2.85-3.438q-2.95.4-4.925 2.638T4 12m10.575-.675"></svg:path>`,
})
export class MaterialSymbolsEvShadowAddOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEvShadowAddRoundedIcon],svg[material-symbols-ev-shadow-add-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22q-.425 0-.712-.288T17 21v-2h-2q-.425 0-.712-.288T14 18t.288-.712T15 17h2v-2q0-.425.288-.712T18 14t.713.288T19 15v2h2q.425 0 .713.288T22 18t-.288.713T21 19h-2v2q0 .425-.288.713T18 22m-6.125 0q-2.025 0-3.825-.788T4.9 19.075T2.775 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.875.775t3.15 2.125t2.15 3.138T22 11.85q0 .25-.137.425t-.338.3t-.45.125t-.5-.125q-.575-.3-1.212-.437T18.025 12q-2.5 0-4.275 1.763t-1.775 4.262q0 .675.163 1.325t.437 1.25q.05.125.075.238t.025.237q0 .375-.225.65t-.575.275M4 12q0 2.775 1.65 4.95t4.325 2.825Q8.6 18.125 7.8 16.138T7 12q0-2.425 1.05-4.487t2.85-3.438q-2.95.4-4.925 2.638T4 12"></svg:path>`,
})
export class MaterialSymbolsEvShadowAddRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEvShadowMinusOutlineRoundedIcon],svg[material-symbols-ev-shadow-minus-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19q-.425 0-.712-.288T14 18t.288-.712T15 17h6q.425 0 .713.288T22 18t-.288.713T21 19zm-3.875 3q-1.525 0-3.3-.9t-2.9-2.025Q3.5 17.65 2.75 15.825T2 12q0-2.075.788-3.9t2.137-3.175T8.1 2.788T12 2q1.95 0 3.663.675t3.024 1.863T20.85 7.35t1.075 3.525q.05.45-.238.788T20.95 12q-.375 0-.662-.238t-.338-.612q-.125-.725-.237-1.263t-.463-1.262L10.8 17.05q.325.4.688.763t.787.687q.5.4.675 1t-.05 1.2q-.2.575-.7.938T11.125 22m-1.4-6.675L18.15 6.9q-.275-.3-.55-.588t-.6-.537l-7.825 7.85q.1.45.225.863t.325.837m-.65-4.45L15.25 4.7q-.2-.075-.363-.163t-.362-.137q-2.15.7-3.637 2.438t-1.813 4.037M4 12q0 3.025 1.963 5.3t4.937 2.675Q9.1 18.6 8.05 16.512T7 12t1.05-4.487t2.85-3.438q-2.95.4-4.925 2.638T4 12m10.575-.675"></svg:path>`,
})
export class MaterialSymbolsEvShadowMinusOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEvShadowMinusRoundedIcon],svg[material-symbols-ev-shadow-minus-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19q-.425 0-.712-.288T14 18t.288-.712T15 17h6q.425 0 .713.288T22 18t-.288.713T21 19zm-3.125 3q-2.025 0-3.825-.788T4.9 19.075T2.775 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.875.775t3.15 2.125t2.15 3.138T22 11.85q0 .25-.137.425t-.338.3t-.45.125t-.5-.125q-.575-.3-1.212-.437T18.025 12q-2.5 0-4.275 1.763t-1.775 4.262q0 .675.163 1.325t.437 1.25q.05.125.075.238t.025.237q0 .375-.225.65t-.575.275M4 12q0 2.775 1.65 4.95t4.325 2.825Q8.6 18.125 7.8 16.138T7 12q0-2.425 1.05-4.487t2.85-3.438q-2.95.4-4.925 2.638T4 12"></svg:path>`,
})
export class MaterialSymbolsEvShadowMinusRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEvStationOutlineRoundedIcon],svg[material-symbols-ev-station-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10h6V5H6zm0 9h6v-7H6zm6 0H6zm1 2H5q-.425 0-.712-.288T4 20V5q0-.825.588-1.412T6 3h6q.825 0 1.413.588T14 5v7h1.25q.725 0 1.238.513T17 13.75v4.625q0 .425.35.775t.775.35q.45 0 .788-.35t.337-.775V9H19q-.425 0-.712-.288T18 8V6.5q0-.2.15-.35T18.5 6V5q0-.2.15-.35T19 4.5t.35.15t.15.35v1h1V5q0-.2.15-.35T21 4.5t.35.15t.15.35v1q.2 0 .35.15t.15.35V8q0 .425-.288.713T21 9h-.25v9.375q0 1.05-.763 1.838T18.126 21q-1.075 0-1.85-.788t-.775-1.837V13.75q0-.125-.062-.187t-.188-.063H14V20q0 .425-.288.713T13 21m-4.5-2l2.5-4H9.5v-3L7 16h1.5z"></svg:path>`,
})
export class MaterialSymbolsEvStationOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEvStationRoundedIcon],svg[material-symbols-ev-station-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10h6V5H6zm7 11H5q-.425 0-.712-.288T4 20V5q0-.825.588-1.412T6 3h6q.825 0 1.413.588T14 5v7h1.25q.725 0 1.238.513T17 13.75v4.625q0 .425.35.775t.775.35q.45 0 .788-.35t.337-.775V9H19q-.425 0-.712-.288T18 8V6.5q0-.2.15-.35T18.5 6V5q0-.2.15-.35T19 4.5t.35.15t.15.35v1h1V5q0-.2.15-.35T21 4.5t.35.15t.15.35v1q.2 0 .35.15t.15.35V8q0 .425-.288.713T21 9h-.25v9.375q0 1.05-.763 1.838T18.126 21q-1.075 0-1.85-.788t-.775-1.837V13.75q0-.125-.062-.187t-.188-.063H14V20q0 .425-.288.713T13 21m-4.5-2l2.5-4H9.5v-3L7 16h1.5z"></svg:path>`,
})
export class MaterialSymbolsEvStationRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventAvailableOutlineRoundedIcon],svg[material-symbols-event-available-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.95 15.45l3.475-3.475q.3-.3.725-.3t.725.3t.3.725t-.3.725L11.65 17.65q-.3.3-.7.3t-.7-.3l-2.125-2.125q-.3-.3-.3-.725t.3-.725t.725-.3t.725.3zM5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsEventAvailableOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventAvailableRoundedIcon],svg[material-symbols-event-available-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.95 15.45l3.475-3.475q.3-.3.725-.3t.725.3t.3.725t-.3.725L11.65 17.65q-.3.3-.7.3t-.7-.3l-2.125-2.125q-.3-.3-.3-.725t.3-.725t.725-.3t.725.3zM5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"></svg:path>`,
})
export class MaterialSymbolsEventAvailableRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventBusyOutlineRoundedIcon],svg[material-symbols-event-busy-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.4L10.4 18q-.275.275-.7.275T9 18t-.275-.7t.275-.7l1.6-1.6L9 13.4q-.275-.275-.275-.7T9 12t.7-.275t.7.275l1.6 1.6l1.6-1.6q.275-.275.7-.275T15 12t.275.7t-.275.7L13.4 15l1.6 1.6q.275.275.275.7T15 18t-.7.275t-.7-.275zM5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsEventBusyOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventBusyRoundedIcon],svg[material-symbols-event-busy-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.4L10.4 18q-.275.275-.7.275T9 18t-.275-.7t.275-.7l1.6-1.6L9 13.4q-.275-.275-.275-.7T9 12t.7-.275t.7.275l1.6 1.6l1.6-1.6q.275-.275.7-.275T15 12t.275.7t-.275.7L13.4 15l1.6 1.6q.275.275.275.7T15 18t-.7.275t-.7-.275zM5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"></svg:path>`,
})
export class MaterialSymbolsEventBusyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventListOutlineRoundedIcon],svg[material-symbols-event-list-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21q-.825 0-1.412-.587T14 19v-4q0-.825.588-1.412T16 13h4q.825 0 1.413.588T22 15v4q0 .825-.587 1.413T20 21zm0-2h4v-4h-4zM3 18q-.425 0-.712-.288T2 17t.288-.712T3 16h7q.425 0 .713.288T11 17t-.288.713T10 18zm13-7q-.825 0-1.412-.587T14 9V5q0-.825.588-1.412T16 3h4q.825 0 1.413.588T22 5v4q0 .825-.587 1.413T20 11zm0-2h4V5h-4zM3 8q-.425 0-.712-.288T2 7t.288-.712T3 6h7q.425 0 .713.288T11 7t-.288.713T10 8zm15-1"></svg:path>`,
})
export class MaterialSymbolsEventListOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventListRoundedIcon],svg[material-symbols-event-list-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21q-.825 0-1.412-.587T14 19v-4q0-.825.588-1.412T16 13h4q.825 0 1.413.588T22 15v4q0 .825-.587 1.413T20 21zM3 18q-.425 0-.712-.288T2 17t.288-.712T3 16h7q.425 0 .713.288T11 17t-.288.713T10 18zm13-7q-.825 0-1.412-.587T14 9V5q0-.825.588-1.412T16 3h4q.825 0 1.413.588T22 5v4q0 .825-.587 1.413T20 11zM3 8q-.425 0-.712-.288T2 7t.288-.712T3 6h7q.425 0 .713.288T11 7t-.288.713T10 8z"></svg:path>`,
})
export class MaterialSymbolsEventListRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventNoteOutlineRoundedIcon],svg[material-symbols-event-note-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6zm3 6q-.425 0-.712-.288T7 13t.288-.712T8 12h8q.425 0 .713.288T17 13t-.288.713T16 14zm0 4q-.425 0-.712-.288T7 17t.288-.712T8 16h5q.425 0 .713.288T14 17t-.288.713T13 18z"></svg:path>`,
})
export class MaterialSymbolsEventNoteOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventNoteRoundedIcon],svg[material-symbols-event-note-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zm3-6q-.425 0-.712-.288T7 13t.288-.712T8 12h8q.425 0 .713.288T17 13t-.288.713T16 14zm0 4q-.425 0-.712-.288T7 17t.288-.712T8 16h5q.425 0 .713.288T14 17t-.288.713T13 18z"></svg:path>`,
})
export class MaterialSymbolsEventNoteRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventOutlineRoundedIcon],svg[material-symbols-event-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 18q-1.05 0-1.775-.725T12 15.5t.725-1.775T14.5 13t1.775.725T17 15.5t-.725 1.775T14.5 18M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsEventOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventRepeatOutlineRoundedIcon],svg[material-symbols-event-repeat-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v5q0 .425-.288.713T20 12t-.712-.288T19 11v-1H5v10h6q.425 0 .713.288T12 21t-.288.713T11 22zm14 2q-1.6 0-2.863-.888T14.326 20.8q-.125-.275.063-.537t.487-.263q.35 0 .638.213t.462.537q.45.8 1.25 1.275T19 22.5q1.45 0 2.475-1.025T22.5 19t-1.025-2.475T19 15.5q-.725 0-1.35.262t-1.1.738h.7q.325 0 .538.213t.212.537t-.213.538t-.537.212H15q-.425 0-.712-.288T14 17v-2.25q0-.325.213-.537T14.75 14t.538.213t.212.537v.675q.675-.65 1.575-1.037T19 14q2.075 0 3.538 1.463T24 19t-1.463 3.538T19 24M5 8h14V6H5zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsEventRepeatOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventRepeatRoundedIcon],svg[material-symbols-event-repeat-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v5q0 .425-.288.713T20 12t-.712-.288T19 11v-1H5v10h6q.425 0 .713.288T12 21t-.288.713T11 22zm14 2q-1.6 0-2.863-.888T14.326 20.8q-.125-.275.063-.537t.487-.263q.35 0 .638.213t.462.537q.45.8 1.25 1.275T19 22.5q1.45 0 2.475-1.025T22.5 19t-1.025-2.475T19 15.5q-.725 0-1.35.262t-1.1.738h.7q.325 0 .538.213t.212.537t-.213.538t-.537.212H15q-.425 0-.712-.288T14 17v-2.25q0-.325.213-.537T14.75 14t.538.213t.212.537v.675q.675-.65 1.575-1.037T19 14q2.075 0 3.538 1.463T24 19t-1.463 3.538T19 24"></svg:path>`,
})
export class MaterialSymbolsEventRepeatRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventRoundedIcon],svg[material-symbols-event-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 18q-1.05 0-1.775-.725T12 15.5t.725-1.775T14.5 13t1.775.725T17 15.5t-.725 1.775T14.5 18M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"></svg:path>`,
})
export class MaterialSymbolsEventRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventSeatOutlineRoundedIcon],svg[material-symbols-event-seat-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.425 0-.712-.288T4 20v-3q0-.825.588-1.412T6 15h12q.825 0 1.413.588T20 17v3q0 .425-.288.713T19 21t-.712-.288T18 20v-3H6v3q0 .425-.288.713T5 21m-.5-7q-.625 0-1.062-.437T3 12.5t.438-1.062T4.5 11t1.063.438T6 12.5t-.437 1.063T4.5 14M7 14V5q0-.825.588-1.412T9 3h6q.825 0 1.413.588T17 5v9zm12.5 0q-.625 0-1.062-.437T18 12.5t.438-1.062T19.5 11t1.063.438T21 12.5t-.437 1.063T19.5 14M9 12h6V5H9zm0 0h6z"></svg:path>`,
})
export class MaterialSymbolsEventSeatOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventSeatRoundedIcon],svg[material-symbols-event-seat-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.425 0-.712-.288T4 20v-3q0-.825.588-1.412T6 15h12q.825 0 1.413.588T20 17v3q0 .425-.288.713T19 21t-.712-.288T18 20v-3H6v3q0 .425-.288.713T5 21m-.5-7q-.625 0-1.062-.437T3 12.5t.438-1.062T4.5 11t1.063.438T6 12.5t-.437 1.063T4.5 14M7 14V5q0-.825.588-1.412T9 3h6q.825 0 1.413.588T17 5v9zm12.5 0q-.625 0-1.062-.437T18 12.5t.438-1.062T19.5 11t1.063.438T21 12.5t-.437 1.063T19.5 14"></svg:path>`,
})
export class MaterialSymbolsEventSeatRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventUpcomingOutlineRoundedIcon],svg[material-symbols-event-upcoming-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22h-3q-.425 0-.712-.288T15 21t.288-.712T16 20h3V10H5v3q0 .425-.288.713T4 14t-.712-.288T3 13V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22m-9.825-2H2q-.425 0-.712-.288T1 19t.288-.712T2 18h7.175L7.3 16.1q-.275-.275-.287-.687T7.3 14.7q.275-.275.7-.275t.7.275l3.6 3.6q.3.3.3.7t-.3.7l-3.6 3.6q-.275.275-.687.288T7.3 23.3q-.275-.275-.275-.7t.275-.7zM5 8h14V6H5zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsEventUpcomingOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventUpcomingRoundedIcon],svg[material-symbols-event-upcoming-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22h-3q-.425 0-.712-.288T15 21t.288-.712T16 20h3V10H5v3q0 .425-.288.713T4 14t-.712-.288T3 13V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22m-9.825-2H2q-.425 0-.712-.288T1 19t.288-.712T2 18h7.175L7.3 16.1q-.275-.275-.287-.687T7.3 14.7q.275-.275.7-.275t.7.275l3.6 3.6q.3.3.3.7t-.3.7l-3.6 3.6q-.275.275-.687.288T7.3 23.3q-.275-.275-.275-.7t.275-.7z"></svg:path>`,
})
export class MaterialSymbolsEventUpcomingRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExclamationRoundedIcon],svg[material-symbols-exclamation-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14q-.425 0-.712-.288T11 13V6q0-.425.288-.712T12 5t.713.288T13 6v7q0 .425-.288.713T12 14m0 5q-.425 0-.712-.288T11 18t.288-.712T12 17t.713.288T13 18t-.288.713T12 19"></svg:path>`,
})
export class MaterialSymbolsExclamationRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExitToAppRoundedIcon],svg[material-symbols-exit-to-app-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-3q0-.425.288-.712T4 15t.713.288T5 16v3h14V5H5v3q0 .425-.288.713T4 9t-.712-.288T3 8V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm6.65-8H4q-.425 0-.712-.288T3 12t.288-.712T4 11h7.65L9.8 9.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L14.8 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-3.575 3.575q-.3.3-.712.288T9.8 16.25q-.275-.3-.288-.7t.288-.7z"></svg:path>`,
})
export class MaterialSymbolsExitToAppRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExpandAllRoundedIcon],svg[material-symbols-expand-all-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 19.15l3.875-3.875q.3-.3.7-.3t.7.3t.3.713t-.3.712l-3.85 3.875q-.575.575-1.425.575t-1.425-.575L6.7 16.7q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3zm0-14.3L8.15 8.7q-.3.3-.7.288t-.7-.288q-.3-.3-.312-.712t.287-.713l3.85-3.85Q11.15 2.85 12 2.85t1.425.575l3.85 3.85q.3.3.288.713t-.313.712q-.3.275-.7.288t-.7-.288z"></svg:path>`,
})
export class MaterialSymbolsExpandAllRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExpandCircleDownOutlineRoundedIcon],svg[material-symbols-expand-circle-down-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.675L9.625 10.3q-.275-.275-.687-.275t-.713.275q-.3.3-.3.713t.3.712L11.3 14.8q.3.3.7.3t.7-.3l3.1-3.1q.3-.3.287-.7t-.312-.7q-.3-.275-.7-.288t-.7.288zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></svg:path>`,
})
export class MaterialSymbolsExpandCircleDownOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExpandCircleDownRoundedIcon],svg[material-symbols-expand-circle-down-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.675L9.625 10.3q-.275-.275-.687-.275t-.713.275q-.3.3-.3.713t.3.712L11.3 14.8q.3.3.7.3t.7-.3l3.1-3.1q.3-.3.287-.7t-.312-.7q-.3-.275-.7-.288t-.7.288zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsExpandCircleDownRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExpandCircleRightOutlineRoundedIcon],svg[material-symbols-expand-circle-right-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.675 12L10.3 14.375q-.275.275-.275.688t.275.712q.3.3.713.3t.712-.3L14.8 12.7q.3-.3.3-.7t-.3-.7l-3.1-3.1q-.3-.3-.7-.287t-.7.312q-.275.3-.288.7t.288.7zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></svg:path>`,
})
export class MaterialSymbolsExpandCircleRightOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExpandCircleRightRoundedIcon],svg[material-symbols-expand-circle-right-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.675 12L10.3 14.375q-.275.275-.275.688t.275.712q.3.3.713.3t.712-.3L14.8 12.7q.3-.3.3-.7t-.3-.7l-3.1-3.1q-.3-.3-.7-.287t-.7.312q-.275.3-.288.7t.288.7zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsExpandCircleRightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExpandCircleUpOutlineRoundedIcon],svg[material-symbols-expand-circle-up-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 11.325l2.375 2.375q.275.275.688.275t.712-.275q.3-.3.3-.712t-.3-.713L12.7 9.2q-.3-.3-.7-.3t-.7.3l-3.1 3.1q-.3.3-.287.7t.312.7q.3.275.7.288t.7-.288zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></svg:path>`,
})
export class MaterialSymbolsExpandCircleUpOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExpandCircleUpRoundedIcon],svg[material-symbols-expand-circle-up-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 11.325l2.375 2.375q.275.275.688.275t.712-.275q.3-.3.3-.712t-.3-.713L12.7 9.2q-.3-.3-.7-.3t-.7.3l-3.1 3.1q-.3.3-.287.7t.312.7q.3.275.7.288t.7-.288zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsExpandCircleUpRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExpandContentRoundedIcon],svg[material-symbols-expand-content-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17h3q.425 0 .713.288T11 18t-.288.713T10 19H6q-.425 0-.712-.288T5 18v-4q0-.425.288-.712T6 13t.713.288T7 14zM17 7h-3q-.425 0-.712-.288T13 6t.288-.712T14 5h4q.425 0 .713.288T19 6v4q0 .425-.288.713T18 11t-.712-.288T17 10z"></svg:path>`,
})
export class MaterialSymbolsExpandContentRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExpandLessRoundedIcon],svg[material-symbols-expand-less-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 10.775l-3.9 3.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.213T12 8.4t.375.063t.325.212l4.6 4.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"></svg:path>`,
})
export class MaterialSymbolsExpandLessRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExpandMoreRoundedIcon],svg[material-symbols-expand-more-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14.95q-.2 0-.375-.062t-.325-.213l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213T12 14.95"></svg:path>`,
})
export class MaterialSymbolsExpandMoreRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExpandRoundedIcon],svg[material-symbols-expand-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22q-.425 0-.712-.288T4 21t.288-.712T5 20h14q.425 0 .713.288T20 21t-.288.713T19 22zm7-3.425q-.2 0-.375-.062T11.3 18.3l-2.6-2.6q-.275-.275-.287-.687T8.7 14.3q.275-.275.688-.288t.712.263l.9.875v-6.3l-.9.875Q9.825 10 9.413 10T8.7 9.7q-.275-.275-.275-.7t.275-.7l2.6-2.6q.15-.15.325-.212T12 5.425t.375.063t.325.212l2.6 2.6q.275.275.287.688T15.3 9.7q-.275.275-.687.288t-.713-.263L13 8.85v6.3l.9-.875q.275-.275.688-.275t.712.3q.275.275.275.7t-.275.7l-2.6 2.6q-.15.15-.325.213t-.375.062M5 4q-.425 0-.712-.288T4 3t.288-.712T5 2h14q.425 0 .713.288T20 3t-.288.713T19 4z"></svg:path>`,
})
export class MaterialSymbolsExpandRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExpansionPanelsOutlineRoundedIcon],svg[material-symbols-expansion-panels-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.15l-1.875-1.875q-.3-.3-.7-.3t-.7.3t-.3.713t.3.712l2.575 2.6q.3.3.7.3t.7-.3l2.6-2.6q.3-.3.3-.712t-.3-.713t-.712-.3t-.713.3zm0-6.3l1.875 1.875q.3.3.7.3t.7-.3t.3-.712t-.3-.713L12.7 6.7q-.3-.3-.7-.3t-.7.3L8.7 9.3q-.3.3-.287.7t.312.7t.713.3t.712-.3zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsExpansionPanelsOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExpansionPanelsRoundedIcon],svg[material-symbols-expansion-panels-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.15l-1.875-1.875q-.3-.3-.7-.3t-.7.3t-.3.713t.3.712l2.575 2.6q.3.3.7.3t.7-.3l2.6-2.6q.3-.3.3-.712t-.3-.713t-.712-.3t-.713.3zm0-6.3l1.875 1.875q.3.3.7.3t.7-.3t.3-.712t-.3-.713L12.7 6.7q-.3-.3-.7-.3t-.7.3L8.7 9.3q-.3.3-.287.7t.312.7t.713.3t.712-.3zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsExpansionPanelsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExplicitOutlineRoundedIcon],svg[material-symbols-explicit-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15v-2h3q.425 0 .713-.288T15 12t-.288-.712T14 11h-3V9h3q.425 0 .713-.288T15 8t-.288-.712T14 7h-4q-.425 0-.712.288T9 8v8q0 .425.288.713T10 17h4q.425 0 .713-.288T15 16t-.288-.712T14 15zm-6 6q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsExplicitOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExplicitRoundedIcon],svg[material-symbols-explicit-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15v-2h3q.425 0 .713-.288T15 12t-.288-.712T14 11h-3V9h3q.425 0 .713-.288T15 8t-.288-.712T14 7h-4q-.425 0-.712.288T9 8v8q0 .425.288.713T10 17h4q.425 0 .713-.288T15 16t-.288-.712T14 15zm-6 6q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsExplicitRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExploreOffOutlineRoundedIcon],svg[material-symbols-explore-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-1.475.425-2.875T3.65 6.5L2.075 4.925q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3l17 17q.275.275.275.7t-.275.7q-.3.3-.712.3t-.713-.3L17.5 20.35q-1.225.8-2.625 1.225T12 22M7.85 2.9q.975-.45 2.025-.675T12 2q2 0 3.825.75t3.25 2.175t2.175 3.25T22 12q0 1.075-.225 2.125T21.1 16.15q-.175.375-.575.488t-.75-.088t-.475-.6t.05-.8q.325-.75.487-1.55T20 12q0-3.35-2.325-5.675T12 4q-.8 0-1.6.163t-1.55.487q-.4.175-.8.05t-.6-.475t-.088-.75t.488-.575m6.675 8.775l-2.2-2.2q-.2-.2-.137-.487t.337-.363l3.1-.875q.275-.075.488.138t.137.487l-.875 3.1q-.075.275-.363.338t-.487-.138M12 20q1.075 0 2.088-.275t1.962-.825l-3.775-3.775l-3.9 1.125q-.275.075-.488-.137t-.137-.488l1.125-3.9L5.1 7.95q-.55.95-.825 1.962T4 12q0 3.325 2.338 5.663T12 20"></svg:path>`,
})
export class MaterialSymbolsExploreOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExploreOffRoundedIcon],svg[material-symbols-explore-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-1.5.425-2.887T3.65 6.5L2.075 4.925q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3l17 17q.3.3.3.7t-.3.7t-.712.3t-.713-.3L17.5 20.35q-1.225.8-2.612 1.225T12 22m-3.625-5.75l3.1-.875q.275-.075.338-.363t-.138-.487l-2.2-2.2q-.2-.2-.487-.137t-.363.337l-.875 3.1q-.075.275.138.488t.487.137m11.7.45q-.25 0-.475-.088t-.425-.287L15.55 12.7q-.2-.2-.262-.45t.012-.525l.95-3.35q.075-.275-.137-.487t-.488-.138l-3.35.95q-.275.075-.525.013t-.45-.263L7.675 4.825q-.2-.2-.287-.413T7.3 3.95q0-.35.175-.638t.5-.462q.95-.425 1.963-.638T12 2q2.075 0 3.9.788t3.175 2.137T21.213 8.1T22 12q0 1.05-.213 2.063t-.637 1.962q-.15.35-.437.513t-.638.162"></svg:path>`,
})
export class MaterialSymbolsExploreOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExploreOutlineRoundedIcon],svg[material-symbols-explore-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.375 16.25l5.05-1.45q.5-.15.863-.513t.512-.862l1.45-5.05q.075-.275-.137-.488t-.488-.137l-5.05 1.45q-.5.15-.862.513t-.513.862l-1.45 5.05q-.075.275.138.488t.487.137M12 13.5q-.625 0-1.062-.437T10.5 12t.438-1.062T12 10.5t1.063.438T13.5 12t-.437 1.063T12 13.5m0 8.5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.325 0 5.663-2.337T20 12t-2.337-5.663T12 4T6.337 6.338T4 12t2.338 5.663T12 20m0-8"></svg:path>`,
})
export class MaterialSymbolsExploreOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExploreRoundedIcon],svg[material-symbols-explore-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.375 16.25l5.05-1.45q.5-.15.863-.513t.512-.862l1.45-5.05q.075-.275-.137-.488t-.488-.137l-5.05 1.45q-.5.15-.862.513t-.513.862l-1.45 5.05q-.075.275.138.488t.487.137M12 13.5q-.625 0-1.062-.437T10.5 12t.438-1.062T12 10.5t1.063.438T13.5 12t-.437 1.063T12 13.5m0 8.5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsExploreRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExplosionOutlineRoundedIcon],svg[material-symbols-explosion-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.525 15.5l.775.75q.3.3.7.3t.7-.3l.775-.75H14.5q.425 0 .713-.288t.287-.712v-1.025l.75-.775q.3-.3.3-.7t-.3-.7l-.75-.775V9.5q0-.425-.288-.712T14.5 8.5h-1.025l-.95-.925Q12.3 7.35 12 7.35t-.525.225l-.95.925H9.5q-.425 0-.712.288T8.5 9.5v1.025l-.75.775q-.3.3-.3.7t.3.7l.75.775V14.5q0 .425.288.713t.712.287zM8.65 20H6q-.825 0-1.412-.587T4 18v-2.65L2.075 13.4q-.275-.3-.425-.662T1.5 12t.15-.737t.425-.663L4 8.65V6q0-.825.588-1.412T6 4h2.65l1.95-1.925q.3-.275.663-.425T12 1.5t.738.15t.662.425L15.35 4H18q.825 0 1.413.588T20 6v2.65l1.925 1.95q.275.3.425.663t.15.737t-.15.738t-.425.662L20 15.35V18q0 .825-.587 1.413T18 20h-2.65l-1.95 1.925q-.3.275-.662.425T12 22.5t-.737-.15t-.663-.425zm.85-2l2.5 2.5l2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5L9.5 6H6v3.5L3.5 12L6 14.5V18zm2.5-6"></svg:path>`,
})
export class MaterialSymbolsExplosionOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExplosionRoundedIcon],svg[material-symbols-explosion-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.525 15.5l.775.75q.3.3.7.3t.7-.3l.775-.75H14.5q.425 0 .713-.288t.287-.712v-1.025l.75-.775q.3-.3.3-.7t-.3-.7l-.75-.775V9.5q0-.425-.288-.712T14.5 8.5h-1.025l-.95-.925Q12.3 7.35 12 7.35t-.525.225l-.95.925H9.5q-.425 0-.712.288T8.5 9.5v1.025l-.75.775q-.3.3-.3.7t.3.7l.75.775V14.5q0 .425.288.713t.712.287zM8.65 20H6q-.825 0-1.412-.587T4 18v-2.65L2.075 13.4q-.275-.3-.425-.662T1.5 12t.15-.737t.425-.663L4 8.65V6q0-.825.588-1.412T6 4h2.65l1.95-1.925q.3-.275.663-.425T12 1.5t.738.15t.662.425L15.35 4H18q.825 0 1.413.588T20 6v2.65l1.925 1.95q.275.3.425.663t.15.737t-.15.738t-.425.662L20 15.35V18q0 .825-.587 1.413T18 20h-2.65l-1.95 1.925q-.3.275-.662.425T12 22.5t-.737-.15t-.663-.425z"></svg:path>`,
})
export class MaterialSymbolsExplosionRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExportNotesOutlineRoundedIcon],svg[material-symbols-export-notes-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17.7v1.8q0 .2.15.35t.35.15t.35-.15t.15-.35v-3q0-.2-.15-.35T19.5 16h-3q-.2 0-.35.15t-.15.35t.15.35t.35.15h1.8l-2.45 2.45q-.15.15-.15.35t.15.35t.35.15t.35-.15zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v5q0 .425-.288.713T20 11t-.712-.288T19 10V5H5v14h5q.425 0 .713.288T11 20t-.288.713T10 21zm0-3v1V5v6.075V11zm2-2q0 .425.288.713T8 17h2.075q.425 0 .713-.288t.287-.712t-.287-.712t-.713-.288H8q-.425 0-.712.288T7 16m0-4q0 .425.288.713T8 13h5q.425 0 .713-.288T14 12t-.288-.712T13 11H8q-.425 0-.712.288T7 12m0-4q0 .425.288.713T8 9h8q.425 0 .713-.288T17 8t-.288-.712T16 7H8q-.425 0-.712.288T7 8m11 15q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23"></svg:path>`,
})
export class MaterialSymbolsExportNotesOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExportNotesRoundedIcon],svg[material-symbols-export-notes-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17.7v1.8q0 .2.15.35t.35.15t.35-.15t.15-.35v-3q0-.2-.15-.35T19.5 16h-3q-.2 0-.35.15t-.15.35t.15.35t.35.15h1.8l-2.45 2.45q-.15.15-.15.35t.15.35t.35.15t.35-.15zM18 23q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M8 9h8q.425 0 .713-.288T17 8t-.288-.712T16 7H8q-.425 0-.712.288T7 8t.288.713T8 9M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v5.45q0 .45-.375.7t-.8.1q-.425-.125-.888-.188T18 11q-.275 0-.513.013t-.487.062q-.225-.05-.5-.062T16 11H8q-.425 0-.712.288T7 12t.288.713T8 13h5.125q-.45.425-.812.925T11.675 15H8q-.425 0-.712.288T7 16t.288.713T8 17h3.075q-.05.25-.062.488T11 18q0 .5.05.95t.175.875t-.125.8t-.675.375z"></svg:path>`,
})
export class MaterialSymbolsExportNotesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExposureNeg1RoundedIcon],svg[material-symbols-exposure-neg-1-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14H4q-.425 0-.712-.288T3 13t.288-.712T4 12h5q.425 0 .713.288T10 13t-.288.713T9 14m6.75-5.95l-1.425 1.025q-.35.275-.788.188T12.85 8.8q-.225-.35-.15-.763t.425-.662L16.2 5.15q.1-.075.213-.112T16.65 5h.55q.35 0 .575.225T18 5.8v12.075q0 .475-.325.8t-.8.325t-.8-.325t-.325-.8z"></svg:path>`,
})
export class MaterialSymbolsExposureNeg1RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExposureNeg2RoundedIcon],svg[material-symbols-exposure-neg-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19h-7.175q-.3 0-.512-.213t-.213-.512V17.2q0-.075.2-.525l4.8-4.875q.825-.875 1.163-1.462T18.6 9q0-.725-.562-1.312T16.35 7.1q-.65 0-1.112.263t-.788.687q-.25.35-.637.475T13.05 8.5q-.425-.175-.612-.562t.012-.738q.525-.875 1.513-1.537T16.4 5q2.075 0 3.238 1.188T20.8 9q0 1.125-.525 2.05T18.65 13.1L15 16.9l.05.1H20q.425 0 .713.288T21 18t-.288.713T20 19M9 14H4q-.425 0-.712-.288T3 13t.288-.712T4 12h5q.425 0 .713.288T10 13t-.288.713T9 14"></svg:path>`,
})
export class MaterialSymbolsExposureNeg2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExposurePlus1RoundedIcon],svg[material-symbols-exposure-plus-1-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14H4q-.425 0-.712-.288T3 13t.288-.712T4 12h2v-2q0-.425.288-.712T7 9t.713.288T8 10v2h2q.425 0 .713.288T11 13t-.288.713T10 14H8v2q0 .425-.288.713T7 17t-.712-.288T6 16zm9.75-5.95l-1.425 1.025q-.35.275-.788.188T12.85 8.8q-.225-.35-.15-.763t.425-.662L16.2 5.15q.1-.075.213-.112T16.65 5h.55q.35 0 .575.225T18 5.8v12.075q0 .475-.325.8t-.8.325t-.8-.325t-.325-.8z"></svg:path>`,
})
export class MaterialSymbolsExposurePlus1RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExposurePlus2RoundedIcon],svg[material-symbols-exposure-plus-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19h-7.175q-.3 0-.512-.213t-.213-.512V17.2q0-.075.2-.525l4.8-4.875q.825-.875 1.163-1.462T18.6 9q0-.725-.562-1.312T16.35 7.1q-.65 0-1.112.263t-.788.687q-.25.35-.637.475T13.05 8.5q-.425-.175-.612-.562t.012-.738q.525-.875 1.513-1.537T16.4 5q2.075 0 3.238 1.188T20.8 9q0 1.125-.525 2.05T18.65 13.1L15 16.9l.05.1H20q.425 0 .713.288T21 18t-.288.713T20 19M6 14H4q-.425 0-.712-.288T3 13t.288-.712T4 12h2v-2q0-.425.288-.712T7 9t.713.288T8 10v2h2q.425 0 .713.288T11 13t-.288.713T10 14H8v2q0 .425-.288.713T7 17t-.712-.288T6 16z"></svg:path>`,
})
export class MaterialSymbolsExposurePlus2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExposureRoundedIcon],svg[material-symbols-exposure-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5zm9.5-3h-1.25q-.325 0-.537-.213t-.213-.537t.213-.537t.537-.213h1.25v-1.25q0-.325.213-.537t.537-.213t.538.213t.212.537v1.25h1.25q.325 0 .538.213t.212.537t-.213.538t-.537.212H16v1.25q0 .325-.213.538T15.25 18t-.537-.213t-.213-.537zm-4.25-7.5q.325 0 .538-.213T11 7.75t-.213-.537T10.25 7h-3.5q-.325 0-.537.213T6 7.75t.213.538t.537.212z"></svg:path>`,
})
export class MaterialSymbolsExposureRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExtensionOffOutlineRoundedIcon],svg[material-symbols-extension-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-3.8q1.2 0 2.1-.762T6 12.5t-.9-1.937T3 9.8V6q0-.425.15-.788t.425-.637L5 6v2.2q1.35.5 2.175 1.675T8 12.5q0 1.425-.825 2.6T5 16.8V19h2.2q.525-1.35 1.7-2.175T11.5 16t2.6.825T15.8 19H18l1.425 1.425q-.275.275-.638.425T18 21h-3.8q0-1.2-.762-2.1T11.5 18t-1.937.9T8.8 21zm15-3.85l-2-2V13h2q.2 0 .35-.15t.15-.35t-.15-.35T20 12h-2V6h-6V4q0-.2-.15-.35t-.35-.15t-.35.15T11 4v2H8.85l-2-2H9q0-1.05.725-1.775T11.5 1.5t1.775.725T14 4h4q.825 0 1.413.588T20 6v4q1.05 0 1.775.725T22.5 12.5t-.725 1.775T20 15zm-.925 4.75l-17-16.975q-.3-.3-.288-.712T2.1 3.5t.713-.3t.712.3l16.975 17q.3.3.3.7t-.3.7t-.712.3t-.713-.3M11.5 12.5"></svg:path>`,
})
export class MaterialSymbolsExtensionOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExtensionOffRoundedIcon],svg[material-symbols-extension-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-3.8q1.2 0 2.1-.762T6 12.5t-.9-1.937T3 9.8V6q0-.425.15-.788t.425-.637l15.85 15.85q-.275.275-.638.425T18 21h-3.8q0-1.2-.762-2.1T11.5 18t-1.937.9T8.8 21zm15-3.85L6.85 4H9q0-1.05.725-1.775T11.5 1.5t1.775.725T14 4h4q.825 0 1.413.588T20 6v4q1.05 0 1.775.725T22.5 12.5t-.725 1.775T20 15zm-.925 4.75l-17-16.975q-.3-.3-.288-.712T2.1 3.5t.713-.3t.712.3l16.975 17q.3.3.3.7t-.3.7t-.712.3t-.713-.3"></svg:path>`,
})
export class MaterialSymbolsExtensionOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExtensionOutlineRoundedIcon],svg[material-symbols-extension-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19v-3.8q1.2 0 2.1-.762q.9-.763.9-1.938q0-1.175-.9-1.938Q4.2 9.8 3 9.8V6q0-.825.587-1.412Q4.175 4 5 4h4q0-1.05.725-1.775Q10.45 1.5 11.5 1.5q1.05 0 1.775.725Q14 2.95 14 4h4q.825 0 1.413.588Q20 5.175 20 6v4q1.05 0 1.775.725q.725.725.725 1.775q0 1.05-.725 1.775Q21.05 15 20 15v4q0 .825-.587 1.413Q18.825 21 18 21h-3.8q0-1.2-.762-2.1q-.763-.9-1.938-.9q-1.175 0-1.938.9q-.762.9-.762 2.1Zm13-2V6H5v2.2q1.35.5 2.175 1.675Q8 11.05 8 12.5q0 1.425-.825 2.6T5 16.8V19h2.2q.525-1.35 1.7-2.175Q10.075 16 11.5 16t2.6.825q1.175.825 1.7 2.175Zm-6.5-6.5Z"></svg:path>`,
})
export class MaterialSymbolsExtensionOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExtensionRoundedIcon],svg[material-symbols-extension-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19v-3.8q1.2 0 2.1-.762q.9-.763.9-1.938q0-1.175-.9-1.938Q4.2 9.8 3 9.8V6q0-.825.587-1.412Q4.175 4 5 4h4q0-1.05.725-1.775Q10.45 1.5 11.5 1.5q1.05 0 1.775.725Q14 2.95 14 4h4q.825 0 1.413.588Q20 5.175 20 6v4q1.05 0 1.775.725q.725.725.725 1.775q0 1.05-.725 1.775Q21.05 15 20 15v4q0 .825-.587 1.413Q18.825 21 18 21h-3.8q0-1.2-.762-2.1q-.763-.9-1.938-.9q-1.175 0-1.938.9q-.762.9-.762 2.1Z"></svg:path>`,
})
export class MaterialSymbolsExtensionRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEyeTrackingOutlineRoundedIcon],svg[material-symbols-eye-tracking-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 23q-.825 0-1.412-.587T1 21v-2q0-.425.288-.712T2 18t.713.288T3 19v2h2q.425 0 .713.288T6 22t-.288.713T5 23zm18 0h-2q-.425 0-.712-.288T18 22t.288-.712T19 21h2v-2q0-.425.288-.712T22 18t.713.288T23 19v2q0 .825-.587 1.413T21 23m-9-4.5q-2.65 0-4.9-1.4t-3.525-3.825q-.15-.3-.225-.612t-.075-.638q0-.35.075-.675t.225-.625Q4.85 8.3 7.1 6.9T12 5.5t4.9 1.4t3.525 3.825q.15.3.225.613t.075.662t-.075.663t-.225.612Q19.15 15.7 16.9 17.1T12 18.5m0-2q2.2 0 4.025-1.2t2.8-3.3q-.975-2.1-2.8-3.3T12 7.5T7.975 8.7t-2.8 3.3q.975 2.1 2.8 3.3T12 16.5m0-1q1.45 0 2.475-1.025T15.5 12t-1.025-2.475T12 8.5T9.525 9.525T8.5 12t1.025 2.475T12 15.5m0-2q-.625 0-1.063-.437T10.5 12t.438-1.062T12 10.5t1.063.438T13.5 12t-.437 1.063T12 13.5M23 3v2q0 .425-.288.713T22 6t-.712-.288T21 5V3h-2q-.425 0-.712-.288T18 2t.288-.712T19 1h2q.825 0 1.413.588T23 3M3 1h2q.425 0 .713.288T6 2t-.288.713T5 3H3v2q0 .425-.288.713T2 6t-.712-.288T1 5V3q0-.825.588-1.412T3 1"></svg:path>`,
})
export class MaterialSymbolsEyeTrackingOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEyeTrackingRoundedIcon],svg[material-symbols-eye-tracking-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 23q-.825 0-1.412-.587T1 21v-2q0-.425.288-.712T2 18t.713.288T3 19v2h2q.425 0 .713.288T6 22t-.288.713T5 23zm18 0h-2q-.425 0-.712-.288T18 22t.288-.712T19 21h2v-2q0-.425.288-.712T22 18t.713.288T23 19v2q0 .825-.587 1.413T21 23m-9-4.5q-2.65 0-4.9-1.4t-3.525-3.825q-.15-.3-.225-.612t-.075-.638q0-.35.075-.675t.225-.625Q4.85 8.3 7.1 6.9T12 5.5t4.9 1.4t3.525 3.825q.15.3.225.613t.075.662t-.075.663t-.225.612Q19.15 15.7 16.9 17.1T12 18.5m0-3q1.45 0 2.475-1.025T15.5 12t-1.025-2.475T12 8.5T9.525 9.525T8.5 12t1.025 2.475T12 15.5m0-2q-.625 0-1.063-.437T10.5 12t.438-1.062T12 10.5t1.063.438T13.5 12t-.437 1.063T12 13.5M23 3v2q0 .425-.288.713T22 6t-.712-.288T21 5V3h-2q-.425 0-.712-.288T18 2t.288-.712T19 1h2q.825 0 1.413.588T23 3M3 1h2q.425 0 .713.288T6 2t-.288.713T5 3H3v2q0 .425-.288.713T2 6t-.712-.288T1 5V3q0-.825.588-1.412T3 1"></svg:path>`,
})
export class MaterialSymbolsEyeTrackingRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEyeglasses2RoundedIcon],svg[material-symbols-eyeglasses-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.45 16q-1.05 0-1.888-.675T2.5 13.6l-.725-3.35h-.1q-.425.05-.737-.225t-.363-.7t.238-.725t.712-.35q1.55-.125 2.7-.187T6.325 8q1.625 0 2.625.15t1.8.525q.35.175.663.25T12 9t.538-.075t.612-.225q.825-.375 1.9-.537T17.9 8q1.15 0 2.425.063t2.175.162q.425.05.7.35t.225.725t-.35.7t-.725.225h-.1l-.75 3.4q-.225 1.05-1.05 1.713T18.575 16H16.35q-1.05 0-1.85-.638t-1.05-1.637l-.675-2.675H11.25l-.675 2.675Q10.3 14.75 9.5 15.375T7.675 16zm-1-2.8q.075.35.35.575t.625.225H7.65q.35 0 .625-.213t.35-.537l.775-3.025q-.675-.125-1.525-.163t-1.55-.037q-.575 0-1.237.012T3.85 10.1zm10.925.05q.075.325.35.538t.625.212h2.225q.35 0 .625-.225t.35-.575l.65-3.125q-.5-.025-1.15-.037t-1.15-.013q-.75 0-1.662.038t-1.638.162z"></svg:path>`,
})
export class MaterialSymbolsEyeglasses2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEyeglassesRoundedIcon],svg[material-symbols-eyeglasses-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.85 15q.775 0 1.388-.45t.862-1.175l.375-1.15q.4-1.2-.2-2.212T7.55 9H4.025l.475 3.925q.125.875.788 1.475t1.562.6m10.3 0q.9 0 1.563-.6t.787-1.475L19.975 9h-3.5q-1.125 0-1.725 1.025t-.2 2.225l.35 1.125q.25.725.863 1.175t1.387.45m-10.3 2q-1.65 0-2.887-1.088t-1.438-2.737L2 9q-.425 0-.712-.288T1 8t.288-.712T2 7h5.55q1.1 0 2.013.538T11 9h2.025q.525-.925 1.438-1.463T16.475 7H22q.425 0 .713.288T23 8t-.288.713T22 9l-.525 4.175q-.2 1.65-1.437 2.738T17.15 17q-1.425 0-2.562-.812T13 14.025l-.375-1.125q-.05-.175-.1-.363t-.1-.537h-.85q-.05.3-.1.488t-.1.362L11 14q-.45 1.35-1.587 2.175T6.85 17"></svg:path>`,
})
export class MaterialSymbolsEyeglassesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaceDownOutlineRoundedIcon],svg[material-symbols-face-down-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 12q-.425 0-.712-.288T8.5 11t.288-.712T9.5 10t.713.288t.287.712t-.288.713T9.5 12m5 0q-.425 0-.712-.288T13.5 11t.288-.712T14.5 10t.713.288t.287.712t-.288.713T14.5 12m-4.1-7.775Q9.05 4.6 8.025 5.513T6.45 7.7q1.325-.4 2.35-1.312t1.6-2.163M11.825 4q.825 1.425 2.263 2.238T17.175 7q-.825-1.425-2.262-2.238T11.825 4M4 10q0-3.35 2.325-5.675T12 2t5.675 2.325T20 10q0 1.8-.712 3.313T17.35 15.95q-.4.35-.8.3t-.675-.325t-.288-.675t.338-.7q.95-.825 1.513-2T18 10q0-.275-.025-.525T17.9 8.95q-1.85.2-3.575-.413T11.3 6.6q-.95 1.3-2.337 2.15T6 9.875q-.05 1.4.525 2.613t1.55 2.062q.35.325.338.713t-.288.662t-.675.325t-.8-.3q-1.225-1.125-1.937-2.637T4 10m9 9.475l.9-.875q.3-.275.7-.288t.7.288t.3.713t-.3.712L12.7 22.6q-.3.3-.7.3t-.7-.3l-2.6-2.575q-.3-.3-.3-.712t.3-.713t.713-.287t.712.287l.875.875v-3.15q0-.425.288-.712t.712-.288t.713.288t.287.712zM11.825 4"></svg:path>`,
})
export class MaterialSymbolsFaceDownOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaceDownRoundedIcon],svg[material-symbols-face-down-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 12q-.425 0-.712-.288T8.5 11t.288-.712T9.5 10t.713.288t.287.712t-.288.713T9.5 12m5 0q-.425 0-.712-.288T13.5 11t.288-.712T14.5 10t.713.288t.287.712t-.288.713T14.5 12M4 10q0-3.35 2.325-5.675T12 2t5.675 2.325T20 10q0 1.8-.712 3.313T17.35 15.95q-.4.35-.8.3t-.675-.325t-.288-.675t.338-.7q.95-.825 1.513-2T18 10q0-.275-.025-.525T17.9 8.95q-1.85.2-3.575-.413T11.3 6.6q-.95 1.3-2.337 2.15T6 9.875q-.05 1.4.525 2.613t1.55 2.062q.35.325.338.713t-.288.662t-.675.325t-.8-.3q-1.225-1.125-1.937-2.637T4 10m9 9.475l.9-.875q.3-.275.7-.288t.7.288t.3.713t-.3.712L12.7 22.6q-.3.3-.7.3t-.7-.3l-2.6-2.575q-.3-.3-.3-.712t.3-.713t.713-.287t.712.287l.875.875v-3.15q0-.425.288-.712t.712-.288t.713.288t.287.712z"></svg:path>`,
})
export class MaterialSymbolsFaceDownRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaceLeftOutlineRoundedIcon],svg[material-symbols-face-left-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 12q-.425 0-.712-.288T7.5 11t.288-.712T8.5 10t.713.288T9.5 11t-.288.713T8.5 12m5 0q-.425 0-.712-.288T12.5 11t.288-.712T13.5 10t.713.288t.287.712t-.288.713T13.5 12m.1-7.775q.575 1.25 1.6 2.163T17.55 7.7Q17 6.425 15.975 5.512T13.6 4.225M12.175 4q-1.65-.05-3.088.763T6.826 7q1.65.05 3.088-.763T12.175 4M4 10q0-3.35 2.325-5.675T12 2t5.675 2.325T20 10q0 1.8-.712 3.313T17.35 15.95q-.4.35-.8.3t-.675-.325t-.288-.675t.338-.725q.975-.85 1.55-2.05t.525-2.6Q16.425 9.6 15.037 8.75T12.7 6.6q-1.3 1.325-3.025 1.938T6.1 8.95q-.05.275-.075.525T6 10q0 1.375.563 2.55t1.512 2q.35.3.338.7t-.288.675t-.675.325t-.8-.3q-1.225-1.125-1.937-2.637T4 10m7.825 10l.875.875q.275.3.288.713t-.288.712t-.7.3t-.7-.3l-2.6-2.6q-.3-.3-.3-.7t.3-.7l2.6-2.6q.3-.3.7-.3t.7.3t.288.713t-.288.712l-.875.875H15q.425 0 .713.288T16 19t-.288.713T15 20zm.35-16"></svg:path>`,
})
export class MaterialSymbolsFaceLeftOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaceLeftRoundedIcon],svg[material-symbols-face-left-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 12q-.425 0-.712-.288T7.5 11t.288-.712T8.5 10t.713.288T9.5 11t-.288.713T8.5 12m5 0q-.425 0-.712-.288T12.5 11t.288-.712T13.5 10t.713.288t.287.712t-.288.713T13.5 12M4 10q0-3.35 2.325-5.675T12 2t5.675 2.325T20 10q0 1.8-.712 3.313T17.35 15.95q-.4.35-.8.3t-.675-.325t-.288-.675t.338-.725q.975-.85 1.55-2.05t.525-2.6Q16.425 9.6 15.037 8.75T12.7 6.6q-1.3 1.325-3.025 1.938T6.1 8.95q-.05.275-.075.525T6 10q0 1.375.563 2.55t1.512 2q.35.3.338.7t-.288.675t-.675.325t-.8-.3q-1.225-1.125-1.937-2.637T4 10m7.825 10l.875.875q.275.3.288.713t-.288.712t-.7.3t-.7-.3l-2.6-2.6q-.3-.3-.3-.7t.3-.7l2.6-2.6q.3-.3.7-.3t.7.3t.288.713t-.288.712l-.875.875H15q.425 0 .713.288T16 19t-.288.713T15 20z"></svg:path>`,
})
export class MaterialSymbolsFaceLeftRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaceNodOutlineRoundedIcon],svg[material-symbols-face-nod-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20q-3.35 0-5.675-2.325T1 12t2.325-5.675T9 4t5.675 2.325T17 12t-2.325 5.675T9 20m0-2q2.5 0 4.25-1.75T15 12q0-.275-.025-.525t-.075-.525q-1.85.2-3.575-.413T8.3 8.6q-.95 1.3-2.337 2.15T3 11.875Q2.95 14.4 4.7 16.2T9 18m-2.5-4q-.425 0-.712-.288T5.5 13t.288-.712T6.5 12t.713.288T7.5 13t-.288.713T6.5 14m5 0q-.425 0-.712-.288T10.5 13t.288-.712T11.5 12t.713.288t.287.712t-.288.713T11.5 14M7.4 6.225Q6.05 6.6 5.025 7.513T3.45 9.7q1.325-.4 2.35-1.312t1.6-2.163M8.825 6q.825 1.425 2.263 2.238T14.175 9q-.825-1.425-2.262-2.238T8.825 6M18.5 19.9q1.45-1.65 2.225-3.675T21.5 12t-.775-4.225T18.5 4.1v2.15q0 .325-.213.537T17.75 7t-.537-.213T17 6.25V3q0-.425.288-.712T18 2h3.25q.325 0 .538.213T22 2.75t-.213.538t-.537.212h-1.275q1.475 1.8 2.25 3.975T23 12t-.775 4.525t-2.25 3.975h1.275q.325 0 .538.213t.212.537t-.213.538t-.537.212H18q-.425 0-.712-.288T17 21v-3.25q0-.325.213-.537T17.75 17t.538.213t.212.537z"></svg:path>`,
})
export class MaterialSymbolsFaceNodOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaceNodRoundedIcon],svg[material-symbols-face-nod-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20q-3.35 0-5.675-2.325T1 12t2.325-5.675T9 4t5.675 2.325T17 12t-2.325 5.675T9 20m0-2q2.5 0 4.25-1.75T15 12q0-.275-.025-.525t-.075-.525q-1.85.2-3.575-.413T8.3 8.6q-.95 1.3-2.337 2.15T3 11.875Q2.95 14.4 4.7 16.2T9 18m-2.5-4q-.425 0-.712-.288T5.5 13t.288-.712T6.5 12t.713.288T7.5 13t-.288.713T6.5 14m5 0q-.425 0-.712-.288T10.5 13t.288-.712T11.5 12t.713.288t.287.712t-.288.713T11.5 14m7 5.9q1.45-1.65 2.225-3.675T21.5 12t-.775-4.225T18.5 4.1v2.15q0 .325-.213.537T17.75 7t-.537-.213T17 6.25V3q0-.425.288-.712T18 2h3.25q.325 0 .538.213T22 2.75t-.213.538t-.537.212h-1.275q1.475 1.8 2.25 3.975T23 12t-.775 4.525t-2.25 3.975h1.275q.325 0 .538.213t.212.537t-.213.538t-.537.212H18q-.425 0-.712-.288T17 21v-3.25q0-.325.213-.537T17.75 17t.538.213t.212.537z"></svg:path>`,
})
export class MaterialSymbolsFaceNodRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaceRetouchingNaturalOutlineRoundedIcon],svg[material-symbols-face-retouching-natural-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.05 0-3.875-.788t-3.188-2.15q-1.362-1.362-2.15-3.187T2 12q0-2.15.825-3.988t2.212-3.175Q6.425 3.5 8.226 2.75T12 2q.975 0 2 .213t2 .637l-2.75 1.275q-.3-.05-.613-.088T12 4q-.35 0-.675.025t-.675.1q1.05 1.75 2.85 2.813T17.5 8h.35l.875 1.925q-2.25.275-4.7-.525T9.75 6.3q-.875 2.125-2.388 3.5T4 11.85q0 3.475 2.337 5.813T12 20q3.4 0 5.725-2.4T20 12q0-.35-.025-.613t-.075-.637l1.25-2.775q.45 1.05.65 2.025t.2 2q0 2-.763 3.813T19.137 19q-1.337 1.375-3.162 2.188T12 22ZM4.425 9.475Q5.7 8.75 6.65 7.6t1.425-2.575Q6.8 5.75 5.85 6.9T4.425 9.475ZM9 14.25q-.525 0-.888-.363T7.75 13q0-.525.363-.888T9 11.75q.525 0 .888.363t.362.887q0 .525-.363.888T9 14.25Zm6 0q-.525 0-.888-.363T13.75 13q0-.525.363-.888T15 11.75q.525 0 .888.363t.362.887q0 .525-.363.888T15 14.25Zm4.5-6.95q-.125 0-.25-.075T19.05 7l-.65-1.4l-1.4-.65q-.15-.075-.225-.2T16.7 4.5q0-.125.075-.25t.225-.2l1.4-.65l.65-1.4q.075-.15.2-.225t.25-.075q.125 0 .25.075t.2.225l.65 1.4l1.4.65q.15.075.225.2t.075.25q0 .125-.075.25t-.225.2l-1.4.65l-.65 1.4q-.075.15-.2.225t-.25.075Zm-3.6-.5ZM8.075 5.025Z"></svg:path>`,
})
export class MaterialSymbolsFaceRetouchingNaturalOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaceRetouchingNaturalRoundedIcon],svg[material-symbols-face-retouching-natural-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14.25q-.525 0-.888-.363T7.75 13q0-.525.363-.888T9 11.75q.525 0 .888.363t.362.887q0 .525-.363.888T9 14.25Zm6 0q-.525 0-.888-.363T13.75 13q0-.525.363-.888T15 11.75q.525 0 .888.363t.362.887q0 .525-.363.888T15 14.25Zm4.5-6.95q-.125 0-.25-.075T19.05 7l-.65-1.4l-1.4-.65q-.15-.075-.225-.2T16.7 4.5q0-.125.075-.25t.225-.2l1.4-.65l.65-1.4q.075-.15.2-.225t.25-.075q.125 0 .25.075t.2.225l.65 1.4l1.4.65q.15.075.225.2t.075.25q0 .125-.075.25t-.225.2l-1.4.65l-.65 1.4q-.075.15-.2.225t-.25.075ZM12 20q3.4 0 5.725-2.4T20 12q0-.575-.088-1.137t-.237-1.138q-2.8.65-5.45-.275T9.75 6.3q-.875 2.125-2.388 3.5T4 11.85q0 3.475 2.337 5.813T12 20Zm0 2q-2.05 0-3.875-.788t-3.188-2.15q-1.362-1.362-2.15-3.187T2 12q0-2.15.825-3.988t2.213-3.187q1.387-1.35 3.187-2.1T12 2q1.025 0 2.025.188t2.025.687q-.375.275-.613.675t-.237.95q0 .5.3 1.025t.875.8l.9.4l.4.9q.275.575.8.875t1.025.3q.5 0 .937-.25t.688-.6q.45 1.05.662 2.038T22 12q0 2-.763 3.813T19.137 19q-1.337 1.375-3.162 2.188T12 22Z"></svg:path>`,
})
export class MaterialSymbolsFaceRetouchingNaturalRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaceRetouchingOffOutlineRoundedIcon],svg[material-symbols-face-retouching-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.65 21.4l-1.5-1.5q-1.275.975-2.825 1.538T12.05 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2.05 12q0-1.725.563-3.287T4.15 5.875L2.65 4.4q-.275-.275-.275-.7T2.65 3t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275m2.4-9.4q0 .925-.15 1.8t-.475 1.7q-.075.2-.212.338t-.325.212t-.388.063t-.4-.088q-.375-.175-.512-.562t-.013-.788q.225-.65.35-1.312T20.05 12q0-.6-.075-1.162T19.7 9.75q-.525.125-1.05.188t-1.1.062q-1.4 0-2.662-.363T12.5 8.6L8.4 4.5q-.475-.475-.35-1.112t.725-.863q.775-.275 1.588-.4T12.05 2q2.075 0 3.888.788t3.174 2.137t2.15 3.175t.788 3.9M4.475 9.475q.525-.3.975-.663t.875-.787l-.75-.725q-.35.5-.625 1.038t-.475 1.137m6.175-5.35q1.05 1.75 2.85 2.812T17.5 8q.35 0 .675-.038t.675-.087Q17.8 6.125 16 5.063T12 4q-.35 0-.675.038t-.675.087M9.05 14.25q-.525 0-.888-.363T7.8 13t.363-.888t.887-.362t.888.363t.362.887t-.363.888t-.887.362m3 5.75q1.325 0 2.5-.387T16.7 18.5L7.725 9.475q-.75.8-1.687 1.4t-1.988.975V12q0 3.325 2.338 5.663T12.05 20"></svg:path>`,
})
export class MaterialSymbolsFaceRetouchingOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaceRetouchingOffRoundedIcon],svg[material-symbols-face-retouching-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.65 21.4l-1.5-1.5q-1.275.975-2.825 1.538T12.05 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2.05 12q0-1.725.563-3.287T4.15 5.875L2.65 4.4q-.275-.275-.275-.7T2.65 3t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275m2.4-9.4q0 1.325-.262 2.337t-.363 1.163q-.1.175-.25.313t-.325.212t-.363.075t-.387-.075q-.375-.175-.537-.575t.012-.775q.125-.275.3-1.025T20.05 12q0-.6-.075-1.163T19.7 9.75q-.525.125-1.05.188t-1.1.062q-1.4 0-2.662-.363T12.5 8.6L8.4 4.5q-.475-.475-.35-1.112t.725-.863q.775-.275 1.588-.4T12.05 2q2.075 0 3.888.788t3.174 2.137t2.15 3.175t.788 3.9m-13 2.25q-.525 0-.888-.363T7.8 13t.363-.888t.887-.362t.888.363t.362.887t-.363.888t-.887.362m3 5.75q1.325 0 2.5-.387T16.7 18.5L7.725 9.475q-.75.8-1.687 1.4t-1.988.975V12q0 3.325 2.338 5.663T12.05 20"></svg:path>`,
})
export class MaterialSymbolsFaceRetouchingOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaceRightOutlineRoundedIcon],svg[material-symbols-face-right-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 12q-.425 0-.712-.288T14.5 11t.288-.712T15.5 10t.713.288t.287.712t-.288.713T15.5 12m-5 0q-.425 0-.712-.288T9.5 11t.288-.712T10.5 10t.713.288t.287.712t-.288.713T10.5 12m-.1-7.775Q9.05 4.6 8.025 5.513T6.45 7.7q1.325-.4 2.35-1.312t1.6-2.163M11.825 4q.825 1.425 2.263 2.238T17.175 7q-.825-1.425-2.262-2.238T11.825 4M20 10q0 1.8-.712 3.313T17.35 15.95q-.4.35-.8.3t-.675-.325t-.288-.675t.338-.7q.95-.825 1.513-2T18 10q0-.275-.025-.525T17.9 8.95q-1.85.2-3.575-.413T11.3 6.6q-.95 1.3-2.337 2.15T6 9.875q-.05 1.4.525 2.6t1.55 2.05q.35.325.338.725t-.288.675t-.675.325t-.8-.3q-1.225-1.125-1.937-2.637T4 10q0-3.35 2.325-5.675T12 2t5.675 2.325T20 10m-7.825 10H9q-.425 0-.712-.288T8 19t.288-.712T9 18h3.175l-.875-.875q-.275-.3-.288-.712t.288-.713t.7-.3t.7.3l2.6 2.6q.3.3.3.7t-.3.7l-2.6 2.6q-.3.3-.7.3t-.7-.3t-.287-.712t.287-.713zm-.35-16"></svg:path>`,
})
export class MaterialSymbolsFaceRightOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaceRightRoundedIcon],svg[material-symbols-face-right-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 12q-.425 0-.712-.288T14.5 11t.288-.712T15.5 10t.713.288t.287.712t-.288.713T15.5 12m-5 0q-.425 0-.712-.288T9.5 11t.288-.712T10.5 10t.713.288t.287.712t-.288.713T10.5 12m9.5-2q0 1.8-.712 3.313T17.35 15.95q-.4.35-.8.3t-.675-.325t-.288-.675t.338-.7q.95-.825 1.513-2T18 10q0-.275-.025-.525T17.9 8.95q-1.85.2-3.575-.413T11.3 6.6q-.95 1.3-2.337 2.15T6 9.875q-.05 1.4.525 2.6t1.55 2.05q.35.325.338.725t-.288.675t-.675.325t-.8-.3q-1.225-1.125-1.937-2.637T4 10q0-3.35 2.325-5.675T12 2t5.675 2.325T20 10m-7.825 10H9q-.425 0-.712-.288T8 19t.288-.712T9 18h3.175l-.875-.875q-.275-.3-.288-.712t.288-.713t.7-.3t.7.3l2.6 2.6q.3.3.3.7t-.3.7l-2.6 2.6q-.3.3-.7.3t-.7-.3t-.287-.712t.287-.713z"></svg:path>`,
})
export class MaterialSymbolsFaceRightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaceShakeOutlineRoundedIcon],svg[material-symbols-face-shake-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23q-2.35 0-4.525-.775T3.5 19.975v1.275q0 .325-.213.538T2.75 22t-.537-.213T2 21.25V18q0-.425.288-.712T3 17h3.25q.325 0 .538.213T7 17.75t-.213.538t-.537.212H4.1q1.65 1.45 3.675 2.225T12 21.5t4.225-.775T19.9 18.5h-2.15q-.325 0-.537-.213T17 17.75t.213-.537t.537-.213H21q.425 0 .713.288T22 18v3.25q0 .325-.213.538T21.25 22t-.537-.213t-.213-.537v-1.275q-1.8 1.475-3.975 2.25T12 23m0-6q-3.35 0-5.675-2.325T4 9t2.325-5.675T12 1t5.675 2.325T20 9t-2.325 5.675T12 17m0-2q2.5 0 4.25-1.75T18 9q0-.275-.025-.525T17.9 7.95q-1.85.2-3.575-.413T11.3 5.6q-.95 1.3-2.337 2.15T6 8.875Q5.95 11.4 7.7 13.2T12 15m-2.5-4q-.425 0-.712-.288T8.5 10t.288-.712T9.5 9t.713.288t.287.712t-.288.713T9.5 11m5 0q-.425 0-.712-.288T13.5 10t.288-.712T14.5 9t.713.288t.287.712t-.288.713T14.5 11m-4.1-7.775Q9.05 3.6 8.025 4.512T6.45 6.7q1.325-.4 2.35-1.312t1.6-2.163M11.825 3q.825 1.425 2.263 2.238T17.175 6q-.825-1.425-2.262-2.238T11.825 3m0 0"></svg:path>`,
})
export class MaterialSymbolsFaceShakeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaceShakeRoundedIcon],svg[material-symbols-face-shake-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23q-2.35 0-4.525-.775T3.5 19.975v1.275q0 .325-.213.538T2.75 22t-.537-.213T2 21.25V18q0-.425.288-.712T3 17h3.25q.325 0 .538.213T7 17.75t-.213.538t-.537.212H4.1q1.65 1.45 3.675 2.225T12 21.5t4.225-.775T19.9 18.5h-2.15q-.325 0-.537-.213T17 17.75t.213-.537t.537-.213H21q.425 0 .713.288T22 18v3.25q0 .325-.213.538T21.25 22t-.537-.213t-.213-.537v-1.275q-1.8 1.475-3.975 2.25T12 23m0-6q-3.35 0-5.675-2.325T4 9t2.325-5.675T12 1t5.675 2.325T20 9t-2.325 5.675T12 17m0-2q2.5 0 4.25-1.75T18 9q0-.275-.025-.525T17.9 7.95q-1.85.2-3.575-.413T11.3 5.6q-.95 1.3-2.337 2.15T6 8.875Q5.95 11.4 7.7 13.2T12 15m-2.5-4q-.425 0-.712-.288T8.5 10t.288-.712T9.5 9t.713.288t.287.712t-.288.713T9.5 11m5 0q-.425 0-.712-.288T13.5 10t.288-.712T14.5 9t.713.288t.287.712t-.288.713T14.5 11"></svg:path>`,
})
export class MaterialSymbolsFaceShakeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaceUpOutlineRoundedIcon],svg[material-symbols-face-up-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 12q-.425 0-.712-.288T8.5 11t.288-.712T9.5 10t.713.288t.287.712t-.288.713T9.5 12m5 0q-.425 0-.712-.288T13.5 11t.288-.712T14.5 10t.713.288t.287.712t-.288.713T14.5 12m-4.1-7.775Q9.05 4.6 8.025 5.513T6.45 7.7q1.325-.4 2.35-1.312t1.6-2.163M11.825 4q.825 1.425 2.263 2.238T17.175 7q-.825-1.425-2.262-2.238T11.825 4M4 10q0-3.35 2.325-5.675T12 2t5.675 2.325T20 10q0 1.8-.712 3.313T17.35 15.95q-.4.35-.8.3t-.675-.325t-.288-.675t.338-.7q.95-.825 1.513-2T18 10q0-.275-.025-.525T17.9 8.95q-1.85.2-3.575-.413T11.3 6.6q-.95 1.3-2.337 2.15T6 9.875q-.05 1.4.525 2.613t1.55 2.062q.35.325.338.713t-.288.662t-.675.325t-.8-.3q-1.225-1.125-1.937-2.637T4 10m7 8.825l-.875.875q-.3.275-.712.288T8.7 19.7t-.3-.7t.3-.7l2.6-2.6q.3-.3.7-.3t.7.3l2.6 2.6q.3.3.3.7t-.3.7t-.713.288t-.712-.288L13 18.825V22q0 .425-.288.713T12 23t-.712-.288T11 22zM11.825 4"></svg:path>`,
})
export class MaterialSymbolsFaceUpOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaceUpRoundedIcon],svg[material-symbols-face-up-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 12q-.425 0-.712-.288T8.5 11t.288-.712T9.5 10t.713.288t.287.712t-.288.713T9.5 12m5 0q-.425 0-.712-.288T13.5 11t.288-.712T14.5 10t.713.288t.287.712t-.288.713T14.5 12M4 10q0-3.35 2.325-5.675T12 2t5.675 2.325T20 10q0 1.8-.712 3.313T17.35 15.95q-.4.35-.8.3t-.675-.325t-.288-.675t.338-.7q.95-.825 1.513-2T18 10q0-.275-.025-.525T17.9 8.95q-1.85.2-3.575-.413T11.3 6.6q-.95 1.3-2.337 2.15T6 9.875q-.05 1.4.525 2.613t1.55 2.062q.35.325.338.713t-.288.662t-.675.325t-.8-.3q-1.225-1.125-1.937-2.637T4 10m7 8.825l-.875.875q-.3.275-.712.288T8.7 19.7t-.3-.7t.3-.7l2.6-2.6q.3-.3.7-.3t.7.3l2.6 2.6q.3.3.3.7t-.3.7t-.713.288t-.712-.288L13 18.825V22q0 .425-.288.713T12 23t-.712-.288T11 22z"></svg:path>`,
})
export class MaterialSymbolsFaceUpRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFactCheckOutlineRoundedIcon],svg[material-symbols-fact-check-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm0-2h16V5H4zm5-2q.425 0 .713-.288T10 16t-.288-.712T9 15H6q-.425 0-.712.288T5 16t.288.713T6 17zm5.55-4.825l-.725-.725q-.3-.3-.7-.287t-.7.312q-.275.3-.288.7t.288.7L13.85 14.3q.3.3.7.3t.7-.3l3.55-3.55q.3-.3.3-.7t-.3-.7t-.712-.3t-.713.3zM9 13q.425 0 .713-.288T10 12t-.288-.712T9 11H6q-.425 0-.712.288T5 12t.288.713T6 13zm0-4q.425 0 .713-.288T10 8t-.288-.712T9 7H6q-.425 0-.712.288T5 8t.288.713T6 9zM4 19V5z"></svg:path>`,
})
export class MaterialSymbolsFactCheckOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFactCheckRoundedIcon],svg[material-symbols-fact-check-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm5-4q.425 0 .713-.288T10 16t-.288-.712T9 15H6q-.425 0-.712.288T5 16t.288.713T6 17zm5.55-4.825l-.725-.725q-.3-.3-.7-.287t-.7.312q-.275.3-.288.7t.288.7L13.85 14.3q.3.3.7.3t.7-.3l3.55-3.55q.3-.3.3-.7t-.3-.7t-.712-.3t-.713.3zM9 13q.425 0 .713-.288T10 12t-.288-.712T9 11H6q-.425 0-.712.288T5 12t.288.713T6 13zm0-4q.425 0 .713-.288T10 8t-.288-.712T9 7H6q-.425 0-.712.288T5 8t.288.713T6 9z"></svg:path>`,
})
export class MaterialSymbolsFactCheckRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFactoryOutlineRoundedIcon],svg[material-symbols-factory-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22q-.825 0-1.412-.587T2 20v-8.7q0-.6.325-1.1t.9-.75L7.6 7.6q.5-.2.95.075T9 8.5V9l3.625-1.45q.5-.2.937.1t.438.825V10h8v10q0 .825-.587 1.413T20 22zm0-2h16v-8h-8V9.95l-5 2V10l-3 1.325zm7-2h2v-4h-2zm-4 0h2v-4H7zm8 0h2v-4h-2zm7-8h-5l.9-7.125q.05-.375.325-.625t.65-.25h1.25q.375 0 .65.25t.325.625zM4 20h16z"></svg:path>`,
})
export class MaterialSymbolsFactoryOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFactoryRoundedIcon],svg[material-symbols-factory-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22q-.825 0-1.412-.587T2 20v-8.7q0-.6.325-1.1t.9-.75L7.6 7.6q.5-.2.95.075T9 8.5V9l3.625-1.45q.5-.2.937.1t.438.825V10h8v10q0 .825-.587 1.413T20 22zm7-4h2v-4h-2zm-4 0h2v-4H7zm8 0h2v-4h-2zm6.8-9.5h-4.625l.725-5.625q.05-.375.338-.625T18.9 2h1.225q.375 0 .65.25t.325.625z"></svg:path>`,
})
export class MaterialSymbolsFactoryRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFallingRoundedIcon],svg[material-symbols-falling-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.3 17.8l-3.025-2.25q-.275-.2-.475-.513t-.275-.662L7.4 9.4l-2.2 1.9l.6 2.8q.1.425-.137.775T5 15.3t-.775-.15t-.425-.65l-.575-2.775q-.125-.525.05-1.037t.575-.863l3.6-3.2q.575-.5 1.362-.413t1.513.388q.8.35 1.663.5t1.737.025q.6-.1 1.15-.35t1.05-.6q.35-.25.763-.212t.687.362t.213.738t-.413.662q-.575.4-1.175.713t-1.275.512q-.825.225-1.662.238T11.4 9l.7 3.1l2.875-.55q.4-.075.788.012t.737.338l3.675 2.6q.35.25.413.663t-.213.762q-.25.325-.638.388T19 16.15l-3.5-2.45l-3.6.7l1.7 1.25q.45.35.663.875t.112 1.1l-.7 3.85q-.075.425-.425.663t-.775.162t-.65-.425t-.15-.775zM8 5.5q-.825 0-1.412-.587T6 3.5t.588-1.412T8 1.5t1.413.588T10 3.5t-.587 1.413T8 5.5"></svg:path>`,
})
export class MaterialSymbolsFallingRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFamiliarFaceAndZoneOutlineRoundedIcon],svg[material-symbols-familiar-face-and-zone-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4t5.675 2.325T20 12t-2.325 5.675T12 20m0-2q2.5 0 4.25-1.75T18 12q0-.425-.062-.837t-.188-.813q-.375.075-.75.113t-.75.037q-1.575 0-3-.6T10.7 8.15q-.7 1.425-1.925 2.475T6 12.15q.075 2.45 1.812 4.15T12 18M6.4 9.85q1.1-.575 1.675-1.337T9.2 6.7q-.95.5-1.675 1.313T6.4 9.85M9.5 14q-.425 0-.712-.287T8.5 13t.288-.712T9.5 12t.713.288t.287.712t-.288.713T9.5 14m6.75-5.5h.3q.15 0 .3-.025q-.825-1.125-2.087-1.8T12 6h-.3q-.15 0-.275.025q.975 1.125 2.062 1.8t2.763.675M14.5 14q-.425 0-.712-.288T13.5 13t.288-.712T14.5 12t.713.288t.287.712t-.288.713T14.5 14M1 5V3q0-.825.588-1.412T3 1h2q.425 0 .713.288T6 2t-.288.713T5 3H3v2q0 .425-.288.713T2 6t-.712-.288T1 5m4 18H3q-.825 0-1.412-.587T1 21v-2q0-.425.288-.712T2 18t.713.288T3 19v2h2q.425 0 .713.288T6 22t-.288.713T5 23m16 0h-2q-.425 0-.712-.288T18 22t.288-.712T19 21h2v-3h2v3q0 .825-.587 1.413T21 23m0-18V3h-2q-.425 0-.712-.288T18 2t.288-.712T19 1h2q.825 0 1.413.588T23 3v2q0 .425-.288.713T22 6t-.712-.288T21 5M9.2 6.7"></svg:path>`,
})
export class MaterialSymbolsFamiliarFaceAndZoneOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFamiliarFaceAndZoneRoundedIcon],svg[material-symbols-familiar-face-and-zone-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4t5.675 2.325T20 12t-2.325 5.675T12 20m0-2q2.5 0 4.25-1.75T18 12q0-.425-.062-.837t-.188-.813q-.375.075-.75.113t-.75.037q-1.575 0-3-.6T10.7 8.15q-.7 1.425-1.925 2.475T6 12.15q.075 2.45 1.812 4.15T12 18m-2.5-4q-.425 0-.712-.288T8.5 13t.288-.712T9.5 12t.713.288t.287.712t-.288.713T9.5 14m5 0q-.425 0-.712-.288T13.5 13t.288-.712T14.5 12t.713.288t.287.712t-.288.713T14.5 14M1 5V3q0-.825.588-1.412T3 1h2q.425 0 .713.288T6 2t-.288.713T5 3H3v2q0 .425-.288.713T2 6t-.712-.288T1 5m4 18H3q-.825 0-1.412-.587T1 21v-2q0-.425.288-.712T2 18t.713.288T3 19v2h2q.425 0 .713.288T6 22t-.288.713T5 23m16 0h-2q-.425 0-.712-.288T18 22t.288-.712T19 21h2v-3h2v3q0 .825-.587 1.413T21 23m0-18V3h-2q-.425 0-.712-.288T18 2t.288-.712T19 1h2q.825 0 1.413.588T23 3v2q0 .425-.288.713T22 6t-.712-.288T21 5"></svg:path>`,
})
export class MaterialSymbolsFamiliarFaceAndZoneRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFamilyHistoryOutlineRoundedIcon],svg[material-symbols-family-history-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22.5q-1.575 0-2.662-1.088T8.25 18.75q0-1.3.775-2.287T11 15.124V13H7q-.825 0-1.412-.587T5 11V9H3.5q-.425 0-.712-.288T2.5 8V3q0-.425.288-.712T3.5 2h5q.425 0 .713.288T9.5 3v5q0 .425-.288.713T8.5 9H7v2h10V8.875q-1.2-.35-1.975-1.338T14.25 5.25q0-1.575 1.088-2.662T18 1.5t2.663 1.088T21.75 5.25q0 1.3-.775 2.288T19 8.875V11q0 .825-.587 1.413T17 13h-4v2.125q1.2.35 1.975 1.338t.775 2.287q0 1.575-1.088 2.663T12 22.5M18 7q.725 0 1.238-.513t.512-1.237t-.513-1.237T18 3.5t-1.237.513t-.513 1.237t.513 1.238T18 7M4.5 7h3V4h-3zM12 20.5q.725 0 1.238-.513t.512-1.237t-.513-1.237T12 17t-1.237.513t-.513 1.237t.513 1.238T12 20.5m0-1.75"></svg:path>`,
})
export class MaterialSymbolsFamilyHistoryOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFamilyHistoryRoundedIcon],svg[material-symbols-family-history-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22.5q-1.575 0-2.662-1.088T8.25 18.75q0-1.3.775-2.287T11 15.124V13H7q-.825 0-1.412-.587T5 11V9H3.5q-.425 0-.712-.288T2.5 8V3q0-.425.288-.712T3.5 2h5q.425 0 .713.288T9.5 3v5q0 .425-.288.713T8.5 9H7v2h10V8.875q-1.2-.35-1.975-1.338T14.25 5.25q0-1.575 1.088-2.662T18 1.5t2.663 1.088T21.75 5.25q0 1.3-.775 2.288T19 8.875V11q0 .825-.587 1.413T17 13h-4v2.125q1.2.35 1.975 1.338t.775 2.287q0 1.575-1.088 2.663T12 22.5"></svg:path>`,
})
export class MaterialSymbolsFamilyHistoryRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFamilyHomeOutlineRoundedIcon],svg[material-symbols-family-home-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.65q.2 0 .363-.062t.312-.188q.8-.725 1.525-1.425t1.263-1.375t.862-1.312t.325-1.238q0-1.1-.75-1.825T14.1 9.5q-.65 0-1.187.263T12 10.45q-.375-.425-.937-.687T9.9 9.5q-1.05 0-1.8.725t-.75 1.825q0 .6.325 1.238t.863 1.312T9.8 15.975t1.525 1.425q.15.125.313.188t.362.062M6 21q-.825 0-1.412-.587T4 19v-7.375L3 12.4q-.35.25-.75.2t-.65-.4t-.187-.75t.387-.65l8.975-6.875q.275-.2.588-.3t.637-.1t.638.1t.587.3l9 6.875q.325.25.375.65t-.2.75q-.25.325-.65.375t-.725-.2L20 11.625V19q0 .825-.587 1.413T18 21zm0-2h12v-8.9l-6-4.575L6 10.1zm0 0h12z"></svg:path>`,
})
export class MaterialSymbolsFamilyHomeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFamilyHomeRoundedIcon],svg[material-symbols-family-home-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.65q.2 0 .363-.062t.312-.188q.8-.725 1.525-1.425t1.263-1.375t.862-1.312t.325-1.238q0-1.1-.75-1.825T14.1 9.5q-.65 0-1.187.263T12 10.45q-.375-.425-.937-.687T9.9 9.5q-1.05 0-1.8.725t-.75 1.825q0 .6.325 1.238t.863 1.312T9.8 15.975t1.525 1.425q.15.125.313.188t.362.062M6 21q-.825 0-1.412-.587T4 19v-7.375L3 12.4q-.35.25-.75.2t-.65-.4t-.187-.75t.387-.65l8.975-6.875q.275-.2.588-.3t.637-.1t.638.1t.587.3l9 6.875q.325.25.375.65t-.2.75q-.25.325-.65.375t-.725-.2L20 11.625V19q0 .825-.587 1.413T18 21z"></svg:path>`,
})
export class MaterialSymbolsFamilyHomeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFamilyLinkOutlineRoundedIcon],svg[material-symbols-family-link-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.5 18.375l6.5-9L12.5 3L6.025 9.4zM9.75 23q-1.275 0-2.262-.763T6.15 20.276Q6 19.7 5.525 19.35T4.45 19q-.4 0-.75.15t-.6.45q-.125.175-.312.275t-.438.1q-.425 0-.712-.288t-.288-.712q0-.2.05-.35t.175-.275q.525-.65 1.288-1T4.45 17q1.275 0 2.275.75t1.35 1.975q.15.575.625.925t1.05.35q.475 0 .85-.25t.65-.625l.025-.05l-6.9-9.525q-.2-.275-.288-.575T4 9.375q0-.4.15-.762t.45-.663l6.5-6.375q.275-.275.65-.425T12.5 1t.75.15t.65.425l6.5 6.375q.3.3.45.663t.15.762q0 .3-.088.6t-.287.575L12.5 21.8q-.45.625-1.2.913T9.75 23"></svg:path>`,
})
export class MaterialSymbolsFamilyLinkOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFamilyLinkRoundedIcon],svg[material-symbols-family-link-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 23q-1.275 0-2.262-.763T6.15 20.276Q6 19.7 5.525 19.35T4.45 19q-.4 0-.75.15t-.6.45q-.125.175-.312.275t-.438.1q-.425 0-.712-.288t-.288-.712q0-.2.05-.35t.175-.275q.525-.65 1.288-1T4.45 17q1.275 0 2.275.75t1.35 1.975q.15.575.625.925t1.05.35q.475 0 .85-.25t.65-.625l.025-.05l-6.9-9.525q-.2-.275-.288-.575T4 9.375q0-.4.15-.762t.45-.663l6.5-6.375q.275-.275.65-.425T12.5 1t.75.15t.65.425l6.5 6.375q.3.3.45.663t.15.762q0 .3-.088.6t-.287.575L12.5 21.8q-.45.625-1.2.913T9.75 23"></svg:path>`,
})
export class MaterialSymbolsFamilyLinkRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFamilyRestroomRoundedIcon],svg[material-symbols-family-restroom-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6q-.825 0-1.412-.587T16 4t.588-1.412T18 2t1.413.588T20 4t-.587 1.413T18 6m-1 15v-7q0-1-.513-1.8t-1.312-1.25l.875-2.575q.2-.625.738-1T18 7t1.213.375t.737 1l2.1 6.3q.175.5-.137.913T21.1 16H20v5q0 .425-.288.713T19 22h-1q-.425 0-.712-.288T17 21m-4.5-9.5q-.625 0-1.062-.437T11 10t.438-1.062T12.5 8.5t1.063.438T14 10t-.437 1.063t-1.063.437M5.5 6q-.825 0-1.412-.587T3.5 4t.588-1.412T5.5 2t1.413.588T7.5 4t-.587 1.413T5.5 6m-2 15v-6H3q-.425 0-.712-.288T2 14V9q0-.825.588-1.412T4 7h3q.825 0 1.413.588T9 9v5q0 .425-.288.713T8 15h-.5v6q0 .425-.288.713T6.5 22h-2q-.425 0-.712-.288T3.5 21m7.5 0v-3q-.425 0-.712-.288T10 17v-3q0-.625.438-1.062T11.5 12.5h2q.625 0 1.063.438T15 14v3q0 .425-.288.713T14 18v3q0 .425-.288.713T13 22h-1q-.425 0-.712-.288T11 21"></svg:path>`,
})
export class MaterialSymbolsFamilyRestroomRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFanFocusRoundedIcon],svg[material-symbols-fan-focus-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 18.175l.375-.4q.3-.275.713-.275t.712.3t.3.7t-.3.7l-2.1 2.1q-.3.3-.7.3t-.7-.3l-2.1-2.1q-.3-.3-.3-.7t.3-.7t.713-.287t.712.287l.375.375V13q0-.425.288-.712T12 12t.713.288T13 13zm-6-4l.375-.4q.3-.275.713-.275t.712.3t.3.7t-.3.7l-2.1 2.1q-.3.3-.7.3t-.7-.3l-2.1-2.1q-.3-.3-.3-.7t.3-.7t.713-.287t.712.287l.375.375V9q0-.425.288-.712T6 8t.713.288T7 9zm12 0l.375-.4q.3-.275.713-.275t.712.3t.3.7t-.3.7l-2.1 2.1q-.3.3-.7.3t-.7-.3l-2.1-2.1q-.3-.3-.3-.7t.3-.7t.712-.287t.713.287l.375.375V9q0-.425.288-.712T18 8t.713.288T19 9zM2 5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v5q0 .425-.288.713T21 11t-.712-.288T20 10V5H4v5q0 .425-.288.713T3 11t-.712-.288T2 10z"></svg:path>`,
})
export class MaterialSymbolsFanFocusRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFanIndirectRoundedIcon],svg[material-symbols-fan-indirect-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 18.175l.375-.375q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L12.7 21.3q-.3.3-.7.3t-.7-.3l-2.1-2.1q-.275-.275-.287-.687T9.2 17.8q.275-.275.688-.288t.712.263l.4.4V13q0-.425.288-.712T12 12t.713.288T13 13zM4.825 16.5l.4.4q.275.275.275.688t-.3.712q-.275.275-.7.275t-.7-.275L1 15.5l2.8-2.8q.3-.3.7-.288t.7.313q.275.3.288.7t-.288.7l-.375.375H7V10q0-.425.288-.712T8 9t.713.288T9 10v4.5q0 .825-.587 1.413T7 16.5zm14.35 0H17q-.825 0-1.412-.587T15 14.5V10q0-.425.288-.712T16 9t.713.288T17 10v4.5h2.175l-.375-.375q-.3-.275-.3-.7t.3-.725t.713-.3t.712.3l2.075 2.1q.3.3.3.7t-.3.7l-2.1 2.1q-.275.275-.688.275T18.8 18.3q-.3-.3-.3-.712t.3-.713zM2 5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v4.7q0 .425-.288.713T21 10.7t-.712-.287T20 9.7V5H4v4.7q0 .425-.288.713T3 10.7t-.712-.287T2 9.7z"></svg:path>`,
})
export class MaterialSymbolsFanIndirectRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFarsightDigitalOutlineRoundedIcon],svg[material-symbols-farsight-digital-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.325 8.05v3q0 .15.1.25t.25.1t.25-.1t.1-.25v-3.7q0-.125-.062-.187t-.188-.063H10.6q-.05 0-.15.05l-.925.675q-.125.075-.138.188t.063.237t.2.15t.25-.05zm2.95-.4q.3 0 .5.163t.2.412q0 .275-.125.525t-.35.475l-1.475 1.45q-.025.025-.075.175v.225q0 .125.1.225t.225.1h2.175q.125 0 .213-.1t.087-.225t-.087-.212t-.213-.088h-1.6v-.025l1.1-1.1q.4-.4.563-.725t.162-.7q0-.5-.4-.862T13.3 7q-.4 0-.725.175t-.525.5q-.075.125 0 .25t.2.175t.238.013t.187-.163q.125-.15.275-.225t.325-.075M10.2 17q.65 0 1.075-.363t.425-.937q0-.35-.2-.638t-.525-.412v-.05q.275-.125.425-.387t.15-.563q0-.5-.387-.825t-.988-.325q-.35 0-.675.175t-.525.45q-.075.125 0 .238t.2.162t.237.025t.188-.15q.05-.075.55-.275q.3 0 .488.15t.187.425t-.212.45t-.513.175q-.125 0-.225.088t-.1.212t.088.225t.212.1h.075q.35 0 .588.2t.237.5q0 .275-.225.475t-.55.2q-.2 0-.387-.1t-.313-.3q-.075-.125-.187-.162t-.238.012t-.2.188t0 .262q.2.35.55.563T10.2 17m3.55 0q.6 0 1.05-.437t.45-1.013t-.387-.987t-.913-.413q-.125 0-.45.1h-.025l.775-1.1q.075-.125.063-.262t-.138-.213t-.25-.05t-.2.15l-.9 1.325q-.35.5-.462.8t-.113.625q0 .625.425 1.05T13.75 17m0-.65q-.35 0-.575-.225t-.225-.575q0-.2.1-.387t.3-.313q.075-.05.4-.1q.325 0 .563.238t.237.587q0 .325-.225.55t-.575.225M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.325 0 5.663-2.337T20 12t-2.337-5.663T12 4T6.337 6.338T4 12t2.338 5.663T12 20m0-8"></svg:path>`,
})
export class MaterialSymbolsFarsightDigitalOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFarsightDigitalRoundedIcon],svg[material-symbols-farsight-digital-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.325 8.05v3q0 .15.1.25t.25.1t.25-.1t.1-.25v-3.7q0-.125-.062-.187t-.188-.063H10.6q-.05 0-.15.05l-.925.675q-.125.075-.138.188t.063.237t.2.15t.25-.05zm2.95-.4q.3 0 .5.163t.2.412q0 .275-.125.525t-.35.475l-1.475 1.45q-.025.025-.075.175v.225q0 .125.1.225t.225.1h2.15q.125 0 .213-.1t.087-.225t-.087-.212t-.213-.088H12.85v-.025l1.1-1.1q.4-.4.563-.725t.162-.7q0-.5-.4-.862T13.3 7q-.425 0-.75.188t-.5.512q-.05.125 0 .238t.175.162t.25.013t.2-.163q.125-.15.275-.225t.325-.075M10.2 17q.65 0 1.075-.363t.425-.937q0-.35-.2-.638t-.525-.412v-.05q.275-.125.425-.387t.15-.563q0-.5-.387-.825t-.988-.325q-.35 0-.663.175t-.512.45q-.075.125-.012.238t.187.162t.238.025t.187-.15q.05-.075.55-.275q.3 0 .488.15t.187.425t-.212.45t-.513.175q-.125 0-.225.088t-.1.212t.088.225t.212.1h.075q.35 0 .588.2t.237.5q0 .275-.225.475t-.55.2q-.2 0-.387-.1t-.313-.3q-.075-.125-.187-.162t-.238.012t-.2.188t0 .262q.2.35.55.563T10.2 17m3.55 0q.6 0 1.05-.437t.45-1.013t-.387-.987t-.913-.413q-.125 0-.45.1h-.025l.775-1.1q.075-.125.063-.262t-.138-.213t-.25-.05t-.2.15l-.9 1.325q-.35.5-.462.8t-.113.625q0 .625.425 1.05T13.75 17m0-.65q-.35 0-.575-.225t-.225-.575q0-.2.1-.387t.3-.313q.075-.05.4-.1q.325 0 .563.238t.237.587q0 .325-.225.55t-.575.225M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsFarsightDigitalRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFastForwardOutlineRoundedIcon],svg[material-symbols-fast-forward-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 16.125v-8.25q0-.45.3-.725t.7-.275q.125 0 .275.025t.275.125l6.2 4.15q.225.15.338.363T10.7 12t-.112.463t-.338.362l-6.2 4.15q-.125.1-.275.125t-.275.025q-.4 0-.7-.275t-.3-.725m10 0v-8.25q0-.45.3-.725t.7-.275q.125 0 .275.025t.275.125l6.2 4.15q.225.15.338.363T20.7 12t-.112.463t-.338.362l-6.2 4.15q-.125.1-.275.125t-.275.025q-.4 0-.7-.275t-.3-.725m-8-1.875L7.9 12L4.5 9.75zm10 0L17.9 12l-3.4-2.25z"></svg:path>`,
})
export class MaterialSymbolsFastForwardOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFastForwardRoundedIcon],svg[material-symbols-fast-forward-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 16.125v-8.25q0-.45.3-.725t.7-.275q.125 0 .275.025t.275.125l6.2 4.15q.225.15.338.363T10.7 12t-.112.463t-.338.362l-6.2 4.15q-.125.1-.275.125t-.275.025q-.4 0-.7-.275t-.3-.725m10 0v-8.25q0-.45.3-.725t.7-.275q.125 0 .275.025t.275.125l6.2 4.15q.225.15.338.363T20.7 12t-.112.463t-.338.362l-6.2 4.15q-.125.1-.275.125t-.275.025q-.4 0-.7-.275t-.3-.725"></svg:path>`,
})
export class MaterialSymbolsFastForwardRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFastRewindOutlineRoundedIcon],svg[material-symbols-fast-rewind-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.95 16.975l-6.2-4.15q-.225-.15-.337-.362T13.3 12t.113-.462t.337-.363l6.2-4.15q.125-.1.275-.125t.275-.025q.4 0 .7.275t.3.725v8.25q0 .45-.3.725t-.7.275q-.125 0-.275-.025t-.275-.125m-10 0l-6.2-4.15q-.225-.15-.337-.362T3.3 12t.113-.462t.337-.363l6.2-4.15q.125-.1.275-.125t.275-.025q.4 0 .7.275t.3.725v8.25q0 .45-.3.725t-.7.275q-.125 0-.275-.025t-.275-.125M9.5 14.25v-4.5L6.1 12zm10 0v-4.5L16.1 12z"></svg:path>`,
})
export class MaterialSymbolsFastRewindOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFastRewindRoundedIcon],svg[material-symbols-fast-rewind-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.95 16.975l-6.2-4.15q-.225-.15-.337-.362T13.3 12t.113-.462t.337-.363l6.2-4.15q.125-.1.275-.125t.275-.025q.4 0 .7.275t.3.725v8.25q0 .45-.3.725t-.7.275q-.125 0-.275-.025t-.275-.125m-10 0l-6.2-4.15q-.225-.15-.337-.362T3.3 12t.113-.462t.337-.363l6.2-4.15q.125-.1.275-.125t.275-.025q.4 0 .7.275t.3.725v8.25q0 .45-.3.725t-.7.275q-.125 0-.275-.025t-.275-.125"></svg:path>`,
})
export class MaterialSymbolsFastRewindRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFastfoodOutlineRoundedIcon],svg[material-symbols-fastfood-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.325 13q-.8-1.125-2.112-1.562T8.5 11t-2.713.438T3.675 13zM8.5 9q1.15 0 2.338.288t2.2.887t1.737 1.5t.975 2.125q.1.475-.2.837t-.775.363H2.225q-.475 0-.775-.363t-.2-.837q.25-1.225.988-2.125t1.75-1.5t2.187-.888T8.5 9M2 19q-.425 0-.712-.288T1 18t.288-.712T2 17h13q.425 0 .713.288T16 18t-.288.713T15 19zm17.7 4H19q-.425 0-.712-.288T18 22t.288-.712T19 21h.4l1.4-14h-8.6q-.425 0-.712-.288T11.2 6t.288-.712T12.2 5H16V2q0-.425.288-.712T17 1t.713.288T18 2v3h3.9q.45 0 .75.325t.25.775l-1.55 15.45q-.075.625-.55 1.038T19.7 23M18 21h1.4zM2 23q-.425 0-.712-.288T1 22t.288-.712T2 21h13q.425 0 .713.288T16 22t-.288.713T15 23zm6.5-10"></svg:path>`,
})
export class MaterialSymbolsFastfoodOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFastfoodRoundedIcon],svg[material-symbols-fastfood-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 9q1.15 0 2.338.288t2.2.887t1.737 1.5t.975 2.125q.1.475-.2.837t-.775.363H2.225q-.475 0-.775-.363t-.2-.837q.25-1.225.988-2.125t1.75-1.5t2.187-.888T8.5 9M2 19q-.425 0-.712-.288T1 18t.288-.712T2 17h13q.425 0 .713.288T16 18t-.288.713T15 19zm0 4q-.425 0-.712-.288T1 22t.288-.712T2 21h13q.425 0 .713.288T16 22t-.288.713T15 23zm18.3 0H19q-.425 0-.712-.288T18 22v-7q0-2.7-1.763-4.712t-4.362-2.813q-.275-.075-.45-.287T11.2 6.7l-.075-.575q-.05-.45.25-.787t.75-.338H16V2q0-.425.288-.712T17 1t.713.288T18 2v3h3.9q.45 0 .75.325t.25.775l-1.6 16q-.05.375-.325.638T20.3 23"></svg:path>`,
})
export class MaterialSymbolsFastfoodRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaucetOutlineRoundedIcon],svg[material-symbols-faucet-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h4v-1H5q-.425 0-.712-.288T4 11t.288-.712T5 10h2q.825 0 1.413.588T9 12v1h2V6.1q0-1.725 1.2-2.912T15.125 2q1.15 0 2.125.6t1.5 1.65l.7 1.4q.2.375.063.763T19 7t-.763.063t-.587-.513l-.7-1.4q-.275-.525-.775-.837T15.1 4q-.875 0-1.487.613T13 6.1V13h2v-1q0-.825.588-1.412T17 10h2q.425 0 .713.288T20 11t-.288.713T19 12h-2v1h4q.425 0 .713.288T22 14t-.288.713T21 15H3q-.425 0-.712-.288T2 14t.288-.712T3 13m3 8q-.825 0-1.412-.587T4 19v-4h2v4h12v-4h2v4q0 .825-.587 1.413T18 21z"></svg:path>`,
})
export class MaterialSymbolsFaucetOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaucetRoundedIcon],svg[material-symbols-faucet-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h4v-1H5q-.425 0-.712-.288T4 11t.288-.712T5 10h2q.825 0 1.413.588T9 12v1h2V6.1q0-1.725 1.2-2.912T15.125 2q1.15 0 2.125.6t1.5 1.65l.7 1.4q.2.375.063.763T19 7t-.763.063t-.587-.513l-.7-1.4q-.275-.525-.775-.837T15.1 4q-.875 0-1.487.613T13 6.1V13h2v-1q0-.825.588-1.412T17 10h2q.425 0 .713.288T20 11t-.288.713T19 12h-2v1h4q.425 0 .713.288T22 14t-.288.713T21 15H3q-.425 0-.712-.288T2 14t.288-.712T3 13m3 8q-.825 0-1.412-.587T4 19v-3h16v3q0 .825-.587 1.413T18 21z"></svg:path>`,
})
export class MaterialSymbolsFaucetRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFavoriteOutlineRoundedIcon],svg[material-symbols-favorite-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.325q-.35 0-.712-.125t-.638-.4l-1.725-1.575q-2.65-2.425-4.788-4.812T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.537t2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125M11.05 6.75q-.725-1.025-1.55-1.563t-2-.537q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763t2.213 2.837t2.65 2.575T12 18.3q.85-.775 2.213-1.975t2.65-2.575t2.212-2.837T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .538T12.95 6.75q-.175.25-.425.375T12 7.25t-.525-.125t-.425-.375m.95 4.725"></svg:path>`,
})
export class MaterialSymbolsFavoriteOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFavoriteRoundedIcon],svg[material-symbols-favorite-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.325q-.35 0-.712-.125t-.638-.4l-1.725-1.575q-2.65-2.425-4.788-4.812T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.537t2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125"></svg:path>`,
})
export class MaterialSymbolsFavoriteRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaxOutlineRoundedIcon],svg[material-symbols-fax-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-1.25 0-2.125-.875T2 18v-7q0-1.25.875-2.125T5 8q.675 0 1.238.275T7.225 9H8V6q0-.825.588-1.412T10 4h6q.825 0 1.413.588T18 6v3h1q1.25 0 2.125.875T22 12v6q0 .825-.587 1.413T20 20H7.225q-.425.45-.987.725T5 21m0-2q.425 0 .713-.288T6 18v-7q0-.425-.288-.712T5 10t-.712.288T4 11v7q0 .425.288.713T5 19m5-10h6V6h-6zm-2 9h12v-6q0-.425-.288-.712T19 11H8zm7-4q.425 0 .713-.288T16 13t-.288-.712T15 12t-.712.288T14 13t.288.713T15 14m3 0q.425 0 .713-.288T19 13t-.288-.712T18 12t-.712.288T17 13t.288.713T18 14m-3 3q.425 0 .713-.288T16 16t-.288-.712T15 15t-.712.288T14 16t.288.713T15 17m3 0q.425 0 .713-.288T19 16t-.288-.712T18 15t-.712.288T17 16t.288.713T18 17m-8 0h2q.425 0 .713-.288T13 16v-3q0-.425-.288-.712T12 12h-2q-.425 0-.712.288T9 13v3q0 .425.288.713T10 17m-2 1v-7z"></svg:path>`,
})
export class MaterialSymbolsFaxOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFaxRoundedIcon],svg[material-symbols-fax-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20V6q0-.825.588-1.412T10 4h6q.825 0 1.413.588T18 6v3h1q1.25 0 2.125.875T22 12v6q0 .825-.587 1.413T20 20zm-3.5 1q1.05 0 1.775-.725T7 18.5v-8q0-1.05-.725-1.775T4.5 8t-1.775.725T2 10.5v8q0 1.05.725 1.775T4.5 21M10 9h6V6h-6zm6 5q.425 0 .713-.288T17 13t-.288-.712T16 12t-.712.288T15 13t.288.713T16 14m3 0q.425 0 .713-.288T20 13t-.288-.712T19 12t-.712.288T18 13t.288.713T19 14m-3 3q.425 0 .713-.288T17 16t-.288-.712T16 15t-.712.288T15 16t.288.713T16 17m3 0q.425 0 .713-.288T20 16t-.288-.712T19 15t-.712.288T18 16t.288.713T19 17m-8 0h2q.425 0 .713-.288T14 16v-3q0-.425-.288-.712T13 12h-2q-.425 0-.712.288T10 13v3q0 .425.288.713T11 17"></svg:path>`,
})
export class MaterialSymbolsFaxRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFeatureSearchOutlineRoundedIcon],svg[material-symbols-feature-search-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22q-.825 0-1.412-.587T2 20V6q0-.825.588-1.412T4 4h4.05q.425 0 .713.288T9.05 5t-.288.713T8.05 6H4v14h14v-5q0-.425.288-.712T19 14t.713.288T20 15v5q0 .825-.587 1.413T18 22zM19.3 8.9l2.5 2.5q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-2.5-2.5q-.525.3-1.125.5T15.5 11q-1.875 0-3.187-1.312T11 6.5t1.313-3.187T15.5 2t3.188 1.313T20 6.5q0 .675-.2 1.275T19.3 8.9m-3.8.1q1.05 0 1.775-.725T18 6.5t-.725-1.775T15.5 4t-1.775.725T13 6.5t.725 1.775T15.5 9M4 13.25V20V6v7v-.3z"></svg:path>`,
})
export class MaterialSymbolsFeatureSearchOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFeatureSearchRoundedIcon],svg[material-symbols-feature-search-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 11q-1.875 0-3.187-1.312T11 6.5t1.313-3.187T15.5 2t3.188 1.313T20 6.5q0 .675-.2 1.275T19.3 8.9l2.5 2.5q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-2.5-2.5q-.525.3-1.125.5T15.5 11m0-2q1.05 0 1.775-.725T18 6.5t-.725-1.775T15.5 4t-1.775.725T13 6.5t.725 1.775T15.5 9M4 22q-.825 0-1.412-.587T2 20V6q0-.825.588-1.412T4 4h4.3q.425 0 .7.363t.15.787q-.075.35-.1.725t-.025.725q0 2.725 1.925 4.55t4.575 1.825q.475 0 .95-.063t.975-.212l1.975 1.975q.275.275.425.637t.15.763V20q0 .825-.587 1.412T18 22z"></svg:path>`,
})
export class MaterialSymbolsFeatureSearchRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFeaturedPlayListOutlineRoundedIcon],svg[material-symbols-featured-play-list-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13h7q.425 0 .713-.288T15 12t-.288-.712T14 11H7q-.425 0-.712.288T6 12t.288.713T7 13m0-3h7q.425 0 .713-.288T15 9t-.288-.712T14 8H7q-.425 0-.712.288T6 9t.288.713T7 10M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsFeaturedPlayListOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFeaturedPlayListRoundedIcon],svg[material-symbols-featured-play-list-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13h7q.425 0 .713-.288T15 12t-.288-.712T14 11H7q-.425 0-.712.288T6 12t.288.713T7 13m0-3h7q.425 0 .713-.288T15 9t-.288-.712T14 8H7q-.425 0-.712.288T6 9t.288.713T7 10M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsFeaturedPlayListRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFeaturedSeasonalAndGiftsRoundedIcon],svg[material-symbols-featured-seasonal-and-gifts-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-9q-.825 0-1.412-.587T2 9V7q0-.825.588-1.412T4 5h3.2q-.125-.225-.162-.475T7 4q0-1.25.875-2.125T10 1q.575 0 1.075.213T12 1.8q.425-.4.925-.6T14 1q1.25 0 2.125.875T17 4q0 .275-.05.513T16.8 5H20q.825 0 1.413.588T22 7v2q0 .825-.587 1.413T20 11v9q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20M14 3q-.425 0-.712.288T13 4t.288.713T14 5t.713-.288T15 4t-.288-.712T14 3M9 4q0 .425.288.713T10 5t.713-.288T11 4t-.288-.712T10 3t-.712.288T9 4M4 7v2h7V7zm7 13v-9H6v9zm2 0h5v-9h-5zm7-11V7h-7v2z"></svg:path>`,
})
export class MaterialSymbolsFeaturedSeasonalAndGiftsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFeaturedVideoOutlineRoundedIcon],svg[material-symbols-featured-video-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14h7q.425 0 .713-.288T14 13V8q0-.425-.288-.712T13 7H6q-.425 0-.712.288T5 8v5q0 .425.288.713T6 14m-2 6q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsFeaturedVideoOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFeaturedVideoRoundedIcon],svg[material-symbols-featured-video-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14h7q.425 0 .713-.288T14 13V8q0-.425-.288-.712T13 7H6q-.425 0-.712.288T5 8v5q0 .425.288.713T6 14m-2 6q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsFeaturedVideoRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFeedbackOutlineRoundedIcon],svg[material-symbols-feedback-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15q.425 0 .713-.288T13 14t-.288-.712T12 13t-.712.288T11 14t.288.713T12 15m0-4q.425 0 .713-.288T13 10V6q0-.425-.288-.712T12 5t-.712.288T11 6v4q0 .425.288.713T12 11m-6 7l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-.85-2H20V4H4v13.125zM4 16V4z"></svg:path>`,
})
export class MaterialSymbolsFeedbackOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFeedbackRoundedIcon],svg[material-symbols-feedback-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm6-3q.425 0 .713-.288T13 14t-.288-.712T12 13t-.712.288T11 14t.288.713T12 15m0-4q.425 0 .713-.288T13 10V6q0-.425-.288-.712T12 5t-.712.288T11 6v4q0 .425.288.713T12 11"></svg:path>`,
})
export class MaterialSymbolsFeedbackRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFemaleRoundedIcon],svg[material-symbols-female-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19h-1q-.425 0-.712-.288T9 18t.288-.712T10 17h1v-2.1q-1.975-.35-3.238-1.888T6.5 9.45q0-2.275 1.613-3.862T12 4t3.888 1.588T17.5 9.45q0 2.025-1.263 3.563T13 14.9V17h1q.425 0 .713.288T15 18t-.288.713T14 19h-1v1q0 .425-.288.713T12 21t-.712-.288T11 20zm1-6q1.45 0 2.475-1.025T15.5 9.5t-1.025-2.475T12 6T9.525 7.025T8.5 9.5t1.025 2.475T12 13"></svg:path>`,
})
export class MaterialSymbolsFemaleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFemurAltOutlineRoundedIcon],svg[material-symbols-femur-alt-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 13q.425 0 .713-.288T14.5 12q0-.175-.038-.312t-.112-.263q.275-.1.463-.35T15 10.5q0-.425-.287-.712T14 9.5q-.325 0-.575.175t-.35.475L9.425 8.4q.05-.1.063-.2T9.5 8q0-.425-.288-.712T8.5 7t-.712.288T7.5 8q0 .15.05.288t.125.262q-.275.1-.475.35t-.2.6q0 .425.288.712T8 10.5q.35 0 .6-.187t.35-.488l3.65 1.75l-.1.425q0 .425.288.713T13.5 13m-4.4 1.225q-.5-.125-1.187-.288t-1.438-.462q-.65-.25-1.312-.587t-1.338-.763q-.375-.25-.437-.687t.212-.813q.25-.35.675-.4t.775.2q.9.65 1.838 1.037t1.7.588t1.25.275l.487.075q.45.025.713.375t.187.8l-.1.7q-.1.7-.125 1.775t.088 2.387T11.6 21q.125.35-.125.638t-.625.337t-.762-.15t-.563-.85q-.275-1.025-.4-2.013t-.15-1.862T9 15.488t.1-1.263q-.025 0 0 0m8.925-6.075q.475.725.725 1.55t.25 1.725V21q0 .425-.287.713T18 22t-.712-.288T17 21v-9.575q0-1.2-.638-2.175T14.65 7.775L8.95 5.2q-.425-.2-.55-.65t.15-.85q.2-.3.55-.388t.7.063l5.675 2.575q.8.35 1.438.912t1.112 1.288M12 22q-.625-1.3-.825-2.775t-.187-2.725t.125-2.087l.112-.838q.075-.45-.187-.8t-.713-.375l-.6-.088q-.6-.087-1.5-.374t-1.962-.8T4.225 9.75q.975.875 2.038 1.388t1.962.8t1.5.374l.6.088q.45.025.713.375t.187.8l-.112.838q-.113.837-.125 2.087t.187 2.725T12 22"></svg:path>`,
})
export class MaterialSymbolsFemurAltOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFemurAltRoundedIcon],svg[material-symbols-femur-alt-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 13q.425 0 .713-.288T14.5 12q0-.15-.15-.575q.275-.1.463-.35T15 10.5q0-.425-.288-.712T14 9.5q-.325 0-.575.175t-.35.475L9.425 8.4q.025-.075.075-.4q0-.425-.288-.712T8.5 7t-.712.288T7.5 8q0 .15.175.55q-.275.1-.475.35t-.2.6q0 .425.288.713T8 10.5q.35 0 .6-.187t.35-.488l3.65 1.75l-.1.425q0 .425.288.713T13.5 13m4.525-4.85q.475.725.725 1.55t.25 1.725V20.5q0 .625-.437 1.063T17.5 22h-6.75q-.425 0-.737-.238t-.438-.637q-.6-2.1-.587-3.963t.112-2.937q-.025 0 0 0q-.925-.2-2.312-.65t-2.813-1.35q-.425-.275-.5-.787T3.7 10.5l4.625-6.475q.325-.425.838-.575t1.012.075l5.3 2.425q.8.35 1.438.913t1.112 1.287"></svg:path>`,
})
export class MaterialSymbolsFemurAltRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFenceRoundedIcon],svg[material-symbols-fence-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20q-.425 0-.712-.288T5 19v-3H4q-.425 0-.712-.288T3 15t.288-.712T4 14h1v-2H4q-.425 0-.712-.288T3 11t.288-.712T4 10h1V7.425q0-.2.075-.387T5.3 6.7l2-2q.3-.3.7-.3t.7.3L10 6l1.3-1.3q.3-.3.713-.3t.712.3l1.3 1.3L15.3 4.7q.3-.3.713-.3t.712.3l2 2q.15.15.225.338t.075.387V10H20q.425 0 .713.288T21 11t-.288.713T20 12h-.975v2H20q.425 0 .713.288T21 15t-.288.713T20 16h-.975v3q0 .425-.288.713t-.712.287zm1-10h2V7.825l-1-1l-1 1zm4 0h2V7.825l-1-1l-1 1zm4.025 0H17V7.825l-1-1l-.975.975zM7 14h2v-2H7zm4 0h2v-2h-2zm4.025 0H17v-2h-1.975zM7 18h2v-2H7zm4 0h2v-2h-2zm4.025 0H17v-2h-1.975z"></svg:path>`,
})
export class MaterialSymbolsFenceRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFertileOutlineRoundedIcon],svg[material-symbols-fertile-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.325 3.5q.725.85 1.375 1.725t1.25 1.8L20.4 3.7q.225-.175.5-.2t.55.1t.413.375T22 4.5V12q0 2.075-.787 3.9t-2.138 3.175t-3.175 2.138T12 22t-3.9-.788t-3.175-2.137T2.788 15.9T2 12V4.5q0-.275.138-.525T2.55 3.6t.55-.1t.5.2l4.425 3.325q.6-.925 1.263-1.8T10.675 3.5q.25-.3.6-.462T12 2.875t.725.163t.6.462M12 20q3.35 0 5.675-2.325T20 12V6.5l-4.6 3.45q-1.125-1.8-1.825-2.85T12 5q-.875 1.075-1.625 2.175T8.6 9.95L4 6.5V12q0 3.35 2.325 5.675T12 20m0-7.5"></svg:path>`,
})
export class MaterialSymbolsFertileOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFertileRoundedIcon],svg[material-symbols-fertile-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.325 3.5q.725.85 1.375 1.725t1.25 1.8L20.4 3.7q.225-.175.5-.2t.55.1t.413.375T22 4.5V12q0 2.075-.787 3.9t-2.138 3.175t-3.175 2.138T12 22t-3.9-.788t-3.175-2.137T2.788 15.9T2 12V4.5q0-.275.138-.525T2.55 3.6t.55-.1t.5.2l4.425 3.325q.6-.925 1.263-1.8T10.675 3.5q.25-.3.6-.462T12 2.875t.725.163t.6.462"></svg:path>`,
})
export class MaterialSymbolsFertileRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFestivalRoundedIcon],svg[material-symbols-festival-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 22q-1 0-1.6-.812t-.4-1.838q.275-1.275.375-2.55t.125-2.55q-1.025-.4-1.638-1.275T1 11v-.7q0-.575.338-1.05t.887-.7Q4.6 7.6 6.7 6.2t4.05-3.05q.275-.225.588-.337T12 2.7t.663.113t.587.337Q15.2 4.8 17.3 6.2t4.475 2.35q.55.225.888.7T23 10.3v.7q0 1.1-.612 1.975T20.75 14.25q.025 1.275.125 2.55t.375 2.55q.2 1.025-.4 1.838t-1.6.812zM5.9 9h12.2q-1.65-.925-3.162-2T12 4.7Q10.575 5.925 9.063 7T5.9 9m8.6 3.5q.625 0 1.063-.437T16 11h-3q0 .625.438 1.063t1.062.437m-5 0q.625 0 1.063-.437T11 11H8q0 .625.438 1.063T9.5 12.5m-5 0q.625 0 1.063-.437T6 11H3q0 .625.438 1.063T4.5 12.5m.15 7.5h2.675q.225-1.5.35-2.975t.2-2.975q-.25-.125-.462-.263T7 13.45q-.35.35-.8.6t-.95.375q-.05 1.425-.175 2.813T4.65 20m4.7 0h5.3q-.2-1.375-.312-2.75t-.188-2.775q-.625-.05-1.175-.312T12 13.475q-.425.425-.975.688t-1.175.312q-.075 1.4-.187 2.775T9.35 20m7.325 0h2.675q-.3-1.375-.425-2.762t-.175-2.813q-.5-.125-.95-.363t-.8-.612q-.2.2-.413.338t-.462.262q.075 1.5.213 2.975T16.675 20m2.825-7.5q.625 0 1.063-.437T21 11h-3q0 .625.438 1.063t1.062.437"></svg:path>`,
})
export class MaterialSymbolsFestivalRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFiberDvrOutlineRoundedIcon],svg[material-symbols-fiber-dvr-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 15h3q.65 0 1.075-.425T9 13.5v-3q0-.65-.425-1.075T7.5 9h-3q-.2 0-.35.15T4 9.5v5q0 .2.15.35t.35.15m1-1.5v-3h2v3zm6.35-1.05L11 9.525q-.075-.225-.262-.375T10.3 9q-.35 0-.562.287t-.113.638l1.325 4.55q.075.225.263.375t.437.15h.4q.25 0 .437-.15t.263-.375l1.325-4.55q.1-.35-.112-.638T13.4 9q-.25 0-.437.15t-.263.375zm4.65.55h1.15l.675 1.575q.075.2.25.313t.375.112q.375 0 .588-.3t.062-.65l-.5-1.15q.375-.2.637-.575T20 11.5v-1q0-.65-.425-1.075T18.5 9h-3q-.2 0-.35.15T15 9.5v4.75q0 .325.213.538t.537.212t.538-.213t.212-.537zm0-1.5v-1h2v1zM3 20q-.825 0-1.412-.587T1 18V6q0-.825.588-1.412T3 4h18q.825 0 1.413.588T23 6v12q0 .825-.587 1.413T21 20zm0-2h18V6H3zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsFiberDvrOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFiberDvrRoundedIcon],svg[material-symbols-fiber-dvr-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 15h3q.65 0 1.075-.425T9 13.5v-3q0-.65-.425-1.075T7.5 9h-3q-.2 0-.35.15T4 9.5v5q0 .2.15.35t.35.15m1-1.5v-3h2v3zm6.35-1.05L11 9.525q-.075-.225-.262-.375T10.3 9q-.35 0-.562.287t-.113.638l1.325 4.55q.075.225.263.375t.437.15h.4q.25 0 .437-.15t.263-.375l1.325-4.55q.1-.35-.112-.638T13.4 9q-.25 0-.437.15t-.263.375zm4.65.55h1.15l.675 1.575q.075.2.25.313t.375.112q.375 0 .588-.3t.062-.65l-.5-1.15q.375-.2.637-.575T20 11.5v-1q0-.65-.425-1.075T18.5 9h-3q-.2 0-.35.15T15 9.5v4.75q0 .325.213.538t.537.212t.538-.213t.212-.537zm0-1.5v-1h2v1zM3 20q-.825 0-1.412-.587T1 18V6q0-.825.588-1.412T3 4h18q.825 0 1.413.588T23 6v12q0 .825-.587 1.413T21 20z"></svg:path>`,
})
export class MaterialSymbolsFiberDvrRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFiberNewOutlineRoundedIcon],svg[material-symbols-fiber-new-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20q-.825 0-1.412-.587T1 18V6q0-.825.588-1.412T3 4h18q.825 0 1.413.588T23 6v12q0 .825-.587 1.413T21 20zm0-2h18V6H3zm1.75-6.5l2.375 3.25q.075.125.2.188T7.6 15h.3q.25 0 .425-.175T8.5 14.4V9.625q0-.275-.175-.45T7.875 9t-.45.175t-.175.45V12.5L4.925 9.25q-.1-.125-.225-.187T4.425 9h-.3q-.275 0-.45.175t-.175.45v4.75q0 .275.175.45t.45.175t.45-.175t.175-.45zM10 15h2.875q.275 0 .45-.175t.175-.45t-.175-.45t-.45-.175H11v-1.1h1.875q.275 0 .45-.175t.175-.45t-.175-.45t-.45-.175H11v-1.15h1.875q.275 0 .45-.175t.175-.45t-.175-.45t-.45-.175H10q-.2 0-.35.15t-.15.35v5q0 .2.15.35T10 15m5.5 0h4q.425 0 .713-.288T20.5 14V9.625q0-.275-.175-.45T19.875 9t-.45.175t-.175.45V13.5h-1.1v-2.875q0-.275-.175-.45t-.45-.175t-.45.175t-.175.45V13.5h-1.15V9.625q0-.275-.175-.45T15.125 9t-.45.175t-.175.45V14q0 .425.288.713T15.5 15M3 18V6z"></svg:path>`,
})
export class MaterialSymbolsFiberNewOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFiberNewRoundedIcon],svg[material-symbols-fiber-new-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20q-.825 0-1.412-.587T1 18V6q0-.825.588-1.412T3 4h18q.825 0 1.413.588T23 6v12q0 .825-.587 1.413T21 20zm1.75-8.5l2.375 3.25q.075.125.2.188T7.6 15h.3q.25 0 .425-.175T8.5 14.4V9.625q0-.275-.175-.45T7.875 9t-.45.175t-.175.45V12.5L4.925 9.25q-.1-.125-.225-.187T4.425 9h-.3q-.275 0-.45.175t-.175.45v4.75q0 .275.175.45t.45.175t.45-.175t.175-.45zM10 15h2.875q.275 0 .45-.175t.175-.45t-.175-.45t-.45-.175H11v-1.1h1.875q.275 0 .45-.175t.175-.45t-.175-.45t-.45-.175H11v-1.15h1.875q.275 0 .45-.175t.175-.45t-.175-.45t-.45-.175H10q-.2 0-.35.15t-.15.35v5q0 .2.15.35T10 15m5.5 0h4q.425 0 .713-.288T20.5 14V9.625q0-.275-.175-.45T19.875 9t-.45.175t-.175.45V13.5h-1.1v-2.875q0-.275-.175-.45t-.45-.175t-.45.175t-.175.45V13.5h-1.15V9.625q0-.275-.175-.45T15.125 9t-.45.175t-.175.45V14q0 .425.288.713T15.5 15"></svg:path>`,
})
export class MaterialSymbolsFiberNewRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFiberPinOutlineRoundedIcon],svg[material-symbols-fiber-pin-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 13H9q.425 0 .713-.288T10 12v-2q0-.425-.288-.712T9 9H5.5q-.2 0-.35.15T5 9.5v4.75q0 .325.213.538T5.75 15t.538-.213t.212-.537zM12 9q-.325 0-.537.213t-.213.537v4.5q0 .325.213.538T12 15t.538-.213t.212-.537v-4.5q0-.325-.213-.537T12 9m3.25 2.5l2.375 3.25q.075.125.2.188T18.1 15h.3q.25 0 .425-.175T19 14.4V9.625q0-.275-.175-.45T18.375 9t-.45.175t-.175.45V12.5l-2.325-3.25q-.1-.125-.225-.187T14.925 9h-.3q-.275 0-.45.175t-.175.45v4.75q0 .275.175.45t.45.175t.45-.175t.175-.45zm-8.75 0v-1h2v1zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsFiberPinOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFiberPinRoundedIcon],svg[material-symbols-fiber-pin-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 13H9q.425 0 .713-.288T10 12v-2q0-.425-.288-.712T9 9H5.5q-.2 0-.35.15T5 9.5v4.75q0 .325.213.538T5.75 15t.538-.213t.212-.537zM12 9q-.325 0-.537.213t-.213.537v4.5q0 .325.213.538T12 15t.538-.213t.212-.537v-4.5q0-.325-.213-.537T12 9m3.25 2.5l2.375 3.25q.075.125.2.188T18.1 15h.3q.25 0 .425-.175T19 14.4V9.625q0-.275-.175-.45T18.375 9t-.45.175t-.175.45V12.5l-2.325-3.25q-.1-.125-.225-.187T14.925 9h-.3q-.275 0-.45.175t-.175.45v4.75q0 .275.175.45t.45.175t.45-.175t.175-.45zm-8.75 0v-1h2v1zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsFiberPinRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFiberSmartRecordOutlineRoundedIcon],svg[material-symbols-fiber-smart-record-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19q-2.925 0-4.962-2.037T2 12t2.038-4.962T9 5t4.963 2.038T16 12t-2.037 4.963T9 19m8.5-.475q-.575.2-1.037-.038T16 17.6q0-.275.188-.525t.462-.35q1.5-.5 2.425-1.8T20 12t-.925-2.925t-2.425-1.8q-.275-.1-.462-.35T16 6.4q0-.625.45-.875t1.025-.05Q19.5 6.2 20.75 7.988T22 12t-1.25 4t-3.25 2.525M9 17q2.075 0 3.538-1.463T14 12t-1.463-3.537T9 7T5.463 8.463T4 12t1.463 3.538T9 17"></svg:path>`,
})
export class MaterialSymbolsFiberSmartRecordOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFiberSmartRecordRoundedIcon],svg[material-symbols-fiber-smart-record-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19q-2.925 0-4.962-2.037T2 12t2.038-4.962T9 5t4.963 2.038T16 12t-2.037 4.963T9 19m8.5-.475q-.575.2-1.037-.038T16 17.6q0-.275.188-.525t.462-.35q1.5-.5 2.425-1.8T20 12t-.925-2.925t-2.425-1.8q-.275-.1-.462-.35T16 6.4q0-.625.45-.875t1.025-.05Q19.5 6.2 20.75 7.988T22 12t-1.25 4t-3.25 2.525"></svg:path>`,
})
export class MaterialSymbolsFiberSmartRecordRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileCopyOffOutlineRoundedIcon],svg[material-symbols-file-copy-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.575 1.575l4.85 4.85q.275.275.425.638t.15.762v7.925q0 .5-.312.738t-.688.237t-.687-.25t-.313-.75V8h-3.5q-.625 0-1.062-.437T14 6.5V3H7q-.425 0-.712-.288T6 2t.288-.712T7 1h7.175q.4 0 .763.15t.637.425M8 17h6.2L8 10.8zm8.2 2H8q-.825 0-1.412-.587T6 17V8.8L1.4 4.2q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l18.4 18.4q.275.275.275.7t-.275.7t-.7.275t-.7-.275zM4 23q-.825 0-1.412-.587T2 21V9q0-.425.288-.712T3 8t.713.288T4 9v12h11q.425 0 .713.288T16 22t-.288.713T15 23z"></svg:path>`,
})
export class MaterialSymbolsFileCopyOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileCopyOffRoundedIcon],svg[material-symbols-file-copy-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.3 16.45l-13-13q-.15-.15-.225-.338T6 2.725Q6 2 6.5 1.5T7.725 1h6.45q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762v7.9q0 .675-.612.938T19.3 16.45m1.9 6.15q-.275.275-.7.275t-.7-.275L16.2 19H8q-.825 0-1.412-.587T6 17V8.8L1.4 4.2q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l18.4 18.4q.275.275.275.7t-.275.7M15.5 8h4L14 2.5L19.5 8L14 2.5v4q0 .625.438 1.063T15.5 8M4 23q-.825 0-1.412-.587T2 21V9q0-.425.288-.712T3 8t.713.288T4 9v12h11q.425 0 .713.288T16 22t-.288.713T15 23z"></svg:path>`,
})
export class MaterialSymbolsFileCopyOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileCopyOutlineRoundedIcon],svg[material-symbols-file-copy-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H8q-.825 0-1.412-.587T6 17V3q0-.825.588-1.412T8 1h6.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V17q0 .825-.587 1.413T19 19m0-11h-3.5q-.625 0-1.062-.437T14 6.5V3H8v14h11zM4 23q-.825 0-1.412-.587T2 21V8q0-.425.288-.712T3 7t.713.288T4 8v13h10q.425 0 .713.288T15 22t-.288.713T14 23zM8 3v5zv14z"></svg:path>`,
})
export class MaterialSymbolsFileCopyOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileCopyRoundedIcon],svg[material-symbols-file-copy-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H8q-.825 0-1.412-.587T6 17V3q0-.825.588-1.412T8 1h6.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V17q0 .825-.587 1.413T19 19m0-11l-5-5v3.5q0 .625.438 1.063T15.5 8zM4 23q-.825 0-1.412-.587T2 21V8q0-.425.288-.712T3 7t.713.288T4 8v13h10q.425 0 .713.288T15 22t-.288.713T14 23z"></svg:path>`,
})
export class MaterialSymbolsFileCopyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileDownloadOffRoundedIcon],svg[material-symbols-file-download-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.075 21.9L17.15 20H6q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h9.15l-2.575-2.575q-.15.075-.287.113t-.288.037q-.25 0-.413-.075t-.287-.2l-3.6-3.6q-.275-.275-.288-.637t.188-.613L2.075 4.925q-.275-.275-.275-.7t.3-.725q.275-.275.7-.275t.725.275l16.975 17q.275.275.275.7t-.275.7q-.3.3-.725.3t-.7-.3M16.3 10.3q.275.275.275.7t-.275.7l-.175.175q-.3.3-.7.288t-.7-.313t-.3-.712t.3-.713l.15-.15q.275-.275.713-.262t.712.287M12 4q.425 0 .713.288T13 5v2.75q0 .5-.312.738T12 8.725t-.687-.25t-.313-.75V5q0-.425.288-.712T12 4"></svg:path>`,
})
export class MaterialSymbolsFileDownloadOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileExportOutlineRoundedIcon],svg[material-symbols-file-export-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 19.425l-2.25 2.25q-.3.3-.7.288t-.7-.313q-.275-.3-.287-.7t.287-.7L6.6 18H5.35q-.425 0-.712-.287T4.35 17t.288-.712T5.35 16H9q.425 0 .713.288T10 17v3.65q0 .425-.288.713T9 21.65t-.712-.287T8 20.65zM5 14q-.425 0-.712-.288T4 13V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22h-5q-.425 0-.712-.288T12 21t.288-.712T13 20h5V9h-4q-.425 0-.712-.288T13 8V4H6v9q0 .425-.288.713T5 14"></svg:path>`,
})
export class MaterialSymbolsFileExportOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileExportRoundedIcon],svg[material-symbols-file-export-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 19.425l-2.25 2.25q-.3.3-.7.288t-.7-.313q-.275-.3-.287-.7t.287-.7L6.6 18H5.35q-.425 0-.712-.287T4.35 17t.288-.712T5.35 16H9q.425 0 .713.288T10 17v3.65q0 .425-.288.713T9 21.65t-.712-.287T8 20.65zM13 22q-.425 0-.712-.288T12 21v-4q0-1.25-.875-2.125T9 14H5q-.425 0-.712-.288T4 13V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm0-13h5l-5-5l5 5l-5-5z"></svg:path>`,
})
export class MaterialSymbolsFileExportRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileJsonOutlineRoundedIcon],svg[material-symbols-file-json-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 15H6.5q.425 0 .713-.288T7.5 14V9.75q0-.325-.213-.537T6.75 9t-.537.213T6 9.75v4H5v-.625q0-.275-.175-.45t-.45-.175t-.45.175t-.175.45V14q0 .425.288.713T4.75 15m4.425 0h1.5q.425 0 .713-.288t.287-.712v-1.5q0-.425-.288-.712t-.712-.288h-1.25v-1.25h1q0 .2.15.35t.35.15h.125q.275 0 .45-.175t.175-.45V10q0-.425-.288-.712T10.676 9h-1.5q-.425 0-.712.288T8.175 10v1.5q0 .425.288.713t.712.287h1.25v1.25h-1q0-.2-.15-.35t-.35-.15H8.8q-.275 0-.45.175t-.175.45V14q0 .425.288.713t.712.287m4.4-1.5v-3h1v3zm-.25 1.5h1.5q.425 0 .713-.288t.287-.712v-4q0-.425-.287-.712T14.825 9h-1.5q-.425 0-.712.288t-.288.712v4q0 .425.288.713t.712.287m4.425-2.625l.85 2.225q.075.2.225.3t.35.1h.2q.275 0 .45-.175t.175-.45v-4.75q0-.275-.175-.45T19.375 9t-.45.175t-.175.45v2L17.9 9.4q-.075-.2-.225-.3t-.35-.1h-.2q-.275 0-.45.175t-.175.45v4.75q0 .275.175.45t.45.175t.45-.175t.175-.45zM3 20q-.825 0-1.412-.587T1 18V6q0-.825.588-1.412T3 4h18q.825 0 1.413.588T23 6v12q0 .825-.587 1.413T21 20zm0-2h18V6H3zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsFileJsonOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileJsonRoundedIcon],svg[material-symbols-file-json-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 15H6.5q.425 0 .713-.288T7.5 14V9.75q0-.325-.213-.537T6.75 9t-.537.213T6 9.75v4H5v-.625q0-.275-.175-.45t-.45-.175t-.45.175t-.175.45V14q0 .425.288.713T4.75 15m4.425 0h1.5q.425 0 .713-.288t.287-.712v-1.5q0-.425-.288-.712t-.712-.288h-1.25v-1.25h1q0 .2.15.35t.35.15h.125q.275 0 .45-.175t.175-.45V10q0-.425-.288-.712T10.676 9h-1.5q-.425 0-.712.288T8.175 10v1.5q0 .425.288.713t.712.287h1.25v1.25h-1q0-.2-.15-.35t-.35-.15H8.8q-.275 0-.45.175t-.175.45V14q0 .425.288.713t.712.287m4.4-1.5v-3h1v3zm-.25 1.5h1.5q.425 0 .713-.288t.287-.712v-4q0-.425-.287-.712T14.825 9h-1.5q-.425 0-.712.288t-.288.712v4q0 .425.288.713t.712.287m4.425-2.625l.85 2.225q.075.2.225.3t.35.1h.2q.275 0 .45-.175t.175-.45v-4.75q0-.275-.175-.45T19.375 9t-.45.175t-.175.45v2L17.9 9.4q-.075-.2-.225-.3t-.35-.1h-.2q-.275 0-.45.175t-.175.45v4.75q0 .275.175.45t.45.175t.45-.175t.175-.45zM3 20q-.825 0-1.412-.587T1 18V6q0-.825.588-1.412T3 4h18q.825 0 1.413.588T23 6v12q0 .825-.587 1.413T21 20z"></svg:path>`,
})
export class MaterialSymbolsFileJsonRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileMapOutlineRoundedIcon],svg[material-symbols-file-map-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm7-13q-1.9 0-3.35 1.325t-1.45 3.6q0 1.825 1.425 3.6t2.7 2.9q.15.125.325.188t.35.062t.35-.062t.325-.188q1.275-1.125 2.7-2.9t1.425-3.6q0-2.275-1.45-3.6T12 6m0 6.25q-.525 0-.888-.363T10.75 11t.363-.888T12 9.75t.888.363t.362.887t-.363.888t-.887.362M5 19V5z"></svg:path>`,
})
export class MaterialSymbolsFileMapOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileMapRoundedIcon],svg[material-symbols-file-map-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm7-15q-1.9 0-3.35 1.325t-1.45 3.6q0 1.825 1.425 3.6t2.7 2.9q.15.125.325.188t.35.062t.35-.062t.325-.188q1.275-1.125 2.7-2.9t1.425-3.6q0-2.275-1.45-3.6T12 6m0 6.25q-.525 0-.888-.363T10.75 11t.363-.888T12 9.75t.888.363t.362.887t-.363.888t-.887.362"></svg:path>`,
})
export class MaterialSymbolsFileMapRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileMapStackOutlineRoundedIcon],svg[material-symbols-file-map-stack-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zM8 4v12zm6 6q-.425 0-.712-.288T13 9t.288-.712T14 8t.713.288T15 9t-.288.713T14 10m0 5q2.025-1.725 3.013-3.187T18 9.1q0-1.875-1.213-2.988T14 5t-2.787 1.113T10 9.1q0 1.25.988 2.713T14 15"></svg:path>`,
})
export class MaterialSymbolsFileMapStackOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileMapStackRoundedIcon],svg[material-symbols-file-map-stack-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zm10-12q-.425 0-.712-.288T13 9t.288-.712T14 8t.713.288T15 9t-.288.713T14 10m0 5q2.025-1.725 3.013-3.187T18 9.1q0-1.875-1.213-2.988T14 5t-2.787 1.113T10 9.1q0 1.25.988 2.713T14 15"></svg:path>`,
})
export class MaterialSymbolsFileMapStackRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileOpenOutlineRoundedIcon],svg[material-symbols-file-open-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V13q0 .425-.288.713T19 14t-.712-.288T18 13V9h-4q-.425 0-.712-.288T13 8V4H6v16h8q.425 0 .713.288T15 21t-.288.713T14 22zm13-2.575v1.225q0 .425-.288.713T18 21.65t-.712-.287T17 20.65V17q0-.425.288-.712T18 16h3.65q.425 0 .713.288t.287.712t-.287.713t-.713.287H20.4l2.25 2.25q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3zM6 20V4z"></svg:path>`,
})
export class MaterialSymbolsFileOpenOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileOpenRoundedIcon],svg[material-symbols-file-open-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16h3.65q.425 0 .713.288t.287.712t-.287.713t-.713.287H20.4l2.25 2.25q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3L19 19.425v1.225q0 .425-.288.713T18 21.65t-.712-.287T17 20.65V17q0-.425.288-.712T18 16M13 4v4q0 .425.288.713T14 9h4zM6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V13q0 .425-.288.713T19 14h-3q-.425 0-.712.288T15 15v6q0 .425-.288.713T14 22H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2"></svg:path>`,
})
export class MaterialSymbolsFileOpenRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilePngOutlineRoundedIcon],svg[material-symbols-file-png-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 11.5v-1h1v1zm10 3.5h1q.625 0 1.063-.437T19 13.5v-.75q0-.325-.213-.537T18.25 12t-.537.213t-.213.537v.75h-1v-3h1.75q.325 0 .538-.213T19 9.75t-.213-.537T18.25 9H16.5q-.625 0-1.062.438T15 10.5v3q0 .625.438 1.063T16.5 15m-10-2H8q.425 0 .713-.288T9 12v-2q0-.425-.288-.712T8 9H5.5q-.2 0-.35.15T5 9.5v4.75q0 .325.213.538T5.75 15t.538-.213t.212-.537zm5-.4l.8 1.95q.1.2.288.325T13 15h.25q.325 0 .538-.213T14 14.25v-4.5q0-.325-.213-.537T13.25 9t-.537.213t-.213.537v1.6l-.8-1.9q-.1-.2-.288-.325T11 9h-.25q-.325 0-.537.213T10 9.75v4.5q0 .325.213.538t.537.212t.538-.213t.212-.537zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsFilePngOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilePngRoundedIcon],svg[material-symbols-file-png-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 11.5v-1h1v1zm10 3.5h1q.625 0 1.063-.437T19 13.5v-.75q0-.325-.213-.537T18.25 12t-.537.213t-.213.537v.75h-1v-3h1.75q.325 0 .538-.213T19 9.75t-.213-.537T18.25 9H16.5q-.625 0-1.062.438T15 10.5v3q0 .625.438 1.063T16.5 15m-10-2H8q.425 0 .713-.288T9 12v-2q0-.425-.288-.712T8 9H5.5q-.2 0-.35.15T5 9.5v4.75q0 .325.213.538T5.75 15t.538-.213t.212-.537zm5-.4l.8 1.95q.1.2.288.325T13 15h.25q.325 0 .538-.213T14 14.25v-4.5q0-.325-.213-.537T13.25 9t-.537.213t-.213.537v1.6l-.8-1.9q-.1-.2-.288-.325T11 9h-.25q-.325 0-.537.213T10 9.75v4.5q0 .325.213.538t.537.212t.538-.213t.212-.537zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2V6z"></svg:path>`,
})
export class MaterialSymbolsFilePngRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilePresentOutlineRoundedIcon],svg[material-symbols-file-present-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q1.675 0 2.838-1.175T16 15v-3q0-.425-.288-.712T15 11t-.712.288T14 12v3q0 .825-.575 1.413T12 17q-.825 0-1.412-.587T10 15V9.5q0-.225.15-.363T10.5 9q.225 0 .363.138T11 9.5V14q0 .425.288.713T12 15t.713-.288T13 14V9.5q0-1.05-.725-1.775T10.5 7t-1.775.725T8 9.5V15q0 1.65 1.175 2.825T12 19m-6 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h9l5 5v13q0 .825-.587 1.413T18 22zm0-2h12V8h-3q-.425 0-.712-.288T14 7V4H6zM6 4v4zv16z"></svg:path>`,
})
export class MaterialSymbolsFilePresentOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilePresentRoundedIcon],svg[material-symbols-file-present-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q1.675 0 2.838-1.175T16 15v-3q0-.425-.288-.712T15 11t-.712.288T14 12v3q0 .825-.575 1.413T12 17q-.825 0-1.412-.587T10 15V9.5q0-.225.15-.363T10.5 9q.225 0 .363.138T11 9.5V14q0 .425.288.713T12 15t.713-.288T13 14V9.5q0-1.05-.725-1.775T10.5 7t-1.775.725T8 9.5V15q0 1.65 1.175 2.825T12 19m-6 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h9l5 5v13q0 .825-.587 1.413T18 22zm8-18v3q0 .425.288.713T15 8h3z"></svg:path>`,
})
export class MaterialSymbolsFilePresentRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileSaveOffOutlineRoundedIcon],svg[material-symbols-file-save-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.9 18.1l-1.4-1.425l.4-.4q.3-.3.7-.287t.7.312q.275.3.288.7t-.288.7zM19 16.175l-2-2V14q0-.425.288-.712T18 13t.713.288T19 14zM19.175 22L6 8.825V18h5q.425 0 .713.288T12 19t-.288.713T11 20H6q-.825 0-1.412-.587T4 18V6.825L1.4 4.2q-.275-.275-.287-.687T1.4 2.8q.275-.275.7-.275t.7.275l18.9 18.9q.125.125.213.325t.087.4V23q0 .425-.288.713T21 24h-6q-.425 0-.712-.288T14 23t.288-.712T15 22zM17 9v1q0 .425.288.713T18 11t.713-.288T19 10V8.825q0-.4-.15-.763t-.425-.637l-4.85-4.85q-.275-.275-.637-.425T12.175 2H7q-.425 0-.712.288T6 3t.288.713T7 4h5v3.5q0 .625.438 1.063T13.5 9zm-4.025 1.15"></svg:path>`,
})
export class MaterialSymbolsFileSaveOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileSaveOffRoundedIcon],svg[material-symbols-file-save-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.9 18.1l-1.4-1.425l.4-.4q.3-.3.7-.287t.7.312q.275.3.288.7t-.288.7zM19 16.175l-2-2V14q0-.425.288-.712T18 13t.713.288T19 14zM18 11h-4.175L6.5 3.7q-.475-.475-.213-1.088T7.225 2h4.95q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V10q0 .425-.288.713T18 11m-3 13q-.425 0-.712-.288T14 23t.288-.712T15 22h4.175L12 14.825V19q0 .425-.288.713T11 20H6q-.825 0-1.412-.587T4 18V6.825L1.4 4.2q-.275-.275-.287-.687T1.4 2.8q.275-.275.7-.275t.7.275l18.9 18.9q.125.125.213.325t.087.4V23q0 .425-.288.713T21 24zM12 4v3.5q0 .625.438 1.063T13.5 9H17zl5 5z"></svg:path>`,
})
export class MaterialSymbolsFileSaveOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileSaveOutlineRoundedIcon],svg[material-symbols-file-save-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 17.2l-.9-.9q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.6 2.6q.3.3.7.3t.7-.3l2.6-2.6q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275l-.9.9v-3.175q0-.425-.288-.712T18 13.025t-.712.288t-.288.712zM15 22h6q.425 0 .713.288T22 23t-.288.713T21 24h-6q-.425 0-.712-.288T14 23t.288-.712T15 22m-9-2q-.825 0-1.412-.587T4 18V4q0-.825.588-1.412T6 2h6.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762v1.2q0 .425-.288.712t-.712.288t-.712-.288t-.288-.712V9h-3.5q-.625 0-1.062-.437T12 7.5V4H6v14h5q.425 0 .713.288T12 19t-.288.713T11 20zm0-2V4z"></svg:path>`,
})
export class MaterialSymbolsFileSaveOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileSaveRoundedIcon],svg[material-symbols-file-save-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.3 20.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l.9.9v-3.175q0-.425.288-.712t.712-.288t.713.288t.287.712V17.2l.9-.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-2.6 2.6q-.3.3-.7.3t-.7-.3M15 24q-.425 0-.712-.288T14 23t.288-.712T15 22h6q.425 0 .713.288T22 23t-.288.713T21 24zm-9-4q-.825 0-1.412-.587T4 18V4q0-.825.588-1.412T6 2h6.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762v1.2q0 .425-.288.712t-.712.288h-4q-.825 0-1.412.588T12 13.025V19q0 .425-.288.713T11 20zm7.5-11H17l-5-5l5 5l-5-5v3.5q0 .625.438 1.063T13.5 9"></svg:path>`,
})
export class MaterialSymbolsFileSaveRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileUploadOffRoundedIcon],svg[material-symbols-file-upload-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7.85v2.3l-2-2l-1.575-1.575L11.3 4.7q.15-.15.325-.213T12 4.426t.375.063t.325.212l3.6 3.6q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288zM11 11l2 2v2q0 .425-.288.713T12 16t-.712-.288T11 15zm6.15 9H6q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h9.15L2.075 4.925q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3l17 17q.3.3.3.7t-.3.7t-.712.3t-.713-.3zM20 17.15l-1.775-1.775q.125-.15.313-.263T19 15q.425 0 .713.288T20 16z"></svg:path>`,
})
export class MaterialSymbolsFileUploadOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter1OutlineRoundedIcon],svg[material-symbols-filter-1-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7v7q0 .425.288.713T15 15t.713-.288T16 14V6q0-.425-.288-.712T15 5h-2q-.425 0-.712.288T12 6t.288.713T13 7zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zM8 4v12z"></svg:path>`,
})
export class MaterialSymbolsFilter1OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter1RoundedIcon],svg[material-symbols-filter-1-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7v7q0 .425.288.713T15 15t.713-.288T16 14V6q0-.425-.288-.712T15 5h-2q-.425 0-.712.288T12 6t.288.713T13 7zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22z"></svg:path>`,
})
export class MaterialSymbolsFilter1RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter2OutlineRoundedIcon],svg[material-symbols-filter-2-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13v-2h2q.825 0 1.413-.587T17 9V7q0-.825-.587-1.412T15 5h-3q-.425 0-.712.288T11 6t.288.713T12 7h3v2h-2q-.825 0-1.412.588T11 11v3q0 .425.288.713T12 15h4q.425 0 .713-.288T17 14t-.288-.712T16 13zm-5 5q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zM8 4v12z"></svg:path>`,
})
export class MaterialSymbolsFilter2OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter2RoundedIcon],svg[material-symbols-filter-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13v-2h2q.825 0 1.413-.587T17 9V7q0-.825-.587-1.412T15 5h-3q-.425 0-.712.288T11 6t.288.713T12 7h3v2h-2q-.825 0-1.412.588T11 11v3q0 .425.288.713T12 15h4q.425 0 .713-.288T17 14t-.288-.712T16 13zm-5 5q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22z"></svg:path>`,
})
export class MaterialSymbolsFilter2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter3OutlineRoundedIcon],svg[material-symbols-filter-3-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15q.825 0 1.413-.587T17 13v-1.5q0-.65-.425-1.075T15.5 10q.65 0 1.075-.425T17 8.5V7q0-.825-.587-1.412T15 5h-3q-.425 0-.712.288T11 6t.288.713T12 7h3v2h-1q-.425 0-.712.288T13 10t.288.713T14 11h1v2h-3q-.425 0-.712.288T11 14t.288.713T12 15zm-7 3q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zM8 4v12z"></svg:path>`,
})
export class MaterialSymbolsFilter3OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter3RoundedIcon],svg[material-symbols-filter-3-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15q.825 0 1.413-.587T17 13v-1.5q0-.65-.425-1.075T15.5 10q.65 0 1.075-.425T17 8.5V7q0-.825-.587-1.412T15 5h-3q-.425 0-.712.288T11 6t.288.713T12 7h3v2h-1q-.425 0-.712.288T13 10t.288.713T14 11h1v2h-3q-.425 0-.712.288T11 14t.288.713T12 15zm-7 3q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22z"></svg:path>`,
})
export class MaterialSymbolsFilter3RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter4OutlineRoundedIcon],svg[material-symbols-filter-4-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11v3q0 .425.288.713T16 15t.713-.288T17 14V6q0-.425-.288-.712T16 5t-.712.288T15 6v3h-2V6q0-.425-.288-.712T12 5t-.712.288T11 6v4q0 .425.288.713T12 11zm-7 7q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zM8 4v12z"></svg:path>`,
})
export class MaterialSymbolsFilter4OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter4RoundedIcon],svg[material-symbols-filter-4-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11v3q0 .425.288.713T16 15t.713-.288T17 14V6q0-.425-.288-.712T16 5t-.712.288T15 6v3h-2V6q0-.425-.288-.712T12 5t-.712.288T11 6v4q0 .425.288.713T12 11zm-7 7q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22z"></svg:path>`,
})
export class MaterialSymbolsFilter4RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter5OutlineRoundedIcon],svg[material-symbols-filter-5-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15q.825 0 1.413-.587T17 13v-2q0-.825-.587-1.412T15 9h-2V7h3q.425 0 .713-.288T17 6t-.288-.712T16 5h-4q-.425 0-.712.288T11 6v4q0 .425.288.713T12 11h3v2h-3q-.425 0-.712.288T11 14t.288.713T12 15zm-7 3q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zM8 4v12z"></svg:path>`,
})
export class MaterialSymbolsFilter5OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter5RoundedIcon],svg[material-symbols-filter-5-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15q.825 0 1.413-.587T17 13v-2q0-.825-.587-1.412T15 9h-2V7h3q.425 0 .713-.288T17 6t-.288-.712T16 5h-4q-.425 0-.712.288T11 6v4q0 .425.288.713T12 11h3v2h-3q-.425 0-.712.288T11 14t.288.713T12 15zm-7 3q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22z"></svg:path>`,
})
export class MaterialSymbolsFilter5RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter6OutlineRoundedIcon],svg[material-symbols-filter-6-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15h2q.825 0 1.413-.587T17 13v-2q0-.825-.587-1.412T15 9h-2V7h2q.425 0 .713-.288T16 6t-.288-.712T15 5h-2q-.825 0-1.412.588T11 7v6q0 .825.588 1.413T13 15m0-4h2v2h-2zm-5 7q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zM8 4v12z"></svg:path>`,
})
export class MaterialSymbolsFilter6OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter6RoundedIcon],svg[material-symbols-filter-6-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15h2q.825 0 1.413-.587T17 13v-2q0-.825-.587-1.412T15 9h-2V7h2q.425 0 .713-.288T16 6t-.288-.712T15 5h-2q-.825 0-1.412.588T11 7v6q0 .825.588 1.413T13 15m0-4h2v2h-2zm-5 7q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22z"></svg:path>`,
})
export class MaterialSymbolsFilter6RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter7OutlineRoundedIcon],svg[material-symbols-filter-7-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 7l-3.35 6.7q-.225.45.038.875t.762.425q.275 0 .475-.137t.325-.363l3.65-7.3q.05-.1.1-.425V6q0-.425-.288-.712T16 5h-4q-.425 0-.712.288T11 6t.288.713T12 7zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zM8 4v12z"></svg:path>`,
})
export class MaterialSymbolsFilter7OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter7RoundedIcon],svg[material-symbols-filter-7-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 7l-3.35 6.7q-.225.45.038.875t.762.425q.275 0 .475-.137t.325-.363l3.65-7.3q.05-.1.1-.425V6q0-.425-.288-.712T16 5h-4q-.425 0-.712.288T11 6t.288.713T12 7zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22z"></svg:path>`,
})
export class MaterialSymbolsFilter7RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter8OutlineRoundedIcon],svg[material-symbols-filter-8-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15h2q.825 0 1.413-.587T17 13v-1.5q0-.65-.425-1.075T15.5 10q.65 0 1.075-.425T17 8.5V7q0-.825-.587-1.412T15 5h-2q-.825 0-1.412.588T11 7v1.5q0 .65.425 1.075T12.5 10q-.65 0-1.075.425T11 11.5V13q0 .825.588 1.413T13 15m0-8h2v2h-2zm0 6v-2h2v2zm-5 5q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zM8 4v12z"></svg:path>`,
})
export class MaterialSymbolsFilter8OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter8RoundedIcon],svg[material-symbols-filter-8-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15h2q.825 0 1.413-.587T17 13v-1.5q0-.65-.425-1.075T15.5 10q.65 0 1.075-.425T17 8.5V7q0-.825-.587-1.412T15 5h-2q-.825 0-1.412.588T11 7v1.5q0 .65.425 1.075T12.5 10q-.65 0-1.075.425T11 11.5V13q0 .825.588 1.413T13 15m0-8h2v2h-2zm0 6v-2h2v2zm-5 5q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22z"></svg:path>`,
})
export class MaterialSymbolsFilter8RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter9OutlineRoundedIcon],svg[material-symbols-filter-9-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15q.825 0 1.413-.587T17 13V7q0-.825-.587-1.412T15 5h-2q-.825 0-1.412.588T11 7v2q0 .825.588 1.413T13 11h2v2h-2q-.425 0-.712.288T12 14t.288.713T13 15zm0-6h-2V7h2zm-7 9q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zM8 4v12z"></svg:path>`,
})
export class MaterialSymbolsFilter9OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter9PlusOutlineRoundedIcon],svg[material-symbols-filter-9-plus-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14q.825 0 1.413-.587T14 12V8q0-.825-.587-1.412T12 6h-1q-.825 0-1.412.588T9 8v1q0 .825.588 1.413T11 11h1v1h-1q-.425 0-.712.288T10 13t.288.713T11 14zm0-5h-1V8h1zm4.5 2v1q0 .425.288.713T17.5 13t.713-.288T18.5 12v-1H20V9h-1.5V8q0-.425-.288-.712T17.5 7t-.712.288T16.5 8v1h-1q-.425 0-.712.288T14.5 10t.288.713t.712.287zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zM8 4v12z"></svg:path>`,
})
export class MaterialSymbolsFilter9PlusOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter9PlusRoundedIcon],svg[material-symbols-filter-9-plus-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14q.825 0 1.413-.587T14 12V8q0-.825-.587-1.412T12 6h-1q-.825 0-1.412.588T9 8v1q0 .825.588 1.413T11 11h1v1h-1q-.425 0-.712.288T10 13t.288.713T11 14zm0-5h-1V8h1zm4.5 2v1q0 .425.288.713T17.5 13t.713-.288T18.5 12v-1h1q.425 0 .713-.288T20.5 10t-.288-.712T19.5 9h-1V8q0-.425-.288-.712T17.5 7t-.712.288T16.5 8v1h-1q-.425 0-.712.288T14.5 10t.288.713t.712.287zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22z"></svg:path>`,
})
export class MaterialSymbolsFilter9PlusRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter9RoundedIcon],svg[material-symbols-filter-9-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15q.825 0 1.413-.587T17 13V7q0-.825-.587-1.412T15 5h-2q-.825 0-1.412.588T11 7v2q0 .825.588 1.413T13 11h2v2h-2q-.425 0-.712.288T12 14t.288.713T13 15zm0-6h-2V7h2zm-7 9q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22z"></svg:path>`,
})
export class MaterialSymbolsFilter9RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterAltOffOutlineRoundedIcon],svg[material-symbols-filter-alt-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.8 11.975l-1.425-1.425L16.95 6H8.825l-2-2H19q.625 0 .9.55t-.1 1.05zm-.8 4.85V19q0 .425-.288.713T13 20h-2q-.425 0-.712-.288T10 19v-6.175l-7.9-7.9q-.275-.275-.275-.687t.275-.713q.3-.3.713-.3t.712.3L20.5 20.5q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288zm-.625-6.275"></svg:path>`,
})
export class MaterialSymbolsFilterAltOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterAltOffRoundedIcon],svg[material-symbols-filter-alt-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.8 11.975L6.825 4H19q.625 0 .9.55t-.1 1.05zm-.8 4.85V19q0 .425-.288.713T13 20h-2q-.425 0-.712-.288T10 19v-6.175l-7.9-7.9q-.275-.275-.275-.687t.275-.713q.3-.3.713-.3t.712.3L20.5 20.5q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288z"></svg:path>`,
})
export class MaterialSymbolsFilterAltOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterArrowRightRoundedIcon],svg[material-symbols-filter-arrow-right-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.175 16H16q-.425 0-.712-.288T15 15t.288-.712T16 14h3.175l-.9-.9Q18 12.825 18 12.413t.3-.713q.275-.275.7-.275t.7.275l2.6 2.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-2.6 2.6q-.275.275-.687.288T18.3 18.3q-.275-.275-.275-.7t.275-.7zM11 12.3L15.95 6h-9.9zM9 13L3.225 5.625q-.125-.15-.175-.312T3 5q0-.4.288-.7T4 4h14q.425 0 .713.3T19 5q0 .15-.05.313t-.175.312L13 13v6q0 .425-.288.713T12 20h-2q-.425 0-.712-.288T9 19z"></svg:path>`,
})
export class MaterialSymbolsFilterArrowRightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterCenterFocusOutlineRoundedIcon],svg[material-symbols-filter-center-focus-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-3q0-.425.288-.712T4 15t.713.288T5 16v3h3q.425 0 .713.288T9 20t-.288.713T8 21zm14 0h-3q-.425 0-.712-.288T15 20t.288-.712T16 19h3v-3q0-.425.288-.712T20 15t.713.288T21 16v3q0 .825-.587 1.413T19 21M3 8V5q0-.825.588-1.412T5 3h3q.425 0 .713.288T9 4t-.288.713T8 5H5v3q0 .425-.288.713T4 9t-.712-.288T3 8m16 0V5h-3q-.425 0-.712-.288T15 4t.288-.712T16 3h3q.825 0 1.413.588T21 5v3q0 .425-.288.713T20 9t-.712-.288T19 8m-7 7q-1.25 0-2.125-.875T9 12t.875-2.125T12 9t2.125.875T15 12t-.875 2.125T12 15m0-2q.425 0 .713-.288T13 12t-.288-.712T12 11t-.712.288T11 12t.288.713T12 13"></svg:path>`,
})
export class MaterialSymbolsFilterCenterFocusOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterCenterFocusRoundedIcon],svg[material-symbols-filter-center-focus-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-3q0-.425.288-.712T4 15t.713.288T5 16v3h3q.425 0 .713.288T9 20t-.288.713T8 21zm14 0h-3q-.425 0-.712-.288T15 20t.288-.712T16 19h3v-3q0-.425.288-.712T20 15t.713.288T21 16v3q0 .825-.587 1.413T19 21M3 8V5q0-.825.588-1.412T5 3h3q.425 0 .713.288T9 4t-.288.713T8 5H5v3q0 .425-.288.713T4 9t-.712-.288T3 8m16 0V5h-3q-.425 0-.712-.288T15 4t.288-.712T16 3h3q.825 0 1.413.588T21 5v3q0 .425-.288.713T20 9t-.712-.288T19 8m-7 7q-1.25 0-2.125-.875T9 12t.875-2.125T12 9t2.125.875T15 12t-.875 2.125T12 15"></svg:path>`,
})
export class MaterialSymbolsFilterCenterFocusRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterDramaOutlineRoundedIcon],svg[material-symbols-filter-drama-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 20q-2.3 0-3.9-1.6T1 14.5q0-1.95 1.213-3.437T5.25 9.15q.625-2.25 2.475-3.7T12 4q2.975 0 4.988 2.063T19 11q1.875.2 2.938 1.55T23 15.475q0 1.875-1.312 3.2T18.5 20zm0-2h12q1.05 0 1.775-.725T21 15.5t-.725-1.775T18.5 13H17v-2q0-2.075-1.463-3.538T12 6q-1.575 0-2.8.863T7.4 9.075q1.7.275 2.925 1.463T11.9 13.4q.1.425-.213.763t-.812.337q-.35 0-.612-.238T9.9 13.65q-.275-1.125-1.225-1.888T6.5 11q-1.45 0-2.475 1.025T3 14.5t1.025 2.475T6.5 18"></svg:path>`,
})
export class MaterialSymbolsFilterDramaOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterDramaRoundedIcon],svg[material-symbols-filter-drama-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 20q-2.3 0-3.9-1.6T1 14.5q0-1.825 1.338-3.162T5.5 10q1.6 0 2.838 1.05T9.9 13.625q.075.375.363.625t.637.25q.5 0 .8-.337t.225-.763q-.35-2.15-1.875-3.575T6.25 8q.45-1.85 2.038-2.925T12 4q2.95 0 4.975 2.025T19 11q1.575 0 2.788 1.4T23 15.5q0 1.875-1.312 3.188T18.5 20z"></svg:path>`,
})
export class MaterialSymbolsFilterDramaRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterFramesOutlineRoundedIcon],svg[material-symbols-filter-frames-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22q-.825 0-1.412-.587T2 20V6q0-.825.588-1.412T4 4h4L11.3.7q.3-.3.7-.3t.7.3L16 4h4q.825 0 1.413.588T22 6v14q0 .825-.587 1.413T20 22zm0-2h16V6H4zm2-3V9q0-.425.288-.712T7 8h10q.425 0 .713.288T18 9v8q0 .425-.288.713T17 18H7q-.425 0-.712-.288T6 17m2-1h8v-6H8zm4-3"></svg:path>`,
})
export class MaterialSymbolsFilterFramesOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterFramesRoundedIcon],svg[material-symbols-filter-frames-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22q-.825 0-1.412-.587T2 20V6q0-.825.588-1.412T4 4h4L11.3.7q.3-.3.7-.3t.7.3L16 4h4q.825 0 1.413.588T22 6v14q0 .825-.587 1.413T20 22zm0-2h16V6H4zm2-3V9q0-.425.288-.712T7 8h10q.425 0 .713.288T18 9v8q0 .425-.288.713T17 18H7q-.425 0-.712-.288T6 17"></svg:path>`,
})
export class MaterialSymbolsFilterFramesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterListOffRoundedIcon],svg[material-symbols-filter-list-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.075 21.9l-17-16.975q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3l17 17q.3.3.3.7t-.3.7t-.712.3t-.713-.3M16.25 13q-.425 0-.725-.288t-.3-.712q0-.4.288-.7t.737-.3H17q.425 0 .713.288T18 12t-.288.713T17 13zm-5-5q-.425 0-.725-.288t-.3-.712q0-.4.288-.7t.737-.3H20q.425 0 .713.288T21 7t-.288.713T20 8zM11 18q-.425 0-.712-.288T10 17t.288-.712T11 16h2q.425 0 .713.288T14 17t-.288.713T13 18zm-4-5q-.425 0-.712-.288T6 12t.288-.712T7 11h3.15v2zM4 8q-.425 0-.712-.288T3 7t.288-.712T4 6h1.15v2z"></svg:path>`,
})
export class MaterialSymbolsFilterListOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterListRoundedIcon],svg[material-symbols-filter-list-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18q-.425 0-.712-.288T10 17t.288-.712T11 16h2q.425 0 .713.288T14 17t-.288.713T13 18zm-4-5q-.425 0-.712-.288T6 12t.288-.712T7 11h10q.425 0 .713.288T18 12t-.288.713T17 13zM4 8q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"></svg:path>`,
})
export class MaterialSymbolsFilterListRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterNoneOutlineRoundedIcon],svg[material-symbols-filter-none-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zM8 4v12z"></svg:path>`,
})
export class MaterialSymbolsFilterNoneOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterNoneRoundedIcon],svg[material-symbols-filter-none-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22z"></svg:path>`,
})
export class MaterialSymbolsFilterNoneRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterOutlineRoundedIcon],svg[material-symbols-filter-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.25 12.5L12.1 11q-.15-.2-.4-.2t-.4.2l-1.675 2.2q-.2.25-.063.525t.463.275h7.95q.325 0 .462-.275t-.062-.525l-2.425-3.175q-.15-.2-.4-.2t-.4.2zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zM8 4v12z"></svg:path>`,
})
export class MaterialSymbolsFilterOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterRetroluxOutlineRoundedIcon],svg[material-symbols-filter-retrolux-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.325 21.2L12.8 19.65q-.425 1.05-1.312 1.7T9.5 22q-1.475 0-2.488-1.012T6 18.5t1.013-2.488T9.5 15q.35 0 .7.05t.65.2l-4.4-6.575q-.2-.3-.162-.65t.287-.6L11.3 2.7q.15-.15.325-.213T12 2.426t.375.063t.325.212l4.725 4.725q.25.25.288.6t-.163.65L13 15.5v1.55l2.75 2.75q.275.275.288.688t-.263.712q-.3.3-.725.3t-.725-.3M9.5 20q.625 0 1.063-.437T11 18.5t-.437-1.062T9.5 17t-1.062.438T8 18.5t.438 1.063T9.5 20m2.5-6.6l3.45-5.15L12 4.8L8.55 8.25zm0-4.3"></svg:path>`,
})
export class MaterialSymbolsFilterRetroluxOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterRetroluxRoundedIcon],svg[material-symbols-filter-retrolux-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.325 21.2L12.8 19.65q-.425 1.05-1.312 1.7T9.5 22q-1.475 0-2.488-1.012T6 18.5t1.013-2.488T9.5 15q.35 0 .7.05t.65.2l-4.4-6.575q-.2-.3-.162-.65t.287-.6L11.3 2.7q.15-.15.325-.213T12 2.426t.375.063t.325.212l4.725 4.725q.25.25.288.6t-.163.65L13 15.5v1.55l2.75 2.75q.275.275.288.688t-.263.712q-.3.3-.725.3t-.725-.3M9.5 20q.625 0 1.063-.437T11 18.5t-.437-1.062T9.5 17t-1.062.438T8 18.5t.438 1.063T9.5 20"></svg:path>`,
})
export class MaterialSymbolsFilterRetroluxRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterRoundedIcon],svg[material-symbols-filter-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.25 12.5L12.1 11q-.15-.2-.4-.2t-.4.2l-1.675 2.2q-.2.25-.063.525t.463.275h7.95q.325 0 .462-.275t-.062-.525l-2.425-3.175q-.15-.2-.4-.2t-.4.2zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22z"></svg:path>`,
})
export class MaterialSymbolsFilterRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterTiltShiftRoundedIcon],svg[material-symbols-filter-tilt-shift-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 14q.15.575.363 1.1t.487 1q.225.375.175.8t-.325.7t-.688.263t-.637-.363q-.525-.8-.888-1.65t-.562-1.8q-.1-.4.163-.725T3.025 13t.763.275t.462.725m.85-6.1q-.275.475-.487 1T4.25 10q-.125.45-.462.725T3.025 11t-.687-.3t-.163-.7q.2-.975.575-1.875t.9-1.65q.225-.325.625-.337t.675.262t.325.7t-.175.8m2.775 10.95q.5.3 1.025.525t1.075.375q.425.125.7.45t.275.75t-.3.675t-.7.175q-.925-.2-1.787-.55T6.5 20.375q-.35-.225-.387-.638t.237-.712q.3-.3.725-.35t.8.175m2.15-14.6q-.55.15-1.062.363t-1.013.512q-.4.225-.837.188t-.738-.338t-.275-.7t.375-.625q.825-.525 1.713-.887t1.837-.563q.375-.075.675.175t.3.675t-.275.75t-.7.45M12 15q-1.25 0-2.125-.875T9 12t.875-2.125T12 9t2.125.875T15 12t-.875 2.125T12 15m4.075 3.875q.375-.225.813-.187t.737.337t.275.713t-.375.612q-.8.525-1.7.888t-1.85.562q-.4.075-.712-.175t-.313-.675t.288-.75t.712-.45q.575-.15 1.1-.362t1.025-.513m-2.1-14.625q-.425-.125-.7-.45T13 3.05t.3-.675t.675-.175q.95.2 1.85.563t1.7.887q.35.225.375.625t-.25.7q-.3.3-.725.35T16.1 5.15q-.525-.3-1.05-.525t-1.075-.375m5.775 9.725q.125-.425.463-.7t.762-.275t.687.325t.163.725q-.2.95-.587 1.825T20.35 17.5q-.225.325-.625.35t-.675-.25t-.325-.712t.175-.813q.275-.5.488-1.012t.362-1.088M18.9 7.9q-.225-.375-.175-.8t.325-.7t.675-.25t.625.35q.55.8.925 1.675T21.85 10q.075.4-.188.7t-.687.3t-.763-.275T19.75 10q-.15-.575-.362-1.1t-.488-1"></svg:path>`,
})
export class MaterialSymbolsFilterTiltShiftRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterVintageOutlineRoundedIcon],svg[material-symbols-filter-vintage-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.05 22q-1.425 0-2.525-.9q-1.1-.9-1.375-2.3q-1.325.425-2.675-.05q-1.35-.475-2.075-1.65q-.75-1.2-.55-2.662q.2-1.463 1.3-2.438q-1.05-.95-1.262-2.35q-.213-1.4.462-2.6q.675-1.2 2.038-1.738Q6.75 4.775 8.1 5.2q.275-1.4 1.375-2.3Q10.575 2 12 2q1.425 0 2.525.9q1.1.9 1.375 2.3q1.4-.425 2.713.075q1.312.5 2.037 1.775q.675 1.25.488 2.612Q20.95 11.025 19.85 12q1.1.975 1.313 2.412q.212 1.438-.463 2.688q-.725 1.275-2.037 1.7q-1.313.425-2.713 0q-.275 1.4-1.375 2.3q-1.1.9-2.525.9Zm0-2q1.175 0 1.762-1.012Q14.4 17.975 13.8 17l-.7-1.15q-.275.075-.525.112q-.25.038-.525.038q-.25 0-.512-.038q-.263-.037-.538-.112L10.3 17q-.6.975-.012 1.988Q10.875 20 12.05 20Zm-7-4q.6 1.025 1.762 1.025q1.163 0 1.738-1.025l.65-1.15q-.2-.2-.375-.425q-.175-.225-.3-.475q-.125-.225-.225-.462q-.1-.238-.175-.488H6.8q-1.175 0-1.75.988q-.575.987 0 2.012Zm10.4 0q.575 1.025 1.738 1.025q1.162 0 1.762-1.025q.575-1.025 0-2.012Q18.375 13 17.2 13h-1.325q-.05.25-.162.488q-.113.237-.238.462q-.125.25-.3.475q-.175.225-.375.425ZM12 12Zm-3.875-1q.075-.275.187-.538q.113-.262.238-.487q.125-.225.288-.425q.162-.2.362-.4L8.55 8q-.575-1.025-1.738-1.025Q5.65 6.975 5.05 8q-.575 1.025 0 2.012Q5.625 11 6.8 11Zm9.075 0q1.175 0 1.75-.988q.575-.987 0-2.012q-.6-1.025-1.762-1.025q-1.163 0-1.738 1.025l-.65 1.15q.2.2.363.4q.162.2.287.425q.125.225.238.487q.112.263.187.538Zm-6.275-2.85q.275-.075.538-.113Q11.725 8 12 8t.538.037q.262.038.537.113L13.75 7q.575-.975 0-1.988Q13.175 4 12 4t-1.75 1q-.575 1 0 2Zm0 0q.275-.075.538-.113Q11.725 8 12 8t.538.037q.262.038.537.113q-.275-.075-.537-.113Q12.275 8 12 8t-.537.037q-.263.038-.538.113Zm-2.4 5.8q-.125-.225-.225-.462q-.1-.238-.175-.488q.075.25.175.488q.1.237.225.462q.125.25.3.475q.175.225.375.425q-.2-.2-.375-.425q-.175-.225-.3-.475Zm-.4-2.95q.075-.275.187-.538q.113-.262.238-.487q.125-.225.288-.425q.162-.2.362-.4q-.2.2-.362.4q-.163.2-.288.425q-.125.225-.238.487q-.112.263-.187.538Zm3.925 5q-.25 0-.512-.038q-.263-.037-.538-.112q.275.075.538.112q.262.038.512.038q.275 0 .525-.038q.25-.037.525-.112q-.275.075-.525.112q-.25.038-.525.038Zm2.75-1.15q.2-.2.375-.425q.175-.225.3-.475q.125-.225.238-.462q.112-.238.162-.488q-.05.25-.162.488q-.113.237-.238.462q-.125.25-.3.475q-.175.225-.375.425ZM15.875 11q-.075-.275-.187-.538q-.113-.262-.238-.487q-.125-.225-.287-.425q-.163-.2-.363-.4q.2.2.363.4q.162.2.287.425q.125.225.238.487q.112.263.187.538ZM12 14q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Z"></svg:path>`,
})
export class MaterialSymbolsFilterVintageOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFinanceModeRoundedIcon],svg[material-symbols-finance-mode-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11.75V7.5q0-.625.438-1.062T9.5 6t1.063.438T11 7.5v4.25q0 .625-.437 1.063T9.5 13.25t-1.062-.437T8 11.75m5-.225V3.5q0-.625.438-1.062T14.5 2t1.063.438T16 3.5v8.025q0 .75-.462 1.125t-1.038.375t-1.037-.375T13 11.525m-10 3.45V11.5q0-.625.438-1.062T4.5 10t1.063.438T6 11.5v3.475q0 .75-.462 1.125t-1.038.375t-1.037-.375T3 14.975m2.4 6.075q-.65 0-.913-.612T4.7 19.35l4.1-4.1q.275-.275.663-.3t.687.25L13 17.65l5.6-5.6H18q-.425 0-.712-.288T17 11.05t.288-.712t.712-.288h3q.425 0 .713.288t.287.712v3q0 .425-.288.713T21 15.05t-.712-.288T20 14.05v-.6l-6.25 6.25q-.275.275-.663.3t-.687-.25L9.55 17.3L6.1 20.75q-.125.125-.312.213t-.388.087"></svg:path>`,
})
export class MaterialSymbolsFinanceModeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFinanceRoundedIcon],svg[material-symbols-finance-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V4q0-.425.288-.712T4 3t.713.288T5 4v15h15q.425 0 .713.288T21 20t-.288.713T20 21zm2-3q-.425 0-.712-.288T6 17v-7q0-.425.288-.712T7 9h2q.425 0 .713.288T10 10v7q0 .425-.288.713T9 18zm5 0q-.425 0-.712-.288T11 17V5q0-.425.288-.712T12 4h2q.425 0 .713.288T15 5v12q0 .425-.288.713T14 18zm5 0q-.425 0-.712-.288T16 17v-3q0-.425.288-.712T17 13h2q.425 0 .713.288T20 14v3q0 .425-.288.713T19 18z"></svg:path>`,
})
export class MaterialSymbolsFinanceRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFindInPageOutlineRoundedIcon],svg[material-symbols-find-in-page-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8.075q.45 0 .85.188t.675.537l3.925 4.725q.225.275.35.6t.125.675V20q0 .675-.612.925T18.3 20.7L14 16.45q-.425.275-.925.413T12 17q-1.65 0-2.825-1.175T8 13t1.175-2.825T12 9t2.825 1.175T16 13q0 .575-.137 1.075T15.45 15L18 17.6V8.7L14.05 4H6v16h8.325q.5 0 .75.313t.25.687t-.25.688t-.75.312zm6-7q.825 0 1.413-.587T14 13t-.587-1.412T12 11t-1.412.588T10 13t.588 1.413T12 15m0-2"></svg:path>`,
})
export class MaterialSymbolsFindInPageOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFindInPageRoundedIcon],svg[material-symbols-find-in-page-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8.075q.45 0 .85.188t.675.537l3.925 4.725q.225.275.35.6t.125.675V17.8q0 .5-.462.688t-.813-.163L15.45 15q.275-.425.413-.925T16 13q0-1.65-1.175-2.825T12 9t-2.825 1.175T8 13t1.175 2.825T12 17q.575 0 1.075-.137T14 16.45l3.875 3.85q.475.475.225 1.088t-.925.612zm6-7q-.825 0-1.412-.587T10 13t.588-1.412T12 11t1.413.588T14 13t-.587 1.413T12 15"></svg:path>`,
})
export class MaterialSymbolsFindInPageRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFindReplaceRoundedIcon],svg[material-symbols-find-replace-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6q-1.575 0-2.838.863T6.35 9.125q-.15.375-.487.563t-.738.112t-.638-.387t-.112-.663q.675-2.1 2.475-3.425T11 4q1.475 0 2.763.562T16 6.1V5q0-.425.288-.712T17 4t.713.288T18 5v4q0 .425-.288.713T17 10h-4q-.425 0-.712-.288T12 9t.288-.712T13 8h2q-.725-.9-1.737-1.45T11 6m0 12q-1.475 0-2.762-.562T6 15.9V17q0 .425-.288.713T5 18t-.712-.288T4 17v-4q0-.425.288-.712T5 12h4q.425 0 .713.288T10 13t-.288.713T9 14H7q.725.9 1.738 1.45T11 16q1.55 0 2.788-.825T15.6 13q.175-.4.513-.638t.762-.162q.425.1.625.45t.075.75q-.175.5-.413.938t-.562.862l3.7 3.7q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-3.7-3.7q-.9.675-1.962 1.038T11 18"></svg:path>`,
})
export class MaterialSymbolsFindReplaceRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFingerprintOffRoundedIcon],svg[material-symbols-fingerprint-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.3 22.45L10.875 13q-.475.275-.725.713t-.25.937q0 2.3 1.388 4.025T15.025 21q.2.05.3.238t.05.387t-.225.3t-.375.05q-2.7-.7-4.287-2.687T8.9 14.65q0-.7.325-1.312t.925-1.038L9.1 11.25q-.85.65-1.3 1.525t-.45 1.875q0 1.875.638 3.3t2.137 2.975q.15.15.15.363t-.15.362t-.363.15t-.362-.15q-1.65-1.675-2.35-3.262t-.7-3.738q0-1.2.55-2.287t1.5-1.838L7.3 9.45q-1.45 1.35-2 2.475t-.55 2.725q0 .9.163 1.825t.512 1.8q.075.2 0 .375t-.275.25t-.387 0t-.263-.275q-.375-1.05-.55-2.025t-.175-1.95q0-1.825.638-3.187T6.6 8.725L5.575 7.7q-.5.425-.913.862T3.9 9.5q-.1.175-.3.213t-.4-.088Q3.025 9.5 3 9.3t.1-.375q.35-.525.8-1T4.875 7l-3.3-3.3q-.225-.225-.225-.537t.225-.538T2.1 2.4t.525.225l18.725 18.75q.225.225.225.538t-.225.537t-.525.225t-.525-.225m-3.1-7.3q-.2 0-.35-.137t-.15-.363q0-1.8-1.275-3.025t-3.025-1.35l-1-1q.15-.025.312-.025h.313q2.325 0 4 1.563T17.7 14.65q0 .225-.137.363t-.363.137M12.025 2.025q1.6 0 3.125.388t2.95 1.112q.225.125.263.3t-.038.35t-.25.275t-.425-.025q-1.325-.675-2.738-1.037t-2.887-.363q-1.45 0-2.838.325T6.526 4.4L5.8 3.675q1.425-.8 3-1.225t3.225-.425m0 2.45q2.65 0 5 1.138T20.95 8.9q.175.225.113.4t-.213.3t-.35.113t-.35-.213q-1.375-1.95-3.537-2.987t-4.588-1.038q-.975 0-1.912.175T8.3 6.175l-.75-.75q1.05-.475 2.163-.712t2.312-.238m0 2.35q3.375 0 5.8 2.25t2.425 5.575q0 .725-.325 1.313t-.85.987l-.7-.7q.4-.275.638-.687t.237-.913q0-2.9-2.125-4.875T12.05 7.8q-.5 0-.962.063t-.913.187l-.8-.8q.625-.2 1.288-.312t1.362-.113M16.85 19.95q-2.225 0-3.812-1.525t-1.588-3.75q0-.2.138-.35t.362-.15t.363.15t.137.35q0 1.8 1.3 3.025t3.1 1.225q.15 0 .425-.012t.575-.063q.225-.05.388.063t.212.337q.05.2-.075.35t-.325.2q-.45.125-.788.138t-.412.012"></svg:path>`,
})
export class MaterialSymbolsFingerprintOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFireExtinguisherOutlineRoundedIcon],svg[material-symbols-fire-extinguisher-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.975 18v-6.025l.25-.975h9.5l.25.975V18zM9 13v3h6v-3zm2.975-7.025q.425 0 .713-.288t.287-.712t-.287-.712t-.713-.288t-.712.288t-.288.712t.288.713t.712.287M16 5.55V4.4l-1.05.2q.025.1.025.188v.375q0 .087-.025.187zm-9.025 6.425q0-1.575.875-2.825t2.275-1.8q-.275-.2-.487-.462T9.275 6.3L5.4 5.55q-.175-.05-.288-.175T5 5.075v-.2q0-.175.113-.3T5.4 4.4l3.875-.75q.375-.75 1.088-1.225t1.612-.475q.575 0 1.1.225T14 2.75l2.8-.55q.475-.1.838.2t.362.775V6.75q0 .475-.363.788t-.837.212L14 7.2q-.05.05-.088.075t-.087.075q1.4.55 2.275 1.8t.875 2.825H15q0-1.25-.875-2.112T12 9t-2.125.863T9 11.975zm2 10.025q-.825 0-1.412-.587T6.975 20v-2H9v2h6v-2h1.975v2q0 .825-.587 1.413T14.975 22z"></svg:path>`,
})
export class MaterialSymbolsFireExtinguisherOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFireExtinguisherRoundedIcon],svg[material-symbols-fire-extinguisher-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.975 16v-3h10v3zM11.95 5.975q.425 0 .713-.288t.287-.712t-.287-.712t-.713-.288t-.712.288t-.288.712t.288.713t.712.287M7.05 11q.275-1.25 1.088-2.212t1.987-1.413q-.275-.225-.5-.488T9.25 6.3l-3.875-.75Q5.2 5.525 5.1 5.4T5 5.075V4.9q0-.2.1-.325t.275-.175l3.875-.725q.375-.775 1.1-1.237t1.6-.463q.6 0 1.113.213t.912.562L16.8 2.2q.475-.075.838.225T18 3.2v3.575q0 .475-.363.775t-.837.2l-2.825-.525q-.05.05-.087.075t-.088.075q1.175.45 1.988 1.413T16.875 11zm1.925 11q-.825 0-1.412-.587T6.975 20v-2h10v2q0 .825-.587 1.413T14.975 22z"></svg:path>`,
})
export class MaterialSymbolsFireExtinguisherRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFireHydrantOutlineRoundedIcon],svg[material-symbols-fire-hydrant-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20v-3H5q-.825 0-1.412-.587T3 15v-2q0-.825.588-1.412T5 11h1V8H5q-.425 0-.712-.288T4 7t.288-.712T5 6h1.35q.625-1.75 2.163-2.875T12 2t3.488 1.125T17.65 6H19q.425 0 .713.288T20 7t-.288.713T19 8h-1v3h1q.825 0 1.413.588T21 13v2q0 .825-.587 1.413T19 17h-1v3h1q.425 0 .713.288T20 21t-.288.713T19 22H5q-.425 0-.712-.288T4 21t.288-.712T5 20zM8.525 6h6.95q-.525-.9-1.437-1.45T12 4t-2.037.55T8.525 6M8 20h8v-5h3v-2h-3V8H8v5H5v2h3zm4-2.5q1.45 0 2.475-1.025T15.5 14t-1.025-2.475T12 10.5t-2.475 1.025T8.5 14t1.025 2.475T12 17.5m0-2q-.625 0-1.062-.437T10.5 14t.438-1.062T12 12.5t1.063.438T13.5 14t-.437 1.063T12 15.5M12 8"></svg:path>`,
})
export class MaterialSymbolsFireHydrantOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFireHydrantRoundedIcon],svg[material-symbols-fire-hydrant-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20v-3H5q-.825 0-1.412-.587T3 15v-2q0-.825.588-1.412T5 11h1V8H5q-.425 0-.712-.288T4 7t.288-.712T5 6h1.35q.625-1.75 2.163-2.875T12 2t3.488 1.125T17.65 6H19q.425 0 .713.288T20 7t-.288.713T19 8h-1v3h1q.825 0 1.413.588T21 13v2q0 .825-.587 1.413T19 17h-1v3h1q.425 0 .713.288T20 21t-.288.713T19 22H5q-.425 0-.712-.288T4 21t.288-.712T5 20zm6-2.5q1.45 0 2.475-1.025T15.5 14t-1.025-2.475T12 10.5t-2.475 1.025T8.5 14t1.025 2.475T12 17.5m0-2q-.625 0-1.062-.437T10.5 14t.438-1.062T12 12.5t1.063.438T13.5 14t-.437 1.063T12 15.5"></svg:path>`,
})
export class MaterialSymbolsFireHydrantRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFireTruckOutlineRoundedIcon],svg[material-symbols-fire-truck-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21q-1.25 0-2.125-.875T4 18H3q-.825 0-1.412-.587T1 16v-3q0-.825.588-1.412T3 11h9V7q0-.825.588-1.412T14 5h2V4q0-.425.288-.712T17 3h1q.425 0 .713.288T19 4v1h.55q.65 0 1.175.375t.725 1l1.45 4.3q.05.15.075.313t.025.337V16q0 .825-.587 1.413T21 18h-1q0 1.25-.875 2.125T17 21t-2.125-.875T14 18h-4q0 1.25-.875 2.125T7 21m0-2q.425 0 .713-.288T8 18t-.288-.712T7 17t-.712.288T6 18t.288.713T7 19m10 0q.425 0 .713-.288T18 18t-.288-.712T17 17t-.712.288T16 18t.288.713T17 19M3 13v3h1.775q.425-.475 1-.737T7 15t1.225.263t1 .737H12v-3zm11 3h.775q.425-.475 1-.737T17 15t1.225.263t1 .737H21v-3h-7zm0-5h6.9l-1.35-4H14zM2 8.5v-2h-.25q-.325 0-.537-.213T1 5.75t.213-.537T1.75 5h8.5q.325 0 .538.213T11 5.75t-.213.538t-.537.212H10v2h.25q.325 0 .538.213T11 9.25t-.213.538t-.537.212h-8.5q-.325 0-.537-.213T1 9.25t.213-.537t.537-.213zm1.5 0h1.75v-2H3.5zm3.25 0H8.5v-2H6.75zM3 13h9zm11 0h7z"></svg:path>`,
})
export class MaterialSymbolsFireTruckOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFireTruckRoundedIcon],svg[material-symbols-fire-truck-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21q-1.25 0-2.125-.875T4 18H3q-.825 0-1.412-.587T1 16v-3q0-.825.588-1.412T3 11h9V7q0-.825.588-1.412T14 5h2V4q0-.425.288-.712T17 3h1q.425 0 .713.288T19 4v1h.55q.65 0 1.175.375t.725 1l1.45 4.3q.05.15.075.313t.025.337V16q0 .825-.587 1.413T21 18h-1q0 1.25-.875 2.125T17 21t-2.125-.875T14 18h-4q0 1.25-.875 2.125T7 21m0-2q.425 0 .713-.288T8 18t-.288-.712T7 17t-.712.288T6 18t.288.713T7 19m10 0q.425 0 .713-.288T18 18t-.288-.712T17 17t-.712.288T16 18t.288.713T17 19m-3-8h6.9l-1.35-4H14zM2 8.5v-2h-.25q-.325 0-.537-.213T1 5.75t.213-.537T1.75 5h8.5q.325 0 .538.213T11 5.75t-.213.538t-.537.212H10v2h.25q.325 0 .538.213T11 9.25t-.213.538t-.537.212h-8.5q-.325 0-.537-.213T1 9.25t.213-.537t.537-.213zm1.5 0h1.75v-2H3.5zm3.25 0H8.5v-2H6.75z"></svg:path>`,
})
export class MaterialSymbolsFireTruckRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFireplaceOutlineRoundedIcon],svg[material-symbols-fireplace-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.6 16.95q.325.275.688.388t.712.112q.725 0 1.313-.462T14 15.65q.125-1.175-.725-1.737T12 12.45q-.125.35-.125.65t.075.65q.075.425.175.8t.025.8q-.125.45-.55.925t-1 .675M2 20V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.587 1.413T20 22H4q-.825 0-1.412-.587T2 20m10-2q1.25 0 2.125-.875T15 15q0-.6-.25-1t-.7-.75q-.95-.675-1.588-1.412T11.45 10.35q-1.1.875-1.775 1.988T9 14.95q0 .875.9 1.963T12 18m-8 2h2v-1q0-.425.288-.712T7 18h1.25q-.575-.725-.913-1.525T7 14.95q0-2.625 1.2-4.212t3.375-2.888q.25-.15.5-.15t.475.125t.375.35t.175.5q.05.85.725 1.65T15.15 11.6q.825.6 1.338 1.413T17 15q0 .875-.275 1.613T16 18h1q.425 0 .713.288T18 19v1h2V4H4zm8-2"></svg:path>`,
})
export class MaterialSymbolsFireplaceOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFireplaceRoundedIcon],svg[material-symbols-fireplace-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.6 16.95q.325.275.688.388t.712.112q.725 0 1.313-.462T14 15.65q.125-1.175-.725-1.737T12 12.45q-.125.35-.125.65t.075.65q.075.425.175.8t.025.8q-.125.45-.55.925t-1 .675M2 20V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.587 1.413T20 22H4q-.825 0-1.412-.587T2 20m2 0h2v-1q0-.425.288-.712T7 18h1.25q-.575-.725-.913-1.525T7 14.95q0-2.625 1.2-4.212t3.375-2.888q.25-.15.5-.15t.475.125t.375.35t.175.5q.05.85.725 1.65T15.15 11.6q.825.6 1.338 1.413T17 15q0 .875-.275 1.613T16 18h1q.425 0 .713.288T18 19v1h2V4H4z"></svg:path>`,
})
export class MaterialSymbolsFireplaceRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFirstPageRoundedIcon],svg[material-symbols-first-page-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18q-.425 0-.712-.288T6 17V7q0-.425.288-.712T7 6t.713.288T8 7v10q0 .425-.288.713T7 18m6.8-6l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T11.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"></svg:path>`,
})
export class MaterialSymbolsFirstPageRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitPageHeightOutlineRoundedIcon],svg[material-symbols-fit-page-height-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm12-2V4H6v16zm0-16H6zm-7.8 5h3.6q.35 0 .475-.3t-.125-.55L12.7 6.7q-.3-.3-.7-.3t-.7.3L9.85 8.15q-.25.25-.125.55t.475.3m2.5 8.3l1.45-1.45q.25-.25.125-.55T13.8 15h-3.6q-.35 0-.475.3t.125.55l1.45 1.45q.3.3.7.3t.7-.3"></svg:path>`,
})
export class MaterialSymbolsFitPageHeightOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitPageHeightRoundedIcon],svg[material-symbols-fit-page-height-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm4.2-13h3.6q.35 0 .475-.3t-.125-.55L12.7 6.7q-.3-.3-.7-.3t-.7.3L9.85 8.15q-.25.25-.125.55t.475.3m2.5 8.3l1.45-1.45q.25-.25.125-.55T13.8 15h-3.6q-.35 0-.475.3t.125.55l1.45 1.45q.3.3.7.3t.7-.3"></svg:path>`,
})
export class MaterialSymbolsFitPageHeightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitPageRoundedIcon],svg[material-symbols-fit-page-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V4q0-.425.288-.712T4 3t.713.288T5 4v16q0 .425-.288.713T4 21t-.712-.288T3 20m16 0V4q0-.425.288-.712T20 3t.713.288T21 4v16q0 .425-.288.713T20 21t-.712-.288T19 20M12 9q-.425 0-.712-.288T11 8t.288-.712T12 7t.713.288T13 8t-.288.713T12 9m-4 4q-.425 0-.712-.288T7 12t.288-.712T8 11t.713.288T9 12t-.288.713T8 13m4 0q-.425 0-.712-.288T11 12t.288-.712T12 11t.713.288T13 12t-.288.713T12 13m4 0q-.425 0-.712-.288T15 12t.288-.712T16 11t.713.288T17 12t-.288.713T16 13m-4 4q-.425 0-.712-.288T11 16t.288-.712T12 15t.713.288T13 16t-.288.713T12 17m0-12q-.425 0-.712-.288T11 4t.288-.712T12 3t.713.288T13 4t-.288.713T12 5m0 16q-.425 0-.712-.288T11 20t.288-.712T12 19t.713.288T13 20t-.288.713T12 21"></svg:path>`,
})
export class MaterialSymbolsFitPageRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitPageWidthOutlineRoundedIcon],svg[material-symbols-fit-page-width-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 6H4v12h16zM4 6v12zm5 7.8v-3.6q0-.35-.3-.475t-.55.125L6.7 11.3q-.3.3-.3.7t.3.7l1.45 1.45q.25.25.55.125T9 13.8m8.3-2.5l-1.45-1.45q-.25-.25-.55-.125t-.3.475v3.6q0 .35.3.475t.55-.125l1.45-1.45q.3-.3.3-.7t-.3-.7"></svg:path>`,
})
export class MaterialSymbolsFitPageWidthOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitPageWidthRoundedIcon],svg[material-symbols-fit-page-width-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm5-6.2v-3.6q0-.35-.3-.475t-.55.125L6.7 11.3q-.3.3-.3.7t.3.7l1.45 1.45q.25.25.55.125T9 13.8m8.3-2.5l-1.45-1.45q-.25-.25-.55-.125t-.3.475v3.6q0 .35.3.475t.55-.125l1.45-1.45q.3-.3.3-.7t-.3-.7"></svg:path>`,
})
export class MaterialSymbolsFitPageWidthRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitScreenOutlineRoundedIcon],svg[material-symbols-fit-screen-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8V6h-2q-.425 0-.712-.288T17 5t.288-.712T18 4h2q.825 0 1.413.588T22 6v2q0 .425-.288.713T21 9t-.712-.288T20 8M2 8V6q0-.825.588-1.412T4 4h2q.425 0 .713.288T7 5t-.288.713T6 6H4v2q0 .425-.288.713T3 9t-.712-.288T2 8m18 12h-2q-.425 0-.712-.288T17 19t.288-.712T18 18h2v-2q0-.425.288-.712T21 15t.713.288T22 16v2q0 .825-.587 1.413T20 20M4 20q-.825 0-1.412-.587T2 18v-2q0-.425.288-.712T3 15t.713.288T4 16v2h2q.425 0 .713.288T7 19t-.288.713T6 20zm2-6v-4q0-.825.588-1.412T8 8h8q.825 0 1.413.588T18 10v4q0 .825-.587 1.413T16 16H8q-.825 0-1.412-.587T6 14m2 0h8v-4H8zm0 0v-4z"></svg:path>`,
})
export class MaterialSymbolsFitScreenOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitScreenRoundedIcon],svg[material-symbols-fit-screen-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8V6h-2q-.425 0-.712-.288T17 5t.288-.712T18 4h2q.825 0 1.413.588T22 6v2q0 .425-.288.713T21 9t-.712-.288T20 8M2 8V6q0-.825.588-1.412T4 4h2q.425 0 .713.288T7 5t-.288.713T6 6H4v2q0 .425-.288.713T3 9t-.712-.288T2 8m18 12h-2q-.425 0-.712-.288T17 19t.288-.712T18 18h2v-2q0-.425.288-.712T21 15t.713.288T22 16v2q0 .825-.587 1.413T20 20M4 20q-.825 0-1.412-.587T2 18v-2q0-.425.288-.712T3 15t.713.288T4 16v2h2q.425 0 .713.288T7 19t-.288.713T6 20zm2-6v-4q0-.825.588-1.412T8 8h8q.825 0 1.413.588T18 10v4q0 .825-.587 1.413T16 16H8q-.825 0-1.412-.587T6 14"></svg:path>`,
})
export class MaterialSymbolsFitScreenRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitWidthRoundedIcon],svg[material-symbols-fit-width-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V4q0-.425.288-.712T4 3t.713.288T5 4v16q0 .425-.288.713T4 21t-.712-.288T3 20m16 0V4q0-.425.288-.712T20 3t.713.288T21 4v16q0 .425-.288.713T20 21t-.712-.288T19 20m-7-7q-.425 0-.712-.288T11 12t.288-.712T12 11t.713.288T13 12t-.288.713T12 13m-4 0q-.425 0-.712-.288T7 12t.288-.712T8 11t.713.288T9 12t-.288.713T8 13m8 0q-.425 0-.712-.288T15 12t.288-.712T16 11t.713.288T17 12t-.288.713T16 13"></svg:path>`,
})
export class MaterialSymbolsFitWidthRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitbitArrowDownwardRoundedIcon],svg[material-symbols-fitbit-arrow-downward-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14.175V7q0-.425.288-.713T12 6q.425 0 .713.288T13 7v7.175l2.9-2.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-4.6 4.6q-.3.3-.7.3t-.7-.3l-4.6-4.6q-.275-.275-.288-.687T6.7 11.3q.275-.275.7-.275t.7.275l2.9 2.875Z"></svg:path>`,
})
export class MaterialSymbolsFitbitArrowDownwardRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitbitArrowUpwardRoundedIcon],svg[material-symbols-fitbit-arrow-upward-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9.825L8.1 12.7q-.275.275-.688.288T6.7 12.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275L13 9.825V17q0 .425-.288.713T12 18q-.425 0-.713-.288T11 17V9.825Z"></svg:path>`,
})
export class MaterialSymbolsFitbitArrowUpwardRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitbitCheckSmallRoundedIcon],svg[material-symbols-fitbit-check-small-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.5 13.4l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-5.6 5.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"></svg:path>`,
})
export class MaterialSymbolsFitbitCheckSmallRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitbitHourlyActivityOutlineRoundedIcon],svg[material-symbols-fitbit-hourly-activity-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13q-.425-.025-.713-.3T19 12q0-.425.288-.713T20 11h.8q-.25-1.225-.775-2.313t-1.3-2.012L17.7 7.7q-.3.3-.7.3t-.7-.3Q16 7.4 16 7t.3-.7l1.025-1.05q-1.175-.95-2.587-1.525t-2.988-.7q-.35-.05-.563-.337T10.976 2q0-.425.275-.713t.7-.237q2.175.175 4.088 1.075t3.375 2.35q1.462 1.45 2.387 3.363t1.1 4.087q.05.425-.262.75T21.9 13H20ZM4.95 11q.925 0 1.787.325t1.563.95L16.875 20h.425q.35 0 .525-.175T18 19.3v-.313q0-.137-.2-.337l-4.2-4.2l-1.525-4.65l-1.625.375q-.875.225-1.662-.4T8 8.225V6.45l-.3-.175l-3.375 4.5q-.025.025-.05.087t-.05.138h.725Zm.025 2H4.6l7.25 6.575q.25.225.5.325t.575.1h.975l-6.925-6.225q-.375-.35-.937-.563T4.975 13Zm7.975 9q-.7 0-1.325-.238T10.5 21.05L3.2 14.4q-1.05-.95-1.188-2.325t.713-2.5L6.2 4.95q.425-.55 1.038-.712T8.45 4.4l.55.325q.5.25.75.663t.25.937v1.9l1.75-.425q.725-.175 1.325.163T13.9 9l1.475 4.4l3.825 3.825q.475.475.638.988T20 19.3q0 1.15-.775 1.925T17.3 22h-4.35Z"></svg:path>`,
})
export class MaterialSymbolsFitbitHourlyActivityOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitbitHourlyActivityRoundedIcon],svg[material-symbols-fitbit-hourly-activity-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13q-.425-.025-.713-.3T19 12q0-.425.288-.713T20 11h.8q-.25-1.225-.775-2.313t-1.3-2.012L17.7 7.7q-.3.3-.7.3t-.7-.3Q16 7.4 16 7t.3-.7l1.025-1.05q-1.175-.95-2.587-1.525t-2.988-.7q-.35-.05-.563-.337T10.976 2q0-.425.275-.713t.7-.237q2.175.175 4.088 1.075t3.375 2.35q1.462 1.45 2.387 3.363t1.1 4.087q.05.425-.262.75T21.9 13H20ZM4.95 11q.925 0 1.787.325t1.563.95L18.675 21.6q.575-.425.95-.938T20 19.3q0-.575-.163-1.088t-.637-.987L15.375 13.4L13.9 9q-.225-.7-.825-1.038T11.75 7.8L10 8.225v-1.9q0-.525-.25-.937T9 4.725L8.45 4.4q-.6-.325-1.213-.163T6.2 4.95L2.725 9.575q-.2.275-.363.688T2.1 11h2.85Zm0 2h-2.7q.125.275.313.638t.612.762l7.325 6.65q.5.475 1.113.713t1.312.237H16.1l-9.125-8.225q-.4-.35-.95-.563T4.95 13Z"></svg:path>`,
})
export class MaterialSymbolsFitbitHourlyActivityRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitnessCenterRoundedIcon],svg[material-symbols-fitness-center-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.05 8.45L4.2 11.3q-.275.275-.687.288T2.8 11.3q-.275-.275-.287-.687t.262-.713l.725-.75l-.7-.7q-.3-.3-.3-.7t.3-.7l1.4-1.4l-.725-.75Q3.2 4.625 3.2 4.213t.3-.713q.275-.275.688-.287t.712.262l.75.725l1.4-1.4q.3-.3.7-.3t.7.3l.7.7l.75-.725q.275-.275.688-.275t.712.3q.275.275.275.7t-.275.7L8.45 7.05l8.5 8.5l2.85-2.85q.275-.275.688-.287t.712.287q.275.275.288.688t-.263.712l-.725.75l.7.7q.3.3.3.7t-.3.7l-1.4 1.4l.725.75q.275.275.275.687t-.3.713q-.275.275-.687.288t-.713-.263l-.75-.725l-1.4 1.4q-.3.3-.7.3t-.7-.3l-.7-.7l-.75.725q-.275.275-.687.275t-.713-.3q-.275-.275-.275-.7t.275-.7l2.85-2.85z"></svg:path>`,
})
export class MaterialSymbolsFitnessCenterRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitnessTrackerOutlineRoundedIcon],svg[material-symbols-fitness-tracker-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 22q-.35 0-.612-.187t-.363-.513L7.8 18.025q-.375-.4-.587-.925T7 16V8q0-.6.213-1.125T7.8 5.95l.975-3.25q.1-.325.363-.513T9.75 2h4.5q.35 0 .6.2t.35.525l.95 3.2q.4.425.625.95T17 8v8q0 .6-.213 1.125t-.612.95l-.95 3.2q-.1.325-.362.525t-.613.2zm.725-2H13.5l.3-1h-3.625zM10 17h4q.425 0 .713-.288T15 16V8q0-.425-.288-.712T14 7h-4q-.425 0-.712.288T9 8v8q0 .425.288.713T10 17m.175-12H13.8l-.3-1h-3.025zm1.8 0"></svg:path>`,
})
export class MaterialSymbolsFitnessTrackerOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitnessTrackerRoundedIcon],svg[material-symbols-fitness-tracker-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 22q-.35 0-.612-.187t-.363-.513L7.8 18.025q-.375-.4-.587-.925T7 16V8q0-.6.213-1.125T7.8 5.95l.975-3.25q.1-.325.363-.513T9.75 2h4.5q.35 0 .6.2t.35.525l.95 3.2q.4.425.625.95T17 8v8q0 .6-.213 1.125t-.612.95l-.95 3.2q-.1.325-.362.525t-.613.2zm.25-5h4q.425 0 .713-.288T15 16V8q0-.425-.288-.712T14 7h-4q-.425 0-.712.288T9 8v8q0 .425.288.713T10 17"></svg:path>`,
})
export class MaterialSymbolsFitnessTrackerRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlag2OutlineRoundedIcon],svg[material-symbols-flag-2-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13v8q0 .425-.288.713T6 22t-.712-.288T5 21V4q0-.425.288-.712T6 3h13.525q.275 0 .488.125t.337.325t.162.438t-.062.487L19 8l1.45 3.625q.1.25.063.488t-.163.437t-.337.325t-.488.125zm0-2h11.05l-.9-2.25Q17 8.4 17 8t.15-.75l.9-2.25H7zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsFlag2OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlag2RoundedIcon],svg[material-symbols-flag-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13v8q0 .425-.288.713T6 22t-.712-.288T5 21V4q0-.425.288-.712T6 3h13.525q.275 0 .488.125t.337.325t.162.438t-.062.487L19 8l1.45 3.625q.1.25.063.488t-.163.437t-.337.325t-.488.125z"></svg:path>`,
})
export class MaterialSymbolsFlag2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlagCheckOutlineRoundedIcon],svg[material-symbols-flag-check-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21q-.425 0-.712-.288T5 20V5q0-.425.288-.712T6 4h4.125q.425 0 .713.288t.287.712t-.288.713t-.712.287H7v6h6.425q.35 0 .625.225t.35.575l.25 1.2H18v-.45q0-.425.288-.712T19 12.55t.713.288t.287.712V15q0 .425-.288.713T19 16h-5.175q-.35 0-.625-.225t-.35-.575L12.6 14H7v6q0 .425-.288.713T6 21M18 .85q2.075 0 3.538 1.463T23 5.85t-1.463 3.538T18 10.85t-3.537-1.462T13 5.85t1.463-3.537T18 .85m-.725 5.125l-.45-.45Q16.6 5.3 16.3 5.312t-.525.238t-.225.525t.225.525l.8.8q.3.3.7.3t.7-.3l2.25-2.225q.225-.225.225-.538t-.225-.537t-.525-.213t-.525.213z"></svg:path>`,
})
export class MaterialSymbolsFlagCheckOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlagCheckRoundedIcon],svg[material-symbols-flag-check-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21q-.425 0-.712-.288T5 20V5q0-.425.288-.712T6 4h4.125q.425 0 .7.35t.225.775q-.025.225-.038.438T11 6q.05 2.875 2.088 4.863T18 12.85q.225 0 .45-.012t.425-.038q.45-.05.788.225t.337.7V15q0 .425-.288.713T19 16h-5.175q-.35 0-.625-.225t-.35-.575L12.6 14H7v6q0 .425-.288.713T6 21M18 .85q2.075 0 3.538 1.463T23 5.85t-1.463 3.538T18 10.85t-3.537-1.462T13 5.85t1.463-3.537T18 .85m-.725 5.125l-.45-.45Q16.6 5.3 16.3 5.312t-.525.238t-.225.525t.225.525l.8.8q.3.3.7.3t.7-.3l2.25-2.225q.225-.225.225-.538t-.225-.537t-.525-.213t-.525.213z"></svg:path>`,
})
export class MaterialSymbolsFlagCheckRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlagCircleOutlineRoundedIcon],svg[material-symbols-flag-circle-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 13H12l.725 1.45q.125.275.375.413t.525.137H17q.425 0 .713-.288T18 14v-4q0-.425-.288-.712T17 9h-2l-.725-1.45q-.125-.275-.375-.413T13.375 7H9q-.425 0-.712.288T8 8v9.25q0 .325.213.538T8.75 18t.538-.213t.212-.537zm4.425.5l-1-2H9.5v-3h3.575l1 2H16.5v3zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></svg:path>`,
})
export class MaterialSymbolsFlagCircleOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlagCircleRoundedIcon],svg[material-symbols-flag-circle-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 13H12l.725 1.45q.125.275.375.413t.525.137H17q.425 0 .713-.288T18 14v-4q0-.425-.288-.712T17 9h-2l-.725-1.45q-.125-.275-.375-.413T13.375 7H9q-.425 0-.712.288T8 8v9.25q0 .325.213.538T8.75 18t.538-.213t.212-.537zm2.5 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsFlagCircleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlagOutlineRoundedIcon],svg[material-symbols-flag-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14v6q0 .425-.288.713T6 21t-.712-.288T5 20V5q0-.425.288-.712T6 4h7.175q.35 0 .625.225t.35.575L14.4 6H19q.425 0 .713.288T20 7v8q0 .425-.288.713T19 16h-5.175q-.35 0-.625-.225t-.35-.575L12.6 14zm7.65 0H18V8h-4.425q-.35 0-.625-.225T12.6 7.2L12.35 6H7v6h6.425q.35 0 .625.225t.35.575zm-2.15-4"></svg:path>`,
})
export class MaterialSymbolsFlagOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlagRoundedIcon],svg[material-symbols-flag-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14v6q0 .425-.288.713T6 21t-.712-.288T5 20V5q0-.425.288-.712T6 4h7.175q.35 0 .625.225t.35.575L14.4 6H19q.425 0 .713.288T20 7v8q0 .425-.288.713T19 16h-5.175q-.35 0-.625-.225t-.35-.575L12.6 14z"></svg:path>`,
})
export class MaterialSymbolsFlagRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlakyRoundedIcon],svg[material-symbols-flaky-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22M8.75 9.8l.875.9q.225.225.525.225t.525-.225t.225-.537t-.225-.538L9.8 8.75l.9-.875q.225-.225.225-.525t-.225-.525t-.537-.225t-.538.225L8.75 7.7l-.875-.9q-.225-.225-.525-.225t-.525.225t-.225.538t.225.537l.875.875l-.9.875q-.225.225-.225.525t.225.525t.538.225t.537-.225zM12 20q3.325 0 5.663-2.337T20 12q0-1.65-.625-3.1T17.65 6.35l-11.3 11.3q1.1 1.1 2.55 1.725T12 20m2.05-4.525l1.975-1.95q.225-.2.525-.212t.525.212t.225.525t-.225.525L14.75 16.9q-.3.3-.7.3t-.7-.3l-1.175-1.175q-.225-.225-.225-.525t.225-.525t.538-.225t.537.225z"></svg:path>`,
})
export class MaterialSymbolsFlakyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlareRoundedIcon],svg[material-symbols-flare-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12q0 .425-.288.713T6 13H2q-.425 0-.712-.288T1 12t.288-.712T2 11h4q.425 0 .713.288T7 12m1.45-3.55q-.275.275-.7.275t-.7-.275l-.7-.7q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l.7.7q.275.275.275.7t-.275.7M11 6V2q0-.425.288-.712T12 1t.713.288T13 2v4q0 .425-.288.713T12 7t-.712-.288T11 6m4.55 2.45q-.275-.275-.275-.7t.275-.7l.7-.7q.275-.275.7-.275t.7.275t.275.7t-.275.7l-.7.7q-.275.275-.7.275t-.7-.275M17 12q0-.425.288-.712T18 11h4q.425 0 .713.288T23 12t-.288.713T22 13h-4q-.425 0-.712-.288T17 12m-5 3q-1.25 0-2.125-.875T9 12t.875-2.125T12 9t2.125.875T15 12t-.875 2.125T12 15m3.55.55q.275-.275.7-.275t.7.275l.7.7q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-.7-.7q-.275-.275-.275-.7t.275-.7m-7.1 0q.275.275.275.7t-.275.7l-.7.7q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l.7-.7q.275-.275.7-.275t.7.275M12 17q.425 0 .713.288T13 18v4q0 .425-.288.713T12 23t-.712-.288T11 22v-4q0-.425.288-.712T12 17"></svg:path>`,
})
export class MaterialSymbolsFlareRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlashAutoOutlineRoundedIcon],svg[material-symbols-flash-auto-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.975 8.7l-.625 1.825q-.075.2-.262.338t-.413.137q-.375 0-.587-.312T15 10.025L17.7 2.8q.125-.35.438-.55t.662-.2q.375 0 .688.238t.437.587l2.725 7.175q.125.35-.075.65T22 11q-.225 0-.425-.137T21.3 10.5l-.625-1.8zm.45-1.3h2.75L18.85 3.65h-.05zM7 15.6l3.2-4.6H7.35l2-7H4v8h3zm-1.475 4.725q-.225-.075-.375-.262T5 19.6V14H4q-.825 0-1.412-.587T2 12V4q0-.825.588-1.412T4 2h5.85q.8 0 1.288.625T11.425 4L10 9h1.125q.9 0 1.338.8t-.088 1.55l-6 8.675q-.15.225-.387.3t-.463 0M7 12H4z"></svg:path>`,
})
export class MaterialSymbolsFlashAutoOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlashAutoRoundedIcon],svg[material-symbols-flash-auto-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.975 8.7l-.625 1.825q-.075.2-.262.338t-.413.137q-.375 0-.587-.312T15 10.025L17.7 2.8q.125-.35.438-.55t.662-.2q.375 0 .688.238t.437.587l2.725 7.175q.125.35-.075.65T22 11q-.225 0-.425-.137T21.3 10.5l-.625-1.8zm.45-1.3h2.75L18.85 3.65h-.05zm-11.9 12.925q-.225-.075-.375-.262T5 19.6V14H4q-.825 0-1.412-.587T2 12V4q0-.825.588-1.412T4 2h5.85q.8 0 1.288.625T11.425 4L10 9h1.125q.9 0 1.338.8t-.088 1.55l-6 8.675q-.15.225-.387.3t-.463 0"></svg:path>`,
})
export class MaterialSymbolsFlashAutoRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlashOffOutlineRoundedIcon],svg[material-symbols-flash-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.425 4L15 9h1.125q.9 0 1.338.8t-.088 1.55l-.625.9q-.275.375-.725.425t-.8-.3q-.25-.25-.288-.6t.163-.65l.1-.125h-1.525q-.5 0-.8-.387t-.175-.888L14.35 4H8q-.425 0-.712-.288T7 3t.288-.712T8 2h6.85q.8 0 1.288.625T16.425 4m2.65 17.9l-5.325-5.3l-2.375 3.425q-.15.225-.387.3t-.463 0t-.375-.262T10 19.6V14H9q-.825 0-1.412-.587T7 12V9.85L2.075 4.925q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3l17 17q.3.3.3.7t-.3.7t-.712.3t-.713-.3M11.1 7.9"></svg:path>`,
})
export class MaterialSymbolsFlashOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlashOffRoundedIcon],svg[material-symbols-flash-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.225 12.375L7.45 4.6q-.225-.225-.325-.462t-.1-.513q0-.625.5-1.125T8.75 2h6.1q.8 0 1.288.625T16.425 4L15 9h1.125q.925 0 1.338.8t-.088 1.55l-.625.9q-.275.375-.725.425t-.8-.3m3.85 9.525l-5.325-5.3l-2.375 3.425q-.125.2-.363.288t-.487.012t-.388-.275T10 19.6V14H9q-.825 0-1.412-.587T7 12V9.85L2.075 4.925q-.3-.3-.288-.712T2.1 3.5t.713-.3t.712.3l16.975 17q.3.3.3.7t-.3.7t-.712.3t-.713-.3"></svg:path>`,
})
export class MaterialSymbolsFlashOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlashOnOutlineRoundedIcon],svg[material-symbols-flash-on-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.6l3.2-4.6h-2.85l2-7H9v8h3zm5.375-4.25l-6 8.675q-.15.225-.387.3t-.463 0t-.375-.262T10 19.6V14H9q-.825 0-1.412-.587T7 12V4q0-.825.588-1.412T9 2h5.85q.8 0 1.288.625T16.425 4L15 9h1.125q.9 0 1.338.8t-.088 1.55M12 12H9z"></svg:path>`,
})
export class MaterialSymbolsFlashOnOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlashOnRoundedIcon],svg[material-symbols-flash-on-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.525 20.325q-.225-.075-.375-.262T10 19.6V14H9q-.825 0-1.412-.587T7 12V4q0-.825.588-1.412T9 2h5.85q.8 0 1.288.625T16.425 4L15 9h1.125q.9 0 1.338.8t-.088 1.55l-6 8.675q-.15.225-.387.3t-.463 0"></svg:path>`,
})
export class MaterialSymbolsFlashOnRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlashlightOffOutlineRoundedIcon],svg[material-symbols-flashlight-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.1 21.9L16 18.8V20q0 .825-.587 1.413T14 22h-4q-.825 0-1.412-.587T8 20v-9.2L2.1 4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275M10 20h4v-3.2l-4-4zm8-16v3.4q0 .3-.075.575t-.25.525l-1.85 2.825q-.275.425-.662.45t-.713-.175q-.15-.1-.262-.25t-.163-.338t-.012-.387t.162-.4L16 7.4V7h-5.75q-.425 0-.7-.288T9.275 6t.288-.712t.712-.288H16V4H7.225q-.425 0-.7-.288T6.25 3t.288-.712T7.25 2H16q.825 0 1.413.588T18 4m-7.75 3"></svg:path>`,
})
export class MaterialSymbolsFlashlightOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlashlightOffRoundedIcon],svg[material-symbols-flashlight-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20v-9.2L2.1 4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275L16 18.8V20q0 .825-.587 1.413T14 22h-4q-.825 0-1.412-.587T8 20M7.85 5l-1.7-1.7q.2-.575.7-.937T8 2h8q.825 0 1.413.588T18 4v1zM16 13.15L9.85 7H18v.4q0 .3-.075.575t-.25.525L16 11z"></svg:path>`,
})
export class MaterialSymbolsFlashlightOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlashlightOnOutlineRoundedIcon],svg[material-symbols-flashlight-on-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20v-9L6.325 8.5q-.175-.25-.25-.525T6 7.4V4q0-.825.588-1.412T8 2h8q.825 0 1.413.588T18 4v3.4q0 .3-.075.575t-.25.525L16 11v9q0 .825-.587 1.413T14 22h-4q-.825 0-1.412-.587T8 20m4-4.5q-.625 0-1.062-.437T10.5 14t.438-1.062T12 12.5t1.063.438T13.5 14t-.437 1.063T12 15.5M8 5h8V4H8zm8 2H8v.4l2 3V20h4v-9.6l2-3zm-4 5"></svg:path>`,
})
export class MaterialSymbolsFlashlightOnOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlashlightOnRoundedIcon],svg[material-symbols-flashlight-on-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5V4q0-.825.588-1.412T8 2h8q.825 0 1.413.588T18 4v1zm6 10.5q.625 0 1.063-.437T13.5 14t-.437-1.062T12 12.5t-1.062.438T10.5 14t.438 1.063T12 15.5M8 20v-9L6.325 8.5q-.175-.25-.25-.525T6 7.4V7h12v.4q0 .3-.075.575t-.25.525L16 11v9q0 .825-.587 1.413T14 22h-4q-.825 0-1.412-.587T8 20"></svg:path>`,
})
export class MaterialSymbolsFlashlightOnRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlatwareRoundedIcon],svg[material-symbols-flatware-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21q-.425 0-.712-.288T5 20v-9q-.825 0-1.412-.587T3 9V3.7q0-.3.2-.5t.5-.2t.5.2t.2.5V7h.9V3.7q0-.3.2-.5T6 3t.5.2t.2.5V7h.9V3.7q0-.3.2-.5t.5-.2t.5.2t.2.5V9q0 .825-.587 1.413T7 11v9q0 .425-.288.713T6 21m7 0q-.425 0-.712-.288T12 20v-9.1q-1.05-.5-1.525-1.562T10 7.1q0-1.575.788-2.837T13 3t2.213 1.263T16 7.1q0 1.175-.475 2.238T14 10.9V20q0 .425-.288.713T13 21m5 0q-.425 0-.712-.288T17 20V4.175q0-.425.275-.712t.7-.288q1.125 0 2.075 1.2T21 7v5q0 .425-.288.713T20 13h-1v7q0 .425-.288.713T18 21"></svg:path>`,
})
export class MaterialSymbolsFlatwareRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlexDirectionRoundedIcon],svg[material-symbols-flex-direction-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19v-5q0-.425.288-.712T3 13h7q.425 0 .713.288T11 14v5q0 .425-.288.713T10 20H3q-.425 0-.712-.288T2 19m0-9V5q0-.425.288-.712T3 4h7q.425 0 .713.288T11 5v5q0 .425-.288.713T10 11H3q-.425 0-.712-.288T2 10m2-1h5V6H4zm14 10.575q-.2 0-.375-.062T17.3 19.3l-3.6-3.6q-.275-.275-.287-.687t.287-.713q.275-.275.7-.275t.7.275l1.9 1.875V5q0-.425.288-.712T18 4t.713.288T19 5v11.175l1.9-1.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-3.6 3.6q-.15.15-.325.213t-.375.062"></svg:path>`,
})
export class MaterialSymbolsFlexDirectionRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlexNoWrapRoundedIcon],svg[material-symbols-flex-no-wrap-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 16V8q0-.425.288-.712T2 7h4q.425 0 .713.288T7 8v8q0 .425-.288.713T6 17H2q-.425 0-.712-.288T1 16m8 0V8q0-.425.288-.712T10 7h4q.425 0 .713.288T15 8v8q0 .425-.288.713T14 17h-4q-.425 0-.712-.288T9 16m8 0V8q0-.425.288-.712T18 7h4q.425 0 .713.288T23 8v8q0 .425-.288.713T22 17h-4q-.425 0-.712-.288T17 16M3 15h2V9H3zm16 0h2V9h-2z"></svg:path>`,
})
export class MaterialSymbolsFlexNoWrapRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlexWrapRoundedIcon],svg[material-symbols-flex-wrap-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21v-7q0-.425.288-.712T2 13h4q.425 0 .713.288T7 14v7q0 .425-.288.713T6 22H2q-.425 0-.712-.288T1 21m8 0v-7q0-.425.288-.712T10 13h4q.425 0 .713.288T15 14v7q0 .425-.288.713T14 22h-4q-.425 0-.712-.288T9 21m8 0v-7q0-.425.288-.712T18 13h4q.425 0 .713.288T23 14v7q0 .425-.288.713T22 22h-4q-.425 0-.712-.288T17 21m-6-1h2v-5h-2zM1 10V3q0-.425.288-.712T2 2h4q.425 0 .713.288T7 3v7q0 .425-.288.713T6 11H2q-.425 0-.712-.288T1 10m8 0V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v7q0 .425-.288.713T14 11h-4q-.425 0-.712-.288T9 10m8 0V3q0-.425.288-.712T18 2h4q.425 0 .713.288T23 3v7q0 .425-.288.713T22 11h-4q-.425 0-.712-.288T17 10M3 9h2V4H3zm16 0h2V4h-2z"></svg:path>`,
})
export class MaterialSymbolsFlexWrapRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlightClassOutlineRoundedIcon],svg[material-symbols-flight-class-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13q-.825 0-1.412-.587T12 11V6q0-.825.588-1.412T14 4h2q.825 0 1.413.588T18 6v5q0 .825-.587 1.413T16 13zm0-2h2V6h-2zm-4.5 7q-.675 0-1.2-.387t-.725-1.038l-2.5-8.3Q5.025 8.15 5.013 8T5 7.7V5q0-.425.288-.712T6 4t.713.288T7 5v3l2.5 8H17q.425 0 .713.288T18 17t-.288.713T17 18zM9 21q-.425 0-.712-.288T8 20t.288-.712T9 19h8q.425 0 .713.288T18 20t-.288.713T17 21zm5-15h2z"></svg:path>`,
})
export class MaterialSymbolsFlightClassOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlightClassRoundedIcon],svg[material-symbols-flight-class-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13q-.825 0-1.412-.587T12 11V6q0-.825.588-1.412T14 4h2q.825 0 1.413.588T18 6v5q0 .825-.587 1.413T16 13zm-4.5 5q-.675 0-1.2-.387t-.725-1.038l-2.5-8.3Q5.025 8.15 5.013 8T5 7.7V5q0-.425.288-.712T6 4t.713.288T7 5v3l2.5 8H17q.425 0 .713.288T18 17t-.288.713T17 18zM9 21q-.425 0-.712-.288T8 20t.288-.712T9 19h8q.425 0 .713.288T18 20t-.288.713T17 21z"></svg:path>`,
})
export class MaterialSymbolsFlightClassRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlightLandRoundedIcon],svg[material-symbols-flight-land-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h16q.425 0 .713.288T21 20t-.288.713T20 21zm14.55-5.05l-14.1-4q-.65-.2-1.05-.725t-.4-1.2V5.6q0-.5.4-.8t.9-.175l.575.15q.25.075.438.238t.262.412L6.6 8.4l3.45.975l-.7-6.775q-.075-.65.438-1.063t1.137-.212l.525.15q.275.075.488.288t.312.487l3 8.625l4.3 1.225q.625.2 1.038.725t.412 1.2q0 .875-.712 1.537t-1.738.388"></svg:path>`,
})
export class MaterialSymbolsFlightLandRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlightRoundedIcon],svg[material-symbols-flight-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 13.8l-6.325 2.525q-.6.25-1.137-.112T2 15.2v-.55q0-.3.138-.575t.387-.45L10 8.4V4q0-.825.588-1.412T12 2t1.413.588T14 4v4.4l7.475 5.225q.25.175.388.45t.137.575v.55q0 .65-.537 1.013t-1.138.112L14 13.8v3.6l2.575 1.8q.2.15.313.363t.112.462v.6q0 .5-.413.813t-.912.162L12 20.5l-3.675 1.1q-.5.15-.913-.162T7 20.625v-.6q0-.25.113-.462t.312-.363L10 17.4z"></svg:path>`,
})
export class MaterialSymbolsFlightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlightTakeoffRoundedIcon],svg[material-symbols-flight-takeoff-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.2 11.825L6.2 15.6q-.65.175-1.263-.075t-.962-.825L1.7 10.9q-.275-.425-.087-.9t.687-.6l.575-.15q.25-.05.488-.012t.437.212l2.4 2l3.5-.925l-4.075-5.45q-.4-.525-.2-1.137t.85-.788l.525-.125q.275-.075.588-.025t.537.25L14.9 9.125l4.25-1.15q.8-.225 1.513.188t.937 1.212t-.187 1.513t-1.213.937M4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h16q.425 0 .713.288T21 20t-.288.713T20 21z"></svg:path>`,
})
export class MaterialSymbolsFlightTakeoffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlightsAndHotelsOutlineRoundedIcon],svg[material-symbols-flights-and-hotels-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16q0-.825.588-1.412T9 14t1.413.588T11 16t-.587 1.413T9 18t-1.412-.587T7 16m-2 7q-.425 0-.712-.288T4 22v-8q0-.425.288-.712T5 13t.713.288T6 14v5h6v-4q0-.425.288-.712T13 14h5q.825 0 1.413.588T20 16v6q0 .425-.288.713T19 23t-.712-.288T18 22v-1H6v1q0 .425-.288.713T5 23m7.8-15.35l-2.65 2.65l.225 1.45q.025.125-.012.225t-.138.2l-.1.1q-.2.2-.437.15t-.363-.275l-.85-1.6l-1.7-.925q-.2-.1-.225-.312t.125-.363l.2-.2q.05-.05.35-.125l1.5.2l2.65-2.65l-4.7-2.55Q6.4 3.5 6.375 3.2t.175-.5l.175-.175q.125-.125.263-.163t.287.013L13.55 4l2.7-2.7q.3-.3.725-.3t.725.3t.3.725t-.3.725L15 5.45l1.6 6.25q.05.175.013.325t-.163.275l-.1.1q-.225.225-.55.175t-.475-.325zM18 19v-3h-4v3zm-4 0v-3z"></svg:path>`,
})
export class MaterialSymbolsFlightsAndHotelsOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlightsAndHotelsRoundedIcon],svg[material-symbols-flights-and-hotels-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18q-.825 0-1.412-.587T7 16t.588-1.412T9 14t1.413.588T11 16t-.587 1.413T9 18m-4 5q-.425 0-.712-.288T4 22v-8q0-.425.288-.712T5 13t.713.288T6 14v5h6v-4q0-.425.288-.712T13 14h5q.825 0 1.413.588T20 16v6q0 .425-.288.713T19 23t-.712-.288T18 22v-1H6v1q0 .425-.288.713T5 23m7.8-15.35l-2.65 2.65l.225 1.45q.025.125-.012.225t-.138.2l-.1.1q-.2.2-.437.15t-.363-.275l-.85-1.6l-1.7-.925q-.2-.1-.225-.312t.125-.363l.2-.2q.05-.05.35-.125l1.5.2l2.65-2.65l-4.7-2.55Q6.4 3.5 6.375 3.2t.175-.5l.175-.175q.125-.125.263-.163t.287.013L13.55 4l2.7-2.7q.3-.3.725-.3t.725.3t.3.725t-.3.725L15 5.45l1.6 6.25q.05.175.013.325t-.163.275l-.1.1q-.225.225-.55.175t-.475-.325z"></svg:path>`,
})
export class MaterialSymbolsFlightsAndHotelsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlipCameraAndroidRoundedIcon],svg[material-symbols-flip-camera-android-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-3.2 0-5.762-1.825T2.6 15.4q-.125-.375.075-.7t.6-.45t.763.088t.512.587q.9 2.275 2.925 3.675T12 20q2.15 0 4-1.062T18.9 16H17q-.425 0-.712-.288T16 15t.288-.712T17 14h4q.425 0 .713.288T22 15v4q0 .425-.288.713T21 20t-.712-.288T20 19v-1q-1.425 1.9-3.525 2.95T12 22m0-18Q9.85 4 8 5.063T5.1 8H7q.425 0 .713.288T8 9t-.288.713T7 10H3q-.425 0-.712-.288T2 9V5q0-.425.288-.712T3 4t.713.288T4 5v1q1.425-1.9 3.525-2.95T12 2q3.2 0 5.763 1.825T21.4 8.6q.125.375-.075.7t-.6.45t-.763-.088t-.512-.587Q18.55 6.8 16.525 5.4T12 4m0 11q-1.25 0-2.125-.875T9 12t.875-2.125T12 9t2.125.875T15 12t-.875 2.125T12 15"></svg:path>`,
})
export class MaterialSymbolsFlipCameraAndroidRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlipCameraIosOutlineRoundedIcon],svg[material-symbols-flip-camera-ios-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.45 13.4q-.15 1.325-1.125 2.213T12 16.5q-.2 0-.4-.025t-.4-.075t-.425 0t-.375.2q-.275.275-.2.663t.425.512t.688.175T12 18q1.975 0 3.4-1.337t1.55-3.313l.225.2q.225.2.525.2t.5-.2q.225-.225.238-.537t-.213-.538L16.95 11.2q-.275-.275-.7-.275t-.7.275l-1.275 1.275q-.225.225-.225.525t.225.525t.525.225t.525-.225zm-8.4-.75l-.225-.2q-.225-.2-.525-.2t-.5.2q-.225.225-.237.538t.212.537L7.05 14.8q.275.275.7.275t.7-.275l1.275-1.275Q9.95 13.3 9.95 13t-.225-.525t-.525-.225t-.525.225l-.125.125q.15-1.325 1.125-2.212T12 9.5q.2 0 .4.025t.4.075t.425 0t.375-.2q.275-.275.2-.663t-.425-.512t-.687-.175T12 8q-1.975 0-3.4 1.337T7.05 12.65M4 21q-.825 0-1.412-.587T2 19V7q0-.825.588-1.412T4 5h3.15L8.4 3.65q.275-.3.663-.475T9.875 3h4.25q.425 0 .813.175t.662.475L16.85 5H20q.825 0 1.413.588T22 7v12q0 .825-.587 1.413T20 21zm0-2h16V7h-4.05l-1.825-2h-4.25L8.05 7H4zm8-6"></svg:path>`,
})
export class MaterialSymbolsFlipCameraIosOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlipCameraIosRoundedIcon],svg[material-symbols-flip-camera-ios-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V7q0-.825.588-1.412T4 5h3.15L8.4 3.65q.275-.3.663-.475T9.875 3h4.25q.425 0 .813.175t.662.475L16.85 5H20q.825 0 1.413.588T22 7v12q0 .825-.587 1.413T20 21zm11.45-7.6q-.15 1.325-1.125 2.212T12 16.5q-.2 0-.4-.025t-.4-.075t-.425 0t-.375.2q-.275.275-.2.663t.425.512t.688.175T12 18q1.975 0 3.4-1.337t1.55-3.313l.225.2q.225.2.525.2t.5-.2q.225-.225.238-.537t-.213-.538L16.95 11.2q-.275-.275-.7-.275t-.7.275l-1.275 1.275q-.225.225-.225.525t.225.525t.525.225t.525-.225zm-8.4-.75l-.225-.2q-.225-.2-.525-.2t-.5.2q-.225.225-.237.538t.212.537L7.05 14.8q.275.275.7.275t.7-.275l1.275-1.275Q9.95 13.3 9.95 13t-.225-.525t-.525-.225t-.525.225l-.125.125q.15-1.325 1.125-2.212T12 9.5q.2 0 .4.025t.4.075t.425 0t.375-.2q.275-.275.2-.663t-.425-.512t-.687-.175T12 8q-1.975 0-3.4 1.337T7.05 12.65"></svg:path>`,
})
export class MaterialSymbolsFlipCameraIosRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlipRoundedIcon],svg[material-symbols-flip-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5q-.425 0-.712-.288T15 4t.288-.712T16 3t.713.288T17 4t-.288.713T16 5m4 0q-.425 0-.712-.288T19 4t.288-.712T20 3t.713.288T21 4t-.288.713T20 5m0 4q-.425 0-.712-.288T19 8t.288-.712T20 7t.713.288T21 8t-.288.713T20 9m0 4q-.425 0-.712-.288T19 12t.288-.712T20 11t.713.288T21 12t-.288.713T20 13m0 4q-.425 0-.712-.288T19 16t.288-.712T20 15t.713.288T21 16t-.288.713T20 17m-4 4q-.425 0-.712-.288T15 20t.288-.712T16 19t.713.288T17 20t-.288.713T16 21m4 0q-.425 0-.712-.288T19 20t.288-.712T20 19t.713.288T21 20t-.288.713T20 21M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h3q.425 0 .713.288T9 4t-.288.713T8 5H5v14h3q.425 0 .713.288T9 20t-.288.713T8 21zm6 1V2q0-.425.288-.712T12 1t.713.288T13 2v20q0 .425-.288.713T12 23t-.712-.288T11 22"></svg:path>`,
})
export class MaterialSymbolsFlipRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlipToBackRoundedIcon],svg[material-symbols-flip-to-back-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V8q0-.425.288-.712T4 7t.713.288T5 8v11h11q.425 0 .713.288T17 20t-.288.713T16 21zm7-4q-.425 0-.712-.288T11 16t.288-.712T12 15t.713.288T13 16t-.288.713T12 17M8 5q-.425 0-.712-.288T7 4t.288-.712T8 3t.713.288T9 4t-.288.713T8 5m4 0q-.425 0-.712-.288T11 4t.288-.712T12 3t.713.288T13 4t-.288.713T12 5m4 0q-.425 0-.712-.288T15 4t.288-.712T16 3t.713.288T17 4t-.288.713T16 5m4 0q-.425 0-.712-.288T19 4t.288-.712T20 3t.713.288T21 4t-.288.713T20 5M8 9q-.425 0-.712-.288T7 8t.288-.712T8 7t.713.288T9 8t-.288.713T8 9m0 4q-.425 0-.712-.288T7 12t.288-.712T8 11t.713.288T9 12t-.288.713T8 13m0 4q-.425 0-.712-.288T7 16t.288-.712T8 15t.713.288T9 16t-.288.713T8 17m8 0q-.425 0-.712-.288T15 16t.288-.712T16 15t.713.288T17 16t-.288.713T16 17m4-8q-.425 0-.712-.288T19 8t.288-.712T20 7t.713.288T21 8t-.288.713T20 9m0 4q-.425 0-.712-.288T19 12t.288-.712T20 11t.713.288T21 12t-.288.713T20 13m0 4q-.425 0-.712-.288T19 16t.288-.712T20 15t.713.288T21 16t-.288.713T20 17"></svg:path>`,
})
export class MaterialSymbolsFlipToBackRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlipToFrontRoundedIcon],svg[material-symbols-flip-to-front-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17q-.825 0-1.412-.587T7 15V5q0-.825.588-1.412T9 3h10q.825 0 1.413.588T21 5v10q0 .825-.587 1.413T19 17zm0-2h10V5H9zM4 9q-.425 0-.712-.288T3 8t.288-.712T4 7t.713.288T5 8t-.288.713T4 9m0 4q-.425 0-.712-.288T3 12t.288-.712T4 11t.713.288T5 12t-.288.713T4 13m0 4q-.425 0-.712-.288T3 16t.288-.712T4 15t.713.288T5 16t-.288.713T4 17m0 4q-.425 0-.712-.288T3 20t.288-.712T4 19t.713.288T5 20t-.288.713T4 21m4 0q-.425 0-.712-.288T7 20t.288-.712T8 19t.713.288T9 20t-.288.713T8 21m4 0q-.425 0-.712-.288T11 20t.288-.712T12 19t.713.288T13 20t-.288.713T12 21m4 0q-.425 0-.712-.288T15 20t.288-.712T16 19t.713.288T17 20t-.288.713T16 21"></svg:path>`,
})
export class MaterialSymbolsFlipToFrontRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFloatLandscape2OutlineRoundedIcon],svg[material-symbols-float-landscape-2-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14h3q.425 0 .713-.288T18 13V9q0-.425-.288-.712T17 8h-3q-.425 0-.712.288T13 9v4q0 .425.288.713T14 14M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsFloatLandscape2OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFloatLandscape2RoundedIcon],svg[material-symbols-float-landscape-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14h3q.425 0 .713-.288T18 13V9q0-.425-.288-.712T17 8h-3q-.425 0-.712.288T13 9v4q0 .425.288.713T14 14M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsFloatLandscape2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFloatLandscapeOutlineRoundedIcon],svg[material-symbols-float-landscape-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v4q0 .425-.288.713T21 11q-.425 0-.713-.288T20 10V6H4v12h10q.425 0 .713.288T15 19q0 .425-.288.713T14 20H4Zm14 0q-.425 0-.713-.288T17 19v-5q0-.425.288-.713T18 13h3q.425 0 .713.288T22 14v5q0 .425-.288.713T21 20h-3Zm-6-8Z"></svg:path>`,
})
export class MaterialSymbolsFloatLandscapeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFloatLandscapeRoundedIcon],svg[material-symbols-float-landscape-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v4q0 .425-.288.713T21 11h-4q-.825 0-1.413.588T15 13v6q0 .425-.288.713T14 20H4Zm14 0q-.425 0-.713-.288T17 19v-5q0-.425.288-.713T18 13h3q.425 0 .713.288T22 14v5q0 .425-.288.713T21 20h-3Z"></svg:path>`,
})
export class MaterialSymbolsFloatLandscapeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFloatPortrait2OutlineRoundedIcon],svg[material-symbols-float-portrait-2-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11h4q.425 0 .713-.288T14 10V7q0-.425-.288-.712T13 6H9q-.425 0-.712.288T8 7v3q0 .425.288.713T9 11m11 9q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4zm-2 0V4H6v16zm0-16H6z"></svg:path>`,
})
export class MaterialSymbolsFloatPortrait2OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFloatPortrait2RoundedIcon],svg[material-symbols-float-portrait-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11h4q.425 0 .713-.288T14 10V7q0-.425-.288-.712T13 6H9q-.425 0-.712.288T8 7v3q0 .425.288.713T9 11m11 9q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4z"></svg:path>`,
})
export class MaterialSymbolsFloatPortrait2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFloatPortraitOutlineRoundedIcon],svg[material-symbols-float-portrait-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h12q.825 0 1.413.588T20 4v8q0 .425-.288.713T19 13q-.425 0-.713-.288T18 12V4H6v16h6q.425 0 .713.288T13 21q0 .425-.288.713T12 22H6Zm10 0q-.425 0-.713-.288T15 21v-5q0-.425.288-.713T16 15h3q.425 0 .713.288T20 16v5q0 .425-.288.713T19 22h-3Zm-3-2H6V4h12v9h-3q-.825 0-1.413.588T13 15v5Z"></svg:path>`,
})
export class MaterialSymbolsFloatPortraitOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFloatPortraitRoundedIcon],svg[material-symbols-float-portrait-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22q-.425 0-.713-.288T15 21v-5q0-.425.288-.713T16 15h3q.425 0 .713.288T20 16v5q0 .425-.288.713T19 22h-3ZM6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h12q.825 0 1.413.588T20 4v8q0 .425-.288.713T19 13h-4q-.825 0-1.413.588T13 15v6q0 .425-.288.713T12 22H6Z"></svg:path>`,
})
export class MaterialSymbolsFloatPortraitRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFloodOutlineRoundedIcon],svg[material-symbols-flood-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.675 20q.95 0 1.4-.5T12 19q1.425 0 1.938.5t1.412.5q.95 0 1.4-.5t1.925-.5q.975 0 1.45.263t.9.487q.375.2.675.513T22 21t-.3.7t-.7.175q-.8-.2-1.2-.537T18.675 21q-.925 0-1.4.5t-1.925.5t-1.937-.5T12 21q-.95 0-1.4.5t-1.925.5t-1.925-.5t-1.4-.5q-.725 0-1.125.338t-1.2.537q-.4.1-.712-.175T2 21t.288-.737t.662-.513q.425-.225.913-.488T5.35 19q1.475 0 1.925.5t1.4.5m0-2.5q-1.425 0-1.925-.5t-1.4-.5q-.7 0-1.125.338T3 17.374q-.4.1-.7-.175t-.3-.7t.3-.737t.675-.513q.425-.225.9-.488t1.45-.262q.15 0 .3.013t.275.037l-.95-3.5l-.775 1q-.25.325-.65.387t-.725-.212q-.35-.275-.388-.688t.238-.737l6.2-7.675q.425-.5 1.05-.663t1.225.063l9.25 3.525q.375.15.55.525t.025.75q-.15.4-.537.563t-.788.012l-1.15-.475L20.5 14.95q.15.075.287.15t.263.15q.375.2.662.513T22 16.5t-.3.7t-.7.175q-.8-.2-1.2-.537t-1.125-.338q-.95 0-1.4.5t-1.925.5q-1.425 0-1.937-.5T12 16.5q-.95 0-1.4.5t-1.925.5m0-2q.75 0 1.162-.35t1.263-.55l-.8-2.925q-.05-.2.05-.375t.3-.225l2.925-.775q.2-.05.375.05t.225.3l1.275 4.825q.775-.05 1.225-.462t1.625-.488L16.15 6.5l-5.725-2.1L6.5 9.1l1.725 6.35q.1.025.213.038t.237.012M12.4 9.95"></svg:path>`,
})
export class MaterialSymbolsFloodOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFloodRoundedIcon],svg[material-symbols-flood-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.675 17.5q-1.425 0-1.925-.5t-1.4-.5q-.7 0-1.125.338T3 17.374q-.4.1-.7-.175t-.3-.7t.3-.737t.675-.513q.425-.225.9-.488t1.45-.262q.15 0 .3.013t.275.037l-.95-3.5l-.775 1q-.25.325-.65.387t-.725-.212q-.35-.275-.388-.688t.238-.737l6.2-7.675q.425-.5 1.05-.663t1.225.063l9.25 3.525q.375.15.55.525t.025.75q-.15.4-.537.563t-.788.012l-1.15-.475L20.5 14.95q.15.075.287.15t.263.15q.375.2.662.513T22 16.5t-.3.7t-.7.175q-.8-.2-1.2-.537t-1.125-.338q-.95 0-1.4.5t-1.925.5q-1.425 0-1.937-.5T12 16.5q-.95 0-1.4.5t-1.925.5m0 2.5q.95 0 1.4-.5T12 19q1.425 0 1.938.5t1.412.5q.95 0 1.4-.5t1.925-.5q.975 0 1.45.263t.9.487q.375.2.675.513T22 21t-.3.7t-.7.175q-.8-.2-1.2-.537T18.675 21q-.925 0-1.4.5t-1.925.5t-1.937-.5T12 21q-.95 0-1.4.5t-1.925.5t-1.925-.5t-1.4-.5q-.725 0-1.125.338t-1.2.537q-.4.1-.712-.175T2 21t.288-.737t.662-.513q.425-.225.913-.488T5.35 19q1.475 0 1.925.5t1.4.5m6.775-4.525l-1.275-4.825q-.05-.2-.225-.3t-.375-.05l-2.925.775q-.2.05-.3.225t-.05.375l.8 2.925q.2-.05.413-.075T12 14.5q1.425 0 2.038.55t1.412.425"></svg:path>`,
})
export class MaterialSymbolsFloodRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFloorLampOutlineRoundedIcon],svg[material-symbols-floor-lamp-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q-.425 0-.712-.288T11 18v-7H6q-.5 0-.8-.4t-.15-.9L7 3.4q.2-.625.725-1.013T8.9 2h6.2q.65 0 1.175.388T17 3.4l1.95 6.3q.15.5-.15.9t-.8.4h-5v7q0 .425-.288.713T12 19M7.35 9h9.3L15.1 4H8.9zM9 22q-.425 0-.712-.288T8 21t.288-.712T9 20h6q.425 0 .713.288T16 21t-.288.713T15 22zm3-15.5"></svg:path>`,
})
export class MaterialSymbolsFloorLampOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFloorLampRoundedIcon],svg[material-symbols-floor-lamp-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q-.425 0-.712-.288T11 18v-7H6q-.5 0-.8-.4t-.15-.9L7 3.4q.2-.625.725-1.013T8.9 2h6.2q.65 0 1.175.388T17 3.4l1.95 6.3q.15.5-.15.9t-.8.4h-5v7q0 .425-.288.713T12 19m-3 3q-.425 0-.712-.288T8 21t.288-.712T9 20h6q.425 0 .713.288T16 21t-.288.713T15 22z"></svg:path>`,
})
export class MaterialSymbolsFloorLampRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFloorRoundedIcon],svg[material-symbols-floor-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 20v-3.5q0-.425.288-.712T7.5 15.5H11V12q0-.425.288-.712T12 11h3.5V7.5q0-.425.288-.712T16.5 6.5H20V4q0-.425.288-.712T21 3t.713.288T22 4v3.5q0 .425-.288.713T21 8.5h-3.5V12q0 .425-.288.713T16.5 13H13v3.5q0 .425-.288.713T12 17.5H8.5V21q0 .425-.288.713T7.5 22H4q-.425 0-.712-.288T3 21t.288-.712T4 20z"></svg:path>`,
})
export class MaterialSymbolsFloorRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlowsheetOutlineRoundedIcon],svg[material-symbols-flowsheet-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10v8V6zm10 11q.425 0 .713-.288T15 20t-.288-.712T14 19t-.712.288T13 20t.288.713T14 21m6-10q.425 0 .713-.288T21 10t-.288-.712T20 9t-.712.288T19 10t.288.713T20 11m-10 0q.425 0 .713-.288T11 10t-.288-.712T10 9H7q-.425 0-.712.288T6 10t.288.713T7 11zm0 4q.425 0 .713-.288T11 14t-.288-.712T10 13H7q-.425 0-.712.288T6 14t.288.713T7 15zm-6 5q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h17q.425 0 .713.288T22 5t-.288.713T21 6H4v12h4q.425 0 .713.288T9 19t-.288.713T8 20zm10 3q-1.25 0-2.125-.875T11 20q0-.975.563-1.75T13 17.175V15q0-.425.288-.712T14 14h5v-1.175q-.875-.3-1.437-1.075T17 10q0-1.25.875-2.125T20 7t2.125.875T23 10q0 .975-.562 1.75T21 12.825V15q0 .425-.288.713T20 16h-5v1.175q.875.3 1.438 1.075T17 20q0 1.25-.875 2.125T14 23"></svg:path>`,
})
export class MaterialSymbolsFlowsheetOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlowsheetRoundedIcon],svg[material-symbols-flowsheet-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11h3q.425 0 .713-.288T11 10t-.288-.712T10 9H7q-.425 0-.712.288T6 10t.288.713T7 11m-3 9q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h17.025q.275 0 .45.15t.175.4q0 .275-.187.438t-.438.112q-.2-.05-.462-.075T20 5q-2.075 0-3.537 1.463T15 10q0 .55.1 1.05t.3.95H14q-1.25 0-2.125.875T11 15v1q-.7.5-1.175 1.213t-.675 1.562q-.125.5-.5.863T7.775 20zm10 1q.425 0 .713-.288T15 20t-.288-.712T14 19t-.712.288T13 20t.288.713T14 21m6-10q.425 0 .713-.288T21 10t-.288-.712T20 9t-.712.288T19 10t.288.713T20 11m-6 12q-1.25 0-2.125-.875T11 20q0-.975.563-1.75T13 17.175V15q0-.425.288-.712T14 14h5v-1.175q-.875-.3-1.437-1.075T17 10q0-1.25.875-2.125T20 7t2.125.875T23 10q0 .975-.562 1.75T21 12.825V15q0 .425-.288.713T20 16h-5v1.175q.875.3 1.438 1.075T17 20q0 1.25-.875 2.125T14 23m-4-8q.425 0 .713-.288T11 14t-.288-.712T10 13H7q-.425 0-.712.288T6 14t.288.713T7 15z"></svg:path>`,
})
export class MaterialSymbolsFlowsheetRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFluidBalanceOutlineRoundedIcon],svg[material-symbols-fluid-balance-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18V6zm15 5q-.825 0-1.412-.587T17 21v-1.1q-1.725-.35-2.863-1.713T13 15v-5q0-.825.575-1.412T15 8h6q.825 0 1.413.588T23 10v5q0 1.825-1.137 3.188T19 19.9V21h2q.425 0 .713.288T22 22t-.288.713T21 23zm.75-9H21v-4h-6v2h.75q.825 0 1.563.375T18.55 13.4q.2.3.525.45t.675.15M18 18q.975 0 1.75-.562T20.825 16H19.75q-.825 0-1.562-.363T16.95 14.6q-.225-.275-.537-.437T15.75 14H15v1q0 1.275.863 2.138T18 18m-8-7q.425 0 .713-.288T11 10t-.288-.712T10 9H7q-.425 0-.712.288T6 10t.288.713T7 11zm0 4q.425 0 .713-.288T11 14t-.288-.712T10 13H7q-.425 0-.712.288T6 14t.288.713T7 15zm-6 5q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h17q.425 0 .713.288T22 5t-.288.713T21 6H4v12h7q.425 0 .713.288T12 19t-.288.713T11 20z"></svg:path>`,
})
export class MaterialSymbolsFluidBalanceOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFluidBalanceRoundedIcon],svg[material-symbols-fluid-balance-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6.675q.425 0 .713.288t.287.712t.288.713t.712.287H15q-1.65 0-2.825 1.175T11 10v5q0 .825.2 1.638t.55 1.537q.325.65.025 1.238t-.95.587zm15 3q-.825 0-1.412-.587T17 21v-1.1q-1.725-.35-2.863-1.713T13 15v-5q0-.825.575-1.412T15 8h6q.825 0 1.413.588T23 10v5q0 1.825-1.137 3.188T19 19.9V21h2q.425 0 .713.288T22 22t-.288.713T21 23zm.75-9H21v-4h-6v2h.75q.825 0 1.563.375T18.55 13.4q.2.3.525.45t.675.15M10 11q.425 0 .713-.288T11 10t-.288-.712T10 9H7q-.425 0-.712.288T6 10t.288.713T7 11zm0 4q.425 0 .713-.288T11 14t-.288-.712T10 13H7q-.425 0-.712.288T6 14t.288.713T7 15z"></svg:path>`,
})
export class MaterialSymbolsFluidBalanceRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFluidMedOutlineRoundedIcon],svg[material-symbols-fluid-med-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22q-.825 0-1.412-.587T17 20v-1.1q-1.725-.35-2.863-1.713T13 14V9q0-.825.575-1.412T15 7h6q.825 0 1.413.588T23 9v5q0 1.825-1.137 3.188T19 18.9V20h2q.425 0 .713.288T22 21t-.288.713T21 22zm.75-9H21V9h-6v2h.75q.825 0 1.563.375T18.55 12.4q.2.3.525.45t.675.15M18 17q.975 0 1.75-.562T20.825 15H19.75q-.825 0-1.562-.363T16.95 13.6q-.225-.275-.537-.437T15.75 13H15v1q0 1.275.863 2.138T18 17M6 17H5q-.825 0-1.412-.587T3 15V7.5q-.425 0-.712-.288T2 6.5t.288-.712T3 5.5h3V4h-.5q-.425 0-.712-.288T4.5 3t.288-.712T5.5 2h3q.425 0 .713.288T9.5 3t-.288.713T8.5 4H8v1.5h3q.425 0 .713.288T12 6.5t-.288.713T11 7.5V15q0 .825-.587 1.413T9 17H8v4.5q0 .3-.275.45T7.2 21.9l-.8-.6q-.2-.15-.3-.35T6 20.5zm-1-2h4v-1.5H7.25q-.3 0-.525-.225T6.5 12.75t.225-.525T7.25 12H9v-1.5H7.25q-.3 0-.525-.225T6.5 9.75t.225-.525T7.25 9H9V7.5H5z"></svg:path>`,
})
export class MaterialSymbolsFluidMedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFluidMedRoundedIcon],svg[material-symbols-fluid-med-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22q-.825 0-1.412-.587T17 20v-1.1q-1.725-.35-2.863-1.713T13 14V9q0-.825.575-1.412T15 7h6q.825 0 1.413.588T23 9v5q0 1.825-1.137 3.188T19 18.9V20h2q.425 0 .713.288T22 21t-.288.713T21 22zm.75-9H21V9h-6v2h.75q.825 0 1.563.375T18.55 12.4q.2.3.525.45t.675.15M6 17H5q-.825 0-1.412-.587T3 15V7.5q-.425 0-.712-.288T2 6.5t.288-.712T3 5.5h3V4h-.5q-.425 0-.712-.288T4.5 3t.288-.712T5.5 2h3q.425 0 .713.288T9.5 3t-.288.713T8.5 4H8v1.5h3q.425 0 .713.288T12 6.5t-.288.713T11 7.5V15q0 .825-.587 1.413T9 17H8v4.5q0 .3-.275.45T7.2 21.9l-.8-.6q-.2-.15-.3-.35T6 20.5zm-1-2h4v-1.5H7.25q-.3 0-.525-.225T6.5 12.75t.225-.525T7.25 12H9v-1.5H7.25q-.3 0-.525-.225T6.5 9.75t.225-.525T7.25 9H9V7.5H5z"></svg:path>`,
})
export class MaterialSymbolsFluidMedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFluidOutlineRoundedIcon],svg[material-symbols-fluid-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 23q-.825 0-1.412-.587T11 21v-2.075q-2.575-.35-4.288-2.312T5 12V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v9q0 2.65-1.713 4.613T13 18.925V21h5q.425 0 .713.288T19 22t-.288.713T18 23zm.75-10h3.15q.05-.25.075-.488T17 12v-1h-3q-.425 0-.712-.288T13 10t.288-.712T14 9h3V7h-4q-.425 0-.712-.288T12 6t.288-.712T13 5h4V3H7v8h2.75q.825 0 1.563.375T12.55 12.4q.2.275.525.438t.675.162M12 17q1.225 0 2.275-.537T16 15h-2.25q-.825 0-1.562-.375T10.95 13.6q-.2-.275-.525-.437T9.75 13H7.1q.35 1.725 1.713 2.863T12 17m-1.05-4"></svg:path>`,
})
export class MaterialSymbolsFluidOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFluidRoundedIcon],svg[material-symbols-fluid-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 23q-.825 0-1.412-.587T11 21v-2.075q-2.575-.35-4.288-2.312T5 12V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v9q0 2.65-1.713 4.613T13 18.925V21h5q.425 0 .713.288T19 22t-.288.713T18 23zm.75-10h3.15q.05-.25.075-.488T17 12v-1h-3q-.425 0-.712-.288T13 10t.288-.712T14 9h3V7h-4q-.425 0-.712-.288T12 6t.288-.712T13 5h4V3H7v8h2.75q.825 0 1.563.375T12.55 12.4q.2.275.525.438t.675.162"></svg:path>`,
})
export class MaterialSymbolsFluidRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFluorescentOutlineRoundedIcon],svg[material-symbols-fluorescent-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13.05v-2q0-.825.588-1.412T7 9.05h10q.825 0 1.413.588T19 11.05v2q0 .825-.587 1.413T17 15.05H7q-.825 0-1.412-.587T5 13.05M11 4V3q0-.425.288-.712T12 2t.713.288T13 3v1q0 .425-.288.713T12 5t-.712-.288T11 4m7 1.7l.4-.4q.275-.275.7-.275t.7.275t.275.7t-.275.7l-.4.4q-.275.275-.7.275T18 7.1t-.275-.7t.275-.7M11 21v-1q0-.425.288-.712T12 19t.713.288T13 20v1q0 .425-.288.713T12 22t-.712-.288T11 21m7.4-2.2l-.4-.4q-.275-.275-.275-.7T18 17t.7-.275t.7.275l.4.4q.275.275.275.7t-.275.7t-.7.275t-.7-.275M4.6 7.1l-.4-.4q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l.4.4q.275.275.275.7T6 7.1t-.7.275t-.7-.275m-.4 10.3l.4-.4q.275-.275.7-.275T6 17t.275.7t-.275.7l-.4.4q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7M7 13.05h10v-2H7zm5-1"></svg:path>`,
})
export class MaterialSymbolsFluorescentOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFluorescentRoundedIcon],svg[material-symbols-fluorescent-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13.05v-2q0-.825.588-1.412T7 9.05h10q.825 0 1.413.588T19 11.05v2q0 .825-.587 1.413T17 15.05H7q-.825 0-1.412-.587T5 13.05M11 4V3q0-.425.288-.712T12 2t.713.288T13 3v1q0 .425-.288.713T12 5t-.712-.288T11 4m7 1.7l.4-.4q.275-.275.7-.275t.7.275t.275.7t-.275.7l-.4.4q-.275.275-.7.275T18 7.1t-.275-.7t.275-.7M11 21v-1q0-.425.288-.712T12 19t.713.288T13 20v1q0 .425-.288.713T12 22t-.712-.288T11 21m7.4-2.2l-.4-.4q-.275-.275-.275-.7T18 17t.7-.275t.7.275l.4.4q.275.275.275.7t-.275.7t-.7.275t-.7-.275M4.6 7.1l-.4-.4q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l.4.4q.275.275.275.7T6 7.1t-.7.275t-.7-.275m-.4 10.3l.4-.4q.275-.275.7-.275T6 17t.275.7t-.275.7l-.4.4q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7"></svg:path>`,
})
export class MaterialSymbolsFluorescentRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlyoverOutlineRoundedIcon],svg[material-symbols-flyover-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 10.725l-.5.1l-.5.1q-.425.1-.712-.213T2 9.976q0-.35.238-.662t.787-.438Q5.25 8.4 7.488 8.2T12 8t4.525.2T21 8.875q.55.125.788.438t.237.662q0 .425-.287.75t-.713.225l-.5-.1q-.25-.05-.525-.1V13q0 .425-.287.713T19 14t-.712-.288T18 13v-2.6q-1.5-.2-3-.3t-3-.1t-3 .088t-3 .287V13q0 .425-.288.713T5 14t-.712-.288T4 13zm2.2 9.125L7.325 13q.05-.35.3-.575t.6-.25q.5-.05.813.313t.237.837l-1.15 6.85q-.05.35-.325.588T7.175 21q-.45 0-.75-.35t-.225-.8M8.675 4.875l.2-1.05q.05-.35.325-.588T9.825 3q.45 0 .75.35t.225.8l-.175 1.075q-.05.35-.3.562t-.6.238q-.475.05-.8-.313t-.25-.837M11 18v2q0 .425.288.713T12 21t.713-.288T13 20v-2q0-.425-.288-.712T12 17t-.712.288T11 18m0-4q0 .425.288.713T12 15t.713-.288T13 14v-.975q0-.425-.288-.712T12 12.025t-.712.288t-.288.712zm4.325-9.1q.075.475-.238.825t-.812.3q-.35-.025-.6-.25t-.3-.575L13.2 4.15q-.075-.45.225-.8t.75-.35q.35 0 .625.238t.325.587zM17.8 19.85q.075.45-.225.8t-.75.35q-.35 0-.625-.237t-.325-.588l-1.15-6.85q-.075-.475.238-.837t.812-.313q.35.05.6.263t.3.562z"></svg:path>`,
})
export class MaterialSymbolsFlyoverOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlyoverRoundedIcon],svg[material-symbols-flyover-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 10.725l-.5.1l-.5.1q-.375.1-.687-.137T2 10.15q0-.45.288-.812t.737-.463Q5.25 8.4 7.488 8.2T12 8t4.525.2T21 8.875q.45.1.725.463t.275.812q0 .4-.3.638t-.675.162l-.5-.1q-.25-.05-.525-.1V13q0 .425-.288.713T19 14t-.712-.288T18 13v-2.6q-1.5-.2-3-.3t-3-.1t-3 .088t-3 .287V13q0 .425-.288.713T5 14t-.712-.288T4 13zm8-4.75q-.575 0-1.137.013t-1.138.062q-.475.025-.8-.325t-.25-.825l.175-1.075q.05-.35.338-.587T9.85 3h4.3q.375 0 .663.238t.337.587l.175 1.075q.075.475-.25.825t-.8.325Q13.7 6 13.138 5.988T12 5.975M12 17q-.425 0-.712.288T11 18v3H7.175q-.475 0-.762-.363t-.213-.812L7.325 13q.05-.35.313-.575t.612-.275q.7-.075 1.375-.125T11 11.95V14q0 .425.288.713T12 15t.713-.288T13 14v-2.05q.7.05 1.375.088t1.375.112q.35.05.613.275t.312.575l1.125 6.825q.075.45-.213.813t-.762.362H13v-3q0-.425-.288-.712T12 17"></svg:path>`,
})
export class MaterialSymbolsFlyoverRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFmdBadOutlineRoundedIcon],svg[material-symbols-fmd-bad-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11q.425 0 .713-.288T13 10V7q0-.425-.288-.712T12 6t-.712.288T11 7v3q0 .425.288.713T12 11m0 4q.425 0 .713-.288T13 14t-.288-.712T12 13t-.712.288T11 14t.288.713T12 15m0 4.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35m0 1.975q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 10"></svg:path>`,
})
export class MaterialSymbolsFmdBadOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFmdBadRoundedIcon],svg[material-symbols-fmd-bad-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11q.425 0 .713-.288T13 10V7q0-.425-.288-.712T12 6t-.712.288T11 7v3q0 .425.288.713T12 11m0 4q.425 0 .713-.288T13 14t-.288-.712T12 13t-.712.288T11 14t.288.713T12 15m0 6.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.576T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125"></svg:path>`,
})
export class MaterialSymbolsFmdBadRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFoldedHandsOutlineRoundedIcon],svg[material-symbols-folded-hands-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 12.75V15q0 .425-.288.713T16.5 16t-.712-.288T15.5 15v-1.725l-1.125-2.025q-.175.125-.275.325T14 12v5.725l1.675 2.775q.3.5 0 1t-.875.5q-.275 0-.5-.125t-.35-.35L12 18.3V12q0-.775.375-1.425T13.4 9.5L12 7.025q-.5-.95-.437-2.013t.812-1.812l.95-.925q.325-.325.75-.312t.7.362L20.55 9.1q.2.25.325.538t.15.612l.875 10.675q.05.425-.25.75t-.725.325q-.4 0-.675-.262t-.325-.663l-.9-10.675l-5.075-5.95l-.15.15q-.25.25-.287.575t.112.625zm-11 0l3.875-6.95q.15-.3.113-.625T10.2 4.6l-.15-.15l-5.075 5.95l-.9 10.7q-.05.4-.325.65t-.675.25q-.425 0-.725-.325t-.25-.75l.875-10.675q.025-.325.15-.612T3.45 9.1l5.775-6.775q.275-.35.713-.363t.762.313l.925.925q.75.75.813 1.813T12 7.025L10.6 9.5q.65.425 1.025 1.075T12 12v6.3l-1.95 3.225q-.125.225-.363.35T9.176 22q-.575 0-.862-.5t.012-1L10 17.725V12q0-.225-.1-.425t-.275-.325L8.5 13.275V15q0 .425-.288.713T7.5 16t-.712-.288T6.5 15z"></svg:path>`,
})
export class MaterialSymbolsFoldedHandsOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFoldedHandsRoundedIcon],svg[material-symbols-folded-hands-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.75 22q-.275 0-.513-.137t-.362-.363L13 19.95q-.125-.225-.187-.462t-.063-.513V11.5q0-.525.2-.975t.675-.45q.2 0 .363.1t.262.3l1.5 2.725v2.05q0 .325.213.538T16.5 16t.538-.213t.212-.537v-1.925q0-.25-.062-.5T17 12.35l-3.825-6.975q-.375-.7-.375-1.475t.4-1.45q.325-.375.8-.4t.775.325L20.575 9q.2.25.325.538t.15.612l.875 10.775q.05.425-.262.75t-.738.325zM3.075 22q-.425 0-.738-.325t-.262-.75L2.95 10.15q.025-.325.15-.612T3.425 9l5.8-6.6q.3-.35.763-.337t.762.362q.4.7.425 1.475t-.35 1.475L7 12.35q-.125.225-.187.475t-.063.5v1.925q0 .325.213.538T7.5 16t.538-.213t.212-.537V13.2l1.5-2.725q.1-.2.275-.3t.375-.1q.45 0 .65.45t.2.975v7.475q0 .275-.062.512T11 19.95l-.875 1.55q-.125.225-.363.363T9.25 22z"></svg:path>`,
})
export class MaterialSymbolsFoldedHandsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderCheck2OutlineRoundedIcon],svg[material-symbols-folder-check-2-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18V6v5.3v-.3zm0 2q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v2.775q0 .425-.288.713t-.712.287t-.712-.288t-.288-.712V8h-8q-.4 0-.763-.15t-.637-.425L9.175 6H4v12h6.15q.425 0 .713.288t.287.712t-.288.713t-.712.287zm13.275-1.875l-.45-.45q-.225-.225-.525-.213t-.525.238t-.225.525t.225.525l.8.8q.3.3.7.3t.7-.3l2.25-2.225q.225-.225.225-.537t-.225-.538t-.525-.213t-.525.213zM18 13q2.075 0 3.538 1.463T23 18t-1.463 3.538T18 23t-3.537-1.463T13 18t1.463-3.537T18 13"></svg:path>`,
})
export class MaterialSymbolsFolderCheck2OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderCheck2RoundedIcon],svg[material-symbols-folder-check-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v2.675q0 .525-.45.788t-.95.037q-.625-.25-1.287-.375T18 11q-1.575 0-2.937.65t-2.313 1.738t-1.425 2.512t-.275 2.975q.05.45-.225.788t-.7.337zm14 3q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m-1.425-3.45q.3.3.7.3t.7-.3l2.25-2.225q.225-.225.225-.537t-.225-.538t-.525-.213t-.525.213l-1.9 1.875l-.45-.45q-.225-.225-.525-.213t-.525.238t-.225.525t.225.525z"></svg:path>`,
})
export class MaterialSymbolsFolderCheck2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderCheckOutlineRoundedIcon],svg[material-symbols-folder-check-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.85 13.75l-1.425-1.425q-.3-.3-.7-.3t-.7.3t-.3.713t.3.712l2.1 2.125q.3.3.713.3t.712-.3l4.25-4.25q.3-.3.3-.712t-.3-.713t-.712-.3t-.713.3zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsFolderCheckOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderCheckRoundedIcon],svg[material-symbols-folder-check-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.85 13.75l-1.425-1.425q-.3-.3-.7-.3t-.7.3t-.3.713t.3.712l2.1 2.125q.3.3.713.3t.712-.3l4.25-4.25q.3-.3.3-.712t-.3-.713t-.712-.3t-.713.3zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsFolderCheckRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderCodeOutlineRoundedIcon],svg[material-symbols-folder-code-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18V6v13zm0 2q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v4q0 .425-.288.713T21 13t-.712-.288T20 12V8h-8.825l-2-2H4v12h4q.425 0 .713.288T9 19t-.288.713T8 20zm9.825-1l1.475 1.475q.3.3.3.7t-.3.7t-.712.3t-.713-.3L11.7 19.7q-.3-.3-.3-.7t.3-.7l2.175-2.175q.3-.3.713-.3t.712.3t.3.7t-.3.7zm6.35 0L18.7 17.525q-.3-.3-.3-.7t.3-.7t.713-.3t.712.3L22.3 18.3q.3.3.3.7t-.3.7l-2.175 2.175q-.3.3-.713.3t-.712-.3t-.3-.7t.3-.7z"></svg:path>`,
})
export class MaterialSymbolsFolderCodeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderCodeRoundedIcon],svg[material-symbols-folder-code-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.3 21.875q-.3.3-.712.3t-.713-.3L11.7 19.7q-.3-.3-.3-.7t.3-.7l2.175-2.175q.3-.3.713-.3t.712.3t.3.7t-.3.7L13.825 19l1.475 1.475q.3.3.3.7t-.3.7m3.4 0q-.3-.3-.3-.7t.3-.7L20.175 19L18.7 17.525q-.3-.3-.3-.7t.3-.7t.713-.3t.712.3L22.3 18.3q.3.3.3.7t-.3.7l-2.175 2.175q-.3.3-.712.3t-.713-.3M4 20q-.825 0-1.413-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v4q0 .425-.288.713T21 13h-6q-2.5 0-4.25 1.75T9 19q0 .425-.288.713T8 20z"></svg:path>`,
})
export class MaterialSymbolsFolderCodeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderCopyOutlineRoundedIcon],svg[material-symbols-folder-copy-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21q-.825 0-1.412-.587T1 19V7q0-.425.288-.712T2 6t.713.288T3 7v12h16q.425 0 .713.288T20 20t-.288.713T19 21zm4-4q-.825 0-1.412-.587T5 15V4q0-.825.588-1.412T7 2h4.175q.4 0 .763.15t.637.425L14 4h7q.825 0 1.413.588T23 6v9q0 .825-.587 1.413T21 17zm0-2h14V6h-7.825l-2-2H7zm0 0V4z"></svg:path>`,
})
export class MaterialSymbolsFolderCopyOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderCopyRoundedIcon],svg[material-symbols-folder-copy-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21q-.825 0-1.412-.587T1 19V7q0-.425.288-.712T2 6t.713.288T3 7v12h16q.425 0 .713.288T20 20t-.288.713T19 21zm4-4q-.825 0-1.412-.587T5 15V4q0-.825.588-1.412T7 2h4.175q.4 0 .763.15t.637.425L14 4h7q.825 0 1.413.588T23 6v9q0 .825-.587 1.413T21 17z"></svg:path>`,
})
export class MaterialSymbolsFolderCopyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderDataOutlineRoundedIcon],svg[material-symbols-folder-data-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 23q-.825 0-1.412-.587T13 21q0-.575.275-1.025T14 19.25v-5.525q-.45-.275-.725-.712T13 12q0-.825.588-1.412T15 10t1.413.588T17 12q0 .575-.275 1.013t-.725.712V16.6l4-1.325v-1.55q-.45-.275-.725-.712T19 12q0-.825.588-1.412T21 10t1.413.588T23 12q0 .575-.275 1.013t-.725.712v1.525q0 .65-.375 1.175t-1 .725L16 18.7v.55q.45.275.725.725T17 21q0 .825-.587 1.413T15 23M4 20V6zm0 0q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h9q.425 0 .713.288T22 7t-.288.713T21 8h-9.825l-2-2H4v12h6q.425 0 .713.288T11 19t-.288.713T10 20z"></svg:path>`,
})
export class MaterialSymbolsFolderDataOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderDataRoundedIcon],svg[material-symbols-folder-data-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 23q-.825 0-1.412-.587T13 21q0-.575.275-1.025T14 19.25v-5.525q-.45-.275-.725-.712T13 12q0-.825.588-1.412T15 10t1.413.588T17 12q0 .575-.275 1.013t-.725.712V16.6l4-1.325v-1.55q-.45-.275-.725-.712T19 12q0-.825.588-1.412T21 10t1.413.588T23 12q0 .575-.275 1.013t-.725.712v1.525q0 .65-.375 1.175t-1 .725L16 18.7v.55q.45.275.725.725T17 21q0 .825-.587 1.413T15 23M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h9q.425 0 .713.288T22 7t-.288.713T21 8h-6q-1.65 0-2.825 1.175T11 12q0 .775.263 1.45t.737 1.2v3.7q-.325.35-.537.762t-.338.888z"></svg:path>`,
})
export class MaterialSymbolsFolderDataRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderDeleteOutlineRoundedIcon],svg[material-symbols-folder-delete-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6zm10.5-1h2q.625 0 1.063-.437T18 15.5v-4h.25q.325 0 .538-.213T19 10.75t-.213-.537T18.25 10H16.5v-.5q0-.2-.15-.35T16 9h-1q-.2 0-.35.15t-.15.35v.5h-1.75q-.325 0-.537.213T12 10.75t.213.538t.537.212H13v4q0 .625.438 1.063T14.5 17m0-5.5h2v4h-2z"></svg:path>`,
})
export class MaterialSymbolsFolderDeleteOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderDeleteRoundedIcon],svg[material-symbols-folder-delete-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm10.5-3h2q.625 0 1.063-.437T18 15.5v-4h.25q.325 0 .538-.213T19 10.75t-.213-.537T18.25 10H16.5v-.5q0-.2-.15-.35T16 9h-1q-.2 0-.35.15t-.15.35v.5h-1.75q-.325 0-.537.213T12 10.75t.213.538t.537.212H13v4q0 .625.438 1.063T14.5 17m0-5.5h2v4h-2z"></svg:path>`,
})
export class MaterialSymbolsFolderDeleteRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderEyeOutlineRoundedIcon],svg[material-symbols-folder-eye-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v4.525q0 .425-.288.713t-.712.287t-.712-.288t-.288-.712V8h-8q-.4 0-.763-.15t-.637-.425L9.175 6H4v12h2q.425 0 .713.288T7 19t-.288.713T6 20zm12 1q1.425 0 2.688-.65t2.062-1.85q-.8-1.2-2.062-1.85T16 16t-2.687.65t-2.063 1.85q.8 1.2 2.063 1.85T16 21m0-1q-.625 0-1.062-.437T14.5 18.5t.438-1.062T16 17t1.063.438t.437 1.062t-.437 1.063T16 20M4 18V6v6.925V12zm12 5q-1.975 0-3.687-.9T9.55 19.55q-.15-.225-.225-.488t-.075-.537t.075-.55t.225-.525q1.05-1.65 2.763-2.55T16 14t3.688.9t2.762 2.55q.15.25.225.513t.075.537t-.075.538t-.225.512q-1.05 1.65-2.762 2.55T16 23"></svg:path>`,
})
export class MaterialSymbolsFolderEyeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderEyeRoundedIcon],svg[material-symbols-folder-eye-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v4.4q0 .575-.513.838t-1.012-.038q-1.05-.575-2.162-.887T16 12q-3.35 0-5.887 2.125t-3.588 5.2q-.1.3-.35.488t-.55.187zm12 3q-1.975 0-3.687-.9T9.55 19.55q-.15-.225-.225-.488t-.075-.537t.075-.55t.225-.525q1.05-1.65 2.763-2.55T16 14t3.688.9t2.762 2.55q.15.25.225.513t.075.537t-.075.538t-.225.512q-1.05 1.65-2.762 2.55T16 23m0-2q1.05 0 1.775-.725T18.5 18.5t-.725-1.775T16 16t-1.775.725T13.5 18.5t.725 1.775T16 21m0-1q-.625 0-1.063-.437T14.5 18.5t.438-1.062T16 17t1.063.438t.437 1.062t-.437 1.063T16 20"></svg:path>`,
})
export class MaterialSymbolsFolderEyeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderInfoOutlineRoundedIcon],svg[material-symbols-folder-info-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18V6v4.7v-.7zm0 2q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v2.425q0 .425-.288.7T21 11.4t-.712-.288T20 10.4V8h-8.825l-2-2H4v12h5.375q.425 0 .713.288t.287.712t-.288.713t-.712.287zm13-8q2.075 0 3.538 1.463T22 17t-1.463 3.538T17 22t-3.537-1.463T12 17t1.463-3.537T17 12m0 8q.2 0 .35-.15t.15-.35v-3q0-.2-.15-.35T17 16t-.35.15t-.15.35v3q0 .2.15.35T17 20m0-5q.2 0 .35-.15t.15-.35t-.15-.35T17 14t-.35.15t-.15.35t.15.35t.35.15"></svg:path>`,
})
export class MaterialSymbolsFolderInfoOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderInfoRoundedIcon],svg[material-symbols-folder-info-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v2.175q0 .575-.525.838t-1.025-.088q-.8-.45-1.675-.687t-1.8-.238q-2.9 0-4.937 2.038T10 16.975q0 .45.05.888t.175.862q.125.475-.15.875t-.75.4zm13 2q-2.075 0-3.537-1.463T12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22m0-2q.2 0 .35-.15t.15-.35v-3q0-.2-.15-.35T17 16t-.35.15t-.15.35v3q0 .2.15.35T17 20m0-5q.2 0 .35-.15t.15-.35t-.15-.35T17 14t-.35.15t-.15.35t.15.35t.35.15"></svg:path>`,
})
export class MaterialSymbolsFolderInfoRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderLimitedOutlineRoundedIcon],svg[material-symbols-folder-limited-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6zm8-1q1.65 0 2.825-1.175T16 13t-1.175-2.825T12 9t-2.825 1.175T8 13t1.175 2.825T12 17m-1.15-6.2q.275-.125.55-.213t.6-.087q1.05 0 1.775.725T14.5 13q0 .325-.088.6t-.212.55zM12 15.5q-1.05 0-1.775-.725T9.5 13q0-.325.088-.6t.212-.55l3.35 3.35q-.275.125-.55.213t-.6.087"></svg:path>`,
})
export class MaterialSymbolsFolderLimitedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderManagedOutlineRoundedIcon],svg[material-symbols-folder-managed-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 19q.825 0 1.413-.587T20 17t-.587-1.412T18 15t-1.412.588T16 17t.588 1.413T18 19m-.2 3q-.35 0-.612-.225t-.338-.575l-.15-.7q-.3-.125-.562-.262T15.6 19.9l-.725.225q-.325.1-.637-.025t-.488-.4l-.2-.35q-.175-.3-.125-.65t.325-.575l.55-.475q-.05-.3-.05-.65t.05-.65l-.55-.475q-.275-.225-.325-.562t.125-.638l.225-.375q.175-.275.475-.4t.625-.025l.725.225q.275-.2.538-.337t.562-.263l.15-.725q.075-.35.337-.562T17.8 12h.4q.35 0 .613.225t.337.575l.15.7q.3.125.562.262t.538.338l.725-.225q.325-.1.638.025t.487.4l.2.35q.175.3.125.65t-.325.575l-.55.475q.05.3.05.65t-.05.65l.55.475q.275.225.325.563t-.125.637l-.225.375q-.175.275-.475.4t-.625.025L20.4 19.9q-.275.2-.537.337t-.563.263l-.15.725q-.075.35-.337.563T18.2 22zM4 18V6v4.3v-.3zm0 2q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v2q0 .425-.288.713T21 11t-.712-.288T20 10V8h-8.825l-2-2H4v12h7q.425 0 .713.288T12 19t-.288.713T11 20z"></svg:path>`,
})
export class MaterialSymbolsFolderManagedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderManagedRoundedIcon],svg[material-symbols-folder-managed-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 19q.825 0 1.413-.587T20 17t-.587-1.412T18 15t-1.412.588T16 17t.588 1.413T18 19m-.2 3q-.35 0-.612-.225t-.338-.575l-.15-.7q-.3-.125-.562-.262T15.6 19.9l-.725.225q-.325.1-.637-.025t-.488-.4l-.2-.35q-.175-.3-.125-.65t.325-.575l.55-.475q-.05-.3-.05-.65t.05-.65l-.55-.475q-.275-.225-.325-.562t.125-.638l.225-.375q.175-.275.475-.4t.625-.025l.725.225q.275-.2.538-.337t.562-.263l.15-.725q.075-.35.337-.562T17.8 12h.4q.35 0 .613.225t.337.575l.15.7q.3.125.562.262t.538.338l.725-.225q.325-.1.638.025t.487.4l.2.35q.175.3.125.65t-.325.575l-.55.475q.05.3.05.65t-.05.65l.55.475q.275.225.325.563t-.125.637l-.225.375q-.175.275-.475.4t-.625.025L20.4 19.9q-.275.2-.537.337t-.563.263l-.15.725q-.075.35-.337.563T18.2 22zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v1.9q0 .45-.387.675t-.813.025q-.65-.3-1.375-.45t-1.45-.15q-2.95 0-4.962 2.063T11 16.975q0 .475.063.938t.187.912t-.125.813t-.675.362z"></svg:path>`,
})
export class MaterialSymbolsFolderManagedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderMatchOutlineRoundedIcon],svg[material-symbols-folder-match-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 17q-.5-.6-.837-1.287t-.563-1.438q-.125-.4.1-.712t.65-.388t.763.15t.462.625t.313.763t.437.712t.525.638t.6.562t.413.675t-.113.75t-.6.463t-.725-.138q-.4-.3-.762-.65T5.75 17m6.75 5q-.625 0-1.062-.437T11 20.5v-6q0-.625.438-1.062T12.5 13h2.2q.375 0 .713.175t.537.5l.55.825h4q.625 0 1.063.438T22 16v4.5q0 .625-.437 1.063T20.5 22zm-9-11q-.625 0-1.062-.437T2 9.5v-6q0-.625.438-1.062T3.5 2h2.2q.375 0 .713.175t.537.5l.55.825h4q.625 0 1.063.438T13 5v4.5q0 .625-.437 1.063T11.5 11zm13.7-2q-.275-.475-.625-.875t-.775-.75q-.325-.275-.412-.675t.112-.75t.6-.462t.725.137q.525.4.975.875t.825 1.025q.525.775.863 1.663t.462 1.837q.05.4-.237.688T19 12t-.712-.275t-.363-.7q-.1-.55-.275-1.05T17.2 9M13 20h7v-3.5h-4.575l-1-1.5H13zM4 9h7V5.5H6.425l-1-1.5H4zm9 11v-5zM4 9V4z"></svg:path>`,
})
export class MaterialSymbolsFolderMatchOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderMatchRoundedIcon],svg[material-symbols-folder-match-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 17q-.5-.6-.837-1.287t-.563-1.438q-.125-.4.1-.712t.65-.388t.763.15t.462.625t.313.763t.437.712t.525.638t.6.562t.413.675t-.113.75t-.6.463t-.725-.138q-.4-.3-.762-.65T5.75 17m6.75 5q-.625 0-1.062-.437T11 20.5v-6q0-.625.438-1.062T12.5 13h2.2q.375 0 .713.175t.537.5l.55.825h4q.625 0 1.063.438T22 16v4.5q0 .625-.437 1.063T20.5 22zm-9-11q-.625 0-1.062-.437T2 9.5v-6q0-.625.438-1.062T3.5 2h2.2q.375 0 .713.175t.537.5l.55.825h4q.625 0 1.063.438T13 5v4.5q0 .625-.437 1.063T11.5 11zm13.7-2q-.275-.475-.625-.875t-.775-.75q-.325-.275-.412-.675t.112-.75t.6-.462t.725.137q.525.4.975.875t.825 1.025q.525.775.863 1.663t.462 1.837q.05.4-.237.688T19 12t-.712-.275t-.363-.7q-.1-.55-.275-1.05T17.2 9"></svg:path>`,
})
export class MaterialSymbolsFolderMatchRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderOffOutlineRoundedIcon],svg[material-symbols-folder-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8v8.775q0 .5-.312.75t-.688.25t-.687-.262T20 16.75V8h-8.325q-.4 0-.763-.15t-.637-.425l-1.7-1.7q-.35-.35-.312-.75t.312-.675t.675-.312t.75.312L11.7 6H20q.825 0 1.413.588T22 8M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4l2 2H4v12h11.175L1.4 4.2q-.275-.275-.287-.688T1.4 2.8q.275-.275.7-.275t.7.275l18.4 18.4q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-2.6-2.6zm10.425-8.425"></svg:path>`,
})
export class MaterialSymbolsFolderOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderOffRoundedIcon],svg[material-symbols-folder-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.3 17.475L8.55 5.725q-.475-.475-.213-1.1T9.276 4q.2 0 .388.075T10 4.3L11.7 6H20q.825 0 1.413.588T22 8v8.75q0 .675-.612.938t-1.088-.213M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4l2 2H3.2L1.4 4.2q-.275-.275-.287-.687T1.4 2.8q.275-.275.7-.275t.7.275l18.4 18.4q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-2.6-2.6z"></svg:path>`,
})
export class MaterialSymbolsFolderOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderOpenOutlineRoundedIcon],svg[material-symbols-folder-open-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h9q.425 0 .713.288T22 7t-.288.713T21 8h-9.825l-2-2H4v12l1.975-6.575q.2-.65.738-1.037T7.9 10h12.9q1.025 0 1.613.813t.312 1.762l-1.8 6q-.2.65-.737 1.038T19 20zm2.1-2H19l1.8-6H7.9zM4 11.45V6zM6.1 18l1.8-6z"></svg:path>`,
})
export class MaterialSymbolsFolderOpenOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderOpenRoundedIcon],svg[material-symbols-folder-open-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h9q.425 0 .713.288T22 7t-.288.713T21 8H7.85q-1.55 0-2.7.975T4 11.45V18l1.975-6.575q.2-.65.738-1.037T7.9 10h12.9q1.025 0 1.613.813t.312 1.762l-1.8 6q-.2.65-.737 1.038T19 20z"></svg:path>`,
})
export class MaterialSymbolsFolderOpenRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderOutlineRoundedIcon],svg[material-symbols-folder-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsFolderOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderRoundedIcon],svg[material-symbols-folder-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsFolderRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderSharedOutlineRoundedIcon],svg[material-symbols-folder-shared-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6zm7-1h8v-.55q0-1.125-1.1-1.787T15 14t-2.9.663T11 16.45zm4-4q.825 0 1.413-.587T17 11t-.587-1.412T15 9t-1.412.588T13 11t.588 1.413T15 13"></svg:path>`,
})
export class MaterialSymbolsFolderSharedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderSharedRoundedIcon],svg[material-symbols-folder-shared-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm7-3h8v-.55q0-1.125-1.1-1.787T15 14t-2.9.663T11 16.45zm4-4q.825 0 1.413-.587T17 11t-.587-1.412T15 9t-1.412.588T13 11t.588 1.413T15 13"></svg:path>`,
})
export class MaterialSymbolsFolderSharedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderSpecialOutlineRoundedIcon],svg[material-symbols-folder-special-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6zm10.9-3.05l1.7 1.275q.15.125.288.025t.087-.275l-.625-2.125l1.75-1.4q.125-.125.075-.288T17.95 12H15.8l-.65-2.05q-.05-.175-.25-.175t-.25.175L14 12h-2.15q-.175 0-.225.162t.075.288l1.75 1.4l-.625 2.125q-.05.175.087.275t.288-.025z"></svg:path>`,
})
export class MaterialSymbolsFolderSpecialOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderSpecialRoundedIcon],svg[material-symbols-folder-special-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm10.9-5.05l1.7 1.275q.15.125.288.025t.087-.275l-.625-2.125l1.75-1.4q.125-.125.075-.288T17.95 12H15.8l-.65-2.05q-.05-.175-.25-.175t-.25.175L14 12h-2.15q-.175 0-.225.162t.075.288l1.75 1.4l-.625 2.125q-.05.175.087.275t.288-.025z"></svg:path>`,
})
export class MaterialSymbolsFolderSpecialRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderSupervisedOutlineRoundedIcon],svg[material-symbols-folder-supervised-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20q-.425 0-.712-.288T14 19q0-.775 1.1-1.388T18 17t2.9.613T22 19q0 .425-.288.713T21 20zm3-4q-.825 0-1.412-.587T16 14t.588-1.412T18 12t1.413.588T20 14t-.587 1.413T18 16M4 18V6v4.3v-.3zm0 2q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v2q0 .425-.288.713T21 11t-.712-.288T20 10V8h-8.825l-2-2H4v12h7q.425 0 .713.288T12 19t-.288.713T11 20z"></svg:path>`,
})
export class MaterialSymbolsFolderSupervisedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderSupervisedRoundedIcon],svg[material-symbols-folder-supervised-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v1.9q0 .45-.387.675t-.813.025q-.65-.3-1.375-.45t-1.45-.15q-2.95 0-4.962 2.063T11 16.975q0 .475.063.938t.187.912t-.125.813t-.675.362zm11 0q-.425 0-.712-.288T14 19q0-.775 1.1-1.388T18 17t2.9.613T22 19q0 .425-.288.713T21 20zm3-4q-.825 0-1.412-.587T16 14t.588-1.412T18 12t1.413.588T20 14t-.587 1.413T18 16"></svg:path>`,
})
export class MaterialSymbolsFolderSupervisedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderZipOutlineRoundedIcon],svg[material-symbols-folder-zip-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12v-2h2v2zm0 2h-2v-2h2zm0 2v-2h2v2zm-4.825-8l-2-2H4v12h10v-2h2v2h4V8h-4v2h-2V8zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2V6z"></svg:path>`,
})
export class MaterialSymbolsFolderZipOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderZipRoundedIcon],svg[material-symbols-folder-zip-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm10-2h2v-2h2v-2h-2v-2h2v-2h-2V8h-2v2h2v2h-2v2h2v2h-2z"></svg:path>`,
})
export class MaterialSymbolsFolderZipRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
